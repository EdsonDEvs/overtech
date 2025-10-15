@echo off
echo ========================================
echo    SINCRONIZANDO COM GITHUB
echo ========================================
echo.

echo [1/3] Verificando atualizações...
git fetch origin

echo [2/3] Baixando alterações...
git pull origin main

echo [3/3] Verificando status...
git status

echo.
echo ========================================
echo    SINCRONIZAÇÃO CONCLUÍDA!
echo ========================================
pause
