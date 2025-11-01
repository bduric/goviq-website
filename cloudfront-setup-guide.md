# CloudFront Distribution Setup Guide for goviqs.com

## Step 1: Go to CloudFront Console
- AWS Console → CloudFront → **Create Distribution**

## Step 2: Origin Settings
**Origin domain**: `goviqs-com-website.s3-website-us-east-1.amazonaws.com`
- ⚠️ **IMPORTANT**: Use the S3 website endpoint, NOT the bucket name
- **Name**: `S3-goviqs-com-website` (auto-filled)
- **Protocol**: **HTTP only** (S3 website endpoints don't support HTTPS)
- **Add custom header**: Leave empty

## Step 3: Default Cache Behavior
**Path pattern**: `Default (*)`
**Compress objects automatically**: ✅ **Yes**
**Viewer protocol policy**: **Redirect HTTP to HTTPS**
**Allowed HTTP methods**: **GET, HEAD**
**Restrict viewer access**: **No**
**Cache key and origin requests**: **Cache policy and origin request policy (recommended)**
- **Cache policy**: **Managed-CachingOptimized**
- **Origin request policy**: **None**

## Step 4: Function Associations
**Leave all empty** (no CloudFront Functions or Lambda@Edge needed)

## Step 5: Settings
**Price class**: **Use only North America and Europe** (cheaper)
**Alternate domain name (CNAME)**: 
- Add: `goviqs.com`
- Add: `www.goviqs.com`

**Custom SSL certificate**: 
- **Request certificate** (if you don't have one)
- Domain names: `goviqs.com` and `*.goviqs.com`
- Validation method: **DNS validation**
- ⚠️ **You'll need to add CNAME records to Route 53 for validation**

**Security policy**: **TLSv1.2_2021**
**Supported HTTP versions**: **HTTP/2 and HTTP/1.1**
**Default root object**: `index.html`
**Standard logging**: **Off** (to save costs)
**IPv6**: ✅ **On**

## Step 6: Custom Error Pages
Click **Add custom error response**:
- **HTTP error code**: `404`
- **Customize error response**: ✅ **Yes**
- **Response page path**: `/index.html`
- **HTTP response code**: `200`
- **Error caching minimum TTL**: `300`

## Step 7: Review and Create
**Distribution comment**: `CloudFront distribution for goviqs.com website`
**Distribution state**: ✅ **Enabled**

Click **Create distribution**

## Step 8: After Creation - Note These Values
1. **Distribution domain name**: (e.g., `d1234567890.cloudfront.net`)
2. **Distribution ID**: (e.g., `E1234567890ABC`)

## Step 9: SSL Certificate Validation (if you requested new certificate)
1. Go to **Certificate Manager** → Your certificate
2. Copy the CNAME name and value
3. Add these as CNAME records in Route 53 for goviqs.com
4. Wait for validation (5-30 minutes)

## Step 10: Test Your Setup
After deployment completes (15-20 minutes):
- Test: `https://YOUR_CLOUDFRONT_DOMAIN.cloudfront.net`
- Should show your website

## Values You'll Need for GitHub Secrets:
- **CLOUDFRONT_DISTRIBUTION_ID**: The distribution ID from step 8
- **AWS_ACCESS_KEY_ID**: Your IAM user access key
- **AWS_SECRET_ACCESS_KEY**: Your IAM user secret key

## Next Steps After CloudFront is Ready:
1. Update DNS records to point to CloudFront
2. Add GitHub secrets
3. Test deployment pipeline