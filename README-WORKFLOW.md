# 🔄 Guia de Trabalho - Over Tech

## 📋 Fluxo de Trabalho Diário

### 🚀 Antes de Começar (em qualquer máquina):
1. Execute `sync.bat` ou faça:
   ```bash
   git pull origin main
   ```

### ✏️ Depois de Fazer Alterações:
1. Execute `push.bat` ou faça:
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   git push origin main
   ```

## 🛠️ Comandos Úteis

### Verificar Status:
```bash
git status
```

### Ver Histórico:
```bash
git log --oneline -5
```

### Desfazer Alterações Locais:
```bash
git restore .
```

### Ver Diferenças:
```bash
git diff
```

## ⚠️ Dicas Importantes

1. **SEMPRE** execute `sync.bat` antes de começar
2. **SEMPRE** execute `push.bat` depois de terminar
3. Use mensagens de commit descritivas
4. Se houver conflitos, resolva antes de fazer push

## 📁 Estrutura do Projeto

```
overtech/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── sync.bat            # Script para sincronizar
├── push.bat            # Script para enviar alterações
└── README-WORKFLOW.md  # Este guia
```

## 🎯 Objetivo

Manter ambas as máquinas sempre sincronizadas com o GitHub, sem duplicação de arquivos.
