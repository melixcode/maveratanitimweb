document.addEventListener('DOMContentLoaded', () => {
    // Mobil Menü Aç/Kapat
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    // Menü bağlantılarına tıklandığında menüyü kapat
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });

    // Otomatik Güncel Yıl
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Türkçe / İngilizce Dil Değiştirici (Localization)
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = 'tr';

    const translations = {
        tr: {
            // Statik metinler data-tr ve data-en öznitelikleri ile otomatik yönetilir
        },
        en: {}
    };

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        langToggleBtn.textContent = currentLang === 'tr' ? 'EN' : 'TR';

        // Tüm veri çeviri özniteliklerini güncelle
        document.querySelectorAll('[data-tr]').forEach(element => {
            if (currentLang === 'en' && element.getAttribute('data-en')) {
                element.textContent = element.getAttribute('data-en');
            } else if (currentLang === 'tr' && element.getAttribute('data-tr')) {
                element.textContent = element.getAttribute('data-tr');
            }
        });
    });
});
