@echo off
echo ========================================
echo    ENVIANDO ALTERAÇÕES PARA GITHUB
echo ========================================
echo.

echo [1/4] Verificando alterações...
git status

echo.
echo [2/4] Adicionando arquivos...
git add .

echo [3/4] Fazendo commit...
set /p commit_msg="Digite a mensagem do commit: "
git commit -m "%commit_msg%"

echo [4/4] Enviando para GitHub...
git push origin main

echo.
echo ========================================
echo    ALTERAÇÕES ENVIADAS COM SUCESSO!
echo ========================================
pause
