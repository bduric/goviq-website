@echo off
REM Replace YOUR_HOSTED_ZONE_ID with your actual Route 53 hosted zone ID
set HOSTED_ZONE_ID=YOUR_HOSTED_ZONE_ID

echo Creating DNS records for goviqs.com...

REM A Record
aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"goviqs.com\",\"Type\":\"A\",\"TTL\":600,\"ResourceRecords\":[{\"Value\":\"20.84.233.22\"}]}}]}"

REM TXT Records
aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"goviqs.com\",\"Type\":\"TXT\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"\\\"v=spf1 include:spf.protection.outlook.com -all\\\"\"},{\"Value\":\"\\\"_ubxtprzpq2jsqxyaih12laf9axtolw8\\\"\"}]}}]}"

aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"_dmarc.goviqs.com\",\"Type\":\"TXT\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"\\\"v=DMARC1; p=quarantine; adkim=s; aspf=s; rua=mailto:bduric@goviqs.com; ruf=mailto:bduric@goviqs.com; fo=1\\\"\"}]}}]}"

aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"_mta-sts.goviqs.com\",\"Type\":\"TXT\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"\\\"v=STSv1; id=2025101001;\\\"\"}]}}]}"

aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"_smtp._tls.goviqs.com\",\"Type\":\"TXT\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"\\\"v=TLSRPTv1; rua=mailto:bduric@goviqs.com\\\"\"}]}}]}"

REM CNAME Records
aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"autodiscover.goviqs.com\",\"Type\":\"CNAME\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"autodiscover.outlook.com\"}]}}]}"

aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"enterpriseenrollment.goviqs.com\",\"Type\":\"CNAME\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"enterpriseenrollment-s.manage.microsoft.com\"}]}}]}"

aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"enterpriseregistration.goviqs.com\",\"Type\":\"CNAME\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"enterpriseregistration.windows.net\"}]}}]}"

aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"lyncdiscover.goviqs.com\",\"Type\":\"CNAME\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"webdir.online.lync.com\"}]}}]}"

aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"mta-sts.goviqs.com\",\"Type\":\"CNAME\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"bduric.github.io\"}]}}]}"

aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"selector1._domainkey.goviqs.com\",\"Type\":\"CNAME\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"selector1-goviqs-com._domainkey.goviqs.w-v1.dkim.mail.microsoft\"}]}}]}"

aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"selector2._domainkey.goviqs.com\",\"Type\":\"CNAME\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"selector2-goviqs-com._domainkey.goviqs.w-v1.dkim.mail.microsoft\"}]}}]}"

aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"sip.goviqs.com\",\"Type\":\"CNAME\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"sipdir.online.lync.com\"}]}}]}"

aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"www.goviqs.com\",\"Type\":\"CNAME\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"blue-bush-089126e10.2.azurestaticapps.net\"}]}}]}"

REM MX Record
aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"goviqs.com\",\"Type\":\"MX\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"0 goviqs-com.mail.protection.outlook.com\"}]}}]}"

REM SRV Records
aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"_sip._tls.goviqs.com\",\"Type\":\"SRV\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"100 1 443 sipdir.online.lync.com\"}]}}]}"

aws route53 change-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --change-batch "{\"Changes\":[{\"Action\":\"CREATE\",\"ResourceRecordSet\":{\"Name\":\"_sipfederationtls._tcp.goviqs.com\",\"Type\":\"SRV\",\"TTL\":3600,\"ResourceRecords\":[{\"Value\":\"100 1 5061 sipfed.online.lync.com\"}]}}]}"

echo Done! All DNS records have been created.
pause