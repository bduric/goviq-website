@echo off
echo Fixing S3 bucket policy for CloudFront access...

REM Set bucket policy to allow CloudFront access
aws s3api put-bucket-policy --bucket goviqs-com-website --policy "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"PublicReadGetObject\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Action\":\"s3:GetObject\",\"Resource\":\"arn:aws:s3:::goviqs-com-website/*\"}]}"

REM Also allow public access block settings
aws s3api put-public-access-block --bucket goviqs-com-website --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

echo S3 bucket configured for public access!
pause