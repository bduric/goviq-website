@echo off
echo Checking DNS propagation for goviqs.com...
echo.

echo === Testing A Record (root domain) ===
nslookup goviqs.com 8.8.8.8
echo.

echo === Testing CNAME Record (www) ===
nslookup www.goviqs.com 8.8.8.8
echo.

echo === Testing MX Record (email) ===
nslookup -type=MX goviqs.com 8.8.8.8
echo.

echo === Testing from Different DNS Servers ===
echo Google DNS (8.8.8.8):
nslookup www.goviqs.com 8.8.8.8
echo.

echo Cloudflare DNS (1.1.1.1):
nslookup www.goviqs.com 1.1.1.1
echo.

echo OpenDNS (208.67.222.222):
nslookup www.goviqs.com 208.67.222.222
echo.

pause