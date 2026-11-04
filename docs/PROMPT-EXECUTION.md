# Prompt Execution — Eksekusi Awal Proyek

Salin prompt berikut ke AI coding agent setelah folder proyek dibuka:

---

Kamu adalah Senior Front-End Engineer. Kerjakan proyek **CirengFlow — Sistem Informasi Invoice Tagihan Digital Berbasis Web pada Usaha Rujak Cireng**.

Sebelum menulis kode:
1. Baca `AGENTS.md`.
2. Baca `docs/PRD.md`, `docs/UI-GUIDELINE.md`, dan `docs/IMPLEMENTATION_PLAN.md`.
3. Rangkum pemahamanmu dalam maksimal 10 poin. Jangan mulai fitur di luar SOT.

Konteks eksekusi:
- Stack wajib: React + Vite + Tailwind CSS.
- Tahap ini front-end saja, memakai data dummy.
- Implementasikan 8 fitur: Login, Dashboard, Data Pelanggan, Data Produk, Transaksi, Invoice Digital, Pengiriman Invoice, Riwayat Transaksi.
- Brand: hijau tua, putih, hijau muda; gaya SaaS modern futuristik yang bersih.
- Tujuan utama: menghasilkan struk invoice digital sebagai PNG/JPG dan membuka WhatsApp melalui link, bukan mengirim otomatis.

Urutan kerja:
1. Periksa struktur proyek dan dependency.
2. Pastikan `npm install` dan `npm run dev` dapat dijalankan.
3. Implementasikan fondasi layout dan navigasi.
4. Implementasikan fitur sesuai urutan sprint.
5. Pastikan transaksi menghasilkan invoice, nilai total akurat, dan invoice dapat diekspor sebagai PNG.
6. Tombol WhatsApp harus membuka `https://wa.me/?text=...`; jelaskan bahwa pengguna harus melampirkan gambar secara manual.
7. Uji seluruh menu, responsif, dan build produksi (`npm run build`).

Batasan:
- Jangan membuat backend/database/API/WhatsApp Business API.
- Jangan menambah fitur baru di luar daftar.
- Jangan mengarang hasil test.
- Jika requirement bertentangan atau tidak jelas, berhenti dan tanyakan satu pertanyaan paling penting.

Saat selesai, laporkan:
- Ringkasan implementasi.
- Daftar file yang dibuat/diubah.
- Cara menjalankan.
- Hasil `npm run build` dan pengujian yang benar-benar dilakukan.
- Batasan prototype dan rekomendasi fase berikutnya.

Mulai dari audit SOT dan fondasi proyek. Jangan mengerjakan semua backlog sekaligus.

---
