# PRD — Product Requirements Document
## Sistem Informasi Invoice Tagihan Digital Berbasis Web — Usaha Rujak Cireng

**Versi:** 1.0 · **Status:** Baseline SOT · **Tanggal:** 03 November 2026

### 1. Ringkasan Produk
Aplikasi web internal untuk membantu usaha Rujak Cireng mengelola pelanggan, produk, transaksi, tagihan, dan membuat struk/invoice digital berbentuk PNG/JPG. Struk dapat dibagikan melalui tautan yang membuka WhatsApp.

### 2. Tujuan
- Mempercepat pencatatan transaksi dan pembuatan invoice.
- Mengurangi kesalahan pencatatan pelanggan, produk, dan total tagihan.
- Menyediakan bukti transaksi digital yang rapi dan mudah dibagikan.
- Memudahkan pemantauan status lunas dan belum lunas.

### 3. Pengguna
- **Admin:** mengelola data, transaksi, invoice, dan riwayat.
- **Operator (opsional fase berikutnya):** mencatat transaksi dan membuat invoice sesuai hak akses.

### 4. Ruang Lingkup
**Termasuk:** Login tampilan demo, Dashboard, Data Pelanggan, Data Produk, Transaksi, Invoice Digital, Pengiriman Invoice, Riwayat Transaksi. Front-end memakai data dummy.

**Tidak termasuk pada tahap ini:** backend Node.js, database, autentikasi produksi, payment gateway, WhatsApp API, pengiriman otomatis, multi-cabang, laporan akuntansi kompleks.

### 5. Kebutuhan Fungsional
| ID | Fitur | Kebutuhan |
|---|---|---|
| FR-01 | Login | Menampilkan form login dan masuk ke dashboard demo. |
| FR-02 | Dashboard | Menampilkan ringkasan penjualan, lunas, belum lunas, pelanggan, dan transaksi terbaru. |
| FR-03 | Data Pelanggan | Menampilkan, mencari, dan menambah data pelanggan dummy. |
| FR-04 | Data Produk | Menampilkan katalog, harga, stok, dan menambah produk dummy. |
| FR-05 | Transaksi | Memilih pelanggan, produk, jumlah, menghitung total, dan membuat transaksi. |
| FR-06 | Invoice Digital | Menampilkan invoice berdasarkan transaksi terpilih. |
| FR-07 | Pengiriman Invoice | Membuka WhatsApp dengan pesan invoice yang sudah disiapkan melalui `https://wa.me/?text=...`. |
| FR-08 | Riwayat Transaksi | Menampilkan dan mencari transaksi serta membuka invoice. |
| FR-09 | Ekspor Struk | Mengunduh area invoice sebagai PNG; JPG dapat ditambahkan pada iterasi berikutnya. |

### 6. Aturan Bisnis
1. Setiap transaksi memiliki ID invoice unik.
2. Total transaksi = harga produk × jumlah.
3. Status awal transaksi adalah **Belum Lunas**.
4. Status **Lunas** hanya boleh ditampilkan jika pembayaran telah dikonfirmasi admin.
5. Satu invoice mewakili satu transaksi pada prototype awal.
6. Nomor WhatsApp pelanggan boleh disimpan sebagai data, tetapi prototype tidak mengirim otomatis ke nomor tersebut.
7. Tombol WhatsApp membuka pemilih chat WhatsApp. Pengguna memilih penerima dan menekan kirim sendiri.
8. Gambar PNG diunduh lebih dahulu dan dilampirkan manual di WhatsApp. Tautan `wa.me` tidak dapat melampirkan file gambar lokal secara otomatis.

### 7. Kebutuhan Nonfungsional
- UI responsif untuk desktop dan ponsel.
- Navigasi konsisten dan mudah dipahami.
- Kontras teks dan tombol memadai.
- Format mata uang Rupiah.
- Komponen dapat dikembangkan menjadi integrasi API.
- Data dummy tidak dianggap data produksi dan tidak dijamin tersimpan setelah refresh.

### 8. Kriteria Penerimaan Prototype
- Semua 8 menu utama dapat dibuka.
- Transaksi baru menghasilkan ID dan invoice.
- Total dihitung sesuai harga × kuantitas.
- Invoice yang dipilih tampil konsisten dengan transaksi.
- Ekspor PNG dan JPG menghasilkan file gambar.
- Tombol WhatsApp membuka WhatsApp dengan teks invoice, tanpa mengirim otomatis.
- Tampilan dapat digunakan pada layar desktop dan mobile.

### 9. Asumsi yang Perlu Divalidasi
- Apakah usaha menggunakan satu admin atau admin dan operator.
- Format nomor invoice dan informasi wajib pada struk.
- Apakah harga/stok perlu dikelola per varian.
- Apakah pelanggan wajib memiliki nomor WhatsApp.
- Metode konfirmasi pembayaran dan siapa yang berwenang mengubah status.
