@echo off
echo Creating CloudFront distribution...

aws cloudfront create-distribution --distribution-config file://create-cloudfront-distribution.json > cloudfront-output.json

echo CloudFront distribution created! Check cloudfront-output.json for details.
echo Look for "DomainName" and "Id" in the output.
pause