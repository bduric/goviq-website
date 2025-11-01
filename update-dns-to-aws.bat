@echo off
REM Replace with your actual values
set HOSTED_ZONE_ID=Z03199511TRX8YNG7MK65
set CLOUDFRONT_DOMAIN=diw7jl9nbbknq.cloudfront.net

echo Updating DNS records to point to AWS...

REM Update www CNAME to point to CloudFront instead of Azure
aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"UPSERT\",\"ResourceRecordSet\":{\"Name\":\"www.goviqs.com\",\"Type\":\"CNAME\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"%CLOUDFRONT_DOMAIN%\"}]}}]}"

REM Update mta-sts CNAME to point to S3 instead of GitHub Pages
aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"UPSERT\",\"ResourceRecordSet\":{\"Name\":\"mta-sts.goviqs.com\",\"Type\":\"CNAME\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"mta-sts-goviqs-com.s3-website-us-east-1.amazonaws.com\"}]}}]}"

echo DNS records updated!
pause