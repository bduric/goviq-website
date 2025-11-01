@echo off
set HOSTED_ZONE_ID=Z03199511TRX8YNG7MK65

echo Updating A record to point to CloudFront (ALIAS record)...

REM Delete old A record first
aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"DELETE\",\"ResourceRecordSet\":{\"Name\":\"goviqs.com\",\"Type\":\"A\",\"TTL\":600,\"ResourceRecords\":[{\"Value\":\"20.84.233.22\"}]}}]}"

REM Create new ALIAS A record pointing to CloudFront
aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"goviqs.com\",\"Type\":\"A\",\"AliasTarget\":{\"DNSName\":\"diw7jl9nbbknq.cloudfront.net\",\"EvaluateTargetHealth\":false,\"HostedZoneId\":\"Z2FDTNDATAQYW2\"}}}]}"

echo A record updated to point to CloudFront!
pause