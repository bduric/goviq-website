@echo off
echo Checking SSL certificate validation status...

aws acm describe-certificate --certificate-arn "arn:aws:acm:us-east-1:681711814864:certificate/24810bb6-66d0-4514-9a02-1ae3d3faa96b" --query "Certificate.Status" --output text

echo.
echo Status should change from PENDING_VALIDATION to ISSUED (takes 5-10 minutes)
pause