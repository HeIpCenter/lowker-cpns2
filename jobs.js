const jobs = {
  guru_sd: {
    title: "Guru Sekolah Dasar (SD)",
    company: "Kementerian Pendidikan dan Kebudayaan",
    location: "Jakarta",
    salary: "IDR 5.000.000 - IDR 7.000.000",
    description:
      "Bertanggung jawab untuk mengajar dan mendidik siswa di tingkat sekolah dasar.",
    image: "https://via.placeholder.com/600x400?text=Guru+Sekolah+Dasar",
  },
  guru_smp: {
    title: "Guru Sekolah Menengah Pertama (SMP)",
    company: "Kementerian Pendidikan dan Kebudayaan",
    location: "Jakarta",
    salary: "IDR 5.500.000 - IDR 8.000.000",
    description:
      "Mengajar dan membimbing siswa di tingkat sekolah menengah pertama.",
    image:
      "https://via.placeholder.com/600x400?text=Guru+Sekolah+Menengah+Pertama",
  },
  guru_sma: {
    title: "Guru Sekolah Menengah Atas (SMA)",
    company: "Kementerian Pendidikan dan Kebudayaan",
    location: "Jakarta",
    salary: "IDR 6.000.000 - IDR 9.000.000",
    description:
      "Mengajar dan membimbing siswa di tingkat sekolah menengah atas.",
    image:
      "https://via.placeholder.com/600x400?text=Guru+Sekolah+Menengah+Atas",
  },
  guru_bk: {
    title: "Guru Bimbingan Konseling (BK)",
    company: "Kementerian Pendidikan dan Kebudayaan",
    location: "Jakarta",
    salary: "IDR 6.500.000 - IDR 8.500.000",
    description: "Memberikan bimbingan dan konseling kepada siswa.",
    image: "https://via.placeholder.com/600x400?text=Guru+Bimbingan+Konseling",
  },
  guru_khusus: {
    title: "Guru Mata Pelajaran Khusus",
    company: "Kementerian Pendidikan dan Kebudayaan",
    location: "Jakarta",
    salary: "IDR 7.000.000 - IDR 10.000.000",
    description:
      "Mengajar mata pelajaran khusus seperti matematika, bahasa Inggris, dan seni budaya.",
    image:
      "https://via.placeholder.com/600x400?text=Guru+Mata+Pelajaran+Khusus",
  },
  dokter_umum: {
    title: "Dokter Umum",
    company: "Kementerian Kesehatan",
    location: "Jakarta",
    salary: "IDR 10.000.000 - IDR 15.000.000",
    description: "Memberikan pelayanan kesehatan umum kepada masyarakat.",
    image: "https://via.placeholder.com/600x400?text=Dokter+Umum",
  },
  dokter_spesialis: {
    title: "Dokter Spesialis",
    company: "Kementerian Kesehatan",
    location: "Jakarta",
    salary: "IDR 15.000.000 - IDR 25.000.000",
    description: "Memberikan pelayanan kesehatan spesialis kepada pasien.",
    image: "https://via.placeholder.com/600x400?text=Dokter+Spesialis",
  },
  perawat: {
    title: "Perawat",
    company: "Kementerian Kesehatan",
    location: "Jakarta",
    salary: "IDR 5.000.000 - IDR 8.000.000",
    description: "Memberikan perawatan dan dukungan kepada pasien.",
    image: "https://via.placeholder.com/600x400?text=Perawat",
  },
  bidan: {
    title: "Bidan",
    company: "Kementerian Kesehatan",
    location: "Jakarta",
    salary: "IDR 6.000.000 - IDR 9.000.000",
    description: "Memberikan pelayanan kesehatan ibu dan anak.",
    image: "https://via.placeholder.com/600x400?text=Bidan",
  },
  apoteker: {
    title: "Apoteker",
    company: "Kementerian Kesehatan",
    location: "Jakarta",
    salary: "IDR 7.000.000 - IDR 10.000.000",
    description: "Mengelola dan memberikan obat kepada pasien.",
    image: "https://via.placeholder.com/600x400?text=Apoteker",
  },
  keuangan_djp: {
    title: "Kementerian Keuangan (Direktorat Jenderal Pajak)",
    company: "Kementerian Keuangan",
    location: "Jakarta",
    salary: "IDR 8.000.000 - IDR 12.000.000",
    description: "Mengelola pajak dan keuangan negara.",
    image: "https://via.placeholder.com/600x400?text=Kementerian+Keuangan",
  },
  kementerian_pendidikan: {
    title: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    company: "Kementerian Pendidikan",
    location: "Jakarta",
    salary: "IDR 7.000.000 - IDR 10.000.000",
    description: "Mengelola pendidikan dan kebudayaan di Indonesia.",
    image: "https://via.placeholder.com/600x400?text=Kementerian+Pendidikan",
  },
  kementerian_kesehatan: {
    title: "Kementerian Kesehatan",
    company: "Kementerian Kesehatan",
    location: "Jakarta",
    salary: "IDR 8.000.000 - IDR 12.000.000",
    description: "Mengelola kesehatan masyarakat di Indonesia.",
    image: "https://via.placeholder.com/600x400?text=Kementerian+Kesehatan",
  },
  kementerian_hukum: {
    title: "Kementerian Hukum dan HAM",
    company: "Kementerian Hukum dan HAM",
    location: "Jakarta",
    salary: "IDR 7.500.000 - IDR 10.000.000",
    description: "Mengawasi dan menegakkan hukum di Indonesia.",
    image: "https://via.placeholder.com/600x400?text=Kementerian+Hukum",
  },
  kementerian_luar_negeri: {
    title: "Kementerian Luar Negeri",
    company: "Kementerian Luar Negeri",
    location: "Jakarta",
    salary: "IDR 10.000.000 - IDR 15.000.000",
    description: "Mengelola hubungan luar negeri Indonesia.",
    image: "https://via.placeholder.com/600x400?text=Kementerian+Luar+Negeri",
  },
  guru_sekolah_daerah: {
    title: "Guru untuk Sekolah Daerah",
    company: "Dinas Pendidikan Daerah",
    location: "Berbagai Daerah",
    salary: "IDR 5.000.000 - IDR 7.000.000",
    description: "Mengajar di sekolah-sekolah daerah.",
    image: "https://via.placeholder.com/600x400?text=Guru+Sekolah+Daerah",
  },
  tenaga_medis: {
    title: "Tenaga Medis di RSUD",
    company: "RSUD Daerah",
    location: "Berbagai Daerah",
    salary: "IDR 6.000.000 - IDR 9.000.000",
    description: "Memberikan pelayanan medis di rumah sakit daerah.",
    image: "https://via.placeholder.com/600x400?text=Tenaga+Medis",
  },
  tenaga_administrasi: {
    title: "Tenaga Administrasi",
    company: "Pemerintah Daerah",
    location: "Berbagai Daerah",
    salary: "IDR 5.000.000 - IDR 7.000.000",
    description: "Mengelola administrasi di pemerintahan daerah.",
    image: "https://via.placeholder.com/600x400?text=Tenaga+Administrasi",
  },
  penyuluh_desa: {
    title: "Penyuluh Desa",
    company: "Dinas Pertanian",
    location: "Berbagai Daerah",
    salary: "IDR 6.000.000 - IDR 8.000.000",
    description: "Memberikan penyuluhan kepada masyarakat desa.",
    image: "https://via.placeholder.com/600x400?text=Penyuluh+Desa",
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
