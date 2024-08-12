@echo off
setlocal

where yarn >nul 2>nul
if %errorlevel% equ 0 (
    echo Yarn package manager found. Running command for Yarn...
    yarn install && yarn build && yarn preview
    goto OpenBrowser
)

where npm >nul 2>nul
if %errorlevel% equ 0 (
    echo NPM package manager found. Running command for NPM...
    npm install && npm run build && npm run preview
    goto OpenBrowser
)

echo No supported package manager was found. Install Yarn or NPM to continue.
pause
exit /b

:OpenBrowser
start http://localhost:9051