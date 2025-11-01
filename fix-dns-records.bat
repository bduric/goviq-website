@echo off
set HOSTED_ZONE_ID=Z03199511TRX8YNG7MK65
set CLOUDFRONT_DOMAIN=diw7jl9nbbknq.cloudfront.net

echo Fixing DNS records to point to CloudFront...

REM Update A record to point to CloudFront (we need to use ALIAS record for root domain)
echo Note: For root domain, we should use ALIAS record pointing to CloudFront
echo This needs to be done in AWS Console - Route 53

REM Update www CNAME record
aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"UPSERT\",\"ResourceRecordSet\":{\"Name\":\"www.goviqs.com\",\"Type\":\"CNAME\",\"TTL\":300,\"ResourceRecords\":[{\"Value\":\"%CLOUDFRONT_DOMAIN%\"}]}}]}"

echo.
echo IMPORTANT: You need to manually update the root domain A record in Route 53 Console:
echo 1. Go to Route 53 -> Hosted zones -> goviqs.com
echo 2. Find the A record for goviqs.com
echo 3. Edit it to be an ALIAS record pointing to CloudFront distribution
echo 4. Target: %CLOUDFRONT_DOMAIN%

pause