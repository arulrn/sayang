// Kata sandi yang telah ditentukan sebelumnya
const KATASANDI = "020403"; // Ubah ini menjadi kata sandi pilihan Anda

// Variabel untuk menyimpan kata sandi yang dimasukkan
let sandiDimasukkan = "";

// Fungsi untuk menambahkan angka ke tampilan
function addNumber(number) {
    const kodeTeks = document.getElementById('kode-teks');
    const display = document.querySelector('.display');

    // Jika teks saat ini adalah “Kata Sandi”, kita hapus.
    if (kodeTeks.textContent === 'Kata sandi') {
        kodeTeks.textContent = '';
    }

    // Menambahkan nomor ke teks (dalam mode kata sandi)
    kodeTeks.textContent += '*'; // Kami menggunakan titik sebagai karakter kata sandi.

    // Menyimpan angka yang sebenarnya dalam variabel
    sandiDimasukkan += number;

    // Menambahkan kelas untuk mode kata sandi
    display.classList.add('mode-password');

    // Memvalidasi kata sandi ketika panjang yang benar dimasukkan
    if (sandiDimasukkan.length === KATASANDI.length) {
        if (sandiDimasukkan === KATASANDI) {
            showCounter(); // Tampilkan penghitung jika kata sandi benar
        } else {
            alert("Kata sandi salah. Coba lagi."); // Tampilkan pesan kesalahan
            kodeTeks.textContent = 'Kata sandi'; // Setel ulang teks
            display.classList.remove('mode-password'); // Menghapus mode kata sandi
            sandiDimasukkan = ""; // Setel ulang kata sandi yang dimasukkan
        }
    }
}

// Fungsi untuk menampilkan penghitung dan menyembunyikan brankas
function showCounter() {
    const container = document.querySelector('.container');
    const sectionCounter = document.getElementById('section-counter');

    // Menyembunyikan brankas
    container.style.display = 'none';

    // Menampilkan penghitung
    sectionCounter.style.display = 'block';
}

// Fungsi untuk memperbarui penghitung
function updateCounter() {
    const startDate = new Date('2003-04-02'); // Ubah tanggal ini ke tanggal yang Anda suka
    const now = new Date();

    let year = now.getFullYear() - startDate.getFullYear();
    let month = now.getMonth() - startDate.getMonth();
    let date = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // Sesuaikan hari jika negatif
    if (date < 0) {
        month ;
        const lastDayPreviousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        date += lastPreviousDayMonth;
    }

    // Sesuaikan bulan jika negatif
    if (month < 0) {
        year --;
        month += 12;
    }

    // Memastikan nilai tidak negatif
    if (year < 0) years = 0;
    if (month < 0) months = 0;
    if (date < 0) days = 0;
    if (hours < 0) hours = 0;
    if (minutes < 0) minutes = 0;
    if (seconds < 0) seconds = 0;

    document.getElementById('year').textContent = year;
    document.getElementById('month').textContent = month;
    document.getElementById('date').textContent = date;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Perbarui penghitung setiap detik
setInterval(updateCounter, 1000);


// Fungsi untuk menampilkan galeri foto
function showGallery() {
    const sectionCounter = document.getElementById('section-counter');
    const sectionGallery = document.getElementById('section-gallery');
    const sectionLetter = document.getElementById('section-letter');

    // Menyembunyikan bagian lain
    sectionCounter.style.display = 'none';
    sectionLetter.style.display = 'none';

    // Menampilkan galeri
    sectionGallery.style.display = 'block';
}

// Fungsi untuk menampilkan menu

    const tes = document.getElementById('hbd');
    tes.addEventListener("click", function(){
        window.location.href="hbd.html";
    });


   
    
    // HBD




