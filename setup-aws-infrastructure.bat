@echo off
echo Setting up AWS infrastructure for goviqs.com...

REM Create main website S3 bucket
aws s3 mb s3://goviqs-com-website --region us-east-1

REM Configure S3 bucket for static website hosting
aws s3 website s3://goviqs-com-website --index-document index.html --error-document error.html

REM Create MTA-STS S3 bucket
aws s3 mb s3://mta-sts-goviqs-com --region us-east-1

REM Configure MTA-STS bucket for static website hosting
aws s3 website s3://mta-sts-goviqs-com --index-document mta-sts.txt

REM Create MTA-STS policy file
echo version: STSv1 > mta-sts.txt
echo mode: enforce >> mta-sts.txt
echo mx: goviqs-com.mail.protection.outlook.com >> mta-sts.txt
echo max_age: 604800 >> mta-sts.txt

REM Upload MTA-STS policy
aws s3 cp mta-sts.txt s3://mta-sts-goviqs-com/mta-sts.txt --content-type text/plain

REM Set public read policy for MTA-STS bucket
aws s3api put-bucket-policy --bucket mta-sts-goviqs-com --policy "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"PublicReadGetObject\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Action\":\"s3:GetObject\",\"Resource\":\"arn:aws:s3:::mta-sts-goviqs-com/*\"}]}"

echo Done! Now create CloudFront distribution manually in AWS Console.
echo Point it to: goviqs-com-website.s3-website-us-east-1.amazonaws.com
pause