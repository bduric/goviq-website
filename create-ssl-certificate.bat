@echo off
echo Creating SSL certificate for goviqs.com...

aws acm request-certificate --domain-name goviqs.com --subject-alternative-names www.goviqs.com --validation-method DNS --region us-east-1 > certificate-output.json

echo SSL certificate requested! Check certificate-output.json for CertificateArn.
echo You'll need to validate it by adding DNS records to Route 53.
pause