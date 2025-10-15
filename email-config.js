// EmailJS Configuration
// Para configurar, acesse: https://www.emailjs.com/

const EMAIL_CONFIG = {
    // ID do serviço EmailJS (substitua pelo seu)
    SERVICE_ID: 'service_overtech',
    
    // ID do template de email (substitua pelo seu)
    TEMPLATE_ID: 'template_contact_form',
    
    // Chave pública do EmailJS (substitua pela sua)
    PUBLIC_KEY: 'your_public_key_here',
    
    // Email de destino
    TO_EMAIL: 'euedsonleandro@gmail.com',
    
    // Configurações do template
    TEMPLATE_PARAMS: {
        to_name: 'Edson Leandro',
        from_name: '{{name}}',
        from_email: '{{email}}',
        phone: '{{phone}}',
        service: '{{service}}',
        message: '{{message}}',
        reply_to: '{{email}}'
    }
};

// Função para inicializar o EmailJS
function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
        return true;
    }
    return false;
}

// Função para obter configurações
function getEmailConfig() {
    return EMAIL_CONFIG;
}

// Função para enviar email
async function sendEmail(formData) {
    try {
        const templateParams = {
            to_name: EMAIL_CONFIG.TEMPLATE_PARAMS.to_name,
            from_name: formData.name || 'Não informado',
            from_email: formData.email || 'Não informado',
            phone: formData.phone || 'Não informado',
            service: formData.service || 'Não informado',
            message: formData.message || 'Não informado',
            reply_to: formData.email || 'noreply@overtech.com'
        };

        const response = await emailjs.send(
            EMAIL_CONFIG.SERVICE_ID,
            EMAIL_CONFIG.TEMPLATE_ID,
            templateParams
        );

        return { success: true, response };
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return { success: false, error };
    }
}
