@echo off
set HOSTED_ZONE_ID=Z03199511TRX8YNG7MK65

echo Adding SSL certificate validation records...

REM Add validation record for goviqs.com
aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"_68fd26ebf55d0ed66a8f9672557d5a55.goviqs.com\",\"Type\":\"CNAME\",\"TTL\":300,\"ResourceRecords\":[{\"Value\":\"_b99c127fb181a25b6de41a8145978775.jkddzztszm.acm-validations.aws\"}]}}]}"

REM Add validation record for www.goviqs.com
aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"_5a8960755038b37409aad6643efa1b0d.www.goviqs.com\",\"Type\":\"CNAME\",\"TTL\":300,\"ResourceRecords\":[{\"Value\":\"_da296986f4d125f7ae205709d33f18d3.jkddzztszm.acm-validations.aws\"}]}}]}"

echo SSL validation records added! Certificate should validate in 5-10 minutes.
pause