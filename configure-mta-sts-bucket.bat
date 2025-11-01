@echo off
echo Configuring MTA-STS bucket for public access...

REM Allow public access to the bucket
aws s3api put-public-access-block --bucket mta-sts-goviqs-com --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

REM Set bucket policy for public read access
aws s3api put-bucket-policy --bucket mta-sts-goviqs-com --policy "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"PublicReadGetObject\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Action\":\"s3:GetObject\",\"Resource\":\"arn:aws:s3:::mta-sts-goviqs-com/*\"}]}"

echo MTA-STS bucket configured for public access!
pause