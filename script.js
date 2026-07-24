// 1. Data Relasi Kombinasi Paket (Jenjang, Gelar, dan Prodi yang Sesuai)
const kombinasiAkademik = {
    "D4": [
        {
            gelar: "S.Tr.T. (Sarjana Terapan Tidur)",
            prodi: "D4 Teknik Mengabaikan Chat Group Alumni"
        },
        {
            gelar: "S.Tr.Kom. (Sarjana Terapan Kompor)",
            prodi: "D4 Rekayasa Perangkat Antre Promo Tanggal Kembar"
        },
        {
            gelar: "S.Tr.M. (Sarjana Terapan Malas)",
            prodi: "D4 Terapan Manajemen Parkiran Indomaret"
        },
        {
            gelar: "S.Tr.Par. (Sarjana Terapan Pariwisata Healing)",
            prodi: "D4 Terapan Repost Konten CapCut & FYP 3 Pagi"
        },
        {
            gelar: "S.Tr.Gz. (Sarjana Terapan Gizi Instant)",
            prodi: "D4 Tata Boga Cilok & Bakso Pinggir Jalan"
        },
        {
            gelar: "S.Tr.Cap. (Sarjana Terapan Capung Duduk)",
            prodi: "D4 Spesialis Capung Duduk & Kopi Saset 2000an"
        }
    ],
    "S1": [
        {
            gelar: "S.T. (Sarjana Tidur)",
            prodi: "S1 Teknik Otomotif Sepeda Listrik Komplek"
        },
        {
            gelar: "S.T. (Sarjana Tidur)",
            prodi: "S1 Teknik Prompt AI Menit-Menit Akhir"
        },
        {
            gelar: "S.Kom. (Sarjana Kompor)",
            prodi: "S1 Ilmu Menatap Jam Dinding Menjelang Jam Pulang"
        },
        {
            gelar: "S.M. (Sarjana Malas)",
            prodi: "S1 Manajemen Minyak Kayu Putih & Tolak Angin"
        },
        {
            gelar: "S.Hum. (Sarjana Halu Minimalis)",
            prodi: "S1 Sastra Bahasa Imut & Pura-Pura Lupa Chat"
        },
        {
            gelar: "S.I.P. (Sarjana Ilmu Parkir)",
            prodi: "S1 Hubungan Internasional Tetangga Sebelah Rumah"
        },
        {
            gelar: "S.P. (Sarjana Pertanian Panen)",
            prodi: "S1 Budidaya Kucing Garong & Ayam Tetangga"
        },
        {
            gelar: "S.Sos. (Sarjana Sering Overthinking)",
            prodi: "S1 Kearsipan Dokumen Rahasia Mas-Mas Biasa"
        }
    ],
    "S2": [
        {
            gelar: "M.T. (Magister Tidur)",
            prodi: "S2 Magister Teknik Penundaan Revisi Bab 4"
        },
        {
            gelar: "M.M. (Magister Malas)",
            prodi: "S2 Administrasi Healing Berkedok Tugas Akhir"
        },
        {
            gelar: "M.Kom. (Magister Kompor)",
            prodi: "S2 Magister Overthinking & Analisis Chat Dibalas 'Y'"
        },
        {
            gelar: "M.Psi. (Magister Pusing Sendiri)",
            prodi: "S2 Teori Konspirasi Mengapa Libur Cepat Selesai"
        },
        {
            gelar: "M.Gz. (Magister Gula Aren)",
            prodi: "S2 Spesialis Kopi Gula Aren 3 Cangkir Sehari"
        }
    ],
    "Profesi": [
        {
            gelar: "Sp.OT. (Spesialis Overthinking Terus)",
            prodi: "Spesialis Ahli Hindari Pertanyaan 'Kapan Nikah?'"
        },
        {
            gelar: "Sp.Kh. (Spesialis Khilaf Online)",
            prodi: "Spesialis Sepuh Canva & Desain Instan 5 Menit"
        },
        {
            gelar: "Apt. (Ahli Paling Tenang)",
            prodi: "Profesi Konsultan Tidur Siang Tanpa Beban"
        },
        {
            gelar: "Dr. (Dokter Rebahan)",
            prodi: "Profesi Pakar Menatap Layar HP Sambil Senyum Sendiri"
        }
    ]
};

// 2. Data Tahun Kelulusan Absurd/Kocak
const daftarTahunKocak = [
    "205 SM (Sebelum Masehi)",
    "1200 M (Zaman Kerajaan)",
    "1945 SM (Era Purba)",
    "3024 M (Masa Depan)",
    "1 SM (Zaman Firaun)",
    "1350 M (Era Kejayaan Majapahit)",
    "10.000 SM (Masa Purba)",
    "2012 M (Sesaat Sebelum Isu Kiamat)",
    "Abad ke-42 SM (Zaman Mesozoikum)"
];

// 1. Klik Lanjut di index.html
function lanjut() {
    const namaInput = document.getElementById("nama").value.trim().toUpperCase();
    const kampusInput = document.getElementById("kampus").value.trim().toUpperCase();

    if (namaInput === "" || kampusInput === "") {
        alert("Silakan lengkapi nama dan nama kampus kamu terlebih dahulu!");
        return;
    }

    // Pilih Jenjang secara Random
    const daftarJenjang = Object.keys(kombinasiAkademik);
    const jenjangRandom = daftarJenjang[Math.floor(Math.random() * daftarJenjang.length)];

    // Pilih Pasangan Gelar & Prodi yang Presisi Sesuai Jenjang
    const opsiPaket = kombinasiAkademik[jenjangRandom];
    const paketRandom = opsiPaket[Math.floor(Math.random() * opsiPaket.length)];

    const namaLengkapGelar = `${namaInput}, ${paketRandom.gelar}`;
    const prodiRandom = paketRandom.prodi;

    // Pilih Tahun Random
    const lulusRandom = daftarTahunKocak[Math.floor(Math.random() * daftarTahunKocak.length)];

    const data = {
        nama: namaLengkapGelar,
        kampus: kampusInput,
        jenjang: jenjangRandom,
        prodi: prodiRandom,
        lulus: lulusRandom
    };

    localStorage.setItem("mahasiswa", JSON.stringify(data));
    window.location.href = "verifikasi.html";
}

// 2. Load Data di verifikasi.html
function loadData() {
    const data = JSON.parse(localStorage.getItem("mahasiswa"));

    if (!data) {
        window.location.href = "index.html";
        return;
    }

    // Set waktu sinkronisasi realtime
    const now = new Date();
    const syncElem = document.getElementById("syncTime");
    if (syncElem) {
        syncElem.innerText = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) + " " + now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    }

    mulaiVerifikasi();
}

function centang(id) {
    let el = document.getElementById(id);
    if (el) {
        el.className = "icon-check-green";
        el.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }
}

// --- PROSESSING BERTAHAP (1/4 -> 2/4 -> 3/4 -> 4/4) ---
function mulaiVerifikasi() {
    const badge = document.getElementById("badgeProgress");

    // Langkah 1: Awal masuk verifikasi (1/4 Lengkap)
    if (badge) badge.innerText = "2/4 Lengkap";

    // Langkah 3: Syarat Kedua Selesai (3/4 Lengkap) setelah 2 detik
    setTimeout(function() {
        centang("c2");
        if (badge) badge.innerText = "3/4 Lengkap";
    }, 2000);

    // Langkah 4: Semua Syarat Selesai (4/4 Lengkap) setelah 4 detik
    setTimeout(function() {
        centang("c1");
        if (badge) badge.innerText = "4/4 Lengkap";
    }, 4000);

    // Langkah 5: Pindah ke Halaman Berhasil setelah 5.5 detik
    setTimeout(function() {
        window.location.href = "berhasil.html";
    }, 5500);
}

// 3. Tampilkan Data Lengkap di berhasil.html
function tampilkanHasil() {
    const data = JSON.parse(localStorage.getItem("mahasiswa"));

    if (!data) {
        window.location.href = "index.html";
        return;
    }

    document.getElementById("nama").innerText = data.nama;
    document.getElementById("kampus").innerText = data.kampus;
    document.getElementById("jenjang").innerText = data.jenjang;
    document.getElementById("prodi").innerText = data.prodi;
    document.getElementById("lulus").innerText = data.lulus;
}

// --- Fungsi Modal About ---
function openAboutModal() {
    const modal = document.getElementById("aboutModal");
    if (modal) {
        modal.style.display = "flex";
    }
}

function closeAboutModalDirect() {
    const modal = document.getElementById("aboutModal");
    if (modal) {
        modal.style.display = "none";
    }
}

function closeAboutModal(event) {
    const modal = document.getElementById("aboutModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function selesai() {
    localStorage.removeItem("mahasiswa");
    window.location.href = "index.html";
}
