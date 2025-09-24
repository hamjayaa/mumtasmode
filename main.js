// =====================================
// DATA KONFIGURASI
// =====================================
const HERO_IMAGES = [
  "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630901/COLAGEN_MIE_hkawcz.png",
  "https://res.cloudinary.com/doqzgozyt/image/upload/v1758520868/Gingerissimo_Botol_gbzm0e.png?q=80&w=1600&auto=format&fit-crop",
  "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630902/radix_st8ncy.png",
];
const PRODUCT_LIST = [
  { name: "Kopi Radix Jumbo", desc: "Kopi herbal 7 akar, praktis dan berkhasiat.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758607885/Gemini_Generated_Image_lacm82lacm82lacm_mc8mvs.png" },
  { name: "Susu Kambing NGM", desc: "Susu kambing etawa dengan gula aren, sehat dan nikmat.", img: "hhttps://res.cloudinary.com/doqzgozyt/image/upload/v1758633751/Gemini_Generated_Image_no58b3no58b3no58_gnueme.png" },
  { name: "Sehat Ayu CicaRosella Serum", desc: "Serum wajah menenangkan dengan Centella & Rose.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630414/Gemini_Generated_Image_o5rrmzo5rrmzo5rr_ydrjzh.png" },
  { name: "Mumtas Mie - Moringa", desc: "Mie mocaf fungsional dengan ekstrak daun kelor.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758629447/Gemini_Generated_Image_in7tavin7tavin7t_hqwkfs.png" },
  { name: "Mumtazzio Gingerissimo", desc: "Minuman jahe merah pilihan, praktis untuk kehangatan.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758520868/Gingerissimo_Botol_gbzm0e.png" },
  { name: "Minyak Herba Mumtas", desc: "Minyak gosok serbaguna untuk pijat dan relaksasi.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758605999/Gemini_Generated_Image_l7t4lyl7t4lyl7t4_wbohye.png" }
];
const GALLERY_IMAGES = [
  "https://res.cloudinary.com/doqzgozyt/image/upload/v1758520870/Madu_Multiflora_zuyyj3.png",
  "https://res.cloudinary.com/doqzgozyt/image/upload/v1758520871/Shampoo_oxj12p.png",
  "https://res.cloudinary.com/doqzgozyt/image/upload/v1758520870/Body_Wash_axx7su.png",
  "https://res.cloudinary.com/doqzgozyt/image/upload/v1758520869/Gamin_Gathuk_lmzvyg.png",
];
const GALLERY_IMAGES_2 = [
  "https://res.cloudinary.com/doqzgozyt/image/upload/v1758520868/Gingerissimo_Botol_gbzm0e.png",
  "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630144/Gemini_Generated_Image_zfxj4kzfxj4kzfxj_mdk9uv.png",
  "https://res.cloudinary.com/doqzgozyt/image/upload/v1758607885/Gemini_Generated_Image_lacm82lacm82lacm_mc8mvs.png",
  "https://res.cloudinary.com/doqzgozyt/image/upload/v1758509762/Gemini_Generated_Image_b1c719b1c719b1c7_om3vqm.png",
];
const ALL_PRODUCTS = [
  { code: "NOS-003", name: "Natura Oil Squa", category: "Herbal Care", short: "Minyak squalene alami untuk kulit dan sendi.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_ec93u5ec93u5ec93_xn3hvz.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_ec93u5ec93u5ec93_xn3hvz.png"], priceAgent: 150000, priceConsumer: 175000, points: 20, longDesc: { manfaat: `<p>Dukung kesehatan kulit dan sendi dari dalam. Membantu menjaga kelembaban kulit, serta meredakan nyeri dan peradangan pada sendi.</p>`, komposisi: `<p>Terbuat dari squalene alami yang diekstrak dari minyak zaitun. Kaya akan antioksidan dan vitamin E.</p>`, penyajian: `<p>Untuk konsumsi: Minum 2-3 tetes setiap hari atau sesuai anjuran. Untuk pemakaian luar: Oleskan secukupnya pada area kulit atau sendi yang membutuhkan.</p>` } },
  { code: "SHC-012", name: "Natura Shark Cartilage", category: "Herbal Care", short: "Suplemen tulang rawan hiu untuk kesehatan sendi.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758629479/Gemini_Generated_Image_tx37qqtx37qqtx37_orzuzx.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758629479/Gemini_Generated_Image_tx37qqtx37qqtx37_orzuzx.png"], priceAgent: 150000, priceConsumer: 175000, points: 50, longDesc: { manfaat: `<p>Membantu menjaga kesehatan persendian dan tulang rawan. Mengandung nutrisi alami untuk mengurangi peradangan dan nyeri sendi.</p>`, komposisi: `<p>Ekstrak tulang rawan hiu murni yang kaya akan kondroitin dan glukosamin. Kapsul herbal yang mudah dicerna.</p>`, penyajian: `<p>Minum 2 kapsul setiap hari setelah makan, atau sesuai anjuran profesional kesehatan.</p>` } },
  { code: "GMK-013", name: "Gamin Gathuk", category: "Herbal Care", short: "Ramuan herbal untuk stamina pria.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758520869/Gamin_Gathuk_lmzvyg.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758520869/Gamin_Gathuk_lmzvyg.png"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Membantu meningkatkan stamina, vitalitas, dan energi bagi pria dewasa. Terbuat dari bahan-bahan alami tanpa efek samping.</p>`, komposisi: `<p>Ramuan tradisional dari ekstrak pasak bumi, purwaceng, dan bahan herbal pilihan lainnya.</p>`, penyajian: `<p>Minum 1 kapsul setiap hari, atau 2 kapsul 1-2 jam sebelum beraktivitas. Ikuti petunjuk pada kemasan.</p>` } },
  { code: "SKA-014", name: "Sari Kurma Angkak", category: "Herbal Care", short: "Sari kurma dengan angkak, penambah trombosit.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_qyqyraqyqyraqyqy_tpjews.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_qyqyraqyqyraqyqy_tpjews.png"], priceAgent: 45000, priceConsumer: 55000, points: 10, longDesc: { manfaat: `<p>Sari kurma yang diperkaya angkak, efektif untuk meningkatkan trombosit. Cocok dikonsumsi saat masa pemulihan demam berdarah atau setelah sakit.</p>`, komposisi: `<p>Sari kurma alami dan ekstrak angkak, diolah secara higienis tanpa tambahan bahan pengawet.</p>`, penyajian: `<p>Minum 2 sendok makan, 2-3 kali sehari. Bisa diminum langsung atau dicampur dengan air hangat.</p>` } },
  { code: "MBM-016", name: "Minyak Bidara Mumtas", category: "Herbal Care", short: "Minyak multifungsi dengan ekstrak bidara.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627659/Gemini_Generated_Image_ruc0frruc0frruc0_oq0ul5.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627659/Gemini_Generated_Image_ruc0frruc0frruc0_oq0ul5.png"], priceAgent: 30000, priceConsumer: 35000, points: 5, longDesc: { manfaat: `<p>Minyak multifungsi dengan aroma bidara yang menenangkan. Biasa digunakan untuk relaksasi dan pijat. Juga dipercaya memiliki manfaat spiritual.</p>`, komposisi: `<p>Minyak kelapa, ekstrak daun bidara, dan minyak esensial lainnya.</p>`, penyajian: `<p>Oleskan secukupnya pada telapak tangan dan pijat perlahan ke seluruh tubuh atau area yang membutuhkan.</p>` } },
  { code: "MTM-018", name: "Minyak Telon Mumtas", category: "Herbal Care", short: "Minyak telon keluarga.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_tn3d3ptn3d3ptn3d_atnmmd.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_tn3d3ptn3d3ptn3d_atnmmd.png"], priceAgent: 25000, priceConsumer: 30000, points: 5, longDesc: { manfaat: `<p>Memberikan rasa hangat yang nyaman pada tubuh bayi dan seluruh keluarga. Meredakan kembung dan mencegah gigitan nyamuk.</p>`, komposisi: `<p>Terbuat dari campuran minyak kayu putih, minyak adas, dan minyak kelapa alami.</p>`, penyajian: `<p>Oleskan secukupnya pada dada, perut, punggung, atau telapak kaki setelah mandi. Hindari area mata.</p>` } },
  { code: "MMM-019", name: "Madu Multiflora Mumtas", category: "Herbal Care", short: "Madu murni dari berbagai nektar bunga.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_lw4h50lw4h50lw4h_yli9zo.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_lw4h50lw4h50lw4h_yli9zo.png", "https://res.cloudinary.com/doqzgozyt/image/upload/v1758520870/Madu_Multiflora_zuyyj3.png"], priceAgent: 90000, priceConsumer: 110000, points: 20, longDesc: { manfaat: `<p>Madu murni multiflora dengan rasa manis alami. Kaya akan vitamin dan mineral untuk menjaga daya tahan tubuh dan meningkatkan energi.</p>`, komposisi: `<p>Madu murni dari nektar berbagai jenis bunga, diproses secara alami tanpa pemanasan berlebihan.</p>`, penyajian: `<p>Minum 1-2 sendok makan setiap hari, bisa dicampur dengan air hangat atau dikonsumsi langsung.</p>` } },
  { code: "ANR-021", name: "Antirac", category: "Herbal Care", short: "Suplemen herbal untuk membantu masalah lambung.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758633751/Gemini_Generated_Image_no58b3no58b3no58_gnueme.png", imgs: ["https://source.unsplash.com/random/1600x1600/?herbal,stomach"], priceAgent: 150000, priceConsumer: 175000, points: 30, longDesc: { manfaat: `<p>Membantu meredakan gejala asam lambung, maag, dan gangguan pencernaan lainnya. Bekerja efektif untuk menenangkan lambung yang iritasi.</p>`, komposisi: `<p>Terbuat dari ekstrak herbal alami seperti kunyit, temulawak, dan jahe yang dipercaya baik untuk kesehatan lambung.</p>`, penyajian: `<p>Minum 2 kapsul, 3 kali sehari setelah makan, atau sesuai anjuran profesional kesehatan.</p>` } },
  { code: "SJD-022", name: "SJ-2", category: "Herbal Care", short: "Suplemen herbal untuk kesehatan hati.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627657/Gemini_Generated_Image_gi4410gi4410gi44_bskif9.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627657/Gemini_Generated_Image_gi4410gi4410gi44_bskif9.png"], priceAgent: 150000, priceConsumer: 175000, points: 30, longDesc: { manfaat: `<p>Membantu menjaga fungsi hati dan mendetoksifikasi tubuh. Efektif untuk menjaga kesehatan organ vital dan meningkatkan metabolisme.</p>`, komposisi: `<p>Kombinasi ekstrak herbal tradisional seperti sambiloto, meniran, dan temulawak yang sudah teruji khasiatnya.</p>`, penyajian: `<p>Minum 2 kapsul, 3 kali sehari setelah makan. Dianjurkan konsultasi dengan profesional kesehatan sebelum konsumsi.</p>` } },
  { code: "EBM-023", name: "Elbuma", category: "Herbal Care", short: "Suplemen herbal dari ekstrak cacing.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758633751/Gemini_Generated_Image_no58b3no58b3no58_gnueme.png", imgs: ["https://source.unsplash.com/random/1600x1600/?cacing,extract"], priceAgent: 75000, priceConsumer: 100000, points: 20, longDesc: { manfaat: `<p>Membantu mengatasi demam dan tifus, serta melancarkan sirkulasi darah. Efektif sebagai terapi pendukung untuk berbagai penyakit.</p>`, komposisi: `<p>Ekstrak cacing Lumbricus rubellus yang kaya protein dan nutrisi penting untuk pemulihan tubuh.</p>`, penyajian: `<p>Minum 2 kapsul, 3 kali sehari. Untuk anak-anak, sesuaikan dosis atau konsultasi dengan profesional.</p>` } },
  { code: "RSO-024", name: "Rosso", category: "Herbal Care", short: "Ramuan herbal untuk melancarkan sirkulasi darah.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758617027/Gemini_Generated_Image_jpwil4jpwil4jpwi_ne8on4.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758617027/Gemini_Generated_Image_jpwil4jpwil4jpwi_ne8on4.png"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Membantu melancarkan sirkulasi darah dan menjaga kesehatan jantung. Mengurangi risiko stroke dan tekanan darah tinggi.</p>`, komposisi: `<p>Ramuan dari bahan alami seperti bawang putih, jahe, dan ekstrak daun dewa yang berkhasiat.</p>`, penyajian: `<p>Minum 2 kapsul, 2 kali sehari setelah makan. Tidak disarankan untuk penderita hipotensi.</p>` } },
  { code: "BSV-025", name: "Best-V", category: "Herbal Care", short: "Herbal untuk menjaga kesehatan mata.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758617028/Gemini_Generated_Image_4m8tfn4m8tfn4m8t_fckf9r.png", imgs: ["https://source.unsplash.com/random/1600x1600/?eye,health"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Membantu menjaga kesehatan mata dan mengatasi masalah mata lelah akibat paparan layar. Kaya akan vitamin A dan antioksidan.</p>`, komposisi: `<p>Ekstrak bilberry, wortel, dan daun kelor yang kaya vitamin dan mineral penting untuk mata.</p>`, penyajian: `<p>Minum 2 kapsul, 2 kali sehari setelah makan. Cocok untuk Anda yang sering berhadapan dengan gadget.</p>` } },
  { code: "LTG-026", name: "Langtugin", category: "Herbal Care", short: "Herbal untuk meredakan nyeri sendi dan asam urat.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?joint,pain"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Membantu meredakan nyeri sendi, pegal linu, dan mengurangi kadar asam urat. Bekerja secara alami tanpa efek samping.</p>`, komposisi: `<p>Kombinasi ekstrak herbal seperti jahe merah, temulawak, dan sidaguri yang telah digunakan secara turun-temurun.</p>`, penyajian: `<p>Minum 2 kapsul, 3 kali sehari setelah makan. Untuk hasil optimal, imbangi dengan pola makan sehat.</p>` } },
  { code: "SLZ-027", name: "Silangzing", category: "Herbal Care", short: "Herbal untuk meredakan batuk dan gangguan pernapasan.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?cough,remedy"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Membantu meredakan batuk kering maupun berdahak, serta melegakan pernapasan. Cocok untuk penderita asma dan bronkitis.</p>`, komposisi: `<p>Terbuat dari ekstrak daun sirih, jahe, dan kencur yang berkhasiat sebagai ekspektoran alami.</p>`, penyajian: `<p>Minum 1-2 sendok makan, 3 kali sehari. Bisa dicampur dengan air hangat. Cocok untuk dewasa dan anak-anak.</p>` } },
  { code: "CMV-028", name: "Curmaval", category: "Herbal Care", short: "Suplemen herbal untuk membantu masalah pencernaan.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627659/Gemini_Generated_Image_u0ku9qu0ku9qu0ku_gbyjsm.png", imgs: ["https://source.unsplash.com/random/1600x1600/?digestion"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Membantu menjaga kesehatan pencernaan, meredakan kembung, dan menormalkan kerja usus. Efektif untuk mengatasi sembelit dan diare.</p>`, komposisi: `<p>Ekstrak kunyit, temulawak, dan bahan herbal lain yang dikenal baik untuk sistem pencernaan.</p>`, penyajian: `<p>Minum 2 kapsul, 3 kali sehari setelah makan. Dianjurkan minum air putih yang cukup.</p>` } },
  { code: "ZCV-029", name: "ZozCov", category: "Herbal Care", short: "Herbal untuk meningkatkan kekebalan tubuh.", img: "https://source.unsplash.com/random/1200x1200/?immunity,booster", imgs: ["https://source.unsplash.com/random/1600x1600/?immunity,booster"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Formula khusus untuk meningkatkan kekebalan tubuh dan menjaga kesehatan saat musim pancaroba. Mengurangi risiko terpapar virus dan bakteri.</p>`, komposisi: `<p>Ekstrak bawang putih, jahe, madu, dan lemon yang kaya akan vitamin C dan antioksidan.</p>`, penyajian: `<p>Minum 1 sendok teh, 2 kali sehari. Bisa dicampur dengan air hangat atau diminum langsung.</p>` } },
  { code: "MHM-030", name: "Minyak Herba Mumtas (MHM)", category: "Herbal Care", short: "Minyak gosok serbaguna.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png"], priceAgent: 45000, priceConsumer: 60000, points: 10, longDesc: { manfaat: `<p>Minyak gosok serbaguna untuk meredakan pegal linu, sakit kepala, dan masuk angin. Aroma herbal yang menenangkan juga cocok untuk pijat ringan.</p>`, komposisi: `<p>Terbuat dari campuran minyak kelapa, minyak sereh, minyak kayu putih, dan ekstrak herbal lainnya.</p>`, penyajian: `<p>Oleskan secukupnya pada bagian tubuh yang terasa pegal atau tidak nyaman. Pijat perlahan hingga meresap.</p>` } },
  { code: "DBV-031", name: "Diabevitto", category: "Herbal Care", short: "Herbal untuk membantu mengontrol gula darah.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630902/radix_st8ncy.png", imgs: ["https://source.unsplash.com/random/1600x1600/?diabetes,herbal"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Membantu menjaga kestabilan kadar gula darah dan meningkatkan fungsi pankreas. Efektif sebagai suplemen pendukung untuk penderita diabetes.</p>`, komposisi: `<p>Ekstrak herbal alami seperti daun sambiloto, pare, dan kayu manis yang telah lama digunakan untuk mengontrol gula darah.</p>`, penyajian: `<p>Minum 2 kapsul, 3 kali sehari setelah makan. Konsultasi dengan profesional kesehatan sebelum memulai.</p>` } },
  { code: "PSA-032", name: "Spirulina Al Kautsar", category: "Herbal Care", short: "Spirulina murni untuk nutrisi lengkap.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_yrfjxjyrfjxjyrfj_avwrxo.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_yrfjxjyrfjxjyrfj_avwrxo.png"], priceAgent: 100000, priceConsumer: 120000, points: 25, longDesc: { manfaat: `<p>Spirulina kaya akan protein, vitamin, dan mineral. Bermanfaat sebagai sumber nutrisi lengkap untuk meningkatkan energi dan daya tahan tubuh.</p>`, komposisi: `<p>Spirulina platensis murni yang dibudidayakan secara organik.</p>`, penyajian: `<p>Minum 3-5 kapsul setiap hari, atau campurkan bubuknya ke dalam minuman. Konsumsi secara teratur untuk hasil optimal.</p>` } },
  { code: "SSA-006", name: "Sehat Ayu CicaRosella Serum", category: "Beauty Care", short: "Serum dengan Centella & Rose.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630414/Gemini_Generated_Image_o5rrmzo5rrmzo5rr_ydrjzh.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758630414/Gemini_Generated_Image_o5rrmzo5rrmzo5rr_ydrjzh.png", "https://source.unsplash.com/random/1600x1600/?rose,extract"], priceAgent: 100000, priceConsumer: 120000, points: 20, longDesc: { manfaat: `<p>Serum wajah yang menenangkan dan merawat kulit berjerawat serta kemerahan. Membantu menyamarkan bekas luka dan menjaga kelembaban kulit.</p>`, komposisi: `<p>Mengandung ekstrak Centella Asiatica dan air mawar (Rose Water) alami yang dikenal baik untuk kulit sensitif.</p>`, penyajian: `<p>Teteskan 2-3 tetes serum pada wajah yang sudah bersih, pijat lembut hingga meresap. Gunakan dua kali sehari.</p>` } },
  { code: "FWS-007", name: "Sehat Ayu CicaRosella Face Wash", category: "Beauty Care", short: "Pembersih wajah lembut.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?face,wash"], priceAgent: 60000, priceConsumer: 75000, points: 10, longDesc: { manfaat: `<p>Pembersih wajah dengan busa lembut yang membersihkan kotoran dan sisa makeup tanpa membuat kulit terasa kering atau ketarik.</p>`, komposisi: `<p>Formula ringan dengan surfaktan yang lembut dan ekstrak botani alami yang merawat kulit saat membersihkan.</p>`, penyajian: `<p>Basahi wajah, ambil produk secukupnya, busakan dengan air, lalu usap ke seluruh wajah. Bilas hingga bersih.</p>` } },
  { code: "DCS-008", name: "Sehat Ayu CicaRosella Day Cream", category: "Beauty Care", short: "Krim pelembab siang hari dengan SPF.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?day,cream"], priceAgent: 95000, priceConsumer: 115000, points: 20, longDesc: { manfaat: `<p>Melindungi kulit dari paparan sinar UV dan polusi seharian. Menjaga kelembaban kulit agar tetap cerah dan sehat.</p>`, komposisi: `<p>Kombinasi ekstrak Centella Asiatica, Rose Water, dan SPF 30++.</p>`, penyajian: `<p>Oleskan secara merata pada wajah dan leher di pagi hari, setelah menggunakan serum.</p>` } },
  { code: "NCS-009", name: "Sehat Ayu CicaRosella Night Cream", category: "Beauty Care", short: "Krim malam untuk regenerasi kulit.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?night,cream"], priceAgent: 95000, priceConsumer: 115000, points: 20, longDesc: { manfaat: `<p>Menutrisi dan meregenerasi sel kulit saat Anda tidur. Membantu menyamarkan noda hitam dan meratakan warna kulit.</p>`, komposisi: `<p>Diperkaya dengan ekstrak Centella Asiatica dan Rose Water, serta vitamin E dan antioksidan.</p>`, penyajian: `<p>Gunakan pada malam hari setelah membersihkan wajah. Oleskan merata dan biarkan semalaman.</p>` } },
  { code: "FSS-010", name: "Full Set Sehat Ayu CicaRosella", category: "Beauty Care", short: "Paket lengkap perawatan wajah.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?skincare,kit"], priceAgent: 295000, priceConsumer: 350000, points: 50, longDesc: { manfaat: `<p>Paket lengkap untuk rutinitas perawatan wajah pagi dan malam. Membantu mengatasi masalah jerawat, mencerahkan, dan merawat kulit secara optimal.</p><p>Isi paket:<br>• Sehat Ayu CicaRosella Serum<br>• Sehat Ayu CicaRosella Face Wash<br>• Sehat Ayu CicaRosella Day Cream<br>• Sehat Ayu CicaRosella Night Cream</p>`, komposisi: `<p>Terdiri dari semua produk Sehat Ayu CicaRosella yang diformulasikan secara sinergis.</p>`, penyajian: `<p>Gunakan sesuai urutan dan petunjuk pemakaian masing-masing produk untuk hasil terbaik.</p>` } },
  { code: "KRJ-016", name: "Kopi Radix Jumbo 32 Sachet", category: "Healthy Foods", short: "Kopi herbal 7 akar, ukuran jumbo.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630902/radix_st8ncy.png", imgs: ["https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit-crop", "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1600&auto=format&fit-crop"], priceAgent: 160000, priceConsumer: 185000, points: 20, longDesc: { manfaat: `<p>Meningkatkan stamina dan fokus, serta membantu melancarkan peredaran darah. Cocok untuk Anda yang memiliki aktivitas padat.</p><p>Manfaat lainnya:<br>• Menghangatkan badan<br>• Mengurangi kelelahan<br>• Menjaga daya tahan tubuh</p>`, komposisi: `<p>Biji kopi pilihan yang dicampur dengan ekstrak 7 akar herbal alami seperti lada hitam, tebu gajah, dan akar jahe.</p>`, penyajian: `<p>Seduh 1 sachet dengan 150ml air panas. Aduk hingga merata dan siap dinikmati.</p>` } },
  { code: "MRZ-033", name: "Teh Morizen Celup", category: "Healthy Foods", short: "Teh herbal moringa yang kaya antioksidan.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?moringa,tea"], priceAgent: 70000, priceConsumer: 85000, points: 15, longDesc: { manfaat: `<p>Teh moringa yang kaya akan antioksidan, vitamin, dan mineral. Membantu meningkatkan daya tahan tubuh dan melancarkan pencernaan.</p>`, komposisi: `<p>Daun moringa kering pilihan yang dikemas dalam kantung teh celup.</p>`, penyajian: `<p>Seduh satu kantung teh dengan air panas selama 3-5 menit. Tambahkan madu jika suka.</p>` } },
  { code: "MDW-034", name: "Teh Mahkota Dewa Celup", category: "Healthy Foods", short: "Teh herbal untuk detoksifikasi tubuh.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?herbal,tea"], priceAgent: 70000, priceConsumer: 85000, points: 15, longDesc: { manfaat: `<p>Membantu detoksifikasi tubuh dari racun dan radikal bebas. Efektif untuk menjaga kesehatan hati dan menurunkan tekanan darah.</p>`, komposisi: `<p>Ekstrak buah mahkota dewa yang dikeringkan dan dikemas dalam teh celup.</p>`, penyajian: `<p>Seduh satu kantung teh dengan air panas. Minum secara rutin untuk hasil terbaik.</p>` } },
  { code: "CZV-035", name: "Teh Cenzviz Celup", category: "Healthy Foods", short: "Teh herbal untuk penderita diabetes.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?diabetes,tea"], priceAgent: 70000, priceConsumer: 85000, points: 15, longDesc: { manfaat: `<p>Teh herbal yang diformulasikan khusus untuk membantu mengontrol kadar gula darah. Menjaga kestabilan gula darah secara alami.</p>`, komposisi: `<p>Terbuat dari bahan alami seperti daun teh hijau, ekstrak kayu manis, dan jahe.</p>`, penyajian: `<p>Seduh satu kantung teh dengan air panas. Minum 2-3 kali sehari, terutama setelah makan.</p>` } },
  { code: "ZNV-036", name: "Teh Zirzen Celup", category: "Healthy Foods", short: "Teh herbal untuk meredakan nyeri sendi.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?joint,tea"], priceAgent: 70000, priceConsumer: 85000, points: 15, longDesc: { manfaat: `<p>Teh herbal yang efektif untuk meredakan nyeri sendi, pegal linu, dan masalah rematik. Cocok untuk konsumsi harian.</p>`, komposisi: `<p>Terbuat dari ekstrak herbal alami seperti jahe merah, serai, dan kunyit yang berkhasiat anti-inflamasi.</p>`, penyajian: `<p>Seduh satu kantung teh dengan air panas. Minum selagi hangat, 2 kali sehari.</p>` } },
  { code: "WDU-037", name: "Wedang Uwuh Celup", category: "Healthy Foods", short: "Minuman rempah tradisional.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?wedang,uwuh"], priceAgent: 70000, priceConsumer: 85000, points: 15, longDesc: { manfaat: `<p>Minuman rempah tradisional yang menghangatkan dan menyegarkan. Membantu meningkatkan daya tahan tubuh dan melancarkan peredaran darah.</p>`, komposisi: `<p>Terdiri dari campuran rempah kering seperti jahe, kayu secang, cengkeh, dan daun pala yang dikemas praktis.</p>`, penyajian: `<p>Seduh satu kantung teh dengan air panas. Tunggu hingga warna air berubah merah kecoklatan, lalu siap dinikmati.</p>` } },
  { code: "MMM-040", name: "Mumtas Mie – Moringa", category: "Healthy Foods", short: "Mie kelor gurih.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758629447/Gemini_Generated_Image_in7tavin7tavin7t_hqwkfs.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758629447/Gemini_Generated_Image_in7tavin7tavin7t_hqwkfs.png"], priceAgent: 10000, priceConsumer: 12000, points: 2, longDesc: { manfaat: `<p>Mie yang kaya akan serat dan vitamin dari daun kelor. Membantu memenuhi nutrisi harian dan menjaga kesehatan tubuh tanpa bahan pengawet.</p>`, komposisi: `<p>Mie dibuat dari tepung MOCAF (Modified Cassava Flour) dan ekstrak daun kelor asli, dengan bumbu rempah-rempah alami.</p>`, penyajian: `<p>Rebus mie dalam air mendidih selama 3 menit. Tiriskan, campur dengan bumbu, dan mie siap dinikmati.</p>` } },
  { code: "MMH-041", name: "Mumtas Mie – Habbasauda", category: "Healthy Foods", short: "Mie kuah habbatus sauda.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630927/Gemini_Generated_Image_izwimyizwimyizwi_kvj0w3.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758630927/Gemini_Generated_Image_izwimyizwimyizwi_kvj0w3.png", "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630927/Gemini_Generated_Image_izwimyizwimyizwi_kvj0w3.png"], priceAgent: 10000, priceConsumer: 12000, points: 2, longDesc: { manfaat: `<p>Membantu meningkatkan daya tahan tubuh dan menjaga kesehatan. Cocok dinikmati saat cuaca dingin atau saat tubuh terasa kurang fit.</p>`, komposisi: `<p>Mie dibuat dari tepung MOCAF dan bubuk habbatus sauda, dengan kuah rempah yang kaya rasa dan menghangatkan.</p>`, penyajian: `<p>Rebus mie dalam air mendidih selama 3 menit. Masukkan bumbu kuah, dan mie siap disajikan selagi hangat.</p>` } },
  { code: "MMC-042", name: "Mumtas Mie – Collagen", category: "Healthy Foods", short: "Mie mocaf fungsional dengan kolagen.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_ec93u5ec93u5ec93_xn3hvz.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_ec93u5ec93u5ec93_xn3hvz.png", "https://source.unsplash.com/random/1600x1600/?fried,noodles"], priceAgent: 10000, priceConsumer: 12000, points: 2, longDesc: { manfaat: `<p>Nikmati mie lezat yang diperkaya dengan kolagen, baik untuk kesehatan kulit dan sendi. Pilihan yang tepat untuk camilan sehat sehari-hari.</p>`, komposisi: `<p>Mie mocaf fungsional dengan tambahan kolagen halal dan bumbu alami yang gurih.</p>`, penyajian: `<p>Rebus mie selama 3 menit, tiriskan, lalu campur dengan bumbu. Aduk rata dan sajikan selagi hangat.</p>` } },
  { code: "MMS-043", name: "Mumtas Mie – Spirulina", category: "Healthy Foods", short: "Mie mocaf fungsional dengan spirulina.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630144/Gemini_Generated_Image_zfxj4kzfxj4kzfxj_mdk9uv.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758630144/Gemini_Generated_Image_zfxj4kzfxj4kzfxj_mdk9uv.png", "https://source.unsplash.com/random/1600x1600/?green,noodles"], priceAgent: 10000, priceConsumer: 12000, points: 2, longDesc: { manfaat: `<p>Mie yang kaya akan protein dan nutrisi dari spirulina. Membantu menjaga energi harian, cocok untuk Anda yang aktif.</p>`, komposisi: `<p>Mie dibuat dari tepung MOCAF dan bubuk spirulina, dengan bumbu rempah-rempah yang lezat.</p>`, penyajian: `<p>Rebus mie selama 3 menit, tiriskan, campurkan bumbu dan aduk rata. Siap disajikan.</p>` } },
  { code: "MGS-044", name: "Mumtazzio Gingerissimo Box (5 sachet)", category: "Healthy Foods", short: "Jahe instan praktis box.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758509762/Gemini_Generated_Image_xqqn70xqqn70xqqn_ikre03.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758509762/Gemini_Generated_Image_xqqn70xqqn70xqqn_ikre03.png"], priceAgent: 25000, priceConsumer: 30000, points: 5, longDesc: { manfaat: `<p>Minuman jahe instan yang praktis dan lezat, efektif menghangatkan badan dan melegakan tenggorokan. Cocok untuk konsumsi harian.</p>`, komposisi: `<p>Jahe merah pilihan dan gula aren alami, tanpa tambahan bahan kimia. Aman dan sehat untuk keluarga.</p>`, penyajian: `<p>Seduh satu sachet Mumtazzio Gingerissimo dengan 150ml air panas. Aduk hingga larut dan nikmati kehangatannya.</p>` } },
  { code: "MGB-045", name: "Mumtazzio Gingerissimo Botol 250ml", category: "Healthy Foods", short: "Jahe instan dalam kemasan botol.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758509762/Gemini_Generated_Image_b1c719b1c719b1c7_om3vqm.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758509762/Gemini_Generated_Image_b1c719b1c719b1c7_om3vqm.png"], priceAgent: 75000, priceConsumer: 90000, points: 20, longDesc: { manfaat: `<p>Nikmati jahe instan dalam kemasan botol praktis. Lebih hemat dan bisa disajikan untuk seluruh keluarga. Efektif menghangatkan tubuh.</p>`, komposisi: `<p>Jahe merah pilihan dan gula aren alami dalam kemasan botol 250ml.</p>`, penyajian: `<p>Tuang 2-3 sendok makan ke dalam gelas, tambahkan air panas atau dingin sesuai selera. Aduk rata.</p>` } },
  { code: "MSS-038", name: "Mumtas Shampoo", category: "Home Care", short: "Shampoo lembut untuk kesehatan rambut.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758509762/Gemini_Generated_Image_x7iepkx7iepkx7ie_emokez.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758509762/Gemini_Generated_Image_x7iepkx7iepkx7ie_emokez.png"], priceAgent: 35000, priceConsumer: 40000, points: 5, longDesc: { manfaat: `<p>Shampoo dengan formula lembut yang membersihkan rambut tanpa menghilangkan kelembaban alami. Menjaga rambut tetap sehat, kuat, dan berkilau.</p>`, komposisi: `<p>Mengandung ekstrak lidah buaya dan kemiri alami yang menutrisi rambut dari akar hingga ujung.</p>`, penyajian: `<p>Basahi rambut, tuangkan shampoo secukupnya, pijat kulit kepala dengan lembut, lalu bilas hingga bersih.</p>` } },
  { code: "MBW-039", name: "Mumtas Body Wash", category: "Home Care", short: "Sabun mandi cair lembut di kulit.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758509761/Gemini_Generated_Image_carr6ccarr6ccarr_tjdh04.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758509761/Gemini_Generated_Image_carr6ccarr6ccarr_tjdh04.png"], priceAgent: 35000, priceConsumer: 40000, points: 5, longDesc: { manfaat: `<p>Sabun mandi dengan busa melimpah dan aroma segar. Membersihkan kulit secara menyeluruh dan menjaga kelembaban alaminya.</p>`, komposisi: `<p>Diformulasikan dengan ekstrak mawar dan madu untuk menutrisi dan melembutkan kulit.</p>`, penyajian: `<p>Tuangkan ke telapak tangan atau spons mandi, usapkan ke seluruh tubuh hingga berbusa, lalu bilas hingga bersih.</p>` } }
];
const CATEGORIES = ["Herbal Care", "Beauty Care", "Healthy Foods", "Home Care"];
const FAQ_ITEMS = [
  { q: "Apa itu Mumtas?", a: "Mumtas adalah platform yang menawarkan gaya hidup halal melalui produk berkualitas premium, mulai dari makanan, minuman, kecantikan, hingga herbal. Kami mengusung konsep 'Dari Konsumsi ke Komisi' di mana setiap pembelian bisa diubah menjadi peluang income." },
  { q: "Apa perbedaan harga konsumen dan agen?", a: "Harga konsumen adalah harga eceran yang disarankan, sedangkan harga agen adalah harga khusus untuk anggota yang telah mendaftar dan memenuhi syarat, memungkinkan mereka mendapatkan keuntungan dari penjualan." },
  { q: "Bagaimana cara menjadi agen Mumtas?", a: "Anda bisa mendaftar melalui sponsor atau orang yang memperkenalkan Mumtas kepada Anda. Mereka akan membantu Anda dalam proses pendaftaran. Setelah terdaftar, Anda akan mendapatkan akses ke MOS (Mumtas Online System) untuk memantau bisnis Anda." },
  { q: "Apa itu poin dan bagaimana cara mendapatkannya?", a: "Poin adalah sistem reward yang didapatkan dari setiap pembelian produk. Poin ini dapat dikumpulkan dan ditukarkan dengan berbagai bonus atau hadiah sesuai dengan skema yang berlaku di Mumtas." },
  { q: "Apakah produk Mumtas halal dan aman?", a: "Ya, semua produk Mumtas diformulasikan dari bahan-bahan yang dijamin halal dan aman. Kami memastikan setiap produk diproduksi dengan standar kualitas tinggi untuk memberikan manfaat optimal bagi konsumen." }
];
const LANGKAH_SUKSES = [
    { t: 'Rasakan Manfaat', d: 'Mulai dari konsumsi harian untuk memahami kualitas produk.' },
    { t: 'Ceritakan & Bagikan', d: 'Sharing pengalaman jujur ke lingkunganmu — organik tanpa maksa.' },
    { t: 'Duplikasi 200 Poin', d: 'Bangun kebiasaan 200 poin bulanan dan ajarkan ke tim.' },
    { t: 'Optimalkan dengan MOS', d: 'Pantau jaringan, aktivitas, dan materi lewat MOS Mumtas.' },
];
const EVENTS = [
    { 
        title: "Mumtas Business Coaching: Raih Promo 2025!", 
        type: "Offline", 
        location: "Purbalingga, Jawa Tengah", 
        img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758511351/MBC_1_vv544n.png", 
        desc: "Strategi Raih Promo 2025: Dapatkan tips dan trik jitu untuk mencapai target promo tahun depan.", 
        details: `
        <p>
            Ini dia kesempatan terbaik untuk kamu yang ingin meningkatkan omzet dan meraih kesuksesan bersama PT Mumtaz Halalanthoyyiban Sejahtera! Jangan lewatkan Mumtas Business Coaching, sebuah acara coaching bisnis eksklusif yang akan membongkar rahasia di balik kesuksesan bisnis Mumtas.
        </p>
        <p>
            Bersama H. Haryo Abdul Hakiem, Direktur Utama PT Mumtas, kamu akan mendapatkan materi yang super padat dan praktis, di antaranya:
            <br>• Bedah Marketing Plan: Pahami strategi pemasaran yang efektif dan terbukti berhasil.
            <br>• Strategi Raih Promo 2025: Dapatkan tips dan trik jitu untuk mencapai target promo tahun depan.
            <br>• Tutorial MOS (Mumtas Operating System): Kuasai sistem operasional Mumtas dengan mudah.
        </p>
        <p>
            Tunggu apa lagi? Raih kesempatan emas ini dan jadilah bagian dari kesuksesan Mumtas! Tempat terbatas, segera daftar!
        </p>
        <p>
            <strong>Detail Acara:</strong>
            <br><strong>Waktu:</strong> Sabtu, 20 September 2025, Pukul 10:00 WIB
            <br><strong>Lokasi:</strong> Rumah Ibu Siti Aminah, Jalan Mawar RT.01 RW.01 No.38, Desa Danaraja, Kec. Banyumas, Kab. Banyumas.
            <br><strong>Narahubung:</strong> 0811 2545 991
        </p>
        <p>
            Ayo, persiapkan dirimu dan raih kesuksesan bersama Mumtas!
        </p>
        `
    },
    { 
        title: "Sosialisasi Promo - Team Up, Cash Up! Jilid II", 
        type: "Online", 
        location: "via Zoom", 
        img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758512243/sosialisasa_simalla_xgb4y8.png", 
        desc: "Ikuti strategi jitu dan raih cuan melimpah di promo Team Up, Cash Up! Jilid II.", 
        details: `<p>Sosialisasi ini diselenggarakan untuk memberikan pemahaman mendalam tentang promo <strong>Team Up, Cash Up! Jilid II</strong>. Kami akan membahas secara rinci mekanisme promo, syarat dan ketentuan, serta tips untuk memaksimalkan keuntungan dari setiap pencapaian tim. Segera ikuti webinar ini agar tidak ketinggalan informasi penting untuk mengembangkan bisnis Anda bersama Mumtas!</p>` 
    },
    { 
        title: "Product Knowledge dengan Diagnosa Holistik", 
        type: "Online", 
        location: "via WA Group", 
        img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758512244/Small_size_diagnoda_ppucra.png", 
        desc: "Kuasai seni mendiagnosa dan berikan solusi herbal terbaik untuk kesehatan optimal.", 
        details: `<p>Dapatkan panduan dari ahli untuk menentukan herbal dan terapi yang tepat sesuai dengan kondisi Anda. Dalam sesi ini, kami akan membantu Anda memahami prinsip-prinsip diagnosa holistik dan memilih produk Mumtas yang paling sesuai untuk mendukung kesehatan optimal. Bergabunglah dengan kami di grup WhatsApp untuk konsultasi langsung dan tips eksklusif.</p>` 
    }
];

// Utilitas
const goldGradient = "bg-gradient-to-r from-[#344e41] via-[#3a5a40] to-[#588157] dark:from-[#FFD700] dark:via-[#FFC837] dark:to-[#FFB300]";
const goldText = `text-transparent bg-clip-text ${goldGradient} shimmer-text`;
const buttonHover = "transition duration-300 hover:brightness-110";
const fmt = (n) => new Intl.NumberFormat('id-ID').format(n);

// Fungsi aman untuk merender ikon, mencegah error jika script gagal dimuat
function createIconsSafe(options = {}) {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons(options);
    } else {
      console.warn("Lucide script not loaded, skipping icon creation.");
    }
}

// Fungsi untuk memperbarui logo berdasarkan tema
function updateLogo() {
  const LIGHT_LOGO_URL = "https://res.cloudinary.com/doqzgozyt/image/upload/v1758543444/logo_web_dceb0e.png";
  const DARK_LOGO_URL = "https://res.com/doqzgozyt/image/upload/v1758518959/emas_ong_ntxmg8.png";
  const logoImg = document.getElementById('mumtas-logo');
  if (!logoImg) return;
  if (document.documentElement.classList.contains('dark')) {
    logoImg.src = DARK_LOGO_URL;
  } else {
    logoImg.src = LIGHT_LOGO_URL;
  }
}

// Fungsi untuk inisialisasi navbar dan menu mobile
function initNavbar() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const icon = btn.querySelector('i');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      const isHidden = menu.classList.contains('hidden');
      icon.setAttribute('data-lucide', isHidden ? 'menu' : 'x');
      createIconsSafe({
        nodes: [icon]
      });
    });

    // Tutup menu saat link di klik
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            icon.setAttribute('data-lucide', 'menu');
            createIconsSafe({nodes: [icon]});
        });
    });
  }
}

// Fungsi untuk inisialisasi Hero Section
function initHero() {
  const container = document.getElementById('hero-bg-container');
  if (!container) return;

  HERO_IMAGES.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = "hero-bg absolute inset-0 bg-cover bg-center transition-opacity duration-1000";
    div.style.backgroundImage = `url(${src})`;
    div.style.opacity = i === 0 ? '1' : '0';
    container.appendChild(div);
  });

  const backgrounds = container.querySelectorAll('.hero-bg');
  let currentIdx = 0;
  setInterval(() => {
    currentIdx = (currentIdx + 1) % backgrounds.length;
    backgrounds.forEach((bg, i) => {
      bg.style.opacity = i === currentIdx ? '1' : '0';
    });
  }, 4500);

  // Efek blur saat scroll
  const hero = document.getElementById('hero');
  window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / hero.offsetHeight;
    const blurValue = Math.min(scrollPercent * 10, 8);
    backgrounds.forEach(bg => {
      bg.style.filter = `blur(${blurValue}px)`;
    });
  });
}

// Fungsi untuk inisialisasi Produk Unggulan (Carousel 3D)
function initProdukUnggulan() {
    const carousel = document.getElementById('produk-unggulan-carousel');
    if (!carousel) return;

    PRODUCT_LIST.forEach((p, i) => {
        const item = document.createElement('div');
        item.className = "carousel-item absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out";
        item.style.transitionProperty = 'transform, opacity';
        item.innerHTML = `
            <div class="relative rounded-2xl p-[2px]">
                <div class="gradient-border absolute inset-0 rounded-2xl pointer-events-none overflow-hidden" style="opacity: 0;">
                    <div class="absolute -inset-[40%] rounded-full bg-conic-gradient" style="animation: spinGradient 6s linear infinite;"></div>
                </div>
                <div class="card-content w-72 md:w-[32rem] rounded-2xl overflow-hidden bg-gradient-to-br from-[#dad7cd] to-[#a3b18a] dark:from-black dark:to-gray-900 border border-[#3a5a40]/70 dark:border-[#FFC837]/70 shadow-2xl relative transition-transform duration-500">
                    <img src="${p.img}" alt="${p.name}" class="w-full aspect-square object-cover" />
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#344e41] via-[#3a5a40] to-[#588157] dark:bg-gradient-to-r dark:from-[#FFD700] dark:via-[#FFC837] dark:to-[#FFB300] shimmer-text">${p.name}</h3>
                        <p class="text-sm text-[#344e41]/70 dark:text-gray-400 mt-1">${p.desc}</p>
                        <button class="mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2 bg-gradient-to-r from-[#588157] via-[#588157] to-[#588157] dark:from-[#FFD700] dark:via-[#FFC837] dark:to-[#FFB300] text-[#ffffff] dark:text-black text-sm hover:brightness-110">
                            <i data-lucide="shopping-bag" class="w-4 h-4"></i> Detail Produk
                        </button>
                    </div>
                </div>
            </div>
        `;
        carousel.appendChild(item);
    });

    const items = carousel.querySelectorAll('.carousel-item');
    const len = items.length;
    let idx = 0;

    const updateCarousel = () => {
        const isMobile = window.innerWidth < 768;
        const baseTranslate = isMobile ? 100 : 150;
        const baseRotate = isMobile ? -20 : -16;
        const baseScale = isMobile ? 0.6 : 0.65;
        const activeScale = isMobile ? 1.05 : 1.06;

        items.forEach((item, i) => {
            let d = i - idx;
            if (d > len / 2) d -= len;
            if (d < -len / 2) d += len;

            const translateX = d * baseTranslate;
            const rotateY = d * baseRotate;
            const scale = Math.max(baseScale, 1 - Math.abs(d) * 0.14);
            const isActive = d === 0;

            item.style.transform = `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`;
            item.style.opacity = isActive ? '1' : '1';
            item.style.zIndex = len - Math.abs(d);

            const gradientBorder = item.querySelector('.gradient-border');
            const cardContent = item.querySelector('.card-content');
            if (gradientBorder) {
                gradientBorder.style.opacity = isActive ? '0.3' : '0';
            }
            
            if (cardContent) {
                if (isActive) {
                    cardContent.style.animation = `pulse 2.6s ease-in-out infinite`;
                    cardContent.style.transform = `translateY(0) scale(${activeScale})`;
                } else {
                    cardContent.style.animation = 'none';
                    cardContent.style.transform = `translateY(0) scale(1)`;
                }
            }
        });
    };

    window.addEventListener('resize', updateCarousel);
    setInterval(() => {
        idx = (idx + 1) % len;
        updateCarousel();
    }, 3500);

    updateCarousel();
}

// Fungsi untuk inisialisasi Galeri
function initGallery() {
    const row1 = document.getElementById('gallery-row-1');
    const row2 = document.getElementById('gallery-row-2');
    if(!row1 || !row2) return;

    const imagesHtml1 = GALLERY_IMAGES.map((src, i) => `
        <a href="${src}" download class="relative cursor-pointer transition-transform hover:scale-105">
            <img src="${src}" alt="Galeri ${i+1}" class="w-72 h-48 object-cover rounded-xl" />
        </a>
    `).join('');
    const imagesHtml2 = GALLERY_IMAGES_2.map((src, i) => `
        <a href="${src}" download class="relative cursor-pointer transition-transform hover:scale-105">
            <img src="${src}" alt="Galeri ${i+5}" class="w-72 h-48 object-cover rounded-xl" />
        </a>
    `).join('');

    row1.innerHTML = imagesHtml1 + imagesHtml1;
    row2.innerHTML = imagesHtml2 + imagesHtml2;

    row1.style.width = `${GALLERY_IMAGES.length * 2 * 19}rem`;
    row2.style.width = `${GALLERY_IMAGES_2.length * 2 * 19}rem`;
}

// Fungsi untuk inisialisasi Semua Produk (Accordion & Modal)
function initSemuaProduk() {
    const container = document.getElementById('semua-produk-accordion');
    if(!container) return;

    let openCat = CATEGORIES.find(cat => ALL_PRODUCTS.some(p => p.category === cat)) || CATEGORIES[0];
    
    container.innerHTML = CATEGORIES.map(cat => {
        const items = ALL_PRODUCTS.filter(p => p.category === cat);
        return `
        <div class="accordion-item">
            <button data-category="${cat}" class="w-full category-toggle">
                <div class="flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                        <span class="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#344e41] via-[#3a5a40] to-[#588157] dark:bg-gradient-to-r dark:from-[#FFD700] dark:via-[#FFC837] dark:to-[#FFB300] shimmer-text">${cat}</span>
                        <span class="text-xs text-[#344e41]/70 dark:text-gray-400">${items.length} produk</span>
                    </div>
                    <i data-lucide="plus" class="accordion-icon text-[#588157] dark:text-[#FFC837] transition-transform duration-300 flex-shrink-0"></i>
                </div>
                <div class="mt-2 border-b border-[#3a5a40]/50 dark:border-[#FFC837]/50"></div>
            </button>
            <div class="accordion-panel">
                <div class="pt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    ${items.map(p => `
                        <div style="perspective: 1500px">
                            <button data-product-code="${p.code}" class="product-card relative rounded-2xl overflow-hidden w-full" style="transform-style: preserve-3d;">
                                <img src="${p.img}" alt="${p.name}" class="w-full aspect-square object-cover" />
                                <div class="absolute inset-0 bg-gradient-to-t from-[#dad7cd]/85 via-[#dad7cd]/45 to-transparent dark:from-black/85 dark:via-black/45 p-3 flex flex-col justify-end items-start text-left">
                                    <h3 class="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#344e41] via-[#3a5a40] to-[#588157] dark:bg-gradient-to-r dark:from-[#FFD700] dark:via-[#FFC837] dark:to-[#FFB300] shimmer-text">${p.name}</h3>
                                    <p class="text-xs text-[#344e41]/80 dark:text-gray-300 mt-1">${p.short}</p>
                                    <div class="mt-2 grid grid-cols-3 items-end gap-2 text-sm w-full">
                                        <div><div class="text-[10px] text-[#344e41]/70 dark:text-gray-400">Konsumen</div><div class="text-[#344e41] dark:text-white font-semibold">Rp ${fmt(p.priceConsumer)}</div></div>
                                        <div><div class="text-[10px] text-[#344e41]/70 dark:text-gray-400">Harga Agen</div><div class="text-[#588157] dark:text-[#FFC837] font-semibold">Rp ${fmt(p.priceAgent)}</div></div>
                                        <div class="justify-self-end text-right"><div class="text-[10px] text-[#344e41]/70 dark:text-gray-400">Poin</div><div class="text-[#344e41] dark:text-white font-semibold">${p.points}</div></div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    `).join('')}
                    ${items.length === 0 ? `<div class="text-sm text-[#344e41]/70 dark:text-gray-400 italic">Belum ada produk pada kategori ini.</div>` : ''}
                </div>
            </div>
        </div>
        `;
    }).join('');
    createIconsSafe();
    
    const items = container.querySelectorAll('.accordion-item');
    
    function toggleAccordion(cat) {
        openCat = openCat === cat ? null : cat;
        items.forEach(item => {
            const button = item.querySelector('.category-toggle');
            const panel = item.querySelector('.accordion-panel');
            const icon = button.querySelector('.accordion-icon');
            const currentCat = button.dataset.category;
            const isOpen = openCat === currentCat;
            
            if (isOpen) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            } else {
                panel.style.maxHeight = null;
            }

            if (icon) {
              icon.style.transform = `rotate(${isOpen ? '45deg' : '0deg'})`;
            }
        });
    }
    
    items.forEach(item => {
        const button = item.querySelector('.category-toggle');
        button.addEventListener('click', () => toggleAccordion(button.dataset.category));
    });

    container.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            const rotateY = (px - 0.5) * 6;
            const rotateX = -(py - 0.5) * 6;
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        });
        card.addEventListener('click', () => {
            const product = ALL_PRODUCTS.find(p => p.code === card.dataset.productCode);
            openProductModal(product);
        });
    });

    toggleAccordion(openCat);
    openCat = null;
    toggleAccordion(CATEGORIES.find(cat => ALL_PRODUCTS.some(p => p.category === cat)) || CATEGORIES[0]);
}

// Fungsi untuk inisialisasi Langkah Sukses
function initLangkahSukses() {
    const grid = document.getElementById('langkah-sukses-grid');
    if (!grid) return;
    grid.innerHTML = LANGKAH_SUKSES.map((s, i) => `
        <div data-animate style="transition-delay: ${i*0.1}s" class="relative h-full">
          <div class="p-[2px] rounded-2xl bg-gradient-to-r from-[#3a5a40] via-[#3a5a40]/40 to-transparent dark:from-[#FFC837] dark:via-[#FFC837]/40 dark:to-transparent h-full">
            <div class="relative rounded-[14px] bg-[#dad7cd] dark:bg-[#121212] border border-[#344e41]/5 dark:border-white/5 p-5 h-full min-h-[180px] md:min-h-[208px] overflow-hidden flex flex-col justify-end">
              <div class="absolute -top-6 -right-4 select-none font-extrabold leading-none tracking-tight text-[#344e41]/5 dark:text-white/5" style="font-size: 8rem;">${i + 1}</div>
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#dad7cd]/0 via-[#dad7cd]/0 to-[#dad7cd]/30 dark:from-black/0 dark:via-black/0 dark:to-black/30"></div>
              <div class="relative text-left">
                <h4 class="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#344e41] via-[#3a5a40] to-[#588157] dark:bg-gradient-to-r dark:from-[#FFD700] dark:via-[#FFC837] dark:to-[#FFB300] shimmer-text">${s.t}</h4>
                <p class="text-sm text-[#344e41]/80 dark:text-gray-300 mt-2 leading-relaxed">${s.d}</p>
              </div>
            </div>
          </div>
        </div>
    `).join('');
}

// Fungsi untuk inisialisasi Event
function initEvents() {
    const grid = document.getElementById('event-grid');
    if(!grid) return;
    grid.innerHTML = EVENTS.map((event, i) => `
        <div style="perspective: 800px;" data-animate>
            <button data-event-index="${i}" class="event-card bg-[#dad7cd]/50 dark:bg-black/50 border border-[#3a5a40]/40 dark:border-[#FFC837]/40 rounded-xl overflow-hidden text-left w-full h-full" style="transform-style: preserve-3d;">
                <img src="${event.img}" alt="${event.title}" class="w-full aspect-square object-cover" />
                <div class="p-4">
                    <div class="flex items-center gap-2 text-xs mb-2">
                        <span class="px-2 py-0.5 rounded ${event.type === 'Online' ? 'bg-emerald-600/20 text-emerald-300 dark:bg-light-neutral/20 dark:text-light-dark' : 'bg-sky-600/20 text-sky-300 dark:bg-light-neutral/20 dark:text-light-dark'}">${event.type}</span>
                        <span class="text-[#344e41]/70 dark:text-gray-400">${event.location}</span>
                    </div>
                    <h3 class="text-lg font-semibold text-[#588157] dark:text-[#FFC837]">${event.title}</h3>
                    <p class="text-[#344e41]/80 dark:text-gray-300 text-sm mt-2">${event.desc}</p>
                </div>
            </button>
        </div>
    `).join('');

    grid.querySelectorAll('.event-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            const event = EVENTS[index]; 
            openEventModal(event);
        });

        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            const rotateY = (px - 0.5) * 8;
            const rotateX = -(py - 0.5) * 8;
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
}

// Fungsi untuk inisialisasi FAQ
function initFAQ() {
    const container = document.getElementById('faq-accordion');
    if(!container) return;
    
    container.innerHTML = FAQ_ITEMS.map((item, index) => `
        <div class="faq-item border-b border-[#344e41]/10 dark:border-white/10">
            <button data-index="${index}" class="faq-toggle w-full text-left py-4 flex items-center justify-between gap-4">
                <span class="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#344e41] via-[#3a5a40] to-[#588157] dark:bg-gradient-to-r dark:from-[#FFD700] dark:via-[#FFC837] dark:to-[#FFB300] shimmer-text">${item.q}</span>
                <i data-lucide="plus" class="accordion-icon text-[#588157] dark:text-[#FFC837] transition-transform duration-300 flex-shrink-0"></i>
            </button>
            <div class="accordion-panel">
                <div class="pb-4 text-[#344e41]/80 dark:text-gray-300 text-sm leading-relaxed text-left">${item.a}</div>
            </div>
        </div>
        `).join('');
    createIconsSafe();

    const items = container.querySelectorAll('.faq-item');
    let openIndex = null;

    function toggleFAQ(index) {
        openIndex = openIndex === index ? null : index;
        items.forEach((item, i) => {
            const button = item.querySelector('.faq-toggle');
            const panel = item.querySelector('.accordion-panel');
            const icon = button.querySelector('.accordion-icon');
            const isOpen = openIndex === i;

            if (isOpen) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            } else {
                panel.style.maxHeight = null;
            }
            
            if (icon) {
              icon.style.transform = `rotate(${isOpen ? '45deg' : '0deg'})`;
            }
        });
    }

    items.forEach((item, index) => {
        item.querySelector('.faq-toggle').addEventListener('click', () => toggleFAQ(index));
    });
}

// Fungsi untuk inisialisasi modals
const modalsContainer = document.getElementById('modals-container');
    
function openProductModal(product) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-[80] bg-[#dad7cd]/70 dark:bg-black/70 backdrop-blur-sm grid place-items-center p-4 transition-opacity duration-300';
    
    let currentImgIdx = 0;

    const renderModalContent = () => {
      modal.innerHTML = `
        <div class="modal-content relative w-full max-w-4xl flex flex-col md:flex-row rounded-2xl bg-[#dad7cd] dark:bg-[#141414] max-h-[90vh] overflow-y-auto md:overflow-hidden transition-transform transform scale-95 duration-300">
            <button class="close-modal absolute top-3 right-3 text-[#588157] dark:text-[#FFC837] hover:text-[#344e41] dark:hover:text-white z-20 p-1 bg-[#dad7cd]/50 dark:bg-black/50 rounded-full"><i data-lucide="x"></i></button>
            <div class="relative w-full md:w-1/2 flex-shrink-0">
                <img src="${product.imgs[currentImgIdx]}" alt="${product.name}" class="w-full h-auto md:h-full object-cover aspect-square md:aspect-auto">
                <a href="${product.imgs[currentImgIdx]}" download="${product.name.replace(/\s+/g, '-')}-${currentImgIdx + 1}.jpg" class="absolute top-3 left-3 z-10 p-1.5 bg-[#dad7cd]/50 dark:bg-black/50 rounded-full text-[#344e41] dark:text-white hover:bg-[#dad7cd]/80 dark:hover:bg-black/80 transition-opacity" title="Unduh gambar">
                    <i data-lucide="download" class="w-5 h-5"></i>
                </a>
                ${product.imgs.length > 1 ? `
                    <button class="prev-img absolute left-2 top-1/2 -translate-y-1/2 bg-[#dad7cd]/50 dark:bg-black/50 p-1 rounded-full text-[#344e41] dark:text-white hover:bg-[#dad7cd]/80 dark:hover:bg-black/80 transition"><i data-lucide="chevron-left"></i></button>
                    <button class="next-img absolute right-2 top-1/2 -translate-y-1/2 bg-[#dad7cd]/50 dark:bg-black/50 p-1 rounded-full text-[#344e41] dark:text-white hover:bg-[#dad7cd]/80 dark:hover:bg-black/80 transition"><i data-lucide="chevron-right"></i></button>
                ` : ''}
            </div>
            <div class="w-full md:w-1/2 p-6 text-left md:overflow-y-auto">
                <div class="space-y-4">
                    <h3 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#344e41] via-[#3a5a40] to-[#588157] dark:bg-gradient-to-r dark:from-[#FFD700] dark:via-[#FFC837] dark:to-[#FFB300] shimmer-text">${product.name}</h3>
                    <p class="text-sm text-[#344e41]/80 dark:text-gray-300 mt-1">${product.short}</p>
                    <div class="grid grid-cols-3 gap-4 text-center border-y border-[#344e41]/10 dark:border-white/10 py-3">
                        <div><div class="text-[11px] text-[#344e41]/70 dark:text-gray-400">Konsumen</div><div class="text-[#344e41] dark:text-white font-semibold">Rp ${fmt(product.priceConsumer)}</div></div>
                        <div><div class="text-[11px] text-[#344e41]/70 dark:text-gray-400">Harga Agen</div><div class="text-[#588157] dark:text-[#FFC837] font-semibold">Rp ${fmt(product.priceAgent)}</div></div>
                        <div><div class="text-[11px] text-[#344e41]/70 dark:text-gray-400">Poin</div><div class="text-[#344e41] dark:text-white font-semibold">${product.points}</div></div>
                    </div>
                    <div>
                        <h4 class="font-semibold text-[#588157] dark:text-[#FFC837]">Manfaat</h4>
                        <div class="text-[#344e41]/70 dark:text-gray-400 text-sm mt-1">${product.longDesc.manfaat}</div>
                    </div>
                    <div>
                        <h4 class="font-semibold text-[#588157] dark:text-[#FFC837]">Komposisi</h4>
                        <div class="text-[#344e41]/70 dark:text-gray-400 text-sm mt-1">${product.longDesc.komposisi}</div>
                    </div>
                    <div>
                        <h4 class="font-semibold text-[#588157] dark:text-[#FFC837]">Saran Penyajian</h4>
                        <div class="text-[#344e41]/70 dark:text-gray-400 text-sm mt-1">${product.longDesc.penyajian}</div>
                    </div>
                </div>
            </div>
        </div>`;
      
      modal.querySelector('.modal-content').addEventListener('click', e => e.stopPropagation());
      modal.querySelector('.close-modal').addEventListener('click', closeModal);

      if (product.imgs.length > 1) {
          modal.querySelector('.prev-img').addEventListener('click', () => {
              currentImgIdx = (currentImgIdx - 1 + product.imgs.length) % product.imgs.length;
              renderModalContent();
          });
          modal.querySelector('.next-img').addEventListener('click', () => {
              currentImgIdx = (currentImgIdx + 1) % product.imgs.length;
              renderModalContent();
          });
      }
      createIconsSafe();
    };

    const closeModal = () => {
        modal.style.opacity = '0';
        modal.querySelector('.modal-content').style.transform = 'scale(0.95)';
        setTimeout(() => modal.remove(), 300);
    };
    
    modal.addEventListener('click', closeModal);
    modalsContainer.appendChild(modal);
    renderModalContent();

    setTimeout(() => {
        modal.style.opacity = '1';
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
    }, 10);
}
    
function openEventModal(event) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-[80] bg-[#dad7cd]/70 dark:bg-black/70 backdrop-blur-sm grid place-items-center p-4 transition-opacity duration-300';
    modal.innerHTML = `
        <div class="modal-content relative w-full max-w-2xl rounded-2xl bg-[#dad7cd] dark:bg-[#141414] max-h-[90vh] overflow-y-auto transition-transform transform scale-95 duration-300">
            <button class="close-modal absolute top-2 right-2 text-[#588157] dark:text-[#FFC837] hover:text-[#344e41] dark:hover:text-white">✕</button>
            <img src="${event.img}" alt="${event.title}" class="w-full aspect-square object-cover" />
            <div class="p-4">
                <div class="flex items-center gap-2 text-xs mb-2">
                    <span class="px-2 py-0.5 rounded ${event.type === 'Online' ? 'bg-emerald-600/20 text-emerald-300 dark:bg-light-neutral/20 dark:text-light-dark' : 'bg-sky-600/20 text-sky-300 dark:bg-light-neutral/20 dark:text-light-dark'}">${event.type}</span>
                    <span class="text-[#344e41]/70 dark:text-gray-400">${event.location}</span>
                </div>
                <h3 class="text-2xl font-semibold text-[#588157] dark:text-[#FFC837]">${event.title}</h3>
                <p class="text-[#344e41]/80 dark:text-gray-300 text-sm mt-2">${event.desc}</p>
                <div class="text-[#344e41]/70 dark:text-gray-400 text-sm">${event.details}</div>
                <a href="${event.img}" download class="mt-4 inline-flex items-center gap-2 rounded-xl px-3 py-1.5 bg-gradient-to-r from-[#588157] via-[#588157] to-[#588157] dark:from-[#FFD700] dark:via-[#FFC837] dark:to-[#FFB300] text-[#ffffff] dark:text-black text-sm hover:brightness-110">
                    <i data-lucide="download" class="w-4 h-4"></i> Unduh Poster
                </a>
            </div>
        </div>`;

    const closeModal = () => {
        modal.style.opacity = '0';
        modal.querySelector('.modal-content').style.transform = 'scale(0.95)';
        setTimeout(() => modal.remove(), 300);
    };

    modal.addEventListener('click', closeModal);
    modal.querySelector('.modal-content').addEventListener('click', e => e.stopPropagation());
    modal.querySelector('.close-modal').addEventListener('click', closeModal);
    modalsContainer.appendChild(modal);
    createIconsSafe();
    
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
    }, 10);
}
    
// Fungsi untuk inisialisasi Footer
function initFooter() {
    document.getElementById('footer-year').textContent = new Date().getFullYear();
}
    
// Fungsi untuk inisialisasi Animasi Scroll
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Fungsi untuk menyembunyikan Scrollbar saat diam
function initScrollbarHiding() {
    let scrollTimer;
    const body = document.body;

    window.addEventListener('scroll', () => {
        body.classList.add('scrolling');
        
        clearTimeout(scrollTimer);

        scrollTimer = setTimeout(() => {
            body.classList.remove('scrolling');
        }, 1500);
    });
}

// Fungsi untuk inisialisasi Theme Toggle dan Logo
function initThemeToggle() {
    // Definisikan URL logo untuk setiap tema
    const LIGHT_LOGO_URL = "https://res.cloudinary.com/doqzgozyt/image/upload/v1758543444/logo_web_dceb0e.png";
    const DARK_LOGO_URL = "https://res.cloudinary.com/doqzgozyt/image/upload/v1758518959/emas_ong_ntxmg8.png";

    const logoImg = document.getElementById('mumtas-logo');
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    if (toggleBtns.length === 0 || !logoImg) return;

    // Fungsi untuk memperbarui logo berdasarkan tema
    function updateLogo() {
      if (document.documentElement.classList.contains('dark')) {
        logoImg.src = DARK_LOGO_URL;
      } else {
        logoImg.src = LIGHT_LOGO_URL;
      }
    }

    // Atur tema dan logo awal
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateLogo();

    // Tambahkan event listener untuk setiap tombol toggle
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
          localStorage.setItem('theme', 'dark');
        } else {
          localStorage.setItem('theme', 'light');
        }
        // Perbarui logo setelah tema berubah
        updateLogo();
      });
    });
}

// Panggil semua fungsi inisialisasi saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initHero();
    initProdukUnggulan();
    initGallery();
    initSemuaProduk();
    initLangkahSukses();
    initEvents();
    initFAQ();
    initFooter();
    initScrollAnimations();
    initScrollbarHiding();
    initThemeToggle();
    
    createIconsSafe();
});
