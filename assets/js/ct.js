const data = [
  {
    question: "Apa yang dimaksud dengan Computational Thinking?",
    options: [
      "Kemampuan berpikir secara sistematis untuk memecahkan masalah dengan bantuan komputer",
      "Proses menulis kode program tanpa logika",
      "Metode mengoptimalkan hardware",
      "Seni membuat antarmuka pengguna yang menarik"
    ],
    answer: "Kemampuan berpikir secara sistematis untuk memecahkan masalah dengan bantuan komputer",
    explanation: "Computational Thinking adalah cara berpikir yang melibatkan pemecahan masalah secara sistematis dengan menguraikan masalah, mengenali pola, melakukan abstraksi, dan merancang algoritma."
  },
  {
    question: "Komponen utama dalam Computational Thinking tidak termasuk:",
    options: [
      "Decomposition",
      "Pattern Recognition",
      "Abstraction",
      "Randomization"
    ],
    answer: "Randomization",
    explanation: "Komponen utama dalam Computational Thinking adalah Decomposition, Pattern Recognition, Abstraction, dan Algorithm Design."
  },
  {
    question: "Apa itu Decomposition?",
    options: [
      "Memecah masalah besar menjadi bagian-bagian yang lebih kecil",
      "Mengidentifikasi pola dalam data",
      "Menyederhanakan masalah dengan mengabaikan detail yang tidak penting",
      "Merancang langkah-langkah untuk menyelesaikan masalah"
    ],
    answer: "Memecah masalah besar menjadi bagian-bagian yang lebih kecil",
    explanation: "Decomposition adalah proses memecah masalah kompleks menjadi sub-masalah yang lebih mudah dikelola dan diselesaikan."
  },
  {
    question: "Apa yang dimaksud dengan Pattern Recognition?",
    options: [
      "Mengenali pola atau kesamaan dalam data",
      "Membuat diagram alur",
      "Menguraikan masalah besar",
      "Menulis kode program"
    ],
    answer: "Mengenali pola atau kesamaan dalam data",
    explanation: "Pattern Recognition adalah kemampuan untuk mengidentifikasi pola, tren, atau keteraturan di antara data yang ada, sehingga solusi dapat digeneralisasi."
  },
  {
    question: "Apa itu Abstraction?",
    options: [
      "Menguraikan masalah menjadi bagian-bagian kecil",
      "Menyederhanakan masalah dengan mengabaikan detail yang tidak penting",
      "Merancang langkah-langkah algoritma",
      "Mengeksekusi kode program secara berulang"
    ],
    answer: "Menyederhanakan masalah dengan mengabaikan detail yang tidak penting",
    explanation: "Abstraction adalah proses menyederhanakan masalah dengan memfokuskan pada aspek yang esensial dan mengabaikan detail-detail yang tidak relevan."
  },
  {
    question: "Apa tujuan dari Algorithm Design?",
    options: [
      "Membuat antarmuka pengguna yang menarik",
      "Merancang langkah-langkah logis untuk menyelesaikan masalah",
      "Mengelompokkan data dalam database",
      "Mengoptimalkan penggunaan memori"
    ],
    answer: "Merancang langkah-langkah logis untuk menyelesaikan masalah",
    explanation: "Algorithm Design melibatkan pembuatan urutan langkah-langkah sistematis untuk menyelesaikan suatu masalah secara efektif dan efisien."
  },
  {
    question: "Dalam pemrograman sekuensial, perintah dieksekusi:",
    options: [
      "Secara acak",
      "Berdasarkan kondisi",
      "Secara berurutan",
      "Secara paralel"
    ],
    answer: "Secara berurutan",
    explanation: "Pemrograman sekuensial berarti setiap perintah dieksekusi satu per satu secara berurutan, tanpa adanya cabang atau perulangan."
  },
  {
    question: "Percabangan dalam pemrograman digunakan untuk:",
    options: [
      "Mengulang perintah",
      "Mengambil keputusan berdasarkan kondisi",
      "Menyimpan data ke dalam variabel",
      "Mengatur alur eksekusi secara acak"
    ],
    answer: "Mengambil keputusan berdasarkan kondisi",
    explanation: "Percabangan memungkinkan program untuk memilih jalur eksekusi yang berbeda berdasarkan kondisi tertentu (misalnya, if-else atau switch-case)."
  },
  {
    question: "Perulangan (looping) berguna untuk:",
    options: [
      "Menjalankan perintah satu kali saja",
      "Mengeksekusi blok kode berulang kali hingga kondisi terpenuhi",
      "Menyimpan data ke dalam variabel",
      "Menampilkan hasil output"
    ],
    answer: "Mengeksekusi blok kode berulang kali hingga kondisi terpenuhi",
    explanation: "Perulangan digunakan untuk mengulangi eksekusi blok kode sampai suatu kondisi berhenti terpenuhi (misalnya, for loop, while loop, atau do-while loop)."
  },
  {
    question: "Variabel dalam pemrograman berfungsi untuk:",
    options: [
      "Menyimpan data yang nilainya bisa berubah selama program berjalan",
      "Menampilkan output",
      "Mendefinisikan tipe data",
      "Mengatur logika program"
    ],
    answer: "Menyimpan data yang nilainya bisa berubah selama program berjalan",
    explanation: "Variabel adalah tempat penyimpanan data dalam program yang memungkinkan penyimpanan nilai yang dapat berubah seiring dengan eksekusi program."
  },
  {
    question: "Tipe data menentukan:",
    options: [
      "Jenis nilai yang dapat disimpan dalam variabel",
      "Proses eksekusi program",
      "Struktur alur logika program",
      "Ukuran layar perangkat"
    ],
    answer: "Jenis nilai yang dapat disimpan dalam variabel",
    explanation: "Tipe data menentukan kategori nilai yang dapat disimpan dalam variabel, seperti integer, float, char, string, dan boolean."
  },
  {
    question: "Operator aritmatika digunakan untuk:",
    options: [
      "Menggabungkan kondisi",
      "Melakukan operasi matematika dasar",
      "Menampilkan teks",
      "Menyimpan data ke variabel"
    ],
    answer: "Melakukan operasi matematika dasar",
    explanation: "Operator aritmatika seperti +, -, *, /, dan % digunakan untuk melakukan perhitungan matematika dasar."
  },
  {
    question: "Tools dan Teknik Pendukung dalam Computational Thinking bertujuan untuk:",
    options: [
      "Meningkatkan efisiensi dalam perancangan dan implementasi solusi",
      "Mengganti kebutuhan akan pemrograman",
      "Mengurangi interaksi antara manusia dan komputer",
      "Menurunkan biaya perangkat keras"
    ],
    answer: "Meningkatkan efisiensi dalam perancangan dan implementasi solusi",
    explanation: "Tools dan teknik pendukung membantu dalam mendokumentasikan, menguji, dan memvisualisasikan solusi, sehingga proses pengembangan menjadi lebih efisien dan terstruktur."
  },
  {
    question: "Etika dan Dampak Teknologi penting karena:",
    options: [
      "Membuat teknologi menjadi lebih canggih",
      "Menjamin penggunaan teknologi yang bertanggung jawab dan mengurangi dampak negatifnya",
      "Meningkatkan kecepatan akses internet",
      "Memperbanyak perangkat keras"
    ],
    answer: "Menjamin penggunaan teknologi yang bertanggung jawab dan mengurangi dampak negatifnya",
    explanation: "Etika dan dampak teknologi menjadi penting untuk memastikan bahwa kemajuan teknologi membawa manfaat bagi masyarakat tanpa menimbulkan dampak negatif yang signifikan."
  }
];

export default data;
