// DAFTAR PRODUK
const products = [
    { id: 1, name: "Sehat Ayu Cicarosella Serum", tag: "Skin Care", preview: "img/serum.png", priceK: "Rp 120.000", priceA: "Rp 100.000", poin: "20", desc: "Serum wajah herbal premium untuk mencerahkan kulit, menyamarkan noda, dan menjaga kelembapan alami wajah." },
    { id: 2, name: "Sehat Ayu Cicarosella Face Wash", tag: "Skin Care", preview: "img/facewash.png", priceK: "Rp 75.000", priceA: "Rp 60.000", poin: "10", desc: "Sabun wajah herbal lembut yang membersihkan secara menyeluruh sekaligus menutrisi kulit agar tetap sehat dan segar." },
    { id: 3, name: "Sehat Ayu Cicarosella Day Cream", tag: "Skin Care", preview: "img/daykrim.png", priceK: "Rp 115.000", priceA: "Rp 95.000", poin: "20", desc: "Krim siang herbal premium yang melindungi kulit dari radikal bebas sekaligus menjaga kelembapan dan kecerahan sepanjang hari." },
    { id: 4, name: "Sehat Ayu Cicarosella Night Cream", tag: "Skin Care", preview: "img/nightkrim.png", priceK: "Rp 115.000", priceA: "Rp 95.000", poin: "20", desc: "Krim malam bernutrisi tinggi untuk regenerasi kulit, memperbaiki tekstur, dan menjaga keremajaan saat tidur." },
    { id: 5, name: "Natura Shark Cartilage", tag: "Herbal Care", preview: "img/shark.png", priceK: "Rp 175.000", priceA: "Rp 150.000", poin: "50", desc: "Natura Shark Cartilage terbuat dari 100% ekstrak tulang rawan ikan hiu murni berkualitas tinggi. Secara alami mengandung Glucosamine, Chondroitin, Kalsium, dan Fosfor yang sangat dibutuhkan untuk meregenerasi tulang rawan dan melumasi persendian yang kering." },
    { id: 6, name: "Gamatuk", tag: "Herbal Care", preview: "img/gamatuk.png", priceK: "Rp 125.000", priceA: "Rp 100.000", poin: "25", desc: "Suplemen kolagen dan albumin alami untuk mempercepat pemulihan tubuh dari dalam." },
    { id: 7, name: "Sari Kurma Angkak", tag: "Healthy Beverages", preview: "img/sarkum.png", priceK: "Rp 55.000", priceA: "Rp 45.000", poin: "10", desc: "Perpaduan kurma murni dan angkak untuk menjaga stamina dan kesehatan tubuh." },
    { id: 8, name: "Kopi Radix Jumbo", tag: "Healthy Beverages", preview: "img/kopi.png", priceK: "Rp 200.000", priceA: "Rp 185.000", poin: "20", desc: "Rahasia kedahsyatannya terletak pada Sinergi 7 Herba Hutan Tropis yang diracik secara presisi. Tidak hanya memberikan energi instan, kopi ini bekerja mendetoksifikasi tubuh, melancarkan peredaran darah, dan memulihkan kesegaran tubuh secara alami." },
    { id: 9, name: "Minyak Bidara Mumtas", tag: "Home Care", preview: "img/mbm.png", priceK: "Rp 35.000", priceA: "Rp 30.000", poin: "5", desc: "Minyak bidara serbaguna untuk perlindungan spiritual dan kesehatan tubuh secara alami." },
    { id: 10, name: "Minyak Telon Mumtas", tag: "Home Care", preview: "img/telon.png", priceK: "Rp 30.000", priceA: "Rp 25.000", poin: "5", desc: "Minyak telon lembut yang memberikan perlindungan alami dan kenyamanan bagi bayi serta anak-anak." },
    { id: 11, name: "Madu Multiflora Mumtaz", tag: "Healthy Foods", preview: "img/madu.png", priceK: "Rp 110.000", priceA: "Rp 90.000", poin: "20", desc: "Madu Murni Multiflora dihasilkan oleh lebah-lebah yang mengumpulkan nektar dari ribuan jenis bunga. Karena berasal dari beragam bunga, madu ini memiliki profil rasa yang unik, kaya, dan aromatik—sebuah tanda tangan alam yang tidak bisa ditiru oleh madu pabrikan." },
    { id: 12, name: "Prima Spirulina Al Kautsar", tag: "Herbal Care", preview: "img/spirulina.png", priceK: "Rp 125.000", priceA: "Rp 100.000", poin: "25", desc: "Superfood alami kaya nutrisi untuk meningkatkan imunitas, energi, dan kesehatan tubuh secara menyeluruh." },
    { id: 13, name: "Antirac", tag: "Herbal Care", preview: "img/antirac.png", priceK: "Rp 175.000", priceA: "Rp 150.000", poin: "30", desc: "Diformulasikan dari kombinasi dua rimpang pusaka Nusantara yang paling ampuh: Kunir Putih dan Temulawak. Sinergi keduanya bekerja menetralkan racun (anti-toksin) sekaligus memperbaiki fungsi organ pencernaan yang rusak akibat bakteri atau pola makan yang buruk." },
    { id: 14, name: "SJ-2", tag: "Herbal Care", preview: "img/sj2.png", priceK: "Rp 175.000", priceA: "Rp 150.000", poin: "30", desc: "SJ2, suplemen herbal spesialis yang diformulasikan untuk melawan serangan virus dan memperkuat sistem pertahanan tubuh secara alami." },
    { id: 15, name: "Elbuma", tag: "Home Care", preview: "img/elbuma.png", priceK: "Rp 100.000", priceA: "Rp 75.000", poin: "20", desc: "Madu campuran albumin bernutrisi tinggi untuk mendukung pertumbuhan anak secara alami." },
    { id: 16, name: "Rosso", tag: "Herbal Care", preview: "img/rosso.png", priceK: "Rp 125.000", priceA: "Rp 100.000", poin: "25", desc: "Suplemen herbal premium untuk meningkatkan stamina, vitalitas, dan performa pria secara alami." },
    { id: 17, name: "Best-V", tag: "Herbal Care", preview: "img/bestv.png", priceK: "Rp 125.000", priceA: "Rp 100.000", poin: "25", desc: "Suplemen herbal khusus wanita untuk menjaga kesehatan area kewanitaan dan keseimbangan alami tubuh." },
    { id: 18, name: "Langtugin", tag: "Herbal Care", preview: "img/langtugin.png", priceK: "Rp 125.000", priceA: "Rp 100.000", poin: "25", desc: "Suplemen herbal alami untuk membantu meluruhkan batu ginjal dan menjaga kesehatan saluran kemih." },
    { id: 19, name: "Silangzing", tag: "Herbal Care", preview: "img/silangzing.png", priceK: "Rp 125.000", priceA: "Rp 100.000", poin: "25", desc: "Suplemen herbal alami untuk membantu pembakaran lemak dan mendukung penurunan berat badan secara sehat." },
    { id: 20, name: "Curmaval", tag: "Herbal Care", preview: "img/curmaval.png", priceK: "Rp 125.000", priceA: "Rp 100.000", poin: "25", desc: "Suplemen herbal pendukung terapi kanker dengan kekuatan antioksidan alami." },
    { id: 21, name: "ZozCov", tag: "Herbal Care", preview: "img/zozcov.png", priceK: "Rp 125.000", priceA: "Rp 100.000", poin: "25", desc: "Suplemen herbal sinergis untuk meningkatkan daya tahan tubuh dan menjaga kesehatan secara menyeluruh." },
    { id: 22, name: "Minyak Herba Mumtas", tag: "Home Care", preview: "img/mhm.png", priceK: "Rp 60.000", priceA: "Rp 45.000", poin: "10", desc: "Minyak serbaguna berbahan herbal alami yang efektif membantu berbagai keluhan kesehatan, mulai dari luar hingga dalam tubuh." },
    { id: 23, name: "Diabevitto", tag: "Herbal Care", preview: "img/diabet.png", priceK: "Rp 125.000", priceA: "Rp 100.000", poin: "25", desc: "Suplemen herbal pendukung pengelolaan kadar gula darah secara alami dan aman." },
    { id: 24, name: "Teh Morizen", tag: "Healthy Beverages", preview: "img/morizen.png", priceK: "Rp 85.000", priceA: "Rp 70.000", poin: "15", desc: "Teh herbal kaya antioksidan yang memadukan kekuatan nutrisi kelor dan kebaikan teh hijau untuk kesehatan optimal." },
    { id: 25, name: "Teh Mahkota Dewa", tag: "Healthy Beverages", preview: "img/mahkota.png", priceK: "Rp 85.000", priceA: "Rp 70.000", poin: "15", desc: "Teh herbal dengan cita rasa khas yang mendukung daya tahan tubuh dan kesehatan secara menyeluruh." },
    { id: 26, name: "Teh Cenzvizt", tag: "Healthy Beverages", preview: "img/cenzvit.png", priceK: "Rp 85.000", priceA: "Rp 70.000", poin: "15", desc: "Teh herbal menyegarkan yang mendukung fungsi otak, kesehatan kulit, dan daya tahan tubuh." },
    { id: 27, name: "Wedang Uwuh Celup", tag: "Healthy Beverages", preview: "img/wedang.png", priceK: "Rp 85.000", priceA: "Rp 70.000", poin: "15", desc: "Teh herbal dengan kekuatan alami daun sirsak untuk menjaga daya tahan tubuh dan melawan radikal bebas." },
    { id: 28, name: "Teh Zirzen Vit", tag: "Healthy Beverages", preview: "img/zirzen.png", priceK: "Rp 85.000", priceA: "Rp 70.000", poin: "15", desc: "Minuman rempah tradisional khas Yogyakarta yang menghangatkan tubuh dan memperkuat daya tahan secara alami." },
    { id: 29, name: "Mumtas Shampoo", tag: "Home Care", preview: "img/shampoo.png", priceK: "Rp 40.000", priceA: "Rp 35.000", poin: "5", desc: "Shampoo herbal premium yang merawat rambut dari akar hingga ujung, memberikan kekuatan, kilau, dan pertumbuhan optimal." },
    { id: 30, name: "Mumtas Body Wash", tag: "Home Care", preview: "img/bodywash.png", priceK: "Rp 40.000", priceA: "Rp 35.000", poin: "5", desc: "Sabun mandi herbal yang membersihkan sekaligus menutrisi kulit agar tetap sehat, lembap, dan awet muda." },
    { id: 31, name: "Mumtas Mie - Moringa", tag: "Healthy Foods", preview: "img/miemoringa.png", priceK: "Rp 12.000", priceA: "Rp 10.000", poin: "2", desc: "Mie bergizi tinggi daun kelor untuk energi alami dan nutrisi lengkap setiap hari." },
    { id: 32, name: "Mumtas Mie - Habbasauda", tag: "Healthy Foods", preview: "img/miehabba.png", priceK: "Rp 12.000", priceA: "Rp 10.000", poin: "2", desc: "Mie fungsional berbahan habbatussauda yang meningkatkan vitalitas dan menyeimbangkan hormon tubuh." },
    { id: 33, name: "Mumtas Mie - Collagen", tag: "Healthy Foods", preview: "img/miecolla.png", priceK: "Rp 12.000", priceA: "Rp 10.000", poin: "2", desc: "Mie sehat kaya kolagen yang tidak hanya lezat, tetapi juga merawat elastisitas dan keremajaan kulit dari dalam." },
    { id: 34, name: "Mumtas Mie - Spirulina", tag: "Healthy Foods", preview: "img/miespiru.png", priceK: "Rp 12.000", priceA: "Rp 10.000", poin: "2", desc: "Mie fungsional tinggi spirulina yang mendukung kekebalan tubuh dan kesehatan organ vital setiap hari." },
    { id: 35, name: "Mumtazzio Gingerissimo Box", tag: "Healthy Beverages", preview: "img/mgbox.png", priceK: "Rp 30.000", priceA: "Rp 25.000", poin: "5", desc: "Rasakan sensasi kehangatan otentik dari Mumtazzio Gingerissimo, sebuah Artisan Red Ginger Elixir yang diracik khusus untuk pecinta minuman rempah berkualitas. Bukan sekadar sirup jahe biasa, Gingerissimo menghadirkan paduan rasa yang kompleks, mewah, dan menyehatkan." },
    { id: 36, name: "Mumtazzio Gingerissimo Botol", tag: "Healthy Beverages", preview: "img/mgbotol.png", priceK: "Rp 90.000", priceA: "Rp 75.000", poin: "20", desc: "Rasakan sensasi kehangatan otentik dari Mumtazzio Gingerissimo, sebuah Artisan Red Ginger Elixir yang diracik khusus untuk pecinta minuman rempah berkualitas. Bukan sekadar sirup jahe biasa, Gingerissimo menghadirkan paduan rasa yang kompleks, mewah, dan menyehatkan." },
    { id: 37, name: "Shark Oil Squa", tag: "Herbal Care", preview: "img/sos2.png", priceK: "Rp 200.000", priceA: "Rp 175.000", poin: "50", desc: "Suplemen premium dengan kandungan squalene murni yang membantu tubuh tetap bertenaga dan optimal setiap hari." },
    { id: 38, name: "V-Radix", tag: "Healthy Beverages", preview: "img/vradix.png", priceK: "Rp 400.000", priceA: "Rp 350.000", poin: "50", desc: "Kopi V Radix, racikan kopi herbal premium yang diformulasikan khusus untuk pria dewasa yang menginginkan stamina prima dan vitalitas maksimal. Bukan sekadar kopi penahan kantuk, ini adalah bahan bakar untuk menjaga keharmonisan hubungan Anda." }
];

// Cursor & floating preview
const cursor = document.getElementById('cursor');
const floatingPreview = document.getElementById('floatingPreview');
const previewImg = document.getElementById('previewImg');

document.addEventListener('mousemove', e => {
    // Memastikan cursor custom tetap mengikuti mouse
    if(cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
    
    // Logic untuk floating preview gambar
    if (floatingPreview && floatingPreview.classList.contains('visible')) {
        const x = e.clientX + 30;
        const y = e.clientY - 150;
        floatingPreview.style.left = `${x}px`;
        floatingPreview.style.top = `${y}px`;
    }
});

function renderArchive(filter = "") {
    const col1 = document.getElementById('col-1');
    const col2 = document.getElementById('col-2');
    
    // Safety check jika elemen belum ada
    if(!col1 || !col2) return;

    col1.innerHTML = ""; col2.innerHTML = "";
    const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
    
    filtered.forEach((p, i) => {
        const item = document.createElement('div');
        item.className = "group border-b border-emerald-950/10 py-8 md:py-10 cursor-pointer transition-all hover:pl-6";
        item.innerHTML = `
            <div class="flex justify-between items-baseline">
                <h4 class="serif italic text-3xl md:text-5xl font-light group-hover:font-black transition-all">${p.name}</h4>
                <span class="text-[9px] md:text-[10px] font-black uppercase opacity-30 tracking-[0.2em]">${p.tag}</span>
            </div>
        `;
        item.onmouseenter = () => {
            document.body.classList.add('cursor-hover');
            previewImg.src = p.preview;
            floatingPreview.classList.add('visible');
        };
        item.onmouseleave = () => {
            document.body.classList.remove('cursor-hover');
            floatingPreview.classList.remove('visible');
        };
        item.onclick = () => openModal(p);
        if (i % 2 === 0) col1.appendChild(item);
        else col2.appendChild(item);
    });
}

let currentP = null;
function openModal(p) {
    currentP = p;
    document.getElementById('modalImg').src = p.preview;
    document.getElementById('modalTitle').innerText = p.name;
    document.getElementById('modalTag').innerText = p.tag;
    document.getElementById('modalDesc').innerText = p.desc;
    document.getElementById('priceK').innerText = p.priceK;
    document.getElementById('priceA').innerText = p.priceA;
    document.getElementById('poinVal').innerText = p.poin;
    
    const modal = document.getElementById('productModal');
    modal.classList.remove('hidden');
    
    // Sedikit delay agar transisi CSS berjalan
    setTimeout(() => {
        modal.classList.add('opacity-100');
        modal.querySelector('div').classList.remove('scale-95');
        modal.querySelector('div').classList.add('scale-100');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('opacity-100');
    modal.querySelector('div').classList.remove('scale-100');
    modal.querySelector('div').classList.add('scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 500);
}

function orderNow() {
    if(!currentP) return;
    const msg = encodeURIComponent(`Assalamu'alaikum. Saya tertarik dengan produk ${currentP.name}. Bisa bantu informasi lebih lanjut?`);
    window.open(`https://wa.me/6281227910076?text=${msg}`, '_blank');
}

function scrollToPage(i) {
    const sections = document.querySelectorAll('.page-spread');
    if(sections[i]) {
        sections[i].scrollIntoView({ behavior: 'smooth' });
    }
}

// --- PERBAIKAN PADA BAGIAN INI ---
function initHeroAndNavReveal() {
    // 1. Hide elemen-elemen utama (Hapus .subtitle-reveal dari sini)
    gsap.set(".reveal-text-top, .title-reveal, .scroll-indicator, .nav-reveal", { 
        opacity: 0, 
        visibility: "hidden" 
    });

    // 2. Hide KHUSUS ANAK-ANAK subtitle (agar parent tetap visible layoutnya)
    gsap.set(".subtitle-reveal > *", { 
        opacity: 0, 
        visibility: "hidden", 
        y: 120 // Geser ke bawah
    });

    // Posisi awal elemen lain
    gsap.set(".title-reveal", { y: 300 });
    gsap.set(".reveal-text-top", { y: 60 });
    gsap.set(".scroll-indicator", { scaleY: 0 });
    gsap.set(".nav-reveal", { y: -150 });

    // --- ANIMASI ---

    // Reveal top text
    gsap.to(".reveal-text-top", { 
        y: 0, opacity: 1, visibility: "visible", 
        duration: 1.2, delay: 0.4, ease: "power2.out" 
    });

    // Judul MUMTAS naik
    gsap.to(".title-reveal", { 
        y: 0, opacity: 1, visibility: "visible", 
        duration: 2.2, delay: 0.6, ease: "power4.out" 
    });

    // Subtitle staggered (Ini yang diperbaiki)
    gsap.to(".subtitle-reveal > *", { 
        y: 0, opacity: 1, visibility: "visible", 
        duration: 1.4, delay: 1.6, stagger: 0.2, ease: "power2.out" 
    });

    // Navbar drop down
    gsap.to(".nav-reveal", { 
        y: 0, opacity: 1, visibility: "visible", 
        duration: 1.2, delay: 1.8, ease: "power2.out" 
    });

    // Scroll indicator bounce
    gsap.to(".scroll-indicator", { 
        opacity: 1, visibility: "visible", scaleY: 1, 
        duration: 1.2, delay: 2.4, ease: "elastic.out(1, 0.3)" 
    });
}

// Intersection observer untuk section lain
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 });

// Fungsi render testimoni dari Google Sheets CSV
async function renderTestimoni() {
    const innerContainer = document.getElementById('testimoni-inner');
    if (!innerContainer) return;

    innerContainer.innerHTML = '<p class="text-emerald-900/60 italic">Memuat testimoni...</p>';

    const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSuGN7UhxF0M-MFtFYe7KqoVwn73gfWi16ntIyvhmzYP118I9m74nh93W8OJjaO1q-p4Jl54DqmeXmZ/pub?output=csv';

    try {
        const response = await fetch(CSV_URL);
        const csvText = await response.text();

        Papa.parse(csvText, {
            header: true,
            transformHeader: header => header.trim().toLowerCase(), // --- PENAMBAHAN PENTING INI ---
            complete: function(results) {
                const entries = results.data || [];

                if (entries.length === 0) {
                    innerContainer.innerHTML = '<p class="text-emerald-900/60 italic">Belum ada testimoni. Jadilah yang pertama!</p>';
                    return;
                }

                let html = '';
                entries.reverse().forEach(entry => {
                    const approved = entry.approved || ''; 
                    if (approved.toLowerCase() === 'yes') { 
                        const nama = entry.nama || 'Anonim';
                        // LOGIKA PENGAMBILAN DATA WILAYAH/DOMISILI DIPERBARUI
                        // Mencari kolom domisili > wilayah > kota > nomorhp
                        const domisili = entry.domisili || entry.wilayah || entry.kota || entry.nomorhp || 'Tidak tersedia';
                        const levelagenstok = entry.levelagenstok || 'Non Agen Stok';
                        const testimoni = entry.testimoni || '';

                        html += `
                            <div class="testimoni-item">
                                <h4 class="serif italic text-xl md:text-2xl font-bold text-emerald-950">${nama}</h4>
                                <span class="block mb-2">${levelagenstok}</span>
                                <span class="block mb-2 font-semibold text-emerald-800">Dari ${domisili}</span>
                                <p class="text-emerald-900/70 leading-relaxed italic">"${testimoni}"</p>
                            </div>
                        `;
                    }
                });

                // Duplicate for seamless marquee loop
                innerContainer.innerHTML = html + html;

                // Add click toggle pause
                innerContainer.addEventListener('click', () => {
                    innerContainer.classList.toggle('paused');
                });
            }
        });
    } catch (error) {
        innerContainer.innerHTML = '<p class="text-emerald-900/60 italic">Gagal memuat testimoni. Silakan coba lagi nanti.</p>';
    }
}

window.onload = () => {
    initHeroAndNavReveal();  // Panggil fungsi animasi hero
    renderArchive();
    
    // Mulai observer
    document.querySelectorAll('.page-spread').forEach(s => observer.observe(s));
    
    // Listener search
    const searchInput = document.getElementById('searchInput');
    if(searchInput) {
        searchInput.oninput = (e) => renderArchive(e.target.value);
    }

    // Load testimoni dari sheets
    renderTestimoni();
};