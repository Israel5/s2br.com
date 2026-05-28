const images = ['./assets/images/side_image_01.jpg', './assets/images/side_image_02.jpg'];
document.getElementById('hero-image').src = images[Math.floor(Math.random() * images.length)];

const translations = {
    en: {
        hero_title:   'Bringing communities together.',
        hero_desc:    'Your Brazilian community, wherever life takes you. Explore nearby stores, food, events, and services — built for Brazilians living around the world.',
        launching_on: 'Launching on',
        launch_date:  'September 7, 2026',
        footer_links: 'Products · Services · News · Events · Social',
        login:        'Business login',
    },
    pt: {
        hero_title:   'Unindo comunidades.',
        hero_desc:    'Sua comunidade brasileira, onde quer que a vida te leve. Explore lojas, gastronomia, eventos e serviços próximos — feito para brasileiros ao redor do mundo.',
        launching_on: 'Lançamento em',
        launch_date:  '7 de setembro de 2026',
        footer_links: 'Produtos · Serviços · Notícias · Eventos · Social',
        login:        'Acesso empresarial',
    },
    fr: {
        hero_title:   'Rapprocher les communautés.',
        hero_desc:    'Votre communauté brésilienne, où que la vie vous mène. Explorez les boutiques, la gastronomie, les événements et les services à proximité — conçu pour les Brésiliens du monde entier.',
        launching_on: 'Lancement le',
        launch_date:  '7 septembre 2026',
        footer_links: 'Produits · Services · Actualités · Événements · Social',
        login:        'Accès entreprise',
    },
    es: {
        hero_title:   'Uniendo comunidades.',
        hero_desc:    'Tu comunidad brasileña, donde sea que la vida te lleve. Explora tiendas cercanas, gastronomía, eventos y servicios — hecho para brasileños en todo el mundo.',
        launching_on: 'Lanzamiento el',
        launch_date:  '7 de septiembre de 2026',
        footer_links: 'Productos · Servicios · Noticias · Eventos · Social',
        login:        'Acceso empresarial',
    },
};

function setLang(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
        const active = btn.getAttribute('data-lang-btn') === lang;
        btn.classList.toggle('text-gray-900', active);
        btn.classList.toggle('dark:text-white', active);
        btn.classList.toggle('font-bold', active);
        btn.classList.toggle('text-gray-400', !active);
        btn.classList.toggle('dark:text-zinc-500', !active);
    });

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    localStorage.setItem('lang', lang);
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

const saved   = localStorage.getItem('lang');
const browser = (navigator.language || '').slice(0, 2).toLowerCase();
const init    = saved || (translations[browser] ? browser : 'en');
setLang(init);