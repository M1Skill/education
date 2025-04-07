const data = [
  {
    question: "Apa kepanjangan dari OOP?",
    options: [
      "Object Oriented Programming",
      "Oriented Object Processing",
      "Object Operation Protocol",
      "Object Optimization Process",
    ],
    answer: "Object Oriented Programming",
    explanation:
      "OOP adalah singkatan dari Object Oriented Programming, yaitu paradigma pemrograman berbasis objek.",
  },
  {
    question: "Apa konsep utama dalam OOP?",
    options: [
      "Encapsulation, Inheritance, Polymorphism, Abstraction",
      "Looping, Condition, Function",
      "Variable, Constant, Array",
      "Server, Client, API",
    ],
    answer: "Encapsulation, Inheritance, Polymorphism, Abstraction",
    explanation:
      "Konsep utama dalam OOP adalah Encapsulation (pembungkusan data), Inheritance (pewarisan sifat), Polymorphism (banyak bentuk), dan Abstraction (abstraksi data).",
  },
  {
    question: "Manakah yang termasuk bahasa pemrograman OOP?",
    options: ["Java", "HTML", "CSS", "SQL"],
    answer: "Java",
    explanation:
      "Java adalah salah satu bahasa pemrograman berbasis OOP yang sangat populer.",
  },
  {
    question: "Apa itu Encapsulation dalam OOP?",
    options: [
      "Menyembunyikan detail implementasi dari pengguna",
      "Menghubungkan dua kelas",
      "Membuat kode lebih lambat",
      "Menghapus fungsi dalam class",
    ],
    answer: "Menyembunyikan detail implementasi dari pengguna",
    explanation:
      "Encapsulation bertujuan untuk menyembunyikan detail implementasi dan hanya menampilkan fitur yang diperlukan.",
  },
  {
    question: "Apa fungsi dari Inheritance dalam OOP?",
    options: [
      "Memungkinkan suatu kelas mewarisi properti dan metode dari kelas lain",
      "Menghapus kode duplikat",
      "Menjalankan fungsi berulang",
      "Mengubah tampilan program",
    ],
    answer:
      "Memungkinkan suatu kelas mewarisi properti dan metode dari kelas lain",
    explanation:
      "Inheritance memungkinkan reuse kode dengan mewarisi sifat dari kelas lain.",
  },
  {
    question: "Apa itu Polymorphism dalam OOP?",
    options: [
      "Kemampuan objek memiliki banyak bentuk",
      "Membuat objek berubah warna",
      "Menghubungkan dua bahasa pemrograman",
      "Menjalankan fungsi dalam thread yang berbeda",
    ],
    answer: "Kemampuan objek memiliki banyak bentuk",
    explanation:
      "Polymorphism memungkinkan satu metode memiliki implementasi yang berbeda tergantung pada objeknya.",
  },
  {
    question: "Dalam OOP, apa kegunaan dari keyword 'super'?",
    options: [
      "Memanggil constructor atau method dari superclass",
      "Membuat instance dari kelas",
      "Menjalankan method statis",
      "Menghapus objek dalam memori",
    ],
    answer: "Memanggil constructor atau method dari superclass",
    explanation:
      "Keyword 'super' digunakan untuk mengakses constructor atau method dari superclass dalam inheritance.",
  },
  {
    question: "Apa perbedaan antara class dan object dalam OOP?",
    options: [
      "Class adalah blueprint, object adalah instance dari class",
      "Object adalah blueprint, class adalah instance dari object",
      "Class adalah fungsi, object adalah variabel",
      "Tidak ada perbedaan",
    ],
    answer: "Class adalah blueprint, object adalah instance dari class",
    explanation:
      "Class adalah cetak biru yang mendefinisikan properti dan method, sedangkan object adalah instance nyata dari class tersebut.",
  },
  {
    question: "Apa tujuan utama dari Abstraction dalam OOP?",
    options: [
      "Menyembunyikan detail implementasi dan hanya menampilkan fitur yang diperlukan",
      "Mempercepat eksekusi kode",
      "Menghubungkan dua bahasa pemrograman",
      "Membuat kode lebih panjang",
    ],
    answer:
      "Menyembunyikan detail implementasi dan hanya menampilkan fitur yang diperlukan",
    explanation:
      "Abstraction bertujuan untuk menyederhanakan penggunaan objek dengan menyembunyikan detail yang tidak perlu.",
  },
  {
    question: "Apa yang dimaksud dengan constructor dalam OOP?",
    options: [
      "Method khusus yang dipanggil saat objek dibuat",
      "Method untuk menghapus objek",
      "Variabel dalam class",
      "Fungsi yang hanya bisa dipanggil sekali",
    ],
    answer: "Method khusus yang dipanggil saat objek dibuat",
    explanation:
      "Constructor adalah method khusus yang digunakan untuk menginisialisasi objek saat dibuat dari sebuah class.",
  },
];

export default data;
