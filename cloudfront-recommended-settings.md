# CloudFront Recommended Settings for goviqs.com

## SSL/TLS Settings

### **Security Policy**: 
**Choose: `TLSv1.2_2021`** ✅ **RECOMMENDED**
- Modern security standard
- Supports all current browsers
- Government/enterprise friendly
- Blocks older, insecure TLS versions

**Alternative: `TLSv1.2_2019`** (if you need broader compatibility)

**❌ Avoid**: TLSv1 or TLSv1.1 (deprecated and insecure)

## HTTP Version Support

### **Supported HTTP Versions**:
**Choose: `HTTP/2 and HTTP/1.1`** ✅ **RECOMMENDED**
- HTTP/2: Faster performance, multiplexing
- HTTP/1.1: Fallback for older clients
- Best of both worlds

**❌ Avoid**: HTTP/1.1 only (slower performance)

## IPv6 Support

### **IPv6**:
**Choose: `On`** ✅ **RECOMMENDED**
- Future-proof your website
- Better global connectivity
- Government networks often use IPv6
- No downside to enabling it

## SSL Support Method

### **SSL Support Method**:
**Choose: `SNI Only (recommended)`** ✅ **RECOMMENDED**
- Modern standard
- Cost-effective
- Supported by all current browsers (2010+)

**❌ Avoid**: Dedicated IP (expensive, unnecessary)

## Summary of Recommended Settings:

```
Alternate domain names: goviqs.com, www.goviqs.com
Custom SSL certificate: [Your certificate]
SSL support method: SNI only (recommended)
Security policy: TLSv1.2_2021
Supported HTTP versions: HTTP/2 and HTTP/1.1
IPv6: On
```

## Why These Settings?

### **TLSv1.2_2021**:
- ✅ Secure and modern
- ✅ Government compliance ready
- ✅ Blocks insecure older protocols
- ✅ Supports all browsers from 2013+

### **HTTP/2 + HTTP/1.1**:
- ✅ 30-50% faster page loads
- ✅ Better mobile performance
- ✅ Automatic fallback for older clients

### **IPv6 On**:
- ✅ Better performance in many regions
- ✅ Government network compatibility
- ✅ Future-proof
- ✅ No cost or performance penalty