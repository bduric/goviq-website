@echo off
echo Testing DNS resolution...

ipconfig /flushdns
netsh winsock reset
ipconfig /release
ipconfig /renew

echo.
echo Testing domain resolution:
nslookup www.goviqs.com 8.8.8.8

pause