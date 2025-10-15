// Google reCAPTCHA Configuration
// Para usar em produção, substitua pela sua chave real do Google reCAPTCHA

const RECAPTCHA_CONFIG = {
    // Chave de teste do Google (funciona apenas em localhost)
    // Para produção, registre seu site em: https://www.google.com/recaptcha/admin
    SITE_KEY: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    
    // Configurações adicionais
    THEME: 'dark', // 'light' ou 'dark'
    SIZE: 'normal', // 'compact' ou 'normal'
    TYPE: 'image' // 'image' ou 'audio'
};

// Função para obter a chave do reCAPTCHA
function getRecaptchaSiteKey() {
    return RECAPTCHA_CONFIG.SITE_KEY;
}

// Função para obter configurações do reCAPTCHA
function getRecaptchaConfig() {
    return RECAPTCHA_CONFIG;
}
