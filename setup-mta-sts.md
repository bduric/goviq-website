# MTA-STS Setup for AWS S3

## 1. Create S3 Bucket
- Bucket name: `mta-sts-goviqs-com`
- Enable static website hosting
- Set index document to `mta-sts.txt`

## 2. Create MTA-STS Policy File
Upload `mta-sts.txt` with content:
```
version: STSv1
mode: enforce
mx: goviqs-com.mail.protection.outlook.com
max_age: 604800
```

## 3. Update DNS Record
Change the CNAME in Route 53:
- From: `mta-sts.goviqs.com` → `bduric.github.io`
- To: `mta-sts.goviqs.com` → `mta-sts-goviqs-com.s3-website-us-east-1.amazonaws.com`