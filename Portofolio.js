// Ambil elemen form dan umpan balik
const form = document.getElementById("portfolioForm");
const feedback = document.getElementById("feedback");

// Tambahkan event listener untuk mengirimkan form
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Ambil data dari form
    const formData = new FormData(form);

    // Lakukan proses pengiriman data ke server atau API
    // Misalnya, Anda bisa menggunakan fetch() atau XMLHttpRequest
    // Di sini kita hanya akan simulasi pengiriman data
    console.log("Data yang akan dikirim:", Object.fromEntries(formData.entries()));

    // Tampilkan umpan balik setelah pengiriman berhasil
    feedback.style.display = "block"; // Tampilkan umpan balik
    feedback.textContent = "Portofolio Anda telah berhasil dikirim!"; // Teks umpan balik

    // Kosongkan form setelah pengiriman
    form.reset();

    // Sembunyikan umpan balik setelah beberapa detik
    setTimeout(() => {
        feedback.style.display = "none"; // Sembunyikan umpan balik setelah 3 detik
    }, 3000);
});
