@echo off
echo Creating simple CloudFront distribution (no custom domains)...

aws cloudfront create-distribution --distribution-config file://create-cloudfront-simple.json > cloudfront-simple-output.json

echo CloudFront distribution created! Check cloudfront-simple-output.json for details.
echo Look for "DomainName" and "Id" in the output.
pause