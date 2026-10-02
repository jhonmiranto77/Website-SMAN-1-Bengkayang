let formPending = "";

function handleFormSubmit(event, jenisForm) {
    event.preventDefault();
    formPending = jenisForm;
    const modalKonfirmasi = new bootstrap.Modal(document.getElementById('modalKonfirmasi'));
    modalKonfirmasi.show();
}

function prosesKirim() {
    const modalKonfirmasiEl = document.getElementById('modalKonfirmasi');
    const modalKonfirmasi = bootstrap.Modal.getInstance(modalKonfirmasiEl);
    modalKonfirmasi.hide();

    let title = "";
    let body = "";

    if (formPending === 'Konseling') {
        const nama = document.getElementById('namaKonseling').value;
        const topik = document.getElementById('topikKonseling').value;
        title = "Jadwal Konseling Terkirim!";
        body = `Terima kasih <strong>${nama}</strong>. Permohonan konseling mengenai <em>${topik}</em> telah diterima. Guru BK akan segera memanggil atau menghubungi kamu.`;
        document.getElementById('formKonseling').reset();
    } else if (formPending === 'Pengaduan') {
        const kategori = document.getElementById('kategoriLaporan').value;
        title = "Laporan Pengaduan Diterima!";
        body = `Terima kasih, laporan terkait <strong>${kategori}</strong> telah tersimpan di sistem kami secara aman dan rahasia. Pihak sekolah akan segera menindaklanjuti.`;
        document.getElementById('formPengaduan').reset();
    }

    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalBody').innerHTML = body;
    const modalSukses = new bootstrap.Modal(document.getElementById('modalSukses'));
    modalSukses.show();
}