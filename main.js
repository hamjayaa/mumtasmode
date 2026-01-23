// =====================================
// DATA KONFIGURASI
// =====================================
const HERO_IMAGES = [
  "https://res.cloudinary.com/doqzgozyt/image/upload/v1759250629/mhm_zoiaiq.png",
  "https://res.cloudinary.com/doqzgozyt/image/upload/v1758520868/Gingerissimo_Botol_gbzm0e.png?q=80&w=1600&auto=format&fit-crop",
  "https://res.cloudinary.com/doqzgozyt/image/upload/v1759250693/nos_aant8n.png",
];
const PRODUCT_LIST = [
  { name: "Mumtas Mie – Habbasauda", desc: "Mie fungsional berbahan habbatussauda yang meningkatkan vitalitas dan menyeimbangkan hormon tubuh.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630927/Gemini_Generated_Image_izwimyizwimyizwi_kvj0w3.png" },
  { name: "Mumtas Mie – Collagen", desc: "Mie sehat kaya kolagen yang tidak hanya lezat, tetapi juga merawat elastisitas dan keremajaan kulit dari dalam..", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758629446/Gemini_Generated_Image_lya3t5lya3t5lya3_hanvvj.png" },
  { name: "Mumtas Mie - Moringa", desc: "Mie bergizi tinggi daun kelor untuk energi alami dan nutrisi lengkap setiap hari.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758629447/Gemini_Generated_Image_in7tavin7tavin7t_hqwkfs.png" },
  { name: "Mumtas Mie – Spirulina", desc: "Mie fungsional tinggi spirulina yang mendukung kekebalan tubuh dan kesehatan organ vital setiap hari.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630144/Gemini_Generated_Image_zfxj4kzfxj4kzfxj_mdk9uv.png" },
  { name: "Shark Oil Squa", desc: "Shark Oil Squa merupakan suplemen alami dari minyak hati ikan hiu yang kaya squalene.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1766112230/Shark_Oil_Squa_1_htjapw.png" },
  { name: "Gamatuk", desc: "Gamatuk merupakan suplemen perpaduan ekstrak ikan gabus yang kaya albumin dan ekstrak gamat yang tinggi kolagen.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1766112402/Gamatuk_1_gvy35u.png" }
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
  { code: "NOS-003", name: "Shark Oil Squa", category: "Herbal Care", short: "Suplemen premium dengan kandungan squalene murni yang membantu tubuh tetap bertenaga dan optimal setiap hari.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1766112212/SOS_Foto_AI_vhat0h.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1766112212/SOS_Foto_AI_vhat0h.png", "https://res.cloudinary.com/doqzgozyt/image/upload/v1766112230/Shark_Oil_Squa_1_htjapw.png", "https://res.cloudinary.com/doqzgozyt/image/upload/v1766112234/Shark_Oil_Squa_2_dzpazl.png", "https://res.cloudinary.com/doqzgozyt/image/upload/v1766112240/Shark_Oil_Squa_4_lgqlgx.png"], priceAgent: 175000, priceConsumer: 200000, points: 50, longDesc: { manfaat: `<p>Shark Oil Squa merupakan suplemen alami dari minyak hati ikan hiu yang kaya squalene, senyawa penting untuk meningkatkan oksigen dalam sel dan mendukung regenerasi jaringan. Konsumsi rutin membantu menjaga vitalitas, meningkatkan daya tahan tubuh, memperkuat sistem kekebalan secara menyeluruh, serta membantu regenerasi sel dan jaringan.</p>`, komposisi: `<p>Tiap softgel mengandung:<p>Squalene (dari minyak hati ikan hiu) 650mg.</p>`, penyajian: `<p>Untuk konsumsi: 1-2 kali sehari 1 softgel atau sesuai dengan petunjuk dokter.</p>` } },
  { code: "GMK-013", name: "Gamatuk", category: "Herbal Care", short: "Suplemen kolagen dan albumin alami untuk mempercepat pemulihan tubuh dari dalam.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1766111441/Gamatuk_Foto_AI_xcujvp.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1766111441/Gamatuk_Foto_AI_xcujvp.png", "https://res.cloudinary.com/doqzgozyt/image/upload/v1766112402/Gamatuk_1_gvy35u.png"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Gamatuk merupakan perpaduan ekstrak ikan gabus yang kaya albumin dan ekstrak gamat yang tinggi kolagen. Kombinasi ini membantu proses regenerasi jaringan, mempercepat penyembuhan luka, serta mendukung fungsi transportasi nutrisi dalam darah untuk kesehatan optimal.</p>`, komposisi: `<p>Ekstrak Stichopus variegatus 250mg.<p>Ekstrak Channa striata 200mg.</p>`, penyajian: `<p>Dewasa: 3 kali sehari 1 kapsul.<p>Anak: 1 kali sehari 1 kapsul.<p><p>Ikuti petunjuk pada kemasan.</p>` } },
  { code: "SKA-014", name: "Sari Kurma Angkak", category: "Herbal Care", short: "Perpaduan kurma murni dan angkak untuk menjaga stamina dan kesehatan tubuh.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_qyqyraqyqyraqyqy_tpjews.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_qyqyraqyqyraqyqy_tpjews.png"], priceAgent: 45000, priceConsumer: 55000, points: 10, longDesc: { manfaat: `<p>Sari Kurma Angkak diformulasikan dari sari kurma alami yang kaya energi serta angkak yang dikenal dalam pengobatan tradisional. Kombinasi ini memberikan manfaat optimal untuk menjaga vitalitas, meningkatkan produksi darah, dan mendukung fungsi organ secara alami.<p>Efektif untuk meningkatkan trombosit.<p>Cocok dikonsumsi saat masa pemulihan demam berdarah atau setelah sakit.</p>`, komposisi: `<p>Ekstrak Kurma.<p>Angkak.<p>Olive Oil.<p>Nigella Sativa.<p>Kayu Manis.<p>Madu, dll.</p>`, penyajian: `<p>Anak-anak: 3 x 1 sendok makan sehari.<p>Dewasa: 3 x 2 sendok makan sehari.<p>Penyakit kronis: 3 x 3 sendok makan sehari.</p>` } },
  { code: "MBM-016", name: "Minyak Bidara Mumtas", category: "Home Care", short: "Minyak bidara serbaguna untuk perlindungan spiritual dan kesehatan tubuh secara alami.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627659/Gemini_Generated_Image_ruc0frruc0frruc0_oq0ul5.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627659/Gemini_Generated_Image_ruc0frruc0frruc0_oq0ul5.png"], priceAgent: 30000, priceConsumer: 35000, points: 5, longDesc: { manfaat: `<p>Minyak Bidara Mumtas diracik dari herba-herba sunnah pilihan seperti Kayu Putih, Bidara Ruqyah, dan ramuan herba lain. Formulanya efektif digunakan sebagai sarana terapi ruqyah untuk membantu mengatasi gangguan jin dan sihir, meredakan masuk angin, serta mengatasi perut kembung secara alami dan aman.</p>`, komposisi: `<p>Minyak Kayu Putih.<p>Bidara Ruqyah dan ramuan herba lainnya.</p>`, penyajian: `<p>Oleskan secukupnya pada telapak tangan dan pijat perlahan ke seluruh tubuh atau area yang membutuhkan.</p>` } },
  { code: "MTM-018", name: "Minyak Telon Mumtas", category: "Home Care", short: "Minyak telon lembut yang memberikan perlindungan alami dan kenyamanan bagi bayi serta anak-anak.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_tn3d3ptn3d3ptn3d_atnmmd.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_tn3d3ptn3d3ptn3d_atnmmd.png"], priceAgent: 25000, priceConsumer: 30000, points: 5, longDesc: { manfaat: `<p>Minyak Telon Mumtas diformulasikan khusus dari herba sunnah berkualitas seperti Kayu Putih Gundih, Bidara Ruqyah, Habbatussauda, dan Zaitun. Kombinasi ini membantu menghangatkan tubuh bayi, meredakan perut kembung, serta meringankan gejala flu. Selain itu, minyak ini juga dapat digunakan sebagai sarana terapi ruqyah untuk menjaga ketenangan dan perlindungan anak secara alami.</p>`, komposisi: `<p>Minyak Adas.<p>Bidara Ruqyah dan ramuan herba lainnya.</p>`, penyajian: `<p>Oleskan secukupnya pada dada, perut, punggung, atau telapak kaki setelah mandi. Hindari area mata.</p>` } },
  { code: "EBM-023", name: "Elbuma", category: "Herbal Care", short: "Madu campuran bernutrisi tinggi untuk mendukung pertumbuhan anak secara alami.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758633751/Gemini_Generated_Image_no58b3no58b3no58_gnueme.png", imgs: ["https://source.unsplash.com/random/1600x1600/?cacing,extract"], priceAgent: 75000, priceConsumer: 100000, points: 20, longDesc: { manfaat: `<p>ElbuMa merupakan madu olahan yang diperkaya dengan ekstrak ikan gabus kaya albumin dan temulawak, dirancang khusus untuk menunjang tumbuh kembang anak. Kandungan alaminya membantu pembentukan tulang dan gigi, mendukung perkembangan otak, mempercepat penyembuhan luka, serta menjaga kesehatan mata. Selain itu, ElbuMa juga membantu meningkatkan berat badan dan menjaga daya tahan tubuh anak secara alami.</p>`, komposisi: `<p>Tiap sendok 15ml mengandung:<p>Mel Depuratum 9ml.<p>Ophiocephalus striatus ekstrak 3g.<p>Curcuma santhorrhiza rhizoma ekstrak 3g.</p>`, penyajian: `<p>Minum 3 x 2 sendok teh sehari.</p>` } },
  { code: "RSO-024", name: "Rosso", category: "Herbal Care", short: "Suplemen herbal premium untuk meningkatkan stamina, vitalitas, dan performa pria secara alami.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758617027/Gemini_Generated_Image_jpwil4jpwil4jpwi_ne8on4.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758617027/Gemini_Generated_Image_jpwil4jpwil4jpwi_ne8on4.png"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Rosso adalah suplemen kapsul yang diformulasikan khusus untuk pria dengan perpaduan bahan herbal berkualitas tinggi seperti Eurycoma longifolia (Tongkat Ali), Piper retrofractum (Cabe Jawa), Tribulus terrestris, Piper nigrum (Lada Hitam), Panax ginseng, dan Pimpinella prauatjan. Kombinasi bahan ini membantu meningkatkan kadar testosteron alami, memperlancar sirkulasi darah, meningkatkan energi dan daya tahan tubuh, serta menjaga performa seksual dan kebugaran pria secara menyeluruh.</p>`, komposisi: `<p>Eurycoma longifolia Radix 500mg.<p>Piper retrofractum Fructus 500mg.<p>Tribulus terrestris fructus 500mg.<p>Piper nigrum Fructus 500mg.<p>Panax ginseng Radix 500mg.<p>Pimpinella prauatjan Herba 500mg.</p>`, penyajian: `<p>Minum 3 x 2 kapsul sehari.</p>` } },
  { code: "BSV-025", name: "Best-V", category: "Herbal Care", short: "Suplemen herbal khusus wanita untuk menjaga kesehatan area kewanitaan dan keseimbangan alami tubuh.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758617028/Gemini_Generated_Image_4m8tfn4m8tfn4m8t_fckf9r.png", imgs: ["https://source.unsplash.com/random/1600x1600/?eye,health"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Best-V diformulasikan dari kombinasi bahan herbal pilihan yang secara tradisional digunakan untuk menjaga kesehatan organ reproduksi wanita. Kandungannya membantu mengurangi lendir berlebih, menjaga pH alami, mencegah iritasi, serta memberikan sensasi segar dan nyaman sepanjang hari. Dengan konsumsi rutin, BSV membantu memelihara fungsi organ kewanitaan sekaligus mendukung keseimbangan hormonal secara alami.</p>`, komposisi: `<p>Tiap kapsul 500mg mengandung:<p>Kaempferia angustifolia rhizoma 150mg.<p>Quercus lucitanica 50mg.<p>Parameria laevigata cortex 100mg.<p>Boesenbergia pandurata rhizoma 200mg.</p>`, penyajian: `<p>Minum 3 x 2 kapsul sehari.</p>` } },
  { code: "LTG-026", name: "Langtugin", category: "Herbal Care", short: "Suplemen herbal alami untuk membantu meluruhkan batu ginjal dan menjaga kesehatan saluran kemih.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?joint,pain"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Langtugin diformulasikan dari ekstrak Sonchus arvensis folium (daun tempuyung) yang dikenal dalam pengobatan tradisional sebagai peluruh batu urin secara alami. Kandungannya membantu menghancurkan dan mengeluarkan batu ginjal, mencegah pembentukan batu baru, serta mendukung fungsi ginjal dan saluran kemih tetap sehat. Cocok digunakan untuk meredakan rasa tidak nyaman akibat batu ginjal dan menjaga kesehatan saluran kemih jangka panjang.</p>`, komposisi: `<p>Tiap kapsul mengandung ekstrak setara:<p>Sonchus arvensis folium 2,8g</p>`, penyajian: `<p>Minum 3 x 2 kapsul sehari.</p>` } },
  { code: "SLZ-027", name: "Silangzing", category: "Herbal Care", short: "Suplemen herbal alami untuk membantu pembakaran lemak dan mendukung penurunan berat badan secara sehat.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?cough,remedy"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Silangzing mengandung Guazuma ulmifolia folium (daun jati belanda) sebanyak 500 mg per kapsul, bahan herbal yang telah lama digunakan untuk mendukung program diet alami. Kandungannya membantu mempercepat metabolisme, mengurangi penyerapan lemak, serta mendukung proses detoksifikasi tubuh. Dengan konsumsi rutin dan dibarengi pola hidup sehat, Silangzing membantu mencapai berat badan ideal secara efektif dan aman.</p>`, komposisi: `<p>Tiap kapsul mengandung:<p>Guazuma ulmifolia folium 500mg.</p>`, penyajian: `<p>Minum 3 x 2 kapsul sehari.</p>` } },
  { code: "CMV-028", name: "Curmaval", category: "Herbal Care", short: "Suplemen herbal pendukung terapi kanker dengan kekuatan antioksidan alami.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627659/Gemini_Generated_Image_u0ku9qu0ku9qu0ku_gbyjsm.png", imgs: ["https://source.unsplash.com/random/1600x1600/?digestion"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Curmaval diformulasikan dari Curcuma mangga rhizoma (ekstrak temulawak mangga) sebanyak 500 mg per kapsul, yang dikenal kaya akan senyawa antioksidan dan fitokimia penting. Kandungannya membantu meningkatkan sistem kekebalan tubuh, mendukung proses pemulihan, serta membantu mengurangi efek samping dari terapi kanker. Dengan konsumsi rutin, Curmaval menjadi pendamping alami yang membantu menjaga vitalitas dan kualitas hidup penderita kanker.</p>`, komposisi: `<p>Tiap kapsul mengandung:<p>Curcuma mangga rhizoma ekstrak 500mg.</p>`, penyajian: `<p>Minum 3 x 2 kapsul sehari.</p>` } },
  { code: "ZCV-029", name: "ZozCov", category: "Herbal Care", short: "Suplemen herbal sinergis untuk meningkatkan daya tahan tubuh dan menjaga kesehatan secara menyeluruh.", img: "https://source.unsplash.com/random/1200x1200/?immunity,booster", imgs: ["https://source.unsplash.com/random/1600x1600/?immunity,booster"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>ZozCov diformulasikan dari perpaduan dua ekstrak herbal berkualitas tinggi, yaitu Andrographis paniculata herba (sambiloto) 250 mg dan Centella asiatica herba (pegagan) 250 mg per kapsul. Kombinasi ini bekerja sinergis untuk meningkatkan sistem kekebalan tubuh, memperbaiki sirkulasi darah, mempercepat pemulihan, serta menjaga fungsi otak dan kesehatan kulit. ZozCov cocok dikonsumsi sebagai suplemen harian untuk menjaga tubuh tetap bugar dan kuat menghadapi aktivitas.</p>`, komposisi: `<p>Tiap kapsul mengandung:<p>Andrographis paniculata herba ekstrak 250mg.<p>Centella asiatica herba ekstrak 250mg.</p>`, penyajian: `<p>Minum 3 x 2 kapsul sehari.</p>` } },
  { code: "MHM-030", name: "Minyak Herba Mumtas (MHM)", category: "Herbal Care", short: "Minyak serbaguna berbahan herbal alami yang efektif membantu berbagai keluhan kesehatan, mulai dari luar hingga dalam tubuh.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png"], priceAgent: 45000, priceConsumer: 60000, points: 10, longDesc: { manfaat: `<p>Minyak Herba Mumtas adalah minyak herbal serbaguna yang diramu dari lebih dari 100 jenis tumbuhan berkhasiat, termasuk yang digunakan burung But-But untuk membangun sarang. Kombinasi bahan seperti Andrographis paniculata, Eurycoma longifolia, Nigella sativa, Cinnamomum verum, Kaempferia galanga, dan Oleum cocos nucifera menjadikannya solusi alami untuk berbagai masalah kesehatan. Minyak ini dapat digunakan secara dibalurkan, dioles, digosok, diteteskan, atau diminum, sehingga berfungsi sebagai pertolongan pertama alami di rumah.</p>`, komposisi: `<p>Tiap 100 mL mengandung ekstrak setara dengan:<p>Andrographis paniculata folium – 4 g<p>Eurycoma longifolia radix – 5 g<p>Nigella sativa semen – 3 g<p>Cinnamomum verum cortex – 3 g<p>Kaempferia galanga rhizoma – 5 g<p>Oleum cocos nucifera fructus - ad 100 mL</p>`, penyajian: `<p>Oleskan secukupnya pada bagian tubuh yang memerlukan perawatan.</p>` } },
  { code: "DBV-031", name: "Diabevitto", category: "Herbal Care", short: "Suplemen herbal pendukung pengelolaan kadar gula darah secara alami dan aman.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630902/radix_st8ncy.png", imgs: ["https://source.unsplash.com/random/1600x1600/?diabetes,herbal"], priceAgent: 100000, priceConsumer: 125000, points: 25, longDesc: { manfaat: `<p>Diabevitto diformulasikan dari kombinasi Andrographis paniculata herba (sambiloto) 125 mg dan Tinospora crispa caulis (brotowali) 125 mg per kapsul. Kedua bahan herbal ini telah lama digunakan dalam pengobatan tradisional untuk membantu menjaga kadar gula darah tetap stabil, memperbaiki metabolisme, serta mendukung fungsi pankreas. Dengan konsumsi rutin, Diabevitto membantu meringankan gejala diabetes dan menjaga kesehatan sistem pencernaan serta peredaran darah.</p>`, komposisi: `<p>Tiap kapsul mengandung:<p>Andrographis paniculata herba 125mg.<p>Tinospora crispa caulis 125mg.</p>`, penyajian: `<p>Minum 3 x 2 kapsul sehari.</p>` } },
  { code: "PSA-032", name: "Spirulina Al Kautsar", category: "Herbal Care", short: "Superfood alami kaya nutrisi untuk meningkatkan imunitas, energi, dan kesehatan tubuh secara menyeluruh.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_yrfjxjyrfjxjyrfj_avwrxo.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_yrfjxjyrfjxjyrfj_avwrxo.png"], priceAgent: 100000, priceConsumer: 120000, points: 25, longDesc: { manfaat: `<p>Prima Spirulina Al Kautsar mengandung Spirulina murni 500 mg per kapsul, dikenal sebagai salah satu superfood terbaik dengan kandungan protein tinggi, vitamin, mineral, dan antioksidan. Spirulina membantu memperkuat sistem kekebalan tubuh, menjaga kesehatan jantung, mendukung fungsi hati dan pencernaan, serta meningkatkan energi harian. Cocok dikonsumsi sebagai suplemen harian untuk menjaga daya tahan tubuh tetap prima.</p>`, komposisi: `<p>Tiap kapsul mengandung:<p>Spirulina 500mg.</p>`, penyajian: `<p>Minum 3 x 2 kapsul sehari.</p>` } },
  { code: "SSA-006", name: "Sehat Ayu CicaRosella Serum", category: "Beauty Care", short: "Serum wajah herbal premium untuk mencerahkan kulit, menyamarkan noda, dan menjaga kelembapan alami wajah.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630414/Gemini_Generated_Image_o5rrmzo5rrmzo5rr_ydrjzh.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758630414/Gemini_Generated_Image_o5rrmzo5rrmzo5rr_ydrjzh.png", "https://source.unsplash.com/random/1600x1600/?rose,extract"], priceAgent: 100000, priceConsumer: 120000, points: 20, longDesc: { manfaat: `<p>Cicarosella Serum Sehat Ayu diformulasikan dengan perpaduan bahan alami berkualitas seperti Centella asiatica dan Hibiscus subderiva yang bekerja sinergis untuk menyamarkan noda hitam, meratakan warna kulit, serta mempercepat regenerasi sel. Kandungan Aloe barbadensis dan Rosa damascena oil memberikan hidrasi mendalam sekaligus menjaga elastisitas dan kesegaran kulit. Teksturnya yang ringan mudah meresap dan nyaman digunakan setiap hari, menjadikan kulit tampak lebih cerah, halus, dan sehat bercahaya.</p>`, komposisi: `<p>Aqua, Glycerin, Centella Asiatica Extract, Hibiscus Subderiva Extract, Aloe Barbadensis Extract, Propylene Glycol, Tocopheryl Acetate, Phenoxyethanol, Xanthan Gum, Hydroxyethylcellulose, Rosa Damascena Flower Oil, Edta.</p>`, penyajian: `<p>Teteskan 2-3 tetes serum pada wajah yang sudah bersih, pijat lembut hingga meresap. Gunakan pagi atau malam hari.</p>` } },
  { code: "FWS-007", name: "Sehat Ayu CicaRosella Face Wash", category: "Beauty Care", short: "Sabun wajah herbal lembut yang membersihkan secara menyeluruh sekaligus menutrisi kulit agar tetap sehat dan segar.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?face,wash"], priceAgent: 60000, priceConsumer: 75000, points: 10, longDesc: { manfaat: `<p>Cicarosella Face Wash Sehat Ayu diformulasikan dengan kombinasi bahan alami seperti Centella asiatica, Aloe barbadensis, Hibiscus subderiva, dan Swiftlet Nest Extract (ekstrak sarang burung walet). Formula ini efektif mengangkat kotoran, minyak, dan sel kulit mati tanpa membuat kulit kering, sekaligus membantu menenangkan, melembapkan, dan menjaga keseimbangan kulit. Cocok untuk semua jenis kulit, termasuk kulit sensitif, memberikan hasil kulit bersih, halus, dan tampak cerah alami.</p>`, komposisi: `<p>Aqua, Cocamidopropyl Betaine, Cocamide DEA, Glycerin, Fragrance, Aloe Barbadensis Leaf Extract, Swiftlet Nest Extract, Hibiscus Subderiva Flower Extract, Phenoxyethanol, Hydroxyethylcellulose, Sodium Chloride, Centella Asiatica Extract, Edta.</p>`, penyajian: `<p>Basahi wajah, ambil produk secukupnya, busakan dengan air, lalu usap ke seluruh wajah. Bilas hingga bersih.</p>` } },
  { code: "DCS-008", name: "Sehat Ayu CicaRosella Day Cream", category: "Beauty Care", short: "Krim siang herbal premium yang melindungi kulit dari radikal bebas sekaligus menjaga kelembapan dan kecerahan sepanjang hari.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?day,cream"], priceAgent: 95000, priceConsumer: 115000, points: 20, longDesc: { manfaat: `<p>Cicarosella Day Cream Sehat Ayu diformulasikan dengan bahan-bahan alami pilihan seperti Centella asiatica, Hibiscus subderiva, Aloe barbadensis, Swiftlet Nest Extract, Punica granatum (ekstrak delima), dan Rosa damascena yang bekerja sinergis untuk menutrisi, melembapkan, dan melindungi kulit dari paparan polusi serta sinar matahari. Kandungan antioksidan dan vitamin E membantu memperlambat tanda penuaan dini, sementara titanium dioxide memberikan perlindungan ringan terhadap sinar UV. Teksturnya ringan dan cepat meresap, cocok digunakan sehari-hari untuk hasil kulit tampak segar, halus, dan bercahaya.</p>`, komposisi: `<p>Aqua De Mineralisata, Centella Asiatica Extract, Hibiscus Subderiva Flower Extract, Aloe Barbadensis Leaf Extract, Swiftlet Nest Extract, Punica Granatum Extract, Glycerin, Laureth-7, C13-14 Isoparaffin, Propylene Glycol, Tocopheryl Acetate, Jojoba Oil, Polyacrylamide, Phenoxyethanol, Titanium Dioxide, Rosa Damascena Flower Oil,Edta.</p>`, penyajian: `<p>Oleskan secara merata pada wajah dan leher di pagi hari, setelah menggunakan serum.</p>` } },
  { code: "NCS-009", name: "Sehat Ayu CicaRosella Night Cream", category: "Beauty Care", short: "Krim malam bernutrisi tinggi untuk regenerasi kulit, memperbaiki tekstur, dan menjaga keremajaan saat tidur.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?night,cream"], priceAgent: 95000, priceConsumer: 115000, points: 20, longDesc: { manfaat: `<p>Cicarosella Night Cream Sehat Ayu diformulasikan secara khusus untuk bekerja optimal di malam hari saat proses regenerasi kulit berlangsung. Kombinasi bahan alami seperti Centella asiatica, Hibiscus subderiva, Aloe barbadensis, Swiftlet Nest Extract, dan Rosa damascena membantu mempercepat pembaruan sel kulit, menjaga kelembapan mendalam, serta meredakan iritasi dan peradangan. Kandungan vitamin E dan antioksidan kuat di dalamnya membantu mengurangi tanda penuaan dini, menyamarkan noda hitam, dan membuat kulit tampak lebih sehat, halus, serta bercahaya saat bangun tidur.</p>`, komposisi: `<p>Aqua, Centella Asiatica Extract, Hibiscus Subderiva Flower Extract, Aloe Barbadensis Leaf Extract, Swiftlet Nest Extract, Glycerin, Propylene Glycol, Tocopheryl Acetate, Laureth-7, C13-14 Isoparaffin, Polyacrylamide, Phenoxyethanol, Rosa Damascena Flower Oil, Edta.</p>`, penyajian: `<p>Gunakan pada malam hari setelah membersihkan wajah. Oleskan merata dan biarkan semalaman.</p>` } },
  { code: "FSS-010", name: "Full Set Sehat Ayu CicaRosella", category: "Beauty Care", short: "Rangkaian perawatan wajah herbal premium yang dirancang untuk membersihkan, menutrisi, melindungi, dan meregenerasi kulit secara menyeluruh.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?skincare,kit"], priceAgent: 295000, priceConsumer: 350000, points: 50, longDesc: { manfaat: `<p>Paket lengkap untuk rutinitas perawatan wajah pagi dan malam. Membantu mengatasi masalah jerawat, mencerahkan, dan merawat kulit secara optimal.</p><p>Isi paket:<br>• Sehat Ayu CicaRosella Serum<br>• Sehat Ayu CicaRosella Face Wash<br>• Sehat Ayu CicaRosella Day Cream<br>• Sehat Ayu CicaRosella Night Cream</p>`, komposisi: `<p>Terdiri dari semua produk Sehat Ayu CicaRosella yang diformulasikan secara sinergis.</p>`, penyajian: `<p>Gunakan sesuai urutan dan petunjuk pemakaian masing-masing produk untuk hasil terbaik.</p>` } },
  { code: "MRZ-033", name: "Teh Morizen Celup", category: "Healthy Foods", short: "Teh herbal kaya antioksidan yang memadukan kekuatan nutrisi kelor dan kebaikan teh hijau untuk kesehatan optimal.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?moringa,tea"], priceAgent: 70000, priceConsumer: 85000, points: 15, longDesc: { manfaat: `<p>Teh Morizen merupakan perpaduan sinergis antara Moringa oleifera folium (daun kelor) 2,7 g dan Camellia sinensis folium (daun teh hijau) 0,3 g. Kombinasi ini menghasilkan minuman bernutrisi tinggi yang kaya vitamin, mineral, protein, serta antioksidan polifenol. Teh ini membantu meningkatkan daya tahan tubuh, menjaga kesehatan jantung, memperbaiki metabolisme, serta memberikan efek relaksasi alami.</p>`, komposisi: `<p>Setiap kantong celup mengandung:<p>Moringa oleifera folium 2,7gr.<p>Camellia sinensis folium 0,3gr.</p>`, penyajian: `<p>Seduh 2 x 1 kantong sehari.<p>Seduh dengan air panas 150ml selama 3 menit.</p>` } },
  { code: "MDW-034", name: "Teh Mahkota Dewa Celup", category: "Healthy Foods", short: "Teh herbal dengan cita rasa khas yang mendukung daya tahan tubuh dan kesehatan secara menyeluruh.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?herbal,tea"], priceAgent: 70000, priceConsumer: 85000, points: 15, longDesc: { manfaat: `<p>Teh Mahkota Dewa merupakan perpaduan antara Phaleria macrocarpa fructus (buah Mahkota Dewa) dan Camellia sinensis folium (daun teh hijau). Kandungan senyawa bioaktif seperti flavonoid, saponin, dan alkaloid berpadu dengan antioksidan teh hijau untuk membantu menjaga daya tahan tubuh, memperbaiki metabolisme, dan melawan radikal bebas. Teh ini cocok dikonsumsi setiap hari untuk menjaga kesehatan tubuh secara alami.</p>`, komposisi: `<p>Setiap kantong celup mengandung:<p>Phaleriae macrocarpa fructus 2,7gr.<p>Camellia sinensis folium 0,3gr.</p>`, penyajian: `<p>Seduh 2 x 1 kantong sehari.<p>Seduh dengan air panas 150ml selama 3 menit.</p>` } },
  { code: "CZV-035", name: "Teh Cenzvizt Celup", category: "Healthy Foods", short: "Teh herbal menyegarkan yang mendukung fungsi otak, kesehatan kulit, dan daya tahan tubuh.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?diabetes,tea"], priceAgent: 70000, priceConsumer: 85000, points: 15, longDesc: { manfaat: `<p>Teh Cenzvizt diformulasikan dari kombinasi Centella asiatica herba (pegagan) 2,7 g dan Camellia sinensis folium (daun teh hijau) 0,3 g. Pegagan dikenal mampu meningkatkan fungsi kognitif, mempercepat penyembuhan sel, dan merawat kesehatan kulit, sementara teh hijau kaya akan antioksidan yang membantu melawan radikal bebas. Perpaduan ini menghasilkan minuman herbal dengan efek relaksasi lembut dan manfaat kesehatan menyeluruh.</p>`, komposisi: `<p>Setiap kantong celup mengandung:<p>Centella asiatica herba 2,7gr.<p>Camellia sinensis folium 0,3gr</p>`, penyajian: `<p>Seduh 2 x 1 kantong sehari.<p>Seduh dengan air panas 150ml selama 3 menit.</p>` } },
  { code: "ZNV-036", name: "Teh Zirzen Celup", category: "Healthy Foods", short: "Teh herbal dengan kekuatan alami daun sirsak untuk menjaga daya tahan tubuh dan melawan radikal bebas.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?joint,tea"], priceAgent: 70000, priceConsumer: 85000, points: 15, longDesc: { manfaat: `<p>Teh Zirzen Vit diformulasikan dari Annona muricata folium (daun sirsak) 2,7 g yang dikenal kaya akan senyawa bioaktif seperti acetogenins, dikombinasikan dengan Camellia sinensis folium (daun teh hijau) 0,3 g yang kaya antioksidan. Kombinasi ini membantu meningkatkan sistem imun, mendukung proses detoksifikasi, dan memberikan perlindungan seluler terhadap radikal bebas. Cocok dikonsumsi secara rutin untuk menjaga kesehatan tubuh secara menyeluruh.</p>`, komposisi: `<p>Setiap kantong celup mengandung:<p>Annona muricata folium 2,7gr.<p>Camellia sinensis folium 0,3gr</p>`, penyajian: `<p>Seduh dengan air panas 150ml selama 3 menit.</p>` } },
  { code: "WDU-037", name: "Wedang Uwuh Celup", category: "Healthy Foods", short: "Minuman rempah tradisional khas Yogyakarta yang menghangatkan tubuh dan memperkuat daya tahan secara alami.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_no58b3no58b3no58_uobfhj.png", imgs: ["https://source.unsplash.com/random/1600x1600/?wedang,uwuh"], priceAgent: 70000, priceConsumer: 85000, points: 15, longDesc: { manfaat: `<p>Wedang Uwuh Celup diracik dari berbagai rempah pilihan berkualitas tinggi seperti jahe, kayu manis, cengkih, daun pala, dan daun secang. Ramuan klasik ini terkenal karena kemampuannya meningkatkan sirkulasi darah, membantu detoksifikasi, serta memberikan efek relaksasi dan kehangatan. Cocok dikonsumsi saat cuaca dingin atau ketika tubuh membutuhkan energi tambahan alami.</p>`, komposisi: `<p>Setiap kantong celup mengandung:<p>Cinnamomum burmannii cortex 0,25gr.<p>Caesalpinia sappan lignum 1gr.<p>Zingiber officinale var. rubrum rhizoma 1gr.<p>Cinnamomum burmannii folium 0,25gr.<p>Syzygium aromaticum flos 0,25gr.<p>Amomum compactum fructus 0,25gr.</p>`, penyajian: `<p>Seduh dengan air panas 150ml selama 3 menit.</p>` } },
  { code: "MMM-040", name: "Mumtas Mie – Moringa", category: "Healthy Foods", short: "Mie bergizi tinggi daun kelor untuk energi alami dan nutrisi lengkap setiap hari.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758629447/Gemini_Generated_Image_in7tavin7tavin7t_hqwkfs.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758629447/Gemini_Generated_Image_in7tavin7tavin7t_hqwkfs.png"], priceAgent: 10000, priceConsumer: 12000, points: 2, longDesc: { manfaat: `<p>Varian ini diperkaya dengan tepung daun kelor (Moringa oleifera) yang mengandung antioksidan kuat, vitamin A, C, dan kalsium. Kelor dikenal meningkatkan imunitas, menurunkan kadar gula darah, dan membantu produksi ASI pada ibu menyusui. Kuah soto yang gurih dan aromatik menjadikannya pilihan tepat untuk santapan sehat dan bergizi.</p>`, komposisi: `<p>Tepung terigu, tepung mocaf, air, garam, telur, tepung daun kelor, bumbu soto low-MSG, minyak soto, cabai bubuk, koya</p>`, penyajian: `<p>Rebus mie dalam air mendidih selama minimal 5 menit. Tuangkan dalam bumbu kuah soto panas, dan sajikan selagi hangat.</p>` } },
  { code: "MMH-041", name: "Mumtas Mie – Habbasauda", category: "Healthy Foods", short: "Mie fungsional berbahan habbatussauda yang meningkatkan vitalitas dan menyeimbangkan hormon tubuh.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630927/Gemini_Generated_Image_izwimyizwimyizwi_kvj0w3.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758630927/Gemini_Generated_Image_izwimyizwimyizwi_kvj0w3.png", "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630927/Gemini_Generated_Image_izwimyizwimyizwi_kvj0w3.png"], priceAgent: 10000, priceConsumer: 12000, points: 2, longDesc: { manfaat: `<p>Mie Mocaf Habbatussauda diformulasikan dari tepung mocaf, telur, dan tepung habbatussauda (Nigella sativa), dikenal sejak lama sebagai “obat segala penyakit” dalam pengobatan tradisional. Kandungan aktifnya membantu meningkatkan imunitas, meredakan peradangan, memperbaiki kualitas sperma, dan menyeimbangkan hormon pada wanita. Kuah kari yang kaya rempah menjadikannya nikmat sekaligus bernutrisi tinggi.</p>`, komposisi: `<p>Tepung terigu, tepung mocaf, air, garam, telur, tepung habbatussauda, bumbu kari low-MSG, minyak kari.</p>`, penyajian: `<p>Rebus mie dalam air mendidih selama minimal 5 menit. Masukkan bumbu kuah kari, dan mie siap disajikan selagi hangat.</p>` } },
  { code: "MMC-042", name: "Mumtas Mie – Collagen", category: "Healthy Foods", short: "Mie sehat kaya kolagen yang tidak hanya lezat, tetapi juga merawat elastisitas dan keremajaan kulit dari dalam.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_ec93u5ec93u5ec93_xn3hvz.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758627658/Gemini_Generated_Image_ec93u5ec93u5ec93_xn3hvz.png", "https://source.unsplash.com/random/1600x1600/?fried,noodles"], priceAgent: 10000, priceConsumer: 12000, points: 2, longDesc: { manfaat: `<p>Mie Mocaf Kolagen diproduksi dari bahan pilihan seperti tepung mocaf, tepung terigu, telur, dan tepung kolagen yang kaya protein. Kandungan kolagen alaminya membantu menjaga kekencangan dan kelembapan kulit, mencegah penuaan dini, serta mempercepat proses penyembuhan luka. Diproses dengan teknik oven tanpa penggorengan, mie ini bebas minyak jenuh, MSG tambahan, dan pengawet buatan.</p>`, komposisi: `<p>Tepung terigu, tepung mocaf, air, garam, telur, tepung kolagen, bumbu goreng low-MSG.</p>`, penyajian: `<p>Rebus mie selama minimal 5 menit, tiriskan, lalu campur dengan bumbu. Aduk rata dan sajikan selagi hangat.</p>` } },
  { code: "MMS-043", name: "Mumtas Mie – Spirulina", category: "Healthy Foods", short: "Mie fungsional tinggi spirulina yang mendukung kekebalan tubuh dan kesehatan organ vital setiap hari.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758630144/Gemini_Generated_Image_zfxj4kzfxj4kzfxj_mdk9uv.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758630144/Gemini_Generated_Image_zfxj4kzfxj4kzfxj_mdk9uv.png", "https://source.unsplash.com/random/1600x1600/?green,noodles"], priceAgent: 10000, priceConsumer: 12000, points: 2, longDesc: { manfaat: `<p>Diperkaya dengan tepung spirulina dan rumput laut berkualitas, varian ini mengandung nutrisi lengkap seperti protein, zat besi, vitamin B-kompleks, serta antioksidan. Spirulina dikenal membantu menjaga daya tahan tubuh, mendukung kesehatan jantung, dan mengontrol kadar gula darah. Teksturnya lembut, rasanya gurih, dan tetap sehat tanpa MSG tambahan atau pengawet.</p>`, komposisi: `<p>Tepung terigu, tepung mocaf, air, garam, telur, tepung spirulina, bumbu goreng low-MSG</p>`, penyajian: `<p>Rebus mie selama minimal 5 menit, tiriskan, campurkan bumbu dan aduk rata. Siap disajikan.</p>` } },
  { code: "MSS-038", name: "Mumtas Shampoo", category: "Home Care", short: "Shampoo herbal premium yang merawat rambut dari akar hingga ujung, memberikan kekuatan, kilau, dan pertumbuhan optimal.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758509762/Gemini_Generated_Image_x7iepkx7iepkx7ie_emokez.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758509762/Gemini_Generated_Image_x7iepkx7iepkx7ie_emokez.png"], priceAgent: 35000, priceConsumer: 40000, points: 5, longDesc: { manfaat: `<p>Mumtas Shampoo diformulasikan dengan kombinasi bahan alami berkualitas tinggi seperti Castor oil, Ginseng, Zaitun, Aloe vera, Habbatussauda, dan Keratin. Perpaduan ini bekerja menutrisi folikel rambut, merangsang pertumbuhan rambut baru, menguatkan akar, serta menjaga kelembapan dan kilau alami rambut. Kandungan antioksidannya membantu melawan radikal bebas penyebab kerusakan rambut, sementara keratin memberikan efek halus, lembut, dan bebas kusut. Cocok untuk semua jenis rambut, termasuk yang rentan rontok atau rusak akibat styling.</p>`, komposisi: `<p>Castor Oil, Ginseng, Olea europaea (Minyak Zaitun), Aloe Vera, Nigella sativa (Habbatussauda), Keratin.</p>`, penyajian: `<p>Basahi rambut, tuangkan shampoo secukupnya, pijat kulit kepala dengan lembut, lalu bilas hingga bersih.</p>` } },
  { code: "MBW-039", name: "Mumtas Body Wash", category: "Home Care", short: "Sabun mandi herbal yang membersihkan sekaligus menutrisi kulit agar tetap sehat, lembap, dan awet muda.", img: "https://res.cloudinary.com/doqzgozyt/image/upload/v1758509761/Gemini_Generated_Image_carr6ccarr6ccarr_tjdh04.png", imgs: ["https://res.cloudinary.com/doqzgozyt/image/upload/v1758509761/Gemini_Generated_Image_carr6ccarr6ccarr_tjdh04.png"], priceAgent: 35000, priceConsumer: 40000, points: 5, longDesc: { manfaat: `<p>Mumtas Body Wash diformulasikan dari bahan-bahan alami seperti Susu kambing, Habbatussauda, Kolagen, dan Aloe vera yang bekerja sinergis untuk membersihkan kulit secara lembut tanpa menghilangkan kelembapan alaminya. Kandungan Alpha Hydroxy Acid (AHA) dari susu kambing membantu eksfoliasi lembut, mengangkat sel kulit mati, dan membuat kulit tampak cerah serta halus. Habbatussauda dan Kolagen mendukung regenerasi sel kulit, menjaga elastisitas, serta melawan tanda-tanda penuaan dini, sementara Aloe vera memberikan efek menenangkan dan melembapkan.</p>`, komposisi: `<p>Susu kambing, Habbatussauda, Kolagen, Aloe vera.</p>`, penyajian: `<p>Tuangkan ke telapak tangan atau spons mandi, usapkan ke seluruh tubuh hingga berbusa, lalu bilas hingga bersih.</p>` } }
];
const CATEGORIES = ["Herbal Care", "Beauty Care", "Healthy Foods", "Home Care"];
const FAQ_ITEMS = [
  { q: "Apa itu Mumtas?", a: "Mumtas adalah platform yang menawarkan gaya hidup halal melalui produk berkualitas premium, mulai dari makanan, minuman, kecantikan, hingga herbal. Kami mengusung konsep 'Dari Konsumsi ke Komisi' di mana setiap pembelian bisa diubah menjadi peluang income." },
  { q: "Apa perbedaan harga konsumen dan agen?", a: "Harga konsumen adalah harga eceran yang disarankan, sedangkan harga agen adalah harga khusus untuk anggota yang telah mendaftar dan memenuhi syarat, memungkinkan mereka mendapatkan keuntungan dari penjualan." },
  { q: "Bagaimana cara menjadi agen Mumtas?", a: "Anda bisa mendaftar melalui sponsor atau orang yang memperkenalkan Mumtas kepada Anda. Mereka akan membantu Anda dalam proses pendaftaran. Setelah terdaftar, Anda akan mendapatkan akses ke MOS (Mumtas Online System) untuk memantau bisnis Anda." },
  { q: "Apa itu poin dan bagaimana cara mendapatkannya?", a: "Poin adalah sistem reward yang didapatkan dari setiap konsumsi produk. Poin pada pembelanjaan ini yang akan menjadi perhitungan untuk berbagai bonus atau hadiah sesuai dengan skema yang berlaku di Mumtas." },
  { q: "Apakah produk Mumtas halal dan aman?", a: "Ya, semua produk Mumtas diformulasikan dari bahan-bahan yang dijamin halal dan aman. Kami memastikan setiap produk diproduksi dengan standar kualitas tinggi untuk memberikan manfaat optimal bagi konsumen." }
];
const LANGKAH_SUKSES = [
    { t: 'Rasakan Manfaat', d: 'Mulai dari konsumsi harian untuk memahami kualitas produk.' },
    { t: 'Ceritakan & Bagikan', d: 'Sharing pengalaman jujur ke lingkunganmu — organik tanpa maksa.' },
    { t: 'Duplikasi 200 Poin', d: 'Bangun kebiasaan 200 poin bulanan dan ajarkan ke tim/jaringan.' },
    { t: 'Optimalkan dengan MOS', d: 'Pantau jaringan, aktivitas, dan bonus lewat MOS (Mumtas Online System).' },
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
  const LIGHT_LOGO_URL = "https://res.cloudinary.com/doqzgozyt/image/upload/v1758699510/logo_light_a77nhs.png";
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
    const LIGHT_LOGO_URL = "https://res.cloudinary.com/doqzgozyt/image/upload/v1758699510/logo_light_a77nhs.png";
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
