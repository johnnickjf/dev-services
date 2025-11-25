// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// FAQ Accordion - Corrigido
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');

        // Fecha todas as outras respostas
        document.querySelectorAll('.faq-answer').forEach(item => {
            if (item !== answer) {
                item.classList.remove('active');
            }
        });

        // Alterna ícones de todas as outras perguntas
        document.querySelectorAll('.faq-question i').forEach(item => {
            if (item !== icon) {
                item.className = 'fas fa-chevron-down';
            }
        });

        // Alterna a resposta atual
        answer.classList.toggle('active');

        // Alterna o ícone
        if (answer.classList.contains('active')) {
            icon.className = 'fas fa-chevron-up';
        } else {
            icon.className = 'fas fa-chevron-down';
        }
    });
});

// WhatsApp Message
const whatsappButtons = document.querySelectorAll('#whatsapp-contact, #whatsapp-float');

whatsappButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Seu número real
        const phoneNumber = '5532991447768';

        // Mensagem personalizada com serviços
        let message = 'Olá! Gostaria de solicitar um orçamento para:';
        message += '%0A%0A- Email Profissional';
        message += '%0A- Site Estático';
        message += '%0A- Automação Excel';
        message += '%0A- Scripts de Validação';
        message += '%0A- CRM Simples';
        message += '%0A- Landing Page';
        message += '%0A%0APor favor, informe qual serviço tem interesse!';

        // Atualiza o link do WhatsApp
        button.href = `https://wa.me/${phoneNumber}?text=${message}`;
    });
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) {
            navLinks.classList.remove('active');
        }
    });
});

// Smooth Scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Botão Voltar ao Topo
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');

    // Verificar preferência do usuário
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');

    // Aplicar tema salvo ou preferência do sistema
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeIcon) themeIcon.className = 'fas fa-moon';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');

        if (currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeIcon) themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            if (themeIcon) themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Animações ao rolar
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('show');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
// Executar uma vez ao carregar a página
window.addEventListener('load', animateOnScroll);