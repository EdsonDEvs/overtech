// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const header = document.querySelector('.header');
const scrollIndicator = document.querySelector('.scroll-indicator');
const contactForm = document.querySelector('.contact-form');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close mobile menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll indicator click
scrollIndicator.addEventListener('click', () => {
    const servicesSection = document.querySelector('#services');
    const offsetTop = servicesSection.offsetTop - 80;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll('.service-card, .contact-item, .stat, .feature, .testimonial-card, .cert-card, .portfolio-item, .web-feature, .tech-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (target === 98 ? '%' : target === 500 ? '+' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (target === 98 ? '%' : target === 500 ? '+' : '+');
        }
    }, 16);
};

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const text = statNumber.textContent;
            
            if (text.includes('500')) {
                animateCounter(statNumber, 500);
            } else if (text.includes('98')) {
                animateCounter(statNumber, 98);
            } else if (text.includes('5')) {
                animateCounter(statNumber, 5);
            }
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const stats = document.querySelectorAll('.stat');
stats.forEach(stat => {
    statsObserver.observe(stat);
});

// Google reCAPTCHA System
let recaptchaCompleted = false;

const verifyRecaptcha = () => {
    try {
        if (typeof grecaptcha === 'undefined') {
            console.error('reCAPTCHA não carregado!');
            return false;
        }
        
        const recaptchaResponse = grecaptcha.getResponse();
        console.log('reCAPTCHA response:', recaptchaResponse);
        console.log('reCAPTCHA completed:', recaptchaCompleted);
        return recaptchaResponse && recaptchaResponse.length > 0 && recaptchaCompleted;
    } catch (error) {
        console.error('Erro ao verificar reCAPTCHA:', error);
        return false;
    }
};

// Callback functions for reCAPTCHA
window.onRecaptchaSuccess = function(token) {
    console.log('reCAPTCHA completado com sucesso!');
    recaptchaCompleted = true;
    
    // Update visual status
    const statusEl = document.getElementById('recaptcha-status');
    const textEl = document.getElementById('recaptcha-text');
    if (statusEl && textEl) {
        statusEl.style.color = '#00ff88';
        textEl.textContent = 'Verificação concluída com sucesso!';
    }
};

window.onRecaptchaExpired = function() {
    console.log('reCAPTCHA expirado!');
    recaptchaCompleted = false;
    
    // Update visual status
    const statusEl = document.getElementById('recaptcha-status');
    const textEl = document.getElementById('recaptcha-text');
    if (statusEl && textEl) {
        statusEl.style.color = '#ff4757';
        textEl.textContent = 'Verificação expirada. Clique novamente.';
    }
};

// EmailJS System
let emailJSReady = false;

// Initialize EmailJS when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (typeof emailjs !== 'undefined') {
        emailJSReady = initEmailJS();
        console.log('EmailJS inicializado:', emailJSReady);
    } else {
        console.error('EmailJS não carregado!');
    }
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Google reCAPTCHA validation
    if (!verifyRecaptcha()) {
        showNotification('Por favor, complete a verificação reCAPTCHA marcando "Não sou um robô".', 'error');
        return;
    }
    
    console.log('reCAPTCHA validado com sucesso');
    
    // Simple validation
    const requiredFields = contactForm.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#ff6b35';
            isValid = false;
        } else {
            field.style.borderColor = 'rgba(0, 212, 255, 0.2)';
        }
    });
    
    if (isValid) {
        // Send email via EmailJS
        sendEmailViaEmailJS(data);
    } else {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
    }
});

// Email sending function via EmailJS
const sendEmailViaEmailJS = async (data) => {
    console.log('EmailJS Ready:', emailJSReady);
    if (!emailJSReady) {
        console.error('EmailJS não está pronto!');
        showNotification('Sistema de email não disponível. Tente novamente em alguns instantes.', 'error');
        return;
    }

    // Show loading state
    const submitBtn = document.getElementById('submit-form');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    try {
        console.log('Enviando email com dados:', data);
        const result = await sendEmail(data);
        console.log('Resultado do envio:', result);
        
        if (result.success) {
            showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            contactForm.reset();
            grecaptcha.reset();
        } else {
            console.error('Erro no envio:', result.error);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        showNotification('Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.', 'error');
    } finally {
        // Restore button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
};

// Fallback email function (if EmailJS fails)
const sendEmailFallback = (data) => {
    const emailBody = `
Nova solicitação de contato - Over Tech

Nome: ${data.name || 'Não informado'}
Email: ${data.email || 'Não informado'}
Telefone: ${data.phone || 'Não informado'}
Tipo de Serviço: ${data.service || 'Não informado'}
Mensagem: ${data.message || 'Não informado'}

Data: ${new Date().toLocaleString('pt-BR')}
IP: ${window.location.hostname}
    `;
    
    const mailtoLink = `mailto:euedsonleandro@gmail.com?subject=Nova Solicitação - Over Tech&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showNotification('Email aberto com sucesso! Preencha e envie para euedsonleandro@gmail.com', 'success');
    
    // Reset form and reCAPTCHA
    contactForm.reset();
    grecaptcha.reset();
};

// Notification system
const showNotification = (message, type = 'info') => {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#00d4ff' : type === 'error' ? '#ff6b35' : '#0066cc'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
};

// Add notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-content i {
        font-size: 1.2rem;
    }
`;
document.head.appendChild(notificationStyles);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.tech-animation');
    
    if (hero && heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add hover effects to service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add hover effects to testimonial cards
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.01)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add hover effects to certification cards
const certCards = document.querySelectorAll('.cert-card');
certCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add hover effects to portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Add floating animation to devices
const devices = document.querySelectorAll('.device');
devices.forEach((device, index) => {
    device.addEventListener('mouseenter', () => {
        device.style.animationPlayState = 'paused';
        device.style.transform = 'translateY(-20px) rotate(10deg) scale(1.1)';
    });
    
    device.addEventListener('mouseleave', () => {
        device.style.animationPlayState = 'running';
        device.style.transform = '';
    });
});

// Add click effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// Add typing effect to hero title
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Add scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00d4ff, #0066cc);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
};

// Initialize scroll progress
createScrollProgress();

// Add smooth reveal animation for sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.1 });

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    revealObserver.observe(section);
});

// Staggered animation for grid items
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            staggerObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Apply staggered animation to grid items
const gridItems = document.querySelectorAll('.testimonials-grid .testimonial-card, .certifications-grid .cert-card, .portfolio-grid .portfolio-item');
gridItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    staggerObserver.observe(item);
});

// Add typing effect to hero badge
const typeWriterBadge = (element, text, speed = 50) => {
    let i = 0;
    element.innerHTML = '';
    
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

// Initialize badge typing effect
window.addEventListener('load', () => {
    const heroBadge = document.querySelector('.hero-badge span');
    if (heroBadge) {
        const originalText = heroBadge.textContent;
        typeWriterBadge(heroBadge, originalText, 100);
    }
});

// Portfolio tabs functionality
const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-tab');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Add revealed class styles
const revealStyles = document.createElement('style');
revealStyles.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    /* Mobile touch improvements */
    @media (max-width: 768px) {
        .btn {
            min-height: 48px;
            touch-action: manipulation;
        }
        
        .service-card,
        .testimonial-card,
        .cert-card,
        .portfolio-item {
            touch-action: manipulation;
        }
        
        .nav-menu a {
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            min-height: 48px;
            touch-action: manipulation;
        }
        
        .hamburger {
            min-width: 48px;
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            touch-action: manipulation;
        }
    }
    
    /* Prevent zoom on input focus on iOS */
    @media screen and (-webkit-min-device-pixel-ratio: 0) {
        select,
        textarea,
        input[type="text"],
        input[type="password"],
        input[type="datetime"],
        input[type="datetime-local"],
        input[type="date"],
        input[type="month"],
        input[type="time"],
        input[type="week"],
        input[type="number"],
        input[type="email"],
        input[type="url"],
        input[type="search"],
        input[type="tel"],
        input[type="color"] {
            font-size: 16px;
        }
    }
`;
document.head.appendChild(revealStyles);

// Add mobile-specific interactions
const addMobileInteractions = () => {
    // Add touch feedback to cards
    const interactiveElements = document.querySelectorAll('.service-card, .testimonial-card, .cert-card, .portfolio-item, .contact-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', () => {
            element.style.transform = 'scale(0.98)';
            element.style.transition = 'transform 0.1s ease';
        });
        
        element.addEventListener('touchend', () => {
            element.style.transform = '';
            element.style.transition = 'transform 0.3s ease';
        });
    });
    
    // Add touch feedback to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', () => {
            button.style.transform = 'scale(0.95)';
            button.style.transition = 'transform 0.1s ease';
        });
        
        button.addEventListener('touchend', () => {
            button.style.transform = '';
            button.style.transition = 'transform 0.3s ease';
        });
    });
    
    // Improve form interactions on mobile
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            // Scroll to input on mobile to prevent keyboard covering
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    input.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }, 300);
            }
        });
    });
};

// Initialize mobile interactions
addMobileInteractions();

// Add swipe gesture for mobile menu (optional enhancement)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

const handleSwipe = () => {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0 && navMenu.classList.contains('active')) {
            // Swipe right to close menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
};
