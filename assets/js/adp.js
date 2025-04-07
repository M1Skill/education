const data = [
    {
      question: "Apa yang dimaksud dengan algoritma?",
      options: [
        "Serangkaian langkah logis untuk menyelesaikan masalah",
        "Kumpulan kode program dalam bahasa pemrograman",
        "Metode pengolahan data dalam database",
        "Tampilan antarmuka pengguna pada aplikasi"
      ],
      answer: "Serangkaian langkah logis untuk menyelesaikan masalah",
      explanation: "Algoritma adalah urutan langkah-langkah logis yang digunakan untuk menyelesaikan suatu masalah secara sistematis."
    },
    {
      question: "Apa fungsi utama algoritma dalam pemrograman?",
      options: [
        "Membuat antarmuka pengguna yang menarik",
        "Menyelesaikan masalah dan memandu pembuatan program",
        "Menyimpan data secara permanen",
        "Mengatur hak akses pengguna"
      ],
      answer: "Menyelesaikan masalah dan memandu pembuatan program",
      explanation: "Algoritma membantu menyelesaikan masalah dengan memecahnya menjadi langkah-langkah yang lebih kecil, sehingga program dapat diimplementasikan dengan terstruktur."
    },
    {
      question: "Apa itu pseudocode?",
      options: [
        "Kode program yang ditulis dalam bahasa alami tanpa aturan sintaksis baku",
        "Bahasa pemrograman tingkat tinggi",
        "Diagram alur proses dalam program",
        "Kode biner yang dapat langsung dijalankan oleh komputer"
      ],
      answer: "Kode program yang ditulis dalam bahasa alami tanpa aturan sintaksis baku",
      explanation: "Pseudocode adalah cara menuliskan algoritma dengan menggunakan bahasa yang mudah dipahami, tanpa mengikuti aturan sintaksis formal dari bahasa pemrograman tertentu."
    },
    {
      question: "Apa kegunaan flowchart dalam perancangan program?",
      options: [
        "Menggambar tampilan antarmuka pengguna",
        "Mengilustrasikan alur logika atau proses secara visual",
        "Mengonversi kode sumber ke bahasa mesin",
        "Menyimpan data secara terstruktur"
      ],
      answer: "Mengilustrasikan alur logika atau proses secara visual",
      explanation: "Flowchart digunakan untuk menggambarkan langkah-langkah dan alur logika suatu proses secara visual, sehingga memudahkan analisis dan pemahaman struktur program."
    },
    {
      question: "Apa yang dimaksud dengan pemrograman sekuensial?",
      options: [
        "Program yang menjalankan perintah secara berurutan satu per satu",
        "Program yang memiliki pengambilan keputusan berdasarkan kondisi",
        "Program yang menjalankan perintah secara berulang hingga kondisi terpenuhi",
        "Program yang menggunakan pemrograman berorientasi objek"
      ],
      answer: "Program yang menjalankan perintah secara berurutan satu per satu",
      explanation: "Pemrograman sekuensial berarti setiap perintah dalam program dieksekusi secara berurutan, dari langkah pertama hingga langkah terakhir, tanpa adanya cabang atau perulangan."
    },
    {
      question: "Apa itu percabangan dalam pemrograman?",
      options: [
        "Proses menjalankan kode secara berulang-ulang",
        "Proses pengambilan keputusan berdasarkan kondisi tertentu",
        "Proses menyimpan data ke dalam variabel",
        "Proses mengoptimalkan kode program"
      ],
      answer: "Proses pengambilan keputusan berdasarkan kondisi tertentu",
      explanation: "Percabangan memungkinkan program untuk menjalankan blok kode tertentu berdasarkan hasil evaluasi kondisi, seperti pada struktur if-else atau switch-case."
    },
    {
      question: "Apa yang dimaksud dengan perulangan dalam pemrograman?",
      options: [
        "Proses mengeksekusi blok kode satu kali saja",
        "Proses menjalankan blok kode secara berulang hingga kondisi tertentu terpenuhi",
        "Proses menghubungkan dua fungsi dalam program",
        "Proses memperbarui nilai variabel secara otomatis"
      ],
      answer: "Proses menjalankan blok kode secara berulang hingga kondisi tertentu terpenuhi",
      explanation: "Perulangan (looping) digunakan untuk mengeksekusi blok kode secara berulang, yang berguna ketika jumlah iterasi sudah diketahui atau bergantung pada kondisi tertentu."
    },
    {
      question: "Apa yang dimaksud dengan variabel dalam pemrograman?",
      options: [
        "Tempat untuk menyimpan data yang nilainya bisa berubah selama program berjalan",
        "Fungsi khusus untuk menampilkan output",
        "Perintah untuk melakukan perulangan",
        "Instruksi untuk menghubungkan perangkat keras"
      ],
      answer: "Tempat untuk menyimpan data yang nilainya bisa berubah selama program berjalan",
      explanation: "Variabel adalah wadah atau tempat penyimpanan data dalam program yang dapat diubah nilainya saat program berjalan."
    },
    {
      question: "Apa itu tipe data dalam pemrograman?",
      options: [
        "Kategori yang mendefinisikan jenis nilai yang dapat disimpan dalam variabel",
        "Metode untuk mengurutkan data",
        "Fungsi untuk menghubungkan program dengan database",
        "Prosedur untuk memvalidasi input pengguna"
      ],
      answer: "Kategori yang mendefinisikan jenis nilai yang dapat disimpan dalam variabel",
      explanation: "Tipe data menentukan jenis nilai yang dapat disimpan dalam variabel, seperti integer, float, char, string, dan boolean, sehingga program dapat mengelola data dengan benar."
    },
    {
      question: "Apa fungsi operator aritmatika dalam pemrograman?",
      options: [
        "Untuk menggabungkan kondisi boolean",
        "Untuk melakukan operasi matematika seperti penjumlahan, pengurangan, perkalian, pembagian, dan sisa bagi",
        "Untuk menetapkan nilai ke variabel",
        "Untuk melakukan perulangan kode"
      ],
      answer: "Untuk melakukan operasi matematika seperti penjumlahan, pengurangan, perkalian, pembagian, dan sisa bagi",
      explanation: "Operator aritmatika digunakan untuk melakukan operasi matematika dasar yang diperlukan dalam perhitungan, seperti penjumlahan (+), pengurangan (-), perkalian (*), pembagian (/), dan sisa bagi (%)."
    }
  ];
  
  export default data;
  