# GovIQ Website Deployment Guide

## 🚀 AWS Infrastructure Setup

### Step 1: Deploy AWS Infrastructure
```bash
# Deploy the CloudFormation stack
aws cloudformation create-stack \
  --stack-name goviq-website \
  --template-body file://aws/infrastructure.yml \
  --parameters ParameterKey=DomainName,ParameterValue=goviq.us ParameterKey=ContactEmail,ParameterValue=bduric@goviq.us \
  --capabilities CAPABILITY_IAM \
  --region us-east-1

# Wait for stack to complete (5-10 minutes)
aws cloudformation wait stack-create-complete --stack-name goviq-website --region us-east-1

# Get the outputs
aws cloudformation describe-stacks --stack-name goviq-website --region us-east-1 --query 'Stacks[0].Outputs'
```

### Step 2: Configure Route 53 (Your Domain)
1. Go to **Route 53** in AWS Console
2. Select your **goviq.us** hosted zone
3. Create **A Record** for `goviq.us`:
   - Type: A - IPv4 address
   - Alias: Yes
   - Route traffic to: CloudFront distribution
   - Select your distribution
4. Create **A Record** for `www.goviq.us` (same settings)

### Step 3: Verify SES Email
```bash
# Verify your email address in SES
aws ses verify-email-identity --email-address bduric@goviq.us --region us-east-1
```
Check your email and click the verification link.

## 🔧 GitHub Secrets Setup

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:
- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key  
- `CLOUDFRONT_DISTRIBUTION_ID`: From CloudFormation outputs

## 📝 Update API URL

After infrastructure is deployed, update the contact form:

1. Get the API URL from CloudFormation outputs
2. Update `src/app/api/contact/route.ts`:
   ```typescript
   const apiUrl = 'https://YOUR-API-ID.execute-api.us-east-1.amazonaws.com/prod/contact'
   ```

## 🚀 Deploy Website

```bash
# Commit and push changes
git add .
git commit -m "Add AWS deployment configuration"
git push origin main
```

GitHub Actions will automatically:
1. ✅ Build the website
2. ✅ Deploy to S3
3. ✅ Invalidate CloudFront cache
4. ✅ Your site will be live at https://goviq.us

## 💰 Expected Costs
- **S3**: ~$1-3/month
- **CloudFront**: ~$1-5/month  
- **Lambda**: ~$0.20/month
- **API Gateway**: ~$1/month
- **Route 53**: $0.50/month per hosted zone

**Total: ~$3-10/month**

## 🔍 Troubleshooting

### SSL Certificate Issues
- Certificate validation can take 5-30 minutes
- Ensure DNS records are correct in Route 53

### Contact Form Not Working
- Verify SES email address is confirmed
- Check Lambda function logs in CloudWatch
- Ensure API Gateway URL is correct

### GitHub Actions Failing
- Verify AWS credentials in GitHub secrets
- Check CloudFormation stack deployed successfully
- Ensure S3 bucket name is unique globally