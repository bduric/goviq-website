@echo off
set HOSTED_ZONE_ID=Z03199511TRX8YNG7MK65

echo Checking current A record for goviqs.com...

REM First, let's see what's currently there
aws route53 list-resource-record-sets --hosted-zone-id %HOSTED_ZONE_ID% --query "ResourceRecordSets[?Name=='goviqs.com.' && Type=='A']"

echo.
echo If you see an A record with IP address instead of ALIAS, we need to fix it.
pause