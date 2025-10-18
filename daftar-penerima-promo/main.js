// =============================================================
// DATA & STATE
// =============================================================
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT9_zU6E9FM_tBZ_APPRU11yCU9zEoCMjbyppEL0Z10I4JFr2RoKg5-6GB53WHOD7FZbXrKjdUdcs9z/pub?gid=0&single=true&output=csv";
let members = [];
let source = "seed";
let error = null;
let syncedAt = null;
let state = { searchQ: "", sortKey: "recent", monthKey: "All", promoKey: "All" };
const SEED_MEMBERS = [{ id: "MTS-001", name: "Aulia (Seed)", city: "Yogyakarta", promo: "Promo Peringkat", reward: "Termos Mumtas", qualifiedAt: "2025-09-10", rank: "Manager", photo: null, level_agen_stok: "Sub Stokis" }, { id: "MTS-004", name: "Nadia (Seed)", city: "Magelang", promo: "Promo Peringkat", reward: "LM 2 Juta", qualifiedAt: "2025-10-09", rank: "Gold Manager", photo: null, level_agen_stok: "Stokis" }, { id: "MTS-006", name: "Siti (Seed)", city: "Gunungkidul", promo: "Promo Agen Stok", reward: "iPad 7,5 Juta", qualifiedAt: "2025-09-12", rank: "Diamond Manager", photo: null, level_agen_stok: "Kantor Cabang" }, { id: "MTS-010", name: "Farah (Seed)", city: "Bantul", promo: "Promo Peringkat", reward: "LM 10 Juta", qualifiedAt: "2025-09-04", rank: "Crown Manager", photo: null, level_agen_stok: "Stokis" }, ];

// =============================================================
// HELPERS
// =============================================================
const MONTHS_ID = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const fmtMonthKey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
const toMonthLabelID = (key) => key === "All" ? "Semua Bulan" : `${MONTHS_ID[parseInt(key.split("-")[1], 10) - 1]} ${key.split("-")[0]}`;
const formatDateID = (dateStr) => { const d = new Date(dateStr); return isNaN(d.getTime()) ? dateStr : `${d.getDate()} ${MONTHS_ID[d.getMonth()]} ${d.getFullYear()}`; };
const initials = (name) => (name || "").trim().split(/\s+/).filter(Boolean).map((s) => s[0]).join("").slice(0, 2).toUpperCase();
function rankIcon(rank) { const r = (rank || "").toLowerCase(); let i = 'Star'; if (r.includes("loyal")) i = 'Medal'; else if (r.includes("crown")) i = 'Crown'; else if (r.includes("diamond")) i = 'Gem'; else if (r.includes("gold")) i = 'Cuboid'; return `<i data-lucide="${i}" class="h-4 w-4"></i>`; }
function parseCSV(text) { const rows = []; let row = []; let cell = ""; let inQuotes = false; for (let i = 0; i < text.length; i++) { const ch = text[i]; const next = text[i + 1]; if (ch === '"') { if (inQuotes && next === '"') { cell += '"'; i++; } else { inQuotes = !inQuotes; } } else if (ch === "," && !inQuotes) { row.push(cell); cell = ""; } else if ((ch === "\n" || ch === "\r") && !inQuotes) { if (cell !== "" || row.length) { row.push(cell); cell = ""; } if (row.length) { rows.push(row); row = []; } if (ch === "\r" && next === "\n") i++; } else { cell += ch; } } if (cell !== "" || row.length) row.push(cell); if (row.length) rows.push(row); return rows.map((r) => r.map((c) => c.replace(/^\uFEFF/, "").trim())); }

// =============================================================
// DATA FETCHING
// =============================================================
async function fetchData() {
    try {
        error = null;
        const url = `${SHEET_CSV_URL}&_=${new Date().getTime()}`;
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
        const text = await res.text();
        const rows = parseCSV(text).filter((r) => r.length && r.some(Boolean));
        if (rows.length <= 1) throw new Error("CSV kosong atau hanya header");
        const header = rows[0].map((h) => h.toLowerCase().trim().replace(/\s+/g, '_'));
        const hIndex = (...aliases) => header.findIndex((x) => aliases.map(a => a.toLowerCase().replace(/\s+/g, '_')).includes(x));
        const idx = { id: hIndex("id"), name: hIndex("name", "nama"), city: hIndex("city", "kota"), promo: hIndex("promo"), reward: hIndex("reward", "hadiah"), qualifiedAt: hIndex("qualifiedat", "qualified_at", "tanggal"), rank: hIndex("rank", "peringkat"), photo: hIndex("photo", "foto"), level_agen_stok: hIndex("level_agen_stok") };
        const missing = Object.entries(idx).filter(([k, v]) => ["id", "name", "qualifiedAt"].includes(k) && v === -1).map(([k]) => k);
        if (missing.length) throw new Error(`Kolom wajib hilang: ${missing.join(", ")}`);
        
        // == PERUBAHAN 1: Menambahkan `_uniqueRowId` ==
        // Kita tambahkan 'index' (0, 1, 2, ...) sebagai ID unik internal
        members = rows.slice(1).map((cols, index) => ({ 
            _uniqueRowId: index, // Ini ID unik barunya
            id: cols[idx.id] || "", 
            name: cols[idx.name] || "", 
            city: cols[idx.city] || "", 
            promo: cols[idx.promo] || "", 
            reward: cols[idx.reward] || "", 
            qualifiedAt: cols[idx.qualifiedAt] || "", 
            rank: cols[idx.rank] || "Manager", 
            photo: cols[idx.photo] || undefined, 
            level_agen_stok: idx.level_agen_stok !== -1 ? cols[idx.level_agen_stok] : "Sub Stokis" 
        })).filter(m => m.id && m.name);
        
        members.sort((a, b) => +new Date(b.qualifiedAt) - +new Date(a.qualifiedAt));
        source = "sheet";
        syncedAt = new Date().toLocaleString("id-ID", { dateStyle: 'medium', timeStyle: 'short' });
    } catch (e) {
        console.error("CSV Import Error:", e);
        error = e.message || "Gagal memuat CSV";
        source = "seed";
        members = SEED_MEMBERS;
    }
    renderUI();
}

// =============================================================
// RENDER UI & FILTERING
// =============================================================
function renderMemberCard(m) {
    const avatar = m.photo ? `<img src="${m.photo}" alt="${m.name}" class="h-20 w-20 shrink-0 rounded-xl object-cover"/>` : `<div class="h-20 w-20 shrink-0 rounded-xl bg-gradient-to-br from-[#a3b18a] via-[#588157] to-[#3a5a40] dark:from-yellow-500 dark:to-amber-600 text-white dark:text-black grid place-items-center text-lg font-extrabold">${initials(m.name)}</div>`;
    const rankBadge = m.rank ? `<div class="mt-1 inline-flex items-center gap-1 rounded-full border border-[#a3b18a] dark:border-yellow-600/50 bg-[#dde6d6] dark:bg-yellow-900/30 px-2 py-0.5 text-[11px] font-bold tracking-wide text-[#2f4f3a] dark:text-yellow-300">${rankIcon(m.rank)} <span class="uppercase">${m.rank}</span></div>` : '';
    
    // == PERUBAHAN 2: `openModal` sekarang pakai `m._uniqueRowId` ==
    // Kita gak lagi pakai m.id, tapi pakai ID unik baris
    return `<div onclick="openModal(${m._uniqueRowId})" class="member-card relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-[#dce6d8] dark:border-gray-700 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all opacity-0 translate-y-4"><div class="absolute right-[-40px] top-[15px] rotate-45"><div class="bg-gradient-to-r from-[#a3b18a] to-[#588157] dark:from-yellow-500 dark:to-amber-600 text-white dark:text-black text-[10px] font-extrabold px-10 py-1 shadow">QUALIFIED</div></div><div class="flex items-center gap-4">${avatar}<div class="min-w-0"><div class="text-xs font-medium text-[#6b8f79] dark:text-gray-400">${m.id}</div><div class="text-base font-semibold text-[#1b2b22] dark:text-white truncate">${m.name}</div>${rankBadge}<div class="mt-1 text-xs text-[#4c6b57] dark:text-gray-400">${m.city} • <span class="font-medium text-[#2f4f3a] dark:text-gray-300">${m.promo}</span></div></div></div><div class="mt-4 rounded-xl border border-[#dce6d8] dark:border-gray-700 bg-[#f9faf9] dark:bg-zinc-800 p-4"><div class="flex flex-wrap items-center gap-2 text-sm text-[#1b2b22] dark:text-gray-200"><i data-lucide="Trophy" class="h-4 w-4"></i><span>Hadiah:</span><span class="font-semibold">${m.reward}</span></div></div></div>`;
}

function getFilteredMembers() { let list = [...members]; const needle = state.searchQ.toLowerCase(); if (needle) list = list.filter(m => [m.name, m.city, m.rank, m.reward, m.promo, m.id, m.level_agen_stok].some(x => String(x).toLowerCase().includes(needle))); if (state.promoKey !== "All") list = list.filter(m => m.promo === state.promoKey); if (state.monthKey !== "All") list = list.filter(m => fmtMonthKey(new Date(m.qualifiedAt)) === state.monthKey); if (state.sortKey === "name") list.sort((a, b) => a.name.localeCompare(b.name)); else list.sort((a, b) => +new Date(b.qualifiedAt) - +new Date(a.qualifiedAt)); return list; }
function renderMemberGrid() { const grid = document.getElementById('member-grid'); const noResults = document.getElementById('no-results'); const totalQualified = document.getElementById('total-qualified'); const filteredMembers = getFilteredMembers(); totalQualified.textContent = filteredMembers.length; if (filteredMembers.length === 0) { grid.innerHTML = ''; noResults.classList.remove('hidden'); } else { noResults.classList.add('hidden'); grid.innerHTML = filteredMembers.map(renderMemberCard).join(''); lucide.createIcons(); document.querySelectorAll('.member-card').forEach((card, i) => { card.offsetHeight; setTimeout(() => { card.style.transition = 'opacity 0.35s, transform 0.35s'; card.classList.remove('opacity-0', 'translate-y-4'); }, 50 + i * 20); }); } }
function renderControls() { const ctr = document.getElementById('controls-container'); const tabs = document.getElementById('promo-tabs'); const promoSet = new Set(members.map(m => m.promo)); const monthSet = new Set(members.map(m => fmtMonthKey(new Date(m.qualifiedAt)))); const promoList = ["All", ...Array.from(promoSet)]; const monthList = ["All", ...Array.from(monthSet).sort().reverse()]; ctr.innerHTML = `<div class="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-3"><label class="relative sm:col-span-2"><i data-lucide="Search" class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6b8f79] dark:text-gray-400"></i><input id="search-input" value="${state.searchQ}" oninput="handleSearch(this.value)" placeholder="Cari nama, kota, hadiah..." class="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-[#dce6d8] dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]/50 dark:focus:ring-yellow-500/50"/></label><label class="relative"><i data-lucide="Calendar" class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6b8f79] dark:text-gray-400"></i><select onchange="handleMonthChange(this.value)" class="w-full appearance-none pl-10 pr-8 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-[#dce6d8] dark:border-gray-700 focus:outline-none">${monthList.map(m => `<option value="${m}" ${state.monthKey === m ? 'selected' : ''}>${toMonthLabelID(m)}</option>`).join('')}</select></label><label class="relative"><i data-lucide="SortAsc" class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6b8f79] dark:text-gray-400"></i><select onchange="handleSortChange(this.value)" class="w-full appearance-none pl-10 pr-8 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-[#dce6d8] dark:border-gray-700 focus:outline-none"><option value="recent" ${state.sortKey === 'recent' ? 'selected' : ''}>Terbaru</option><option value="name" ${state.sortKey === 'name' ? 'selected' : ''}>Nama (A–Z)</option></select></label></div>`; tabs.innerHTML = promoList.map(p => `<button onclick="handlePromoChange('${p}')" class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition-colors ${state.promoKey === p ? 'border-[#3a5a40] dark:border-yellow-500 bg-[#dde6d6] dark:bg-yellow-500/20 text-[#1b2b22] dark:text-yellow-200' : 'border-[#dce6d8] dark:border-gray-700 bg-white dark:bg-gray-800 text-[#2f4f3a] dark:text-gray-300 hover:bg-[#f0f4ef] dark:hover:bg-gray-700'}"><i data-lucide="Tags" class="h-4 w-4"></i><span>${p}</span></button>`).join(''); lucide.createIcons(); }
function renderInfoBar() { document.getElementById('info-bar').innerHTML = `<div class="rounded-xl border border-[#dce6d8] dark:border-gray-800 bg-white/70 dark:bg-black/50 backdrop-blur-sm px-4 py-2 text-xs text-[#2f4f3a] dark:text-gray-300">Sumber data: <b>${source === "sheet" ? "Google Sheet (live)" : "Data Internal (Seed)"}</b>${syncedAt ? ` • Sinkron: ${syncedAt}` : ""}${error ? `<span class="ml-2 text-[#a63a3a] dark:text-red-400 font-semibold">(Error: ${error})</span>` : ''}</div>`; }
function renderUI() { renderInfoBar(); renderControls(); renderMemberGrid(); }

// =============================================================
// MODAL LOGIC
// =============================================================
const uiModal = { overlay: document.getElementById('modal-overlay'), container: document.getElementById('modal-container') };

function renderModalContent(member, styleClass) {
    const photoContainerClass = member.photo ? 'border-4 border-white/20' : '';
    const photoHTML = member.photo ? `<img src="${member.photo}" alt="${member.name}"/>` : '';
    const exclusiveEffectHTML = styleClass === 'rank-style-loyal-manager' ? '<div class="mesh-gradient-blob"></div>' : '';

    return `<div class="relative rounded-2xl p-6 text-center shadow-xl text-white shimmer-border-effect ${styleClass}" style="background-color: var(--rank-bg-color);">
        <div class="effects-container">
            <div class="stars"></div>
            <div class="stars stars-2"></div> <div class="shimmer"></div>
            <div class="hero-twinkles"></div>
            ${exclusiveEffectHTML}
        </div>
        <div class="relative z-10"><div id="modal-photo-container" class="mx-auto h-24 w-24 rounded-xl shadow-md bg-transparent ${photoContainerClass}">${photoHTML}</div><h3 id="modal-name" class="mt-4 text-2xl font-extrabold text-white">${member.name}</h3><div id="modal-rank" class="mt-1 text-sm font-bold uppercase tracking-wider" style="color: var(--rank-text-color);">${member.rank}</div><div id="modal-level-stok" class="mt-1 text-xs font-semibold uppercase text-gray-400">${member.level_agen_stok}</div><div id="modal-details" class="mt-6 bg-black/30 rounded-xl p-4 border border-white/10"><p class="text-sm text-gray-300">Berhasil meraih hadiah promo:</p><p id="modal-reward" class="text-lg font-bold" style="color: var(--rank-text-color);">${member.reward}</p><p class="mt-2 text-xs text-gray-400">Qualified pada <span id="modal-date" class="font-semibold text-gray-200">${formatDateID(member.qualifiedAt)}</span></p></div></div></div>`;
}

// == PERUBAHAN 3: `openModal` sekarang menerima `uniqueRowId` ==
// Kita ganti nama argumennya dari 'memberId' jadi 'uniqueRowId'
window.openModal = function(uniqueRowId) { 
    // Dan kita cari berdasarkan '_uniqueRowId'
    const member = members.find(m => m._uniqueRowId === uniqueRowId); 
    if (!member) return; 
    let style = 'default'; 
    const promoType = (member.promo || "").toLowerCase(); 
    if (promoType.includes('stok') || promoType.includes('agen')) { 
        const level = (member.level_agen_stok || "").toLowerCase().replace(/\s+/g, '-'); style = level; 
    } else { 
        const rank = (member.rank || "").toLowerCase(); 
        if (rank.includes('loyal')) style = 'loyal-manager'; 
        else if (rank.includes('crown')) style = 'crown'; 
        else if (rank.includes('diamond')) style = 'diamond'; 
        else if (rank.includes('gold')) style = 'gold'; 
        else if (rank.includes('manager')) style = 'manager'; 
    } 
    const styleClass = `rank-style-${style}`; 
    uiModal.container.innerHTML = renderModalContent(member, styleClass); 
    lucide.createIcons(); 
    uiModal.overlay.classList.add('visible'); 
};
function closeModal() { uiModal.overlay.classList.remove('visible'); setTimeout(() => { uiModal.container.innerHTML = ''; }, 300); }

// =============================================================
// DARK MODE LOGIC
// =============================================================
const darkModeToggle = document.getElementById('dark-mode-toggle');
const sunIcon = `<i data-lucide="sun" class="h-5 w-5"></i>`;
const moonIcon = `<i data-lucide="moon" class="h-5 w-5"></i>`;

function applyTheme(isDark) {
    const heroSpan = document.getElementById('hero-span');
    const heroH1 = document.getElementById('hero-h1');
    if (isDark) {
        document.documentElement.classList.add('dark');
        darkModeToggle.innerHTML = sunIcon;
        heroSpan.style.backgroundImage = 'linear-gradient(270deg, #ca8a04, #f59e0b, #fcd34d, #eab308, #ca8a04)';
        heroH1.classList.remove('text-[#2f4f3a]');
        heroH1.classList.add('dark:text-yellow-400');
    } else {
        document.documentElement.classList.remove('dark');
        darkModeToggle.innerHTML = moonIcon;
        heroSpan.style.backgroundImage = 'linear-gradient(270deg, #2f4f3a, #588157, #a3b18a, #3a5a40, #588157)';
        heroH1.classList.add('text-[#2f4f3a]');
        heroH1.classList.remove('dark:text-yellow-400');
    }
    lucide.createIcons();
}

function toggleDarkMode() {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDarkMode);
    applyTheme(isDarkMode);
}

// =============================================================
// EVENT HANDLERS & INITIALIZER
// =============================================================
window.handleSearch = (value) => { state.searchQ = value; renderMemberGrid(); };
window.handleMonthChange = (value) => { state.monthKey = value; renderMemberGrid(); renderControls(); };
window.handleSortChange = (value) => { state.sortKey = value; renderMemberGrid(); renderControls(); };
window.handlePromoChange = (promo) => { state.promoKey = promo; renderControls(); renderMemberGrid(); };
function runHeroAnimation() { const h1=document.getElementById('hero-h1'),s=document.getElementById('hero-span'),p=document.getElementById('hero-p'); if(!h1||!s||!p)return; h1.style.transition='opacity 1s ease-out,transform 1s ease-out'; s.style.transition='opacity .8s,transform .8s'; p.style.transition='opacity .7s,transform .7s'; setTimeout(()=>{h1.style.opacity=1;h1.style.transform='translateY(0) scale(1)'},50); setTimeout(()=>{s.style.opacity=1;s.style.transform='translateY(0)'},250); setTimeout(()=>{p.style.opacity=1;p.style.transform='translateY(0)'},550); }

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    applyTheme(savedTheme);
    darkModeToggle.addEventListener('click', toggleDarkMode);
    uiModal.overlay.addEventListener('click', (e) => { if (e.target === uiModal.overlay) closeModal(); });
    runHeroAnimation();
    fetchData();
});
