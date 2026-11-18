/* =========================================================
   DATA
   ========================================================= */
const WORDS = [
  /* ===== KOSAKATA LAMA (53 kata) ===== */
  {w:"abundant",p:"/əˈbʌn.dənt/",t:"adjective",m:"melimpah, banyak sekali",e:"The region has abundant natural resources.",et:"Wilayah itu memiliki sumber daya alam yang melimpah."},
  {w:"achieve",p:"/əˈtʃiːv/",t:"verb",m:"mencapai, meraih",e:"She worked hard to achieve her goals.",et:"Dia bekerja keras untuk mencapai tujuannya."},
  {w:"advantage",p:"/ədˈvɑːn.tɪdʒ/",t:"noun",m:"keuntungan, manfaat",e:"Speaking two languages is a big advantage.",et:"Bisa berbicara dua bahasa adalah keuntungan besar."},
  {w:"advise",p:"/ədˈvaɪz/",t:"verb",m:"menasihati, menyarankan",e:"I advise you to see a doctor.",et:"Saya menyarankan kamu menemui dokter."},
  {w:"anxious",p:"/ˈæŋk.ʃəs/",t:"adjective",m:"cemas, gelisah",e:"He felt anxious before the interview.",et:"Dia merasa cemas sebelum wawancara."},
  {w:"appreciate",p:"/əˈpriː.ʃi.eɪt/",t:"verb",m:"menghargai, bersyukur",e:"I really appreciate your help.",et:"Saya sangat menghargai bantuanmu."},
  {w:"available",p:"/əˈveɪ.lə.bəl/",t:"adjective",m:"tersedia",e:"The room is available for rent.",et:"Kamar itu tersedia untuk disewa."},
  {w:"avoid",p:"/əˈvɔɪd/",t:"verb",m:"menghindari",e:"Try to avoid eating too much sugar.",et:"Coba hindari makan terlalu banyak gula."},
  {w:"benefit",p:"/ˈben.ɪ.fɪt/",t:"noun",m:"manfaat, keuntungan",e:"Exercise has many health benefits.",et:"Olahraga punya banyak manfaat kesehatan."},
  {w:"borrow",p:"/ˈbɒr.əʊ/",t:"verb",m:"meminjam (dari orang lain)",e:"Can I borrow your pen?",et:"Boleh saya pinjam pulpenmu?"},
  {w:"brave",p:"/breɪv/",t:"adjective",m:"berani",e:"It was a brave decision to move abroad.",et:"Itu keputusan yang berani untuk pindah ke luar negeri."},
  {w:"brief",p:"/briːf/",t:"adjective",m:"singkat, ringkas",e:"Let me give you a brief explanation.",et:"Izinkan saya memberi penjelasan singkat."},
  {w:"cautious",p:"/ˈkɔː.ʃəs/",t:"adjective",m:"berhati-hati",e:"Be cautious when driving in the rain.",et:"Berhati-hatilah saat mengemudi di tengah hujan."},
  {w:"challenge",p:"/ˈtʃæl.ɪndʒ/",t:"noun",m:"tantangan",e:"Learning a new language is a challenge.",et:"Belajar bahasa baru adalah sebuah tantangan."},
  {w:"confident",p:"/ˈkɒn.fɪ.dənt/",t:"adjective",m:"percaya diri",e:"She feels confident about the exam.",et:"Dia merasa percaya diri tentang ujian itu."},
  {w:"confuse",p:"/kənˈfjuːz/",t:"verb",m:"membingungkan",e:"These instructions confuse me.",et:"Instruksi ini membingungkan saya."},
  {w:"consider",p:"/kənˈsɪd.ər/",t:"verb",m:"mempertimbangkan",e:"Please consider my offer.",et:"Tolong pertimbangkan tawaran saya."},
  {w:"curious",p:"/ˈkjʊə.ri.əs/",t:"adjective",m:"penasaran, ingin tahu",e:"Children are naturally curious.",et:"Anak-anak secara alami penasaran."},
  {w:"decide",p:"/dɪˈsaɪd/",t:"verb",m:"memutuskan",e:"We need to decide by tomorrow.",et:"Kita harus memutuskan sebelum besok."},
  {w:"deliver",p:"/dɪˈlɪv.ər/",t:"verb",m:"mengantar, mengirim",e:"They deliver the package in two days.",et:"Mereka mengantar paket itu dalam dua hari."},
  {w:"efficient",p:"/ɪˈfɪʃ.ənt/",t:"adjective",m:"efisien",e:"This method is more efficient.",et:"Metode ini lebih efisien."},
  {w:"encourage",p:"/ɪnˈkʌr.ɪdʒ/",t:"verb",m:"mendorong, menyemangati",e:"My teacher encourages me to keep trying.",et:"Guru saya mendorong saya untuk terus mencoba."},
  {w:"essential",p:"/ɪˈsen.ʃəl/",t:"adjective",m:"sangat penting, pokok",e:"Water is essential for life.",et:"Air sangat penting bagi kehidupan."},
  {w:"expect",p:"/ɪkˈspekt/",t:"verb",m:"mengharapkan, mengira",e:"I expect it will rain today.",et:"Saya kira hari ini akan hujan."},
  {w:"explain",p:"/ɪkˈspleɪn/",t:"verb",m:"menjelaskan",e:"Could you explain this word to me?",et:"Bisakah kamu menjelaskan kata ini kepada saya?"},
  {w:"familiar",p:"/fəˈmɪl.i.ər/",t:"adjective",m:"akrab, sudah dikenal",e:"That name sounds familiar.",et:"Nama itu terdengar familier."},
  {w:"forgive",p:"/fəˈɡɪv/",t:"verb",m:"memaafkan",e:"Please forgive me for being late.",et:"Tolong maafkan saya karena terlambat."},
  {w:"generous",p:"/ˈdʒen.ər.əs/",t:"adjective",m:"dermawan, murah hati",e:"He is very generous with his time.",et:"Dia sangat murah hati dengan waktunya."},
  {w:"gradually",p:"/ˈɡrædʒ.u.ə.li/",t:"adverb",m:"secara bertahap, perlahan",e:"Her English is gradually improving.",et:"Bahasa Inggrisnya perlahan membaik."},
  {w:"honest",p:"/ˈɒn.ɪst/",t:"adjective",m:"jujur",e:"To be honest, I don't like it.",et:"Sejujurnya, saya tidak menyukainya."},
  {w:"improve",p:"/ɪmˈpruːv/",t:"verb",m:"meningkatkan, membaik",e:"Reading helps improve your vocabulary.",et:"Membaca membantu meningkatkan kosakata kamu."},
  {w:"include",p:"/ɪnˈkluːd/",t:"verb",m:"termasuk, memasukkan",e:"The price includes breakfast.",et:"Harga itu sudah termasuk sarapan."},
  {w:"jealous",p:"/ˈdʒel.əs/",t:"adjective",m:"cemburu",e:"He gets jealous easily.",et:"Dia mudah cemburu."},
  {w:"knowledge",p:"/ˈnɒl.ɪdʒ/",t:"noun",m:"pengetahuan",e:"She has deep knowledge of history.",et:"Dia punya pengetahuan mendalam tentang sejarah."},
  {w:"lend",p:"/lend/",t:"verb",m:"meminjamkan",e:"Could you lend me some money?",et:"Bisakah kamu meminjamkan saya uang?"},
  {w:"manage",p:"/ˈmæn.ɪdʒ/",t:"verb",m:"mengelola, berhasil melakukan",e:"She manages a team of ten people.",et:"Dia mengelola tim berisi sepuluh orang."},
  {w:"mistake",p:"/mɪˈsteɪk/",t:"noun",m:"kesalahan",e:"Everyone makes mistakes when learning.",et:"Semua orang membuat kesalahan saat belajar."},
  {w:"necessary",p:"/ˈnes.ə.sər.i/",t:"adjective",m:"perlu, diperlukan",e:"It is necessary to bring your ID card.",et:"Kamu perlu membawa kartu identitas."},
  {w:"opportunity",p:"/ˌɒp.əˈtʃuː.nə.ti/",t:"noun",m:"kesempatan, peluang",e:"Don't miss this opportunity.",et:"Jangan lewatkan kesempatan ini."},
  {w:"patient",p:"/ˈpeɪ.ʃənt/",t:"adjective",m:"sabar",e:"Be patient, learning takes time.",et:"Bersabarlah, belajar butuh waktu."},
  {w:"polite",p:"/pəˈlaɪt/",t:"adjective",m:"sopan",e:"It is polite to say thank you.",et:"Sopan untuk mengucapkan terima kasih."},
  {w:"prevent",p:"/prɪˈvent/",t:"verb",m:"mencegah",e:"Washing hands helps prevent illness.",et:"Mencuci tangan membantu mencegah penyakit."},
  {w:"promise",p:"/ˈprɒm.ɪs/",t:"verb",m:"berjanji",e:"I promise I will call you tonight.",et:"Saya berjanji akan meneleponmu nanti malam."},
  {w:"realize",p:"/ˈrɪə.laɪz/",t:"verb",m:"menyadari",e:"I didn't realize you were here.",et:"Saya tidak menyadari kamu ada di sini."},
  {w:"recommend",p:"/ˌrek.əˈmend/",t:"verb",m:"merekomendasikan",e:"Can you recommend a good restaurant?",et:"Bisakah kamu merekomendasikan restoran yang bagus?"},
  {w:"reliable",p:"/rɪˈlaɪ.ə.bəl/",t:"adjective",m:"dapat diandalkan",e:"He is a reliable friend.",et:"Dia teman yang bisa diandalkan."},
  {w:"responsible",p:"/rɪˈspɒn.sə.bəl/",t:"adjective",m:"bertanggung jawab",e:"She is responsible for the project.",et:"Dia bertanggung jawab atas proyek itu."},
  {w:"suggest",p:"/səˈdʒest/",t:"verb",m:"menyarankan",e:"I suggest we leave early.",et:"Saya sarankan kita berangkat lebih awal."},
  {w:"tired",p:"/ˈtaɪəd/",t:"adjective",m:"lelah, capek",e:"I'm too tired to go out tonight.",et:"Saya terlalu lelah untuk keluar malam ini."},
  {w:"useful",p:"/ˈjuːs.fəl/",t:"adjective",m:"berguna, bermanfaat",e:"This app is very useful for learning.",et:"Aplikasi ini sangat berguna untuk belajar."},
  {w:"valuable",p:"/ˈvæl.jə.bəl/",t:"adjective",m:"berharga",e:"Thank you for your valuable advice.",et:"Terima kasih atas nasihat berharga Anda."},
  {w:"wealthy",p:"/ˈwel.θi/",t:"adjective",m:"kaya, makmur",e:"He comes from a wealthy family.",et:"Dia berasal dari keluarga kaya."},
  {w:"willing",p:"/ˈwɪl.ɪŋ/",t:"adjective",m:"bersedia",e:"Are you willing to help us?",et:"Apakah kamu bersedia membantu kami?"},

  /* ===== KOSAKATA BARU: KEHIDUPAN SEHARI-HARI (10) ===== */
  {w:"breakfast",p:"/ˈbrek.fəst/",t:"noun",m:"sarapan",e:"I usually have breakfast at seven.",et:"Saya biasanya sarapan jam tujuh."},
  {w:"routine",p:"/ruːˈtiːn/",t:"noun",m:"rutinitas",e:"My morning routine starts at 6 AM.",et:"Rutinitas pagi saya mulai jam 6."},
  {w:"schedule",p:"/ˈʃed.juːl/",t:"noun",m:"jadwal",e:"Let me check my schedule.",et:"Biar saya cek jadwal saya."},
  {w:"commute",p:"/kəˈmjuːt/",t:"verb",m:"perjalanan pulang-pergi kerja",e:"I commute to work by train.",et:"Saya pergi kerja naik kereta."},
  {w:"grocery",p:"/ˈɡrəʊ.sər.i/",t:"noun",m:"bahan makanan (belanjaan)",e:"I need to buy groceries tonight.",et:"Saya perlu beli bahan makanan nanti malam."},
  {w:"laundry",p:"/ˈlɔːn.dri/",t:"noun",m:"cucian",e:"I do the laundry every Sunday.",et:"Saya mencuci pakaian setiap Minggu."},
  {w:"chore",p:"/tʃɔːr/",t:"noun",m:"pekerjaan rumah tangga",e:"Cleaning is my least favorite chore.",et:"Membersihkan adalah pekerjaan rumah yang paling tidak saya suka."},
  {w:"alarm",p:"/əˈlɑːm/",t:"noun",m:"alarm",e:"My alarm rings at 5 AM.",et:"Alarm saya berbunyi jam 5 pagi."},
  {w:"nap",p:"/næp/",t:"noun",m:"tidur siang singkat",e:"I took a short nap after lunch.",et:"Saya tidur siang sebentar setelah makan siang."},
  {w:"shower",p:"/ˈʃaʊ.ər/",t:"noun",m:"mandi (dengan shower)",e:"She takes a shower every morning.",et:"Dia mandi setiap pagi."},

  /* ===== KOSAKATA BARU: KERJA & BISNIS (10) ===== */
  {w:"meeting",p:"/ˈmiː.tɪŋ/",t:"noun",m:"rapat",e:"The meeting starts at nine.",et:"Rapat dimulai jam sembilan."},
  {w:"deadline",p:"/ˈded.laɪn/",t:"noun",m:"tenggat waktu",e:"The deadline is next Friday.",et:"Tenggat waktunya Jumat depan."},
  {w:"colleague",p:"/ˈkɒl.iːɡ/",t:"noun",m:"rekan kerja",e:"My colleague helped me with the report.",et:"Rekan kerja saya membantu saya dengan laporan itu."},
  {w:"salary",p:"/ˈsæl.ər.i/",t:"noun",m:"gaji",e:"He earns a good salary.",et:"Dia mendapat gaji yang bagus."},
  {w:"interview",p:"/ˈɪn.tə.vjuː/",t:"noun",m:"wawancara",e:"I have a job interview tomorrow.",et:"Saya ada wawancara kerja besok."},
  {w:"client",p:"/ˈklaɪ.ənt/",t:"noun",m:"klien",e:"The client wants a new design.",et:"Klien menginginkan desain baru."},
  {w:"negotiate",p:"/nəˈɡəʊ.ʃi.eɪt/",t:"verb",m:"bernegosiasi",e:"We need to negotiate the price.",et:"Kita perlu menegosiasikan harga."},
  {w:"contract",p:"/ˈkɒn.trækt/",t:"noun",m:"kontrak",e:"Please sign the contract first.",et:"Tolong tandatangani kontraknya dulu."},
  {w:"resign",p:"/rɪˈzaɪn/",t:"verb",m:"mengundurkan diri",e:"He decided to resign from his job.",et:"Dia memutuskan mengundurkan diri dari pekerjaannya."},
  {w:"promotion",p:"/prəˈməʊ.ʃən/",t:"noun",m:"promosi (jabatan)",e:"She got a promotion last month.",et:"Dia mendapat promosi bulan lalu."},

  /* ===== KOSAKATA BARU: EMOSI & PERASAAN (10) ===== */
  {w:"happy",p:"/ˈhæp.i/",t:"adjective",m:"bahagia",e:"I feel happy when I'm with my family.",et:"Saya merasa bahagia saat bersama keluarga."},
  {w:"sad",p:"/sæd/",t:"adjective",m:"sedih",e:"She felt sad after the movie.",et:"Dia merasa sedih setelah film itu."},
  {w:"excited",p:"/ɪkˈsaɪ.tɪd/",t:"adjective",m:"bersemangat",e:"I'm excited about the trip.",et:"Saya bersemangat tentang perjalanan itu."},
  {w:"nervous",p:"/ˈnɜː.vəs/",t:"adjective",m:"gugup",e:"He was nervous before the test.",et:"Dia gugup sebelum tes."},
  {w:"grateful",p:"/ˈɡreɪt.fəl/",t:"adjective",m:"bersyukur",e:"I'm grateful for your support.",et:"Saya bersyukur atas dukunganmu."},
  {w:"disappointed",p:"/ˌdɪs.əˈpɔɪn.tɪd/",t:"adjective",m:"kecewa",e:"She was disappointed with the result.",et:"Dia kecewa dengan hasilnya."},
  {w:"embarrassed",p:"/ɪmˈbær.əst/",t:"adjective",m:"malu",e:"I felt embarrassed when I forgot his name.",et:"Saya merasa malu ketika lupa namanya."},
  {w:"proud",p:"/praʊd/",t:"adjective",m:"bangga",e:"My parents are proud of me.",et:"Orang tua saya bangga pada saya."},
  {w:"frustrated",p:"/frʌˈstreɪ.tɪd/",t:"adjective",m:"frustrasi",e:"He got frustrated with the slow internet.",et:"Dia frustrasi dengan internet yang lambat."},
  {w:"relieved",p:"/rɪˈliːvd/",t:"adjective",m:"lega",e:"I was relieved to hear the good news.",et:"Saya lega mendengar kabar baik itu."},

  /* ===== KOSAKATA BARU: MAKANAN & MINUMAN (10) ===== */
  {w:"delicious",p:"/dɪˈlɪʃ.əs/",t:"adjective",m:"lezat",e:"This soup is absolutely delicious.",et:"Sup ini benar-benar lezat."},
  {w:"recipe",p:"/ˈres.ɪ.pi/",t:"noun",m:"resep",e:"Can you share the recipe?",et:"Bisakah kamu bagikan resepnya?"},
  {w:"ingredient",p:"/ɪnˈɡriː.di.ənt/",t:"noun",m:"bahan (masakan)",e:"What are the main ingredients?",et:"Apa bahan utamanya?"},
  {w:"spicy",p:"/ˈspaɪ.si/",t:"adjective",m:"pedas",e:"The food is too spicy for me.",et:"Makanannya terlalu pedas untuk saya."},
  {w:"sweet",p:"/swiːt/",t:"adjective",m:"manis",e:"I love sweet desserts.",et:"Saya suka makanan penutup yang manis."},
  {w:"sour",p:"/saʊər/",t:"adjective",m:"asam",e:"The lemon tastes sour.",et:"Lemon itu terasa asam."},
  {w:"dessert",p:"/dɪˈzɜːt/",t:"noun",m:"makanan penutup",e:"What's for dessert?",et:"Apa makanan penutupnya?"},
  {w:"snack",p:"/snæk/",t:"noun",m:"camilan",e:"I need a healthy snack.",et:"Saya butuh camilan sehat."},
  {w:"beverage",p:"/ˈbev.ər.ɪdʒ/",t:"noun",m:"minuman",e:"What beverages do you have?",et:"Minuman apa yang Anda punya?"},
  {w:"waiter",p:"/ˈweɪ.tər/",t:"noun",m:"pelayan (restoran)",e:"The waiter brought our food.",et:"Pelayan membawa makanan kami."},

  /* ===== KOSAKATA BARU: PERJALANAN (10) ===== */
  {w:"passport",p:"/ˈpɑːs.pɔːt/",t:"noun",m:"paspor",e:"Don't forget your passport.",et:"Jangan lupa paspormu."},
  {w:"luggage",p:"/ˈlʌɡ.ɪdʒ/",t:"noun",m:"bagasi",e:"My luggage is too heavy.",et:"Bagasi saya terlalu berat."},
  {w:"destination",p:"/ˌdes.tɪˈneɪ.ʃən/",t:"noun",m:"tujuan",e:"What's our final destination?",et:"Apa tujuan akhir kita?"},
  {w:"souvenir",p:"/ˌsuː.vənˈɪər/",t:"noun",m:"suvenir",e:"I bought a souvenir for my mom.",et:"Saya membeli suvenir untuk ibu saya."},
  {w:"tourist",p:"/ˈtʊə.rɪst/",t:"noun",m:"turis",e:"The city is full of tourists.",et:"Kota itu penuh turis."},
  {w:"accommodation",p:"/əˌkɒm.əˈdeɪ.ʃən/",t:"noun",m:"akomodasi, penginapan",e:"We need to find accommodation.",et:"Kita perlu mencari akomodasi."},
  {w:"itinerary",p:"/aɪˈtɪn.ər.ər.i/",t:"noun",m:"rencana perjalanan",e:"Let me plan our itinerary.",et:"Biar saya susun rencana perjalanan kita."},
  {w:"currency",p:"/ˈkʌr.ən.si/",t:"noun",m:"mata uang",e:"What's the local currency?",et:"Apa mata uang lokalnya?"},
  {w:"explore",p:"/ɪkˈsplɔːr/",t:"verb",m:"menjelajahi",e:"We spent the day exploring the city.",et:"Kami menghabiskan hari menjelajahi kota."},
  {w:"departure",p:"/dɪˈpɑː.tʃər/",t:"noun",m:"keberangkatan",e:"The departure is at 8 AM.",et:"Keberangkatan pukul 8 pagi."},

  /* ===== KOSAKATA BARU: KESEHATAN (10) ===== */
  {w:"headache",p:"/ˈhed.eɪk/",t:"noun",m:"sakit kepala",e:"I have a terrible headache.",et:"Saya sakit kepala parah."},
  {w:"medicine",p:"/ˈmed.ɪ.sən/",t:"noun",m:"obat",e:"Take this medicine twice a day.",et:"Minum obat ini dua kali sehari."},
  {w:"pharmacy",p:"/ˈfɑː.mə.si/",t:"noun",m:"apotek",e:"Is there a pharmacy nearby?",et:"Apakah ada apotek di dekat sini?"},
  {w:"exercise",p:"/ˈek.sə.saɪz/",t:"noun",m:"olahraga, latihan",e:"Regular exercise keeps you healthy.",et:"Olahraga teratur membuatmu sehat."},
  {w:"healthy",p:"/ˈhel.θi/",t:"adjective",m:"sehat",e:"She lives a healthy lifestyle.",et:"Dia menjalani gaya hidup sehat."},
  {w:"symptom",p:"/ˈsɪmp.təm/",t:"noun",m:"gejala",e:"What are your symptoms?",et:"Apa gejala-gejala Anda?"},
  {w:"fever",p:"/ˈfiː.vər/",t:"noun",m:"demam",e:"The child has a high fever.",et:"Anak itu demam tinggi."},
  {w:"appointment",p:"/əˈpɔɪnt.mənt/",t:"noun",m:"janji temu",e:"I have a doctor's appointment.",et:"Saya ada janji dengan dokter."},
  {w:"injury",p:"/ˈɪn.dʒər.i/",t:"noun",m:"cedera",e:"He suffered a knee injury.",et:"Dia mengalami cedera lutut."},
  {w:"recover",p:"/rɪˈkʌv.ər/",t:"verb",m:"pulih",e:"She is recovering from the flu.",et:"Dia sedang pulih dari flu."},

  /* ===== KOSAKATA BARU: TEKNOLOGI (10) ===== */
  {w:"computer",p:"/kəmˈpjuː.tər/",t:"noun",m:"komputer",e:"My computer is very slow.",et:"Komputer saya sangat lambat."},
  {w:"password",p:"/ˈpɑːs.wɜːd/",t:"noun",m:"kata sandi",e:"I forgot my password.",et:"Saya lupa kata sandi saya."},
  {w:"download",p:"/ˌdaʊnˈləʊd/",t:"verb",m:"mengunduh",e:"Download the file first.",et:"Unduh filenya dulu."},
  {w:"upload",p:"/ˌʌpˈləʊd/",t:"verb",m:"mengunggah",e:"Please upload the photos.",et:"Tolong unggah fotonya."},
  {w:"website",p:"/ˈweb.saɪt/",t:"noun",m:"situs web",e:"This website has useful information.",et:"Situs web ini punya informasi bermanfaat."},
  {w:"software",p:"/ˈsɒft.weər/",t:"noun",m:"perangkat lunak",e:"We need new software for this.",et:"Kita butuh perangkat lunak baru untuk ini."},
  {w:"email",p:"/ˈiː.meɪl/",t:"noun",m:"email, surat elektronik",e:"I'll send you an email.",et:"Saya akan mengirimimu email."},
  {w:"notification",p:"/ˌnəʊ.tɪ.fɪˈkeɪ.ʃən/",t:"noun",m:"notifikasi, pemberitahuan",e:"I got a notification from the app.",et:"Saya mendapat notifikasi dari aplikasi itu."},
  {w:"update",p:"/ʌpˈdeɪt/",t:"verb",m:"memperbarui",e:"Please update your profile.",et:"Tolong perbarui profil Anda."},
  {w:"screen",p:"/skriːn/",t:"noun",m:"layar",e:"The screen is broken.",et:"Layarnya rusak."},

  /* ===== KOSAKATA BARU: PENDIDIKAN (10) ===== */
  {w:"student",p:"/ˈstjuː.dənt/",t:"noun",m:"siswa, mahasiswa",e:"She is a diligent student.",et:"Dia siswa yang rajin."},
  {w:"teacher",p:"/ˈtiː.tʃər/",t:"noun",m:"guru",e:"My teacher is very kind.",et:"Guru saya sangat baik."},
  {w:"homework",p:"/ˈhəʊm.wɜːk/",t:"noun",m:"pekerjaan rumah",e:"I finished my homework early.",et:"Saya menyelesaikan PR saya lebih awal."},
  {w:"exam",p:"/ɪɡˈzæm/",t:"noun",m:"ujian",e:"The exam was difficult.",et:"Ujiannya sulit."},
  {w:"grade",p:"/ɡreɪd/",t:"noun",m:"nilai (di sekolah)",e:"She got a good grade.",et:"Dia mendapat nilai bagus."},
  {w:"university",p:"/ˌjuː.nɪˈvɜː.sə.ti/",t:"noun",m:"universitas",e:"He studies at a top university.",et:"Dia belajar di universitas terbaik."},
  {w:"library",p:"/ˈlaɪ.brər.i/",t:"noun",m:"perpustakaan",e:"Let's study at the library.",et:"Ayo belajar di perpustakaan."},
  {w:"subject",p:"/ˈsʌb.dʒɪkt/",t:"noun",m:"mata pelajaran",e:"Math is my favorite subject.",et:"Matematika adalah mata pelajaran favorit saya."},
  {w:"lecture",p:"/ˈlek.tʃər/",t:"noun",m:"kuliah",e:"The lecture lasted two hours.",et:"Kuliahnya berlangsung dua jam."},
  {w:"scholarship",p:"/ˈskɒl.ə.ʃɪp/",t:"noun",m:"beasiswa",e:"She applied for a scholarship.",et:"Dia melamar beasiswa."},

  /* ===== KOSAKATA BARU: ALAM & CUACA (10) ===== */
  {w:"weather",p:"/ˈweð.ər/",t:"noun",m:"cuaca",e:"The weather is nice today.",et:"Cuacanya bagus hari ini."},
  {w:"sunny",p:"/ˈsʌn.i/",t:"adjective",m:"cerah",e:"It's a sunny day.",et:"Hari ini cerah."},
  {w:"cloudy",p:"/ˈklaʊ.di/",t:"adjective",m:"berawan",e:"The sky is cloudy.",et:"Langitnya berawan."},
  {w:"storm",p:"/stɔːm/",t:"noun",m:"badai",e:"A storm is coming.",et:"Badai akan datang."},
  {w:"rainbow",p:"/ˈreɪn.bəʊ/",t:"noun",m:"pelangi",e:"Look at that beautiful rainbow.",et:"Lihat pelangi yang indah itu."},
  {w:"forest",p:"/ˈfɒr.ɪst/",t:"noun",m:"hutan",e:"We walked through the forest.",et:"Kami berjalan melewati hutan."},
  {w:"mountain",p:"/ˈmaʊn.tɪn/",t:"noun",m:"gunung",e:"The mountain is covered in snow.",et:"Gunung itu tertutup salju."},
  {w:"river",p:"/ˈrɪv.ər/",t:"noun",m:"sungai",e:"The river flows to the sea.",et:"Sungai itu mengalir ke laut."},
  {w:"beach",p:"/biːtʃ/",t:"noun",m:"pantai",e:"We spent the day at the beach.",et:"Kami menghabiskan hari di pantai."},
  {w:"island",p:"/ˈaɪ.lənd/",t:"noun",m:"pulau",e:"Bali is a beautiful island.",et:"Bali adalah pulau yang indah."},

  /* ===== KOSAKATA BARU: HUBUNGAN & KOMUNIKASI (10) ===== */
  {w:"neighbor",p:"/ˈneɪ.bər/",t:"noun",m:"tetangga",e:"My neighbor is very friendly.",et:"Tetangga saya sangat ramah."},
  {w:"relative",p:"/ˈrel.ə.tɪv/",t:"noun",m:"kerabat",e:"We visited our relatives.",et:"Kami mengunjungi kerabat kami."},
  {w:"trust",p:"/trʌst/",t:"verb",m:"mempercayai",e:"I trust you completely.",et:"Saya sepenuhnya mempercayaimu."},
  {w:"respect",p:"/rɪˈspekt/",t:"verb",m:"menghormati",e:"We should respect each other.",et:"Kita harus saling menghormati."},
  {w:"support",p:"/səˈpɔːt/",t:"verb",m:"mendukung",e:"My family supports my decision.",et:"Keluarga saya mendukung keputusan saya."},
  {w:"conversation",p:"/ˌkɒn.vəˈseɪ.ʃən/",t:"noun",m:"percakapan",e:"We had a long conversation.",et:"Kami berbincang panjang."},
  {w:"opinion",p:"/əˈpɪn.jən/",t:"noun",m:"pendapat",e:"In my opinion, that's wrong.",et:"Menurut pendapat saya, itu salah."},
  {w:"describe",p:"/dɪˈskraɪb/",t:"verb",m:"menggambarkan",e:"Can you describe the man?",et:"Bisakah kamu menggambarkan pria itu?"},
  {w:"discuss",p:"/dɪˈskʌs/",t:"verb",m:"mendiskusikan",e:"Let's discuss the plan.",et:"Ayo diskusikan rencananya."},
  {w:"argue",p:"/ˈɑː.ɡjuː/",t:"verb",m:"berdebat, bertengkar",e:"They always argue about money.",et:"Mereka selalu berdebat soal uang."}
];
const SENTENCES = [
  {en:"I have been learning English for two years.",id:"Saya sudah belajar bahasa Inggris selama dua tahun.",note:"<b>Present Perfect Continuous</b> (have/has been + V-ing) dipakai untuk kegiatan yang dimulai di masa lalu dan masih berlanjut sampai sekarang."},
  {en:"Could you please repeat that more slowly?",id:"Bisakah Anda mengulanginya lebih lambat?",note:"<b>Could you please...</b> jauh lebih sopan daripada <i>Can you...</i> Gunakan ini saat berbicara dengan orang yang baru dikenal."},
  {en:"I'm looking forward to hearing from you.",id:"Saya menantikan kabar dari Anda.",note:"Setelah <b>look forward to</b>, kata kerja harus dalam bentuk <b>-ing</b>, bukan <i>to hear</i>."},
  {en:"It depends on how much time we have.",id:"Itu tergantung pada berapa banyak waktu yang kita punya.",note:"Pasangan yang benar adalah <b>depend on</b>, bukan <i>depend of</i>."},
  {en:"She suggested that we take a short break.",id:"Dia menyarankan agar kita istirahat sebentar.",note:"Setelah <b>suggest that</b>, gunakan kata kerja bentuk dasar (take), bukan <i>took</i>."},
  {en:"I'd rather stay home than go out tonight.",id:"Saya lebih baik tinggal di rumah daripada keluar malam ini.",note:"Pola <b>would rather + V1 + than + V1</b> digunakan untuk menyatakan preferensi."},
  {en:"The meeting has been postponed until next week.",id:"Rapat itu telah ditunda sampai minggu depan.",note:"<b>Has been + V3</b> adalah bentuk pasif present perfect — dipakai saat subjek dikenai tindakan."},
  {en:"If I were you, I would apologize first.",id:"Kalau saya jadi kamu, saya akan minta maaf dulu.",note:"Ini <b>Second Conditional</b>. Selalu gunakan <b>were</b> (bukan <i>was</i>) untuk semua subjek."},
  {en:"He is used to working under pressure.",id:"Dia terbiasa bekerja di bawah tekanan.",note:"<b>Be used to + V-ing</b> = terbiasa. Beda dengan <b>used to + V1</b> = dulu sering melakukan."},
  {en:"Not only is she smart, but she is also kind.",id:"Bukan hanya dia pintar, tapi juga baik.",note:"Setelah <b>Not only</b> di awal kalimat, auxiliary (is) harus mendahului subjek — ini disebut inversi."},
  {en:"I wish I had studied harder for the exam.",id:"Saya berharap dulu saya belajar lebih giat untuk ujian itu.",note:"<b>Wish + had + V3</b> menyatakan penyesalan tentang masa lalu yang tidak bisa diubah."},
  {en:"The book which you lent me was really interesting.",id:"Buku yang kamu pinjamkan kepada saya benar-benar menarik.",note:"<b>Which</b> dipakai untuk benda. Untuk orang gunakan <b>who</b>, untuk tempat gunakan <b>where</b>."},
  {en:"Would you mind closing the window?",id:"Apakah Anda keberatan menutup jendelanya?",note:"Setelah <b>Would you mind</b>, gunakan <b>V-ing</b>. Jawaban sopan: <i>Not at all.</i>"},
  {en:"I have no idea what he is talking about.",id:"Saya tidak tahu apa yang sedang dia bicarakan.",note:"<b>Have no idea</b> adalah cara alami mengatakan <i>I don't know</i> dalam percakapan."},
  {en:"Let me know if you need any help.",id:"Beri tahu saya kalau kamu butuh bantuan.",note:"<b>Let me know</b> adalah frasa sopan yang sangat sering dipakai dalam email dan chat kerja."},
  {en:"The more you practice, the better you become.",id:"Semakin sering kamu berlatih, semakin baik kamu jadinya.",note:"Pola <b>the + comparative, the + comparative</b> = semakin... semakin..."},
  {en:"I'm not sure whether I can make it on time.",id:"Saya tidak yakin apakah saya bisa datang tepat waktu.",note:"Gunakan <b>whether</b> (bukan <i>if</i>) ketika ada pilihan atau setelah preposisi."},
  {en:"It took me three hours to finish the report.",id:"Saya butuh tiga jam untuk menyelesaikan laporan itu.",note:"Pola <b>It took + orang + waktu + to + V1</b> = butuh waktu berapa lama bagi seseorang."},
  {en:"Despite the rain, we still went hiking.",id:"Meskipun hujan, kami tetap pergi mendaki.",note:"<b>Despite + noun/V-ing</b>. Untuk klausa gunakan <b>although + subjek + kata kerja</b>."},
  {en:"He apologized for being late to the meeting.",id:"Dia meminta maaf karena terlambat ke rapat.",note:"<b>Apologize for + V-ing</b>, bukan <i>apologize because</i>."},
  {en:"There is a lot of information on the internet.",id:"Ada banyak informasi di internet.",note:"<b>Information</b> adalah uncountable noun — tidak boleh diberi <i>-s</i> dan tidak pakai <i>many</i>."},
  {en:"I would have called you if I had known.",id:"Saya akan meneleponmu kalau saja saya tahu.",note:"<b>Third Conditional</b>: would have + V3 ... if + had + V3 (penyesalan masa lalu)."},
  {en:"She is the one who helped me the most.",id:"Dialah orang yang paling banyak membantu saya.",note:"<b>The one who</b> dipakai untuk menekankan orang tertentu dalam kalimat."},
  {en:"I'm afraid I have to disagree with you.",id:"Saya khawatir saya harus tidak setuju dengan Anda.",note:"<b>I'm afraid...</b> adalah pembuka sopan untuk menyampaikan hal yang kurang menyenangkan."},
  {en:"We should have left earlier to avoid traffic.",id:"Kita seharusnya berangkat lebih awal untuk menghindari macet.",note:"<b>Should have + V3</b> = seharusnya sudah melakukan (tapi tidak dilakukan)."},
  {en:"Neither of them was ready for the test.",id:"Tidak satu pun dari mereka siap untuk tes itu.",note:"<b>Neither of</b> diikuti kata kerja bentuk tunggal (was), bukan <i>were</i>."},
  {en:"I'm getting used to living alone.",id:"Saya mulai terbiasa tinggal sendiri.",note:"<b>Get used to + V-ing</b> = proses menjadi terbiasa, berbeda dengan <i>be used to</i> yang sudah terbiasa."},
  {en:"Thank you for taking the time to meet me.",id:"Terima kasih telah meluangkan waktu untuk bertemu saya.",note:"Frasa ini sangat umum dalam konteks profesional dan terdengar sangat sopan."},
  {en:"As far as I know, the store opens at nine.",id:"Setahu saya, toko itu buka jam sembilan.",note:"<b>As far as I know</b> = setahu saya. Frasa berguna untuk menyampaikan informasi dengan hati-hati."},
  {en:"The sooner we start, the sooner we finish.",id:"Semakin cepat kita mulai, semakin cepat kita selesai.",note:"Pola perbandingan berimbang <b>the sooner..., the sooner...</b>"}
];

const QUIZ = [
  {id:"Saya sudah tinggal di sini selama tiga tahun.",en:"I have lived here for three years.",alt:["i have been living here for three years"]},
  {id:"Dia biasanya pergi ke kantor dengan sepeda.",en:"He usually goes to the office by bicycle.",alt:["she usually goes to the office by bicycle","he usually goes to the office by bike"]},
  {id:"Bisakah kamu membantuku sebentar?",en:"Could you help me for a moment?",alt:["can you help me for a moment"]},
  {id:"Saya tidak mengerti apa yang kamu katakan.",en:"I don't understand what you are saying.",alt:["i do not understand what you are saying","i don't understand what you're saying"]},
  {id:"Kami akan bertemu besok pagi.",en:"We will meet tomorrow morning.",alt:["we are going to meet tomorrow morning","we'll meet tomorrow morning"]},
  {id:"Dia sedang memasak di dapur sekarang.",en:"She is cooking in the kitchen now.",alt:["he is cooking in the kitchen now","she's cooking in the kitchen now"]},
  {id:"Saya lebih suka teh daripada kopi.",en:"I prefer tea to coffee.",alt:["i prefer tea rather than coffee","i like tea better than coffee"]},
  {id:"Berapa lama kamu sudah belajar bahasa Inggris?",en:"How long have you been learning English?",alt:["how long have you studied english"]},
  {id:"Tolong tutup pintunya.",en:"Please close the door.",alt:["please shut the door","close the door please"]},
  {id:"Saya belum pernah ke Jepang.",en:"I have never been to Japan.",alt:["i've never been to japan"]},
  {id:"Jika saya punya waktu, saya akan membantumu.",en:"If I have time, I will help you.",alt:["if i have time i'll help you"]},
  {id:"Saya sedang mencari pekerjaan baru.",en:"I am looking for a new job.",alt:["i'm looking for a new job"]},
  {id:"Makanan ini sangat enak.",en:"This food is very delicious.",alt:["this food tastes very good","this food is delicious"]},
  {id:"Kita harus berangkat sekarang atau kita akan terlambat.",en:"We must leave now or we will be late.",alt:["we have to leave now or we will be late","we must go now or we will be late"]},
  {id:"Saya tidak bisa hadir di rapat kemarin.",en:"I could not attend the meeting yesterday.",alt:["i couldn't attend the meeting yesterday","i could not come to the meeting yesterday"]},
  {id:"Dia selalu datang tepat waktu.",en:"He is always on time.",alt:["she is always on time"]},
  {id:"Apakah kamu sudah makan?",en:"Have you eaten?",alt:["have you eaten yet","did you eat"]},
  {id:"Saya ingin memesan dua tiket.",en:"I would like to book two tickets.",alt:["i want to book two tickets","i would like to order two tickets"]},
  {id:"Anak-anak itu sedang bermain di taman.",en:"The children are playing in the park.",alt:["the kids are playing in the park"]},
  {id:"Saya akan meneleponmu nanti malam.",en:"I will call you later tonight.",alt:["i'll call you later tonight"]},
  {id:"Ini adalah buku yang saya beli kemarin.",en:"This is the book that I bought yesterday.",alt:["this is the book i bought yesterday"]},
  {id:"Dia tidak suka makanan pedas.",en:"She does not like spicy food.",alt:["he does not like spicy food","she doesn't like spicy food"]},
  {id:"Kami sudah menyelesaikan pekerjaan itu.",en:"We have finished the work.",alt:["we have already finished the work","we've finished the work"]},
  {id:"Jangan lupa mengunci pintu.",en:"Do not forget to lock the door.",alt:["don't forget to lock the door"]},
  {id:"Saya berharap bisa berbicara bahasa Inggris dengan lancar.",en:"I wish I could speak English fluently.",alt:["i hope i can speak english fluently"]},
  {id:"Dia menjelaskan masalahnya dengan sangat jelas.",en:"He explained the problem very clearly.",alt:["she explained the problem very clearly"]}
];

const TIPS = [
  {t:"Present Perfect vs Past Simple",b:"Gunakan <b>present perfect</b> (have/has + V3) bila waktunya tidak spesifik atau masih berhubungan dengan sekarang: <i>I have lost my keys.</i> Gunakan <b>past simple</b> bila waktunya sudah jelas dan selesai: <i>I lost my keys yesterday.</i>"},
  {t:"Artikel a, an, the",b:"<b>A/an</b> untuk benda yang belum spesifik (a book). <b>The</b> untuk benda yang sudah diketahui pendengar (the book you lent me). Jangan pakai artikel untuk kata benda jamak umum: <i>I like cats.</i> (bukan <i>the cats</i>)."},
  {t:"Preposisi waktu: in, on, at",b:"<b>At</b> untuk jam (at 7 PM). <b>On</b> untuk hari & tanggal (on Monday, on May 5th). <b>In</b> untuk bulan, tahun, dan periode panjang (in July, in 2024, in the morning)."},
  {t:"Countable vs Uncountable",b:"Kata seperti <i>information, advice, furniture, news, homework</i> tidak bisa dihitung. Jangan tambahkan -s dan jangan pakai <i>many</i>. Gunakan <b>much / a lot of / a piece of</b>: <i>a piece of advice</i>."},
  {t:"Verb + -ing atau to + Verb?",b:"Beberapa kata kerja hanya diikuti <b>-ing</b>: enjoy, avoid, finish, mind, suggest. Beberapa hanya diikuti <b>to + V1</b>: decide, hope, plan, promise, want. Hafalkan sedikit demi sedikit."},
  {t:"Adjective vs Adverb",b:"<b>Adjective</b> menerangkan kata benda (<i>a quick answer</i>). <b>Adverb</b> menerangkan kata kerja (<i>He answered quickly</i>). Jangan gunakan adjective untuk menerangkan verb."},
  {t:"Kalimat pasif (Passive Voice)",b:"Rumusnya <b>be + V3</b>. Contoh: <i>The report was written by him.</i> Gunakan pasif saat pelaku tindakan tidak penting atau tidak diketahui."},
  {t:"Reported Speech",b:"Saat melaporkan ucapan orang lain, tense mundur satu langkah: <i>\"I am tired\"</i> menjadi <i>He said he was tired.</i> Kata ganti dan keterangan waktu juga berubah (today → that day)."},
  {t:"Modal Verbs",b:"<b>Must</b> = wajib, <b>should</b> = sebaiknya, <b>might</b> = mungkin, <b>could</b> = bisa (sopan). Setelah modal selalu gunakan <b>V1</b> tanpa -s dan tanpa to: <i>She must go.</i>"},
  {t:"Question Tags",b:"Tambahkan pertanyaan pendek di akhir pernyataan: <i>You are tired, aren't you?</i> Jika kalimat positif, tag negatif. Jika kalimat negatif, tag positif."},
  {t:"Frasa sopan dalam percakapan",b:"Gunakan <b>Could you...?</b>, <b>Would you mind...?</b>, <b>I'm afraid...</b>, <b>I was wondering if...</b> untuk terdengar lebih sopan dibanding kalimat perintah langsung."},
  {t:"Cara cepat menambah kosakata",b:"Belajar <b>5 kata per hari</b> dengan konteks kalimat, bukan hafalan lepas. Ucapkan keras-keras, lalu buat satu kalimat sendiri memakai kata itu. Ini jauh lebih efektif daripada menghafal 50 kata sekaligus."}
];

const MISTAKES = [
  {w:"I am agree with you.",r:"I agree with you."},
  {w:"I have 20 years old.",r:"I am 20 years old."},
  {w:"She go to school every day.",r:"She goes to school every day."},
  {w:"I am boring with this movie.",r:"I am bored with this movie."},
  {w:"He don't like spicy food.",r:"He doesn't like spicy food."},
  {w:"I look forward to meet you.",r:"I look forward to meeting you."},
  {w:"I need many informations.",r:"I need a lot of information."},
  {w:"I will call to you tomorrow.",r:"I will call you tomorrow."},
  {w:"Yesterday I go to the market.",r:"Yesterday I went to the market."},
  {w:"I very like this song.",r:"I really like this song."},
  {w:"Can you explain me this?",r:"Can you explain this to me?"},
  {w:"I am so boring at home.",r:"I am so bored at home."},
  {w:"Discuss about the problem.",r:"Discuss the problem."},
  {w:"I'm interesting in music.",r:"I'm interested in music."}
];

/* =========================================================
   STATE & STORAGE
   ========================================================= */
const STORE_KEY = 'engdaily_v1';

let store = Object.assign(
  {correct:0, total:0, streak:0, lastVisit:'', saved:[], seen:[], today:{date:'', words:[]}},
  JSON.parse(localStorage.getItem(STORE_KEY) || '{}')
);

if(!Array.isArray(store.saved)) store.saved = [];
if(!Array.isArray(store.seen)) store.seen = [];
if(!store.today || typeof store.today !== 'object' || !Array.isArray(store.today.words)){
  store.today = {date:'', words:[]};
}

function saveStore(){ localStorage.setItem(STORE_KEY, JSON.stringify(store)); }

function dateKey(d){
  return d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
}
function dayNumber(){
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - start) / 86400000);
}

(function updateStreak(){
  const today = dateKey(new Date());
  if(store.lastVisit !== today){
    const y = new Date(); y.setDate(y.getDate() - 1);
    const yKey = dateKey(y);
    store.streak = (store.lastVisit === yKey) ? (store.streak + 1) : 1;
    store.lastVisit = today;
    saveStore();
  }
})();

/* =========================================================
   UTILITAS
   ========================================================= */
function speak(text, rate){
  if(!('speechSynthesis' in window)){
    toast('Browser kamu tidak mendukung text-to-speech');
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = rate || 0.9;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
}

let toastTimer;
function toast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> el.classList.remove('show'), 1900);
}

function normalize(s){
  return String(s).toLowerCase()
    .replace(/[.,!?;:'"’“”]/g,'')
    .replace(/\s+/g,' ')
    .trim();
}

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function escapeHtml(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function isSaved(word){ return store.saved.indexOf(word) !== -1; }

/* =========================================================
   LOGIKA KOSAKATA (anti-duplikat)
   ========================================================= */
function unseenWords(){
  const seenSet = new Set(store.seen);
  return WORDS.filter(x => !seenSet.has(x.w));
}

function drawUnseen(n){
  const pool = shuffle(unseenWords());
  const picked = pool.slice(0, n);
  picked.forEach(p => {
    if(store.seen.indexOf(p.w) === -1) store.seen.push(p.w);
  });
  saveStore();
  return picked;
}

function wordsByNames(names){
  return names.map(n => WORDS.find(x => x.w === n)).filter(Boolean);
}

/* =========================================================
   TABS
   ========================================================= */
document.querySelectorAll('.tabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
  });
});

/* =========================================================
   TEMA
   ========================================================= */
const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('engdaily_theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
themeBtn.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

themeBtn.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  themeBtn.textContent = next === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('engdaily_theme', next);
});

/* =========================================================
   TANGGAL
   ========================================================= */
(function showDate(){
  const d = new Date();
  const hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const bln = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  document.getElementById('todayLabel').textContent =
    hari[d.getDay()] + ', ' + d.getDate() + ' ' + bln[d.getMonth()] + ' ' + d.getFullYear();
})();

/* =========================================================
   RENDER KOSAKATA
   ========================================================= */
let currentWords = [];

function updateVocabProgress(){
  const total = WORDS.length;
  const done = Math.min(store.seen.length, total);
  const pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById('vocabFill').style.width = pct + '%';
  document.getElementById('vocabProgressTxt').innerHTML =
    `<b>${done}</b> dari <b>${total}</b> kata sudah dipelajari · sisa <b>${total - done}</b>`;
  document.getElementById('vocabPct').textContent = pct + '%';
}

function renderWords(list){
  currentWords = list.slice();
  const box = document.getElementById('vocabList');

  if(!list.length){
    box.innerHTML = `
      <div class="empty">
        🎉 <b>Hebat!</b><br>
        Semua ${WORDS.length} kosakata sudah kamu pelajari.<br>
        <button class="btn btn-primary" id="resetPoolBtn" style="margin-top:16px">
          🔄 Mulai ulang dari awal
        </button>
      </div>`;
    updateVocabProgress();
    return;
  }

  box.innerHTML = list.map(item => {
    const saved = isSaved(item.w);
    return `
    <div class="word-card">
      <div class="word-head">
        <h3>${item.w}</h3>
        <span class="badge">${item.t}</span>
        <button class="icon-btn" data-say="${item.w}" title="Dengarkan">🔊</button>
        <button class="icon-btn ${saved?'saved':''}" data-save="${item.w}" title="Simpan kata">${saved?'★':'☆'}</button>
      </div>
      <div class="phon">${item.p}</div>
      <p class="meaning">${item.m}</p>
      <div class="example">
        <p class="en"><span>${item.e}</span>
          <button class="icon-btn" data-say="${item.e.replace(/"/g,'&quot;')}" title="Dengarkan contoh">🔊</button>
        </p>
        <p class="id">${item.et}</p>
      </div>
    </div>`;
  }).join('');

  updateVocabProgress();
}

document.getElementById('shuffleWords').addEventListener('click', () => {
  const picked = drawUnseen(3);
  if(!picked.length){
    renderWords([]);
    toast('Semua kosakata sudah dipelajari 🎉');
    return;
  }
  renderWords(picked);
  if(picked.length < 3) toast(`Tinggal ${picked.length} kata baru lagi`);
  else toast('Kosakata baru dimuat ✨');
});

document.getElementById('dailyWords').addEventListener('click', () => {
  const today = dateKey(new Date());
  let list = [];

  if(store.today.date === today && store.today.words.length){
    list = wordsByNames(store.today.words);
  }

  if(!list.length){
    const picked = drawUnseen(3);
    if(!picked.length){
      renderWords([]);
      toast('Semua kosakata sudah dipelajari 🎉');
      return;
    }
    store.today = {date: today, words: picked.map(p => p.w)};
    saveStore();
    list = picked;
  }

  renderWords(list);
  toast('Kosakata hari ini 📅');
});

document.addEventListener('click', (e) => {

  if(e.target.closest('#resetPoolBtn')){
    if(confirm('Mulai ulang daftar kosakata dari awal? Semua kata akan muncul lagi.')){
      store.seen = [];
      store.today = {date:'', words:[]};
      saveStore();
      const picked = drawUnseen(3);
      store.today = {date: dateKey(new Date()), words: picked.map(p => p.w)};
      saveStore();
      renderWords(picked);
      toast('Daftar kosakata direset 🔄');
    }
    return;
  }

  const say = e.target.closest('[data-say]');
  if(say){ speak(say.dataset.say); return; }

  const sv = e.target.closest('[data-save]');
  if(sv){
    const w = sv.dataset.save;
    const i = store.saved.indexOf(w);
    if(i === -1){
      store.saved.push(w);
      toast('Kata disimpan ⭐');
    } else {
      store.saved.splice(i,1);
      toast('Kata dihapus dari simpanan');
    }
    saveStore();
    renderWords(currentWords);
    renderProgress();
  }
});

/* =========================================================
   KALIMAT
   ========================================================= */
let currentSentence = null;
let transVisible = false;

function renderSentence(s){
  currentSentence = s;
  transVisible = false;
  document.getElementById('sentEn').textContent = s.en;
  document.getElementById('sentId').textContent = s.id;
  document.getElementById('sentNote').innerHTML = '💡 ' + s.note;
  document.getElementById('sentBox').style.display = 'none';
  document.getElementById('toggleTrans').textContent = '👁️ Lihat terjemahan';
  document.getElementById('speakSent').dataset.say = s.en;
}

document.getElementById('toggleTrans').addEventListener('click', () => {
  transVisible = !transVisible;
  document.getElementById('sentBox').style.display = transVisible ? 'block' : 'none';
  document.getElementById('toggleTrans').textContent = transVisible ? '🙈 Sembunyikan' : '👁️ Lihat terjemahan';
});
document.getElementById('newSent').addEventListener('click', () => {
  let s;
  do { s = SENTENCES[Math.floor(Math.random()*SENTENCES.length)]; }
  while(SENTENCES.length > 1 && s === currentSentence);
  renderSentence(s);
  toast('Kalimat baru 💬');
});

/* =========================================================
   QUIZ
   ========================================================= */
let currentQuiz = null;
let quizAnswered = false;

function updateScoreBar(){
  document.getElementById('qCorrect').textContent = store.correct;
  document.getElementById('qTotal').textContent = store.total;
  const acc = store.total ? Math.round(store.correct / store.total * 100) : 0;
  document.getElementById('qAcc').textContent = acc + '%';
}

function newQuiz(){
  let q;
  do { q = QUIZ[Math.floor(Math.random()*QUIZ.length)]; }
  while(QUIZ.length > 1 && q === currentQuiz);
  currentQuiz = q;
  quizAnswered = false;
  document.getElementById('quizPrompt').textContent = q.id;
  const input = document.getElementById('quizInput');
  input.value = '';
  input.disabled = false;
  input.focus();
  const fb = document.getElementById('quizFeedback');
  fb.className = 'feedback';
  fb.innerHTML = '';
  document.getElementById('checkBtn').disabled = false;
  document.getElementById('hintBtn').disabled = false;
  updateScoreBar();
}

function checkAnswer(){
  if(quizAnswered || !currentQuiz) return;
  const input = document.getElementById('quizInput');
  const val = input.value.trim();
  if(!val){ toast('Tulis jawabanmu dulu ya ✍️'); input.focus(); return; }

  quizAnswered = true;
  input.disabled = true;
  document.getElementById('checkBtn').disabled = true;
  document.getElementById('hintBtn').disabled = true;

  const userNorm = normalize(val);
  const isCorrect = normalize(currentQuiz.en) === userNorm ||
    (currentQuiz.alt || []).some(a => normalize(a) === userNorm);

  store.total++;
  if(isCorrect) store.correct++;
  saveStore();
  updateScoreBar();
  renderProgress();

  const fb = document.getElementById('quizFeedback');
  if(isCorrect){
    fb.className = 'feedback ok show';
    fb.innerHTML = `✅ <b>Benar!</b> Jawabanmu tepat.<div class="answer">${currentQuiz.en}</div>`;
    toast('Jawaban benar! 🎉');
  } else {
    fb.className = 'feedback no show';
    fb.innerHTML = `❌ <b>Belum tepat.</b> Jawabanmu: <i>${escapeHtml(val)}</i>
      <div class="answer">Jawaban yang benar:<br>${currentQuiz.en}</div>`;
  }
}

document.getElementById('checkBtn').addEventListener('click', checkAnswer);
document.getElementById('nextQuiz').addEventListener('click', newQuiz);
document.getElementById('hintBtn').addEventListener('click', () => {
  if(!currentQuiz || quizAnswered) return;
  quizAnswered = true;
  document.getElementById('quizInput').disabled = true;
  document.getElementById('checkBtn').disabled = true;
  document.getElementById('hintBtn').disabled = true;
  store.total++;
  saveStore();
  updateScoreBar();
  renderProgress();
  const fb = document.getElementById('quizFeedback');
  fb.className = 'feedback no show';
  fb.innerHTML = `💡 <b>Kunci jawaban:</b><div class="answer">${currentQuiz.en}</div>`;
});
document.getElementById('quizInput').addEventListener('keydown', (e) => {
  if(e.key === 'Enter') checkAnswer();
});

/* =========================================================
   TIPS
   ========================================================= */
function renderTips(){
  const tip = TIPS[dayNumber() % TIPS.length];
  document.getElementById('tipTitle').textContent = '💡 ' + tip.t;
  document.getElementById('tipBody').innerHTML = tip.b;

  document.getElementById('mistakeList').innerHTML = MISTAKES.map(m => `
    <div class="mistake">
      <div class="wrong">${escapeHtml(m.w)}</div>
      <div class="right">${escapeHtml(m.r)}</div>
    </div>`).join('');
}

/* =========================================================
   PROGRES
   ========================================================= */
function renderProgress(){
  document.getElementById('stStreak').textContent = store.streak;
  document.getElementById('stCorrect').textContent = store.correct;
  const acc = store.total ? Math.round(store.correct / store.total * 100) : 0;
  document.getElementById('stAcc').textContent = acc + '%';
  document.getElementById('stSaved').textContent = store.saved.length;

  const box = document.getElementById('savedList');
  if(!store.saved.length){
    box.innerHTML = '<div class="empty">Belum ada kata yang disimpan.<br>Tekan tombol ☆ pada kartu kosakata untuk menyimpannya.</div>';
    return;
  }
  box.innerHTML = store.saved.map(w => {
    const item = WORDS.find(x => x.w === w);
    return `<div class="saved-item">
      <div>
        <b>${w}</b> <small>${item ? '· ' + item.m : ''}</small>
      </div>
      <button class="icon-btn" data-say="${w}">🔊</button>
      <button class="icon-btn del" data-save="${w}">✕</button>
    </div>`;
  }).join('');
}

document.getElementById('resetBtn').addEventListener('click', () => {
  if(confirm('Hapus semua progres, statistik, kosakata tersimpan, dan riwayat kata yang sudah dipelajari?')){
    store = {
      correct:0, total:0, streak:1, lastVisit:dateKey(new Date()),
      saved:[], seen:[], today:{date:'', words:[]}
    };
    saveStore();
    renderProgress();
    updateScoreBar();

    const picked = drawUnseen(3);
    store.today = {date: dateKey(new Date()), words: picked.map(p => p.w)};
    saveStore();
    renderWords(picked);
    toast('Semua progres berhasil direset');
  }
});

/* =========================================================
   INIT
   ========================================================= */
(function init(){
  const today = dateKey(new Date());
  let list = [];

  if(store.today.date === today && store.today.words.length){
    list = wordsByNames(store.today.words);
  }

  if(!list.length){
    list = drawUnseen(3);
    store.today = {date: today, words: list.map(p => p.w)};
    saveStore();
  }

  renderWords(list);
  renderSentence(SENTENCES[dayNumber() % SENTENCES.length]);
  newQuiz();
  renderTips();
  renderProgress();
  updateScoreBar();
})();