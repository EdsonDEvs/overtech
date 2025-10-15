# 📧 Configuração do Sistema de Email

## 🎯 Como configurar o envio automático de emails

### **1. Criar conta no EmailJS**
1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Verifique seu email

### **2. Configurar Serviço de Email**
1. No dashboard, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha **"Gmail"** (ou seu provedor de email)
4. Siga as instruções para conectar sua conta Gmail
5. Anote o **Service ID** gerado

### **3. Criar Template de Email**
1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Use este template:

```
Assunto: Nova Solicitação - Over Tech

Conteúdo:
Nova solicitação de contato recebida através do site Over Tech.

Dados do Cliente:
- Nome: {{from_name}}
- Email: {{from_email}}
- Telefone: {{phone}}
- Serviço: {{service}}
- Mensagem: {{message}}

Data: {{current_date}}
IP: {{user_ip}}

---
Este email foi enviado automaticamente pelo formulário de contato do site Over Tech.
```

4. Anote o **Template ID** gerado

### **4. Obter Chave Pública**
1. Vá em **"Account"** > **"General"**
2. Copie sua **Public Key**

### **5. Atualizar Configurações**
1. Abra o arquivo `email-config.js`
2. Substitua os valores:

```javascript
const EMAIL_CONFIG = {
    SERVICE_ID: 'seu_service_id_aqui',
    TEMPLATE_ID: 'seu_template_id_aqui',
    PUBLIC_KEY: 'sua_public_key_aqui',
    TO_EMAIL: 'euedsonleandro@gmail.com',
    // ... resto permanece igual
};
```

### **6. Testar o Sistema**
1. Abra o site
2. Preencha o formulário de contato
3. Verifique se o email chegou na sua caixa de entrada

## 🔧 Configurações Avançadas

### **Limites Gratuitos:**
- **200 emails/mês** na conta gratuita
- **Suficiente** para sites pequenos/médios

### **Upgrade (se necessário):**
- **Plano pago** para mais emails
- **Suporte prioritário**
- **Analytics avançados**

## 🛠️ Solução de Problemas

### **Email não chega:**
1. Verifique se as chaves estão corretas
2. Confirme se o serviço Gmail está ativo
3. Verifique a pasta de spam
4. Teste com email diferente

### **Erro de configuração:**
1. Verifique o console do navegador (F12)
2. Confirme se todas as chaves estão corretas
3. Teste a conexão com o EmailJS

### **Fallback:**
Se o EmailJS falhar, o sistema automaticamente abre o cliente de email do usuário como alternativa.

## 📞 Suporte

Para dúvidas sobre a configuração, consulte:
- Documentação EmailJS: https://www.emailjs.com/docs/
- Suporte técnico: euedsonleandro@gmail.com
