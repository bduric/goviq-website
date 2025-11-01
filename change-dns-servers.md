# Change DNS Servers on Windows

## Method 1: Use Google DNS
1. **Control Panel** → **Network and Internet** → **Network and Sharing Center**
2. **Change adapter settings** (left side)
3. **Right-click** your network connection → **Properties**
4. **Select** "Internet Protocol Version 4 (TCP/IPv4)" → **Properties**
5. **Use the following DNS server addresses:**
   - **Preferred**: 8.8.8.8
   - **Alternate**: 8.8.4.4
6. **OK** → **OK**

## Method 2: Use Cloudflare DNS
- **Preferred**: 1.1.1.1
- **Alternate**: 1.0.0.1

## Method 3: Command Line (Quick)
```cmd
netsh interface ip set dns "Wi-Fi" static 8.8.8.8
netsh interface ip add dns "Wi-Fi" 8.8.4.4 index=2
```

## After Changing DNS:
1. **Flush DNS cache**: `ipconfig /flushdns`
2. **Restart browsers**
3. **Test**: Try Edge and Chrome again