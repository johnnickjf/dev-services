/* ================================================
   Johnnick Landim — Portfólio
   script.js
   ================================================ */

// ── NAV: scroll effect ──────────────────────────────
const mainNav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
    mainNav.classList.toggle('scrolled', window.scrollY > 50);
});


// ── MOBILE MENU ─────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
closeBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));

// close on link click
document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});


// ── FAQ ACCORDION ───────────────────────────────────
document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        const isOpen = answer.classList.contains('open');

        // close all
        document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
        document.querySelectorAll('.faq-q').forEach(q2 => q2.classList.remove('open'));
        document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));

        // open clicked (if it was closed)
        if (!isOpen) {
            answer.classList.add('open');
            q.classList.add('open');
            q.closest('.faq-item').classList.add('active');
        }
    });
});


// ── REVEAL ON SCROLL ────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// ── SMOOTH SCROLL ───────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});