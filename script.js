// 1. Data Jenjang Formal
const daftarJenjang = ["D4", "S1", "S2", "Profesi"];

// 2. Data Gelar Pelestan/Kocak
const daftarGelarKocak = [
    "S.M. (Sarjana Malas)",
    "S.T. (Sarjana Tidur)",
    "S.Kom. (Sarjana Kompor)",
    "S.E. (Sarjana Enak-enakan)",
    "S.H. (Sarjana Halu)",
    "S.Pd. (Sarjana Penuh Drama)",
    "S.Sos. (Sarjana Sering Overthinking)",
    "S.Ked. (Sarjana Kehabisan Duit)",
    "S.Si. (Sarjana Selalu Insecure)",
    "Sp.Kh. (Spesialis Khilaf Online)"
];

// 3. Data Program Studi Meme (Disesuaikan Per Jenjang)
const prodiByJenjang = {
    "D4": [
        "D4 Rekayasa Perangkat Hitam (Pria Tampan)",
        "D4 Terapan Repost Konten CapCut & FYP",
        "D4 Spesialis Capung Duduk & Kopi Saset",
        "D4 Teknik Mengabaikan Chat Group Alumni",
        "D4 Tata Boga Cilok & Bakso Agus"
    ],
    "S1": [
        "S1 Teknik Otomotif Sepeda Listrik Rehan Unyu",
        "S1 Ilmu Perjomokan Terapan",
        "S1 Budidaya Mas Amba & Pak Vina",
        "S1 Sastra Jomok & Bahasa Imut",
        "S1 Hubungan Internasional Ngawi & Kota Amba",
        "S1 Manajemen Minyak Kayu Putih",
        "S1 Teknik Prompt AI Menit-Menit Akhir"
    ],
    "S2": [
        "S2 Magister Overthinking & Analisis Chat Dibalas 'Y'",
        "S2 Administrasi Healing Berkedok Tugas Akhir",
        "S2 Spesialis Kopi Gula Aren 3 Cangkir Sehari",
        "S2 Magister Penundaan Revisi Bab 4"
    ],
    "Profesi": [
        "Spesialis Sepuh Canva & Desain Instan",
        "Spesialis Tata Negara Sunda Empire",
        "Profesi Pakar Menatap Jam Dinding",
        "Spesialis Ahli Hindari Dosen Pembimbing"
    ]
};

// 4. Data Tahun Kelulusan Absurd/Kocak
const daftarTahunKocak = [
    "205 SM (Sebelum Masehi)",
    "1200 M (Zaman Kerajaan)",
    "1945 SM (Era Purba)",
    "3024 M (Masa Depan)",
    "1 SM (Zaman Firaun)",
    "1350 M (Era Kejayaan Majapahit)",
    "10.000 SM (Masa Jomok Purba)",
    "2012 M (Sesaat Sebelum Isu Kiamat)",
    "Abad ke-42 SM (Zaman Mesozoikum)"
];

function generateRandomNIM() {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

// 1. Klik Lanjut di index.html
function lanjut() {
    const namaInput = document.getElementById("nama").value.trim();
    const kampusInput = document.getElementById("kampus").value.trim();

    if (namaInput === "" || kampusInput === "") {
        alert("Silakan lengkapi nama dan nama kampus kamu terlebih dahulu!");
        return;
    }

    // Pilih Jenjang secara Random
    const jenjangRandom = daftarJenjang[Math.floor(Math.random() * daftarJenjang.length)];

    // Pilih Gelar Kocak
    const gelarRandom = daftarGelarKocak[Math.floor(Math.random() * daftarGelarKocak.length)];
    const namaLengkapGelar = `${namaInput}, ${gelarRandom}`;

    // Pilih Prodi sesuai Jenjang
    const opsiProdi = prodiByJenjang[jenjangRandom];
    const prodiRandom = opsiProdi[Math.floor(Math.random() * opsiProdi.length)];

    // Pilih Tahun & NIM Random
    const lulusRandom = daftarTahunKocak[Math.floor(Math.random() * daftarTahunKocak.length)];
    const nimRandom = generateRandomNIM();

    const data = {
        nama: namaLengkapGelar,
        kampus: kampusInput,
        nim: nimRandom,
        jenjang: jenjangRandom,
        prodi: prodiRandom,
        lulus: lulusRandom
    };

    localStorage.setItem("mahasiswa", JSON.stringify(data));
    window.location.href = "verifikasi.html";
}

// 2. Load Data di verifikasi.html (Biarkan UI tetap strip "-" dulu)
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

function mulaiVerifikasi() {
    setTimeout(function() {
        centang("c1");
    }, 1500);

    setTimeout(function() {
        centang("c2");
        const badge = document.getElementById("badgeProgress");
        if(badge) badge.innerText = "4/4 Lengkap";
    }, 3000);

    setTimeout(function() {
        window.location.href = "berhasil.html";
    }, 4500);
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
    document.getElementById("nim").innerText = data.nim;
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
    // Tutup jika klik area gelap di luar kotak modal
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function selesai() {
    localStorage.removeItem("mahasiswa");
    window.location.href = "index.html";
}
