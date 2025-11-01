# GitHub Secrets Setup

Go to your GitHub repository → Settings → Secrets and variables → Actions

## Add these Repository Secrets:

### 1. AWS_ACCESS_KEY_ID
Value: `[Your IAM user access key ID]`

### 2. AWS_SECRET_ACCESS_KEY  
Value: `[Your IAM user secret access key]`

### 3. CLOUDFRONT_DISTRIBUTION_ID
Value: `E1BPK8JJ36727M`

## Test the Deployment Pipeline

After adding secrets:
1. Push any change to main branch
2. Check GitHub Actions tab
3. Your deploy-aws.yml workflow should run automatically
4. It will build and deploy to S3, then invalidate CloudFront

## Verify Deployment
After workflow completes, test:
- https://diw7jl9nbbknq.cloudfront.net (should show your website)