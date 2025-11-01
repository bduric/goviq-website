@echo off
echo Getting current CloudFront distribution configuration...

REM Get current distribution config
aws cloudfront get-distribution-config --id E1BPK8JJ36727M > current-distribution-config.json

echo.
echo Current config saved to current-distribution-config.json
echo.
echo MANUAL STEP REQUIRED:
echo 1. Go to AWS CloudFront Console
echo 2. Select distribution E1BPK8JJ36727M
echo 3. Edit -> General tab
echo 4. Add Alternate domain names: goviqs.com, www.goviqs.com
echo 5. Custom SSL certificate: Select the certificate we just created
echo 6. Save changes
echo.
echo Certificate ARN: arn:aws:acm:us-east-1:681711814864:certificate/24810bb6-66d0-4514-9a02-1ae3d3faa96b

pause