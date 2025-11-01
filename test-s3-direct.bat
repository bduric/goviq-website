@echo off
echo Testing S3 website endpoint directly...

curl -I http://goviqs-com-website.s3-website-us-east-1.amazonaws.com

echo.
echo If this works, the issue is CloudFront configuration.
pause