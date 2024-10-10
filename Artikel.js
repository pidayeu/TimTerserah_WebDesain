// Ambil elemen yang dibutuhkan
const openModalBtn = document.getElementById('openModalBtn'); 
const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const textFeedbackBox = document.getElementById('textFeedbackBox');
const loginForm = document.getElementById('loginForm');
const profileBtn = document.getElementById('profileBtn');
const dropdownContainer = document.getElementById('dropdownContainer');
const dropdownContent = document.getElementById('dropdownContent');
const logoutBtn = document.getElementById('logoutBtn');

// Tampilkan modal saat tombol Masuk diklik
openModalBtn.onclick = function() {
    modal.style.display = "flex"; // Gunakan flex agar modal dapat dipusatkan
};

// Sembunyikan modal saat tombol close diklik
closeModalBtn.onclick = function() {
    modal.style.display = "none"; 
};

// Sembunyikan modal saat area luar modal diklik
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Proses login saat form dikirim
loginForm.onsubmit = function(e) {
    e.preventDefault(); // Cegah refresh halaman

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Lakukan validasi atau proses login di sini
    if (email && password) {
        textFeedbackBox.textContent = 'Login berhasil! Selamat datang.';
        textFeedbackBox.style.display = 'block';
        modal.style.display = "none";
        openModalBtn.style.display = "none"; // Sembunyikan tombol Masuk
        profileBtn.style.display = "inline-block"; // Tampilkan tombol Profil
        dropdownContainer.style.display = "block"; // Tampilkan dropdown setelah login
    }
};

// Tampilkan atau sembunyikan dropdown saat tombol profil diklik
profileBtn.onclick = function() {
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
        dropdownContent.style.display = "block"; // Tampilkan dropdown
    } else {
        dropdownContent.style.display = "none"; // Sembunyikan dropdown
    }
};

// Logout function
logoutBtn.onclick = function() {
    // Simulasikan logout
    profileBtn.style.display = "none"; // Sembunyikan tombol Profil
    openModalBtn.style.display = "inline-block"; // Tampilkan kembali tombol Masuk
    textFeedbackBox.textContent = 'Anda telah keluar.';
    textFeedbackBox.style.display = 'block';
    dropdownContent.style.display = "none"; // Sembunyikan dropdown
};
