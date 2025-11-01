@echo off
echo Changing DNS servers to Google DNS...

REM Get the active network interface name
for /f "tokens=3*" %%i in ('netsh interface show interface ^| findstr "Connected"') do set interface=%%j

echo Active interface: %interface%

REM Set Google DNS servers
netsh interface ip set dns "%interface%" static 8.8.8.8
netsh interface ip add dns "%interface%" 8.8.4.4 index=2

echo DNS servers changed to Google DNS (8.8.8.8, 8.8.4.4)

REM Flush DNS cache
ipconfig /flushdns

echo DNS cache flushed!
echo.
echo Please restart your browsers (Edge, Chrome) and try again.
pause