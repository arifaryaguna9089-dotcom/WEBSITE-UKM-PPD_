document.addEventListener("DOMContentLoaded", function () {
    console.log("Website UKM PPD UIN Imam Bonjol Padang berhasil dimuat!");

    // ========================//
    //  KODE LAMA BAPAK/IBU (TETAP DIPERTAHANKAN)
    // ========================//

    // 1. Smooth Scroll untuk Tombol "Learn More"
    const learnMoreBtn = document.querySelector('.btn-outline');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function (e) {
            const targetAttr = this.getAttribute('href');
            if (targetAttr && targetAttr.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetAttr);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
    // 2. Efek Hover Interaktif pada Card
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.borderColor = '#111'; 
            this.style.transition = 'border-color 0.3s ease, transform 0.3s ease';
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.borderColor = '#ddd'; 
            this.style.transform = 'translateY(0)';
        });
    });
    // 3. Tombol "Kembali ke Atas" (Back To Top)
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        background-color: rgba(15, 23, 42, 0.85);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        width: 45px;
        height: 45px;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
        transition: background-color 0.3s, transform 0.3s, border-color 0.3s;
    `;
    const dotIndicator = document.createElement('span');
    dotIndicator.style.cssText = `
        width: 8px;
        height: 8px;
        background-color: white;
        border-radius: 50%;
        display: block;
    `;
    backToTopBtn.appendChild(dotIndicator);
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopBtn.style.backgroundColor = '#000';
        backToTopBtn.style.borderColor = 'white';
        backToTopBtn.style.transform = 'scale(1.1)';
    });
    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.style.backgroundColor = 'rgba(15, 23, 42, 0.85)';
        backToTopBtn.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        backToTopBtn.style.transform = 'scale(1)';
    });


    // ==========================================
    // 🚀 4 INOVASI BARU JAVASCRIPT
    // ==========================================

    // 💡 INOVASI 1: Pendeteksi Menu Aktif Otomatis (Active Navigation Highlighting)
    // Otomatis memberi tanda/garis bawah pada menu navbar sesuai file HTML yang sedang dibuka.
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
            link.style.fontWeight = "bold";
            link.style.borderBottom = "2px solid #fff";
            link.style.paddingBottom = "4px";
        }
    });


    // 💡 INOVASI 2: Efek Pengetikan Teks Otomatis (Dynamic Typing Effect)
    // Menampilkan pesan/slogan dinamis yang diketik secara bergantian pada Hero Section.
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && currentPage === "index.html") {
        const texts = [
            "UKM PROTOKOLER DAN PENGEMBANGAN DIRI",
            "WADAH PENGEMBANGAN SOFTSKILL & HARDSKILL",
            "UIN IMAM BONJOL PADANG"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentText = texts[textIndex];
            if (isDeleting) {
                heroTitle.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                heroTitle.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000; // Tahan sebentar saat kalimat selesai diketik
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        }
        typeEffect();
    }


    // 💡 INOVASI 3: Pencarian / Filter Cepat untuk Pengurus & Kegiatan (Real-time Live Search)
    // Membuatkan kotak pencarian otomatis di halaman about.html dan services.html
    const visionHeadings = document.querySelectorAll('.vision-heading');
    if (visionHeadings.length > 0 && (currentPage === "about.html" || currentPage === "services.html")) {
        const searchContainer = document.createElement('div');
        searchContainer.style.cssText = 'text-align: center; margin: 20px auto 30px auto; max-width: 500px;';
        
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = '🔍 Cari pengurus, biro, atau kegiatan...';
        searchInput.style.cssText = `
            width: 100%;
            padding: 12px 20px;
            border-radius: 25px;
            border: 1px solid #ccc;
            outline: none;
            font-size: 14px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            transition: border-color 0.3s;
        `;

        searchInput.addEventListener('focus', () => searchInput.style.borderColor = '#111');
        searchInput.addEventListener('blur', () => searchInput.style.borderColor = '#ccc');

        searchContainer.appendChild(searchInput);
        
        // Sisipkan kotak pencarian setelah judul pertama
        visionHeadings[0].parentNode.insertBefore(searchContainer, visionHeadings[0].nextSibling);

        // Fungsi filter kartu secara real-time
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase();
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }


    // 💡 INOVASI 4: Pop-up Modal Detail Kartu saat Diklik (Interactive Card Detail Modal)
    // Ketika kartu pengurus atau kegiatan diklik, akan muncul pop-up tampilan besar dengan overlay gelap.
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        backdrop-filter: blur(4px);
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background-color: white;
        padding: 30px;
        border-radius: 12px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        position: relative;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        animation: fadeIn 0.3s ease;
    `;

    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 18px;
        font-size: 28px;
        cursor: pointer;
        color: #666;
    `;

    const modalBody = document.createElement('div');

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Buka Modal saat Kartu Diklik
    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function () {
            modalBody.innerHTML = this.innerHTML;
            modal.style.display = 'flex';
        });
    });

    // Tutup Modal
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
});