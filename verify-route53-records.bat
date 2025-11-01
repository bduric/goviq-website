@echo off
echo Checking what DNS records are actually in Route 53...

echo === Checking A record ===
aws route53 test-dns-answer --hosted-zone-id Z03199511TRX8YNG7MK65 --record-name goviqs.com --record-type A

echo.
echo === Checking CNAME record ===
aws route53 test-dns-answer --hosted-zone-id Z03199511TRX8YNG7MK65 --record-name www.goviqs.com --record-type CNAME

echo.
echo === Checking MX record ===
aws route53 test-dns-answer --hosted-zone-id Z03199511TRX8YNG7MK65 --record-name goviqs.com --record-type MX

pause