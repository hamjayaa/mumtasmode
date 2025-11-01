// ===== tutorials array =====
const tutorials = [
  {
    title: 'Masuk ke MOS',
    desc: `
      <p>Ikuti langkah-langkah di bawah untuk <b>login</b> ke dashboard MOS</p>
      <ul class="mt-2 space-y-1">
        <li>Buka browser dan kunjungi mumtas.net</li>
        <li>Pilih menu Login</li>
        <li>Masukkan Nomor ID atau Email dan Password yang terdaftar dengan benar</li>
        <li>Klik tombol <b>Masuk</b>dan Anda akan diarahkan ke dashboard MOS</li>
      </ul>
    `,
    videoUrl: 'login2-2.mp4'
  },
  {
    title: 'Kartu Tanda Agen',
    desc: `
      <p>Untuk melihat status keagenan <b>pribadi</b> dan recruitment mitra otomatis</p>
      <ul class="mt-2 space-y-1">
        <li>Pilih menu Kartu Tanda Agen</li>
        <li>Ada QR Code untuk pendaftaran mitra baru (otomatis menjadi mitra langsung)</li>
        <li>Alternatif link yang bisa disalin untuk pendaftaran mitra jika calon mitra tidak bisa scan QR Code</li>
      </ul>
    `,
    videoUrl: 'kartu_tanda_agen.mp4'
  },
  {
    title: 'Cari Toko Agen',
    desc: `
      <p>Mencari Agen Stok MUMTAS berdasarkan alamat</p>
      <ul class="mt-2 space-y-1">
        <li>Klik pada bagian Cari Toko</li>
        <li>Isikan detail wilayah yang diinginkan</li>
        <li>Seluruh Agen Stok akan muncul berdasarkan wilayah yang dicari</li>
        <li>Bagi Agen Stok: Pastikan sudah mengatur Toko melalui menu <b>Pengelolaan Toko</b></li>
      </ul>
    `,
    videoUrl: 'cari_toko.mp4'
  },
  {
    title: 'Mumtas Wallet',
    desc: `
      <p>Bonus setiap bulan akan masuk ke Mumtas Wallet</p>
      <ul class="mt-2 space-y-1">
        <li>Klik tombol Ajukan Penarikan</li>
        <li>Isi nominal yang diinginkan, lalu klik Kirim</li>
        <li>Bonus yang diendapkan akan terakumulasi</li>
        <li>Minimal penarikan <b>Rp15.000</b></li>
        <li>Pastikan sudah mengisi data rekening bank dengan benar di menu Informasi Pribadi</li>
      </ul>
    `,
    videoUrl: 'mumtas_wallet.mp4'
  },
  {
    title: 'Profil',
    desc: `
      <p>Mengelola profil pengguna</p>
      <ul class="mt-2 space-y-1">
        <li>Untuk mengubah nama tampilan akun dan email cukup isi lalu klik Perbarui</li>
        <li>Memperbarui password untuk login ke MOS</li>
        <li>Pastikan email aktif karena berfungsi untuk reset password</li>
      </ul>
    `,
    videoUrl: 'profil.mp4'
  },
  {
    title: 'Informasi Pribadi',
    desc: `
      <p>Berisi informasi pribadi sesuai KTP dan informasi rekening bank</p>
      <ul class="mt-2 space-y-1">
        <li>Informasi pribadi harus sesuai dengan KTP</li>
        <li>Isikan rekening bank apabila belum diisi atau ubah jika ada perubahan</li>
        <li>Pastikan sudah benar, lalu klik Simpan</li>
      </ul>
    `,
    videoUrl: 'informasi_pribadi.mp4'
  },
  {
    title: 'Posting Penjualan',
    desc: `
      <p>Digunakan untuk melakukan transaksi penjualan sesuai dengan tipe transaksi yang dipilih.</p>
      <ul class="mt-2 space-y-1">
        <li>Pada Tipe Transaksi, pilih salah satu dari 3 tipe transaksi yang tersedia sesuai kebutuhan</li>
        <li>Pembelian Pribadi = TUPO; Penjualan ke Agen Stok = Distribusi Barang ke Agen Stok; Upgrade Level Agen Stok = Menaikkan level agen stok</li>
        <li>Masukkan Kode Agen pada kolom yang tersedia → klik Cari. Jika data benar, akan muncul kartu ID Agen di sebelah kanan.</li>
        <li>Pilih produk dari dropdown “Tambah Produk”. Sistem akan menampilkan stok tersedia. Masukkan jumlah yang diinginkan. Klik Tambah Produk</li>
        <li>Daftar produk yang ditambahkan akan tampil seperti keranjang belanja. Pastikan semua jumlah dan produk sudah benar.</li>
        <li>Klik Simpan untuk memproses transaksi.</li>
      </ul>
    `,
    videoUrl: 'posting_penjualan.mp4'
  },
  {
    title: 'Pemesanan Stok',
    desc: `
      <p>Digunakan oleh agen untuk melakukan aktivasi agen stok atau repeat order langsung ke pusat.</p>
      <ul class="mt-2 space-y-1">
        <li>Pilih produk lalu tentukan jumlah pembelian. Klik tombol Masukkan Keranjang</li>
        <li>Daftar produk akan muncul di panel Keranjang. Pastikan jumlah produk, total harga, dan total poin sudah benar. Setelah semua produk sesuai, klik Checkout</li>
        <li>Isi Alamat Pengiriman. Setelah mengisi alamat dengan benar, klik Ajukan Order</li>
        <li>Selanjutnya lakukan pembayaran & upload bukti transfer. Jika sudah klik Upload Bukti Pembayaran</li>
      </ul>
    `,
    videoUrl: 'https://res.cloudinary.com/doqzgozyt/video/upload/f_mp4,q_auto,vc_h264/v1761932849/pemesanan_stok_g0acbk.mp4'
  },
  {
    title: 'Pengelolaan Toko',
    desc: `
      <p>Digunakan oleh agen stok untuk mengisi dan memperbarui data toko mereka.</p>
      <ul class="mt-2 space-y-1">
        <li>Informasi ini nantinya akan tampil di menu Cari Agen Stok</li>
        <li>Isi dan lengkapi data toko, sehingga memudahkan member menemukan</li>
        <li>Pastikan semua terisi, lalu klik Simpan</li>
      </ul>
    `,
    videoUrl: 'pengelolaan_toko.mp4'
  },
  {
    title: 'Riwayat Pemesanan Stok',
    desc: `
      <p>Digunakan untuk melihat semua riwayat pesanan produk ke pusat.</p>
      <ul class="mt-2 space-y-1">
        <li>Sistem akan menampilkan daftar transaksi pemesanan yang pernah dilakukan</li>
        <li>Klik tombol Lihat Detail untuk membuka invoice secara lengkap.</li>
      </ul>
    `,
    videoUrl: 'riwayat.mp4'
  },
  {
    title: 'Stok Barang',
    desc: `
      <p>Berfungsi untuk menampilkan daftar seluruh produk beserta harga, poin, dan jumlah stok yang tersedia.</p>
      <ul class="mt-2 space-y-1">
        <li>Menampilkan daftar produk yang tersedia di akunmu dalam bentuk tabel</li>
        <li>Jika ada barang stok kosong dan kamu ingin menambah stok, lakukan pemesanan melalui menu Pemesanan Stok.</li>
        <li>Pastikan sudah benar, lalu klik Simpan</li>
      </ul>
    `,
    videoUrl: 'stok_barang.mp4'
  },
  {
    title: 'Transaksi',
    desc: `
      <p>Digunakan untuk melihat seluruh histori transaksi keluar dan masuk pada akun agen.</p>
      <ul class="mt-2 space-y-1">
        <li>Melalui halaman ini sistem akan menampilkan daftar semua transaksi</li>
        <li>Klik tombol Lihat detail di sisi kanan tabel untuk membuka informasi lengkap sebuah transaksi</li>
      </ul>
    `,
    videoUrl: 'https://res.cloudinary.com/doqzgozyt/video/upload/f_mp4,q_auto,vc_h264/v1761933146/transaksi_jn6rzd.mov'
  },
  {
    title: 'Laporan Bonus',
    desc: `
      <p>Digunakan untuk melihat seluruh riwayat dan perkembangan bonus agen berdasarkan periode bulanan</p>
      <ul class="mt-2 space-y-1">
        <li>Halaman akan menampilkan total bonus periode sebelumnya, proyeksi bonus bulan ini, dan daftar bonus dari berbagai periode</li>
        <li>Di bagian atas halaman terdapat dua kartu utama: Total Bonus Periode Lalu dan Proyeksi Bonus Bulan Ini</li>
        <li>Angka pada proyeksi bonus bersifat estimasi, dan dapat berubah sesuai progres hingga akhir bulan</li>
      </ul>
    `,
    videoUrl: 'laporan_bonus.mp4'
  },
  {
    title: 'Reward',
    desc: `
      <p>Menampilkan berbagai bonus reward agen berdasarkan akumulasi poin group</p>
      <ul class="mt-2 space-y-1">
        <li>Progress bar di bawah gambar menunjukkan seberapa dekat dengan target hadiah</li>
        <li>Setelah target tercapai, sistem akan menampilkan status bahwa reward bisa diajukan untuk pencairan</li>
      </ul>
    `,
    videoUrl: 'https://res.cloudinary.com/doqzgozyt/video/upload/f_mp4,q_auto,vc_h264/v1761931451/reward_i0u73u.mov'
  },
  {
    title: 'Group Sales Report',
    desc: `
      <p>Digunakan untuk melihat laporan poin group setiap periode</p>
      <ul class="mt-2 space-y-1">
        <li>Sistem akan menampilkan data tupo jaringan berdasarkan periode waktu tertentu</li>
        <li>Dapat mengganti periode dengan memilih rentang tanggal di bagian atas</li>
      </ul>
    `,
    videoUrl: 'group_sales_report-2.mp4'
  },
  {
    title: 'Purchase Maintain Report',
    desc: `
      <p>Digunakan untuk melihat detail aktivitas pembelanjaan jaringan (tupo)</p>
      <ul class="mt-2 space-y-1">
        <li>Menampilkan informasi lengkap tupo; tentang siapa yang melakukan pembelian, kepada siapa pembelian dilakukan, produk yang dibeli, serta waktu dan total poin yang dihasilkan</li>
        <li>Dapat mengganti periode dengan memilih rentang tanggal di bagian atas</li>
      </ul>
    `,
    videoUrl: 'https://res.cloudinary.com/doqzgozyt/video/upload/f_mp4,q_auto,vc_h264/v1761931427/purchase_dhbng1.mov'
  },
  {
    title: 'Agen Langsung',
    desc: `
      <p>Digunakan untuk melihat daftar agen atau mitra yang langsung berada di bawah jaringan kita (downline langsung)</p>
      <ul class="mt-2 space-y-1">
        <li>Halaman ini juga menjadi tempat untuk melakukan pendaftaran agen baru ke dalam jaringan</li>
        <li>Untuk menambahkan member baru ke jaringanmu, klik tombol Registrasi Agen Baru di atas</li>
        <li>Setelah diklik, sistem akan menampilkan formulir pendaftaran yang perlu diisi</li>
      </ul>
    `,
    videoUrl: 'agen_langsung.mp4'
  },
  {
    title: 'Registrasi Agen Baru',
    desc: `
      <p>Digunakan untuk menambahkan member baru ke dalam jaringan</p>
      <ul class="mt-2 space-y-1">
        <li>Formulir pendaftaran agen baru yang wajib diisi secara lengkap dan benar</li>
        <li>Untuk alasan privasi, foto diri di KTP boleh dicrop/ditutup</li>
        <li>Di bagian bawah terdapat kolom Backline, yaitu fitur untuk menentukan upline dari calon member baru</li>
        <li>Jika ingin mendaftarkan member langsung di bawah akunmu, pilih opsi Anda sendiri</li>
        <li>Setelah semua kolom diisi dengan benar; Klik tombol Buat untuk mendaftarkan agen baru</li>
      </ul>
    `,
    videoUrl: 'registrasi.mp4'
  },
  {
    title: 'Genealogi',
    desc: `
      <p>Digunakan untuk melihat struktur jaringan atau pohon keagenan</p>
      <ul class="mt-2 space-y-1">
        <li>Sistem akan menampilkan tampilan pohon jaringan (tree view) dengan nama dan ID setiap agen di bawah struktur keagenan</li>
        <li>Gunakan ikon segitiga kecil (▸) di samping nama agen untuk membuka atau menutup cabang jaringan di bawahnya</li>
        <li>Gunakan kolom Cari Agen di bagian atas tampilan genealogi untuk menemukan agen tertentu</li>
        <li>Klik salah satu nama agen, panel Data Detail di sisi kanan akan menampilkan informasi lengkap agen tersebut</li>
      </ul>
    `,
    videoUrl: 'genealogi-2.mp4'
  }
];

const rollSlider = document.getElementById('rollSlider');
const rollContainer = document.getElementById('rollContainer');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;
let videoElements = [];
let textTimelines = [];
let hasInitialized = false;

function randomizeBlobs(){
  const colors = ['#a855f7','#ec4899','#f97316','#84cc16','#3b82f6','#06b6d4','#f43f5e'];
  document.querySelectorAll('.blob').forEach(b=>{
    b.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    b.style.animationDuration = `${Math.floor(Math.random()*10)+25}s`;
  });
}

function wrapWords(text){
  return text.split(' ').map(w=>`<span style="display:inline-block;">${w}</span>`).join(' ');
}

function splitTextContent(element){
  let text = element.innerHTML;
  const parts = text.match(/<[^>]+>|[^<>\s]+/g) || [];
  let newContent = parts.map(part => `<span style="display: inline-block;">${part}</span>`).join(' ');
  element.innerHTML = newContent;
  return element.querySelectorAll('span');
}

function renderSlides(){
  rollSlider.innerHTML = '';
  videoElements = [];
  textTimelines = [];

  tutorials.forEach((t,i)=>{
    const slide = document.createElement('div');
    slide.className = 'roll-slide';
    const titleWords = wrapWords(t.title);
    const mediaHtml = `<video id="video-element-${i}" muted playsinline loop><source src="${t.videoUrl}" type="video/mp4"></video>`;

    slide.innerHTML = `
      <div class="slide-content-wrapper">
        <div class="w-full md:w-1/2 flex justify-center md:justify-end items-center px-4 md:px-10 md:py-0">
          <div class='video-container'>${mediaHtml}</div>
        </div>
        
        <div class="w-full md:w-1/2 flex justify-center md:justify-start items-center px-4 md:px-10 md:py-0 mt-8 md:mt-0">
        <div class="text-slide text-left">
            <h2 class='text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 text-white'>${titleWords}</h2>
            <div id="desc-content-${i}" class='text-base md:text-lg lg:text-xl text-slate-300 max-w-md'>${t.desc}</div>
          </div>
        </div>
      </div>`;

    rollSlider.appendChild(slide);

    const descContent = slide.querySelector(`#desc-content-${i}`);
    const titleSpans = slide.querySelectorAll('h2 span');
    
    descContent.querySelectorAll('p, li').forEach(el=>{ splitTextContent(el); });

    const paragraphs = [...descContent.children].filter(el => el.tagName === 'P');
    const listItems = descContent.querySelectorAll('ul > li');
    
    let allTextSpans = [...titleSpans];
    paragraphs.forEach(p => allTextSpans = allTextSpans.concat([...p.querySelectorAll('span')]));
    listItems.forEach(li => allTextSpans = allTextSpans.concat([...li.querySelectorAll('span')]));
    gsap.set(allTextSpans, { opacity:0, y:10 });
    gsap.set(listItems, { '--bScale': 0, '--bAlpha': 0, '--bY': 6 });

    const tl = gsap.timeline({ paused: true });
    tl.fromTo(titleSpans, {opacity:0, y:10}, {opacity:1, y:0, stagger:0.04, duration:0.18, ease:'power1.out', overwrite:true}, 0);
    paragraphs.forEach(p=>{
      const spans = p.querySelectorAll('span');
      tl.fromTo(spans, {opacity:0, y:10}, {opacity:1, y:0, stagger:0.04, duration:0.18, ease:'power1.out'}, '>-0.02');
    });
    listItems.forEach(li=>{
      const lineSpans = li.querySelectorAll('span');
      tl.fromTo(li, { '--bScale': 0, '--bAlpha': 0, '--bY': 6 }, { '--bScale': 1, '--bAlpha': 1, '--bY': 0, duration: 0.22, ease: 'power2.out' }, '>-0.02');
      tl.fromTo(lineSpans, { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.04, duration: 0.18, ease: 'power1.out' }, '<');
    });

    textTimelines[i] = tl;
    videoElements[i] = slide.querySelector(`#video-element-${i}`);
  });

  setTimeout(()=>{
    setActive(0);
    window.addEventListener('resize', ()=>setActive(currentIndex));
  }, 300);
}

function setActive(index){
  try{
    const total = tutorials.length;
    currentIndex = (index + total) % total;
    if(!rollSlider.children.length) return;

    const activeSlide = rollSlider.children[currentIndex];
    if(!activeSlide) return;

    const slideTop = activeSlide.offsetTop;
    let offset = -slideTop;
    if (!isFinite(offset)) offset = 0;

    gsap.to(rollSlider, { y: offset, duration:.8, ease:'power2.inOut' });

    Array.from(rollSlider.children).forEach((el, idx)=>{
      const isActive = idx===currentIndex;
      el.classList.toggle('active', isActive);

      if(isActive){
        el.scrollTop = 0;
      }

      if(textTimelines[idx]){
        if(isActive){
          textTimelines[idx].restart();
        }else{
          textTimelines[idx].progress(0).pause();
        }
      }

      const v = videoElements[idx];
      if(v){
        if(isActive){ v.play && v.play().catch(e=>{ if(e.name!=='AbortError') console.warn('[Video Autoplay]', e); }); }
        else { v.pause && v.pause(); v.currentTime = 0; }
      }
    });
  }catch(err){
    console.error('[setActive Error]', err);
  }
}

function initializeApp(){
  if(hasInitialized) return; hasInitialized = true;
  randomizeBlobs();
  renderSlides();
}

window.onload = () => { requestAnimationFrame(()=>requestAnimationFrame(initializeApp)); };
prev.addEventListener('click', ()=> setActive(currentIndex-1));
next.addEventListener('click', ()=> setActive(currentIndex+1));
