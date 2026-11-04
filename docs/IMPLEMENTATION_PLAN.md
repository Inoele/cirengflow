# IMPLEMENTATION_PLAN
**Metode:** Agile · **Versi:** 1.0 · **Estimasi:** 4 sprint kecil

## Sprint 0 — Persiapan dan fondasi
- Konfirmasi PRD, aturan bisnis, dan UI guideline.
- Siapkan React + Vite + Tailwind.
- Buat struktur layout, routing/menu, komponen dasar.
- **Output:** aplikasi berjalan dan kerangka navigasi.

## Sprint 1 — Master data dan dashboard
- Buat login demo.
- Buat dashboard dummy.
- Buat Data Pelanggan dan Data Produk.
- Tambahkan pencarian dan tambah data dummy.
- **Acceptance:** semua menu tampil dan data dapat dicari/ditambah pada state.

## Sprint 2 — Transaksi dan invoice
- Buat form transaksi.
- Hitung subtotal/total dari produk dan jumlah.
- Buat ID invoice dan status awal.
- Buat template invoice digital.
- Ekspor invoice menjadi PNG.
- **Acceptance:** transaksi baru muncul pada riwayat dan invoice dapat diunduh.

## Sprint 3 — WhatsApp share, QA, dan handoff
- Buat tautan WhatsApp berisi pesan invoice.
- Validasi perilaku: tidak mengirim otomatis; gambar dilampirkan manual.
- Uji responsif, navigasi, empty state, dan konsistensi data.
- Rapikan dokumentasi dan siapkan backlog integrasi backend.
- **Acceptance:** tautan WhatsApp terbuka dan semua alur utama prototype dapat didemokan.

## Backlog setelah prototype
- API Node.js dan database.
- Autentikasi dan role admin/operator.
- Validasi nomor WhatsApp dan format nomor Indonesia.
- Ubah status pembayaran dengan audit trail.
- Ekspor JPG, PDF, dan template struk.
- Integrasi WhatsApp Business Platform hanya jika dibutuhkan dan memenuhi persyaratan bisnis.

## Definition of Done
Fitur dianggap selesai jika UI tersedia, alur utama bisa dicoba, validasi dasar berjalan, tidak ada error console kritis, dan acceptance criteria pada PRD terpenuhi.
