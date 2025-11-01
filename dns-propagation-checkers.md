# DNS Propagation Checkers

## Online Tools (Most Reliable):

### 1. **whatsmydns.net**
- URL: https://www.whatsmydns.net/
- Enter: `goviqs.com` and select `A` record
- Enter: `www.goviqs.com` and select `CNAME` record
- Shows propagation status worldwide

### 2. **dnschecker.org**
- URL: https://dnschecker.org/
- Enter: `goviqs.com`
- Shows global DNS propagation status

### 3. **DNS Propagation Checker**
- URL: https://www.dnswatch.info/
- Enter your domain to check propagation

## What to Look For:

### ✅ **Fully Propagated When You See:**
- `goviqs.com` → `20.84.233.22` (A record)
- `www.goviqs.com` → `diw7jl9nbbknq.cloudfront.net` (CNAME)
- `goviqs.com` → `goviqs-com.mail.protection.outlook.com` (MX record)

### 🔄 **Still Propagating When You See:**
- Mixed results (some locations show old records)
- Timeouts or "No record found"
- Old Azure/GitHub records still showing

## Expected Timeline:
- **Route 53 to major DNS servers**: 1-4 hours
- **Full global propagation**: 24-48 hours
- **Your ISP**: May take longer (up to 72 hours)

## Quick Test Commands:
```bash
# Test if your domain resolves
ping goviqs.com

# Test if website loads
curl -I https://www.goviqs.com
```