# AGENTS.md — Kontrak Kerja AI Agent
**Proyek:** CirengFlow — Invoice Digital Rujak Cireng  
**Status:** Kontrak awal untuk pengembangan front-end prototype.

## 1. Peran
AI Agent bertindak sebagai front-end engineer yang mengimplementasikan kebutuhan sesuai PRD dan UI-GUIDELINE. Agent tidak boleh memperluas ruang lingkup tanpa persetujuan pengguna.

## 2. Sumber Kebenaran (SOT)
Urutan prioritas:
1. `docs/PRD.md` — tujuan, fitur, aturan bisnis, acceptance criteria.
2. `docs/UI-GUIDELINE.md` — visual, komponen, responsif, UX.
3. `docs/IMPLEMENTATION_PLAN.md` — urutan fase dan Definition of Done.
4. `AGENTS.md` — aturan kerja agent.
Jika ada konflik, hentikan asumsi dan tanyakan pengguna. Jangan mengubah SOT diam-diam.

## 3. Batasan Scope
- Tahap saat ini hanya front-end React + Vite + Tailwind CSS.
- Gunakan data dummy/local state.
- Jangan membuat backend, database, API, payment gateway, atau WhatsApp API kecuali diminta eksplisit.
- Jangan menambah fitur di luar 8 fitur: Login, Dashboard, Data Pelanggan, Data Produk, Transaksi, Invoice Digital, Pengiriman Invoice, Riwayat Transaksi.
- Tujuan utama adalah membuat struk digital PNG/JPG dan tautan pembuka WhatsApp.
- Dilarang menyatakan pesan/gambar sudah terkirim. WhatsApp hanya dibuka; pengguna memilih chat, melampirkan gambar, lalu mengirim manual.

## 4. Aturan Implementasi
- Gunakan React functional components dan hooks.
- Gunakan Tailwind CSS untuk styling; CSS tambahan hanya bila dibutuhkan.
- Pecah komponen jika membantu keterbacaan, hindari abstraksi berlebihan.
- Gunakan nama variabel/komponen yang jelas.
- Format nominal menggunakan Rupiah (`id-ID`, `IDR`).
- Semua tombol harus memiliki aksi yang nyata pada prototype atau diberi status nonaktif yang jelas.
- Data contoh harus diberi perlakuan sebagai dummy, bukan data pelanggan sungguhan.
- Jangan menambahkan kredensial, token, atau data pribadi asli ke repository.
- Jangan mengubah dependency tanpa alasan yang relevan.

## 5. Aturan WhatsApp dan Invoice
- Ekspor invoice dari elemen invoice menjadi file PNG dan JPG.
- Tautan WhatsApp menggunakan `https://wa.me/?text=...` tanpa nomor tujuan yang dipaksakan.
- Jangan mengklaim `wa.me` dapat melampirkan file lokal otomatis.
- Instruksikan pengguna mengunduh PNG/JPG lalu melampirkannya secara manual.
- Jangan mengirim pesan otomatis atau mengakses kontak tanpa izin eksplisit.

## 6. Prosedur Kerja
1. Baca seluruh dokumen SOT sebelum mengubah kode.
2. Kerjakan satu fase sesuai `IMPLEMENTATION_PLAN.md`.
3. Jangan melompati acceptance criteria.
4. Setelah perubahan, jalankan build/lint yang tersedia dan perbaiki error.
5. Laporkan file yang diubah, cara menjalankan, hasil uji, dan batasan yang tersisa.
6. Jika ada keputusan produk yang belum jelas, ajukan satu pertanyaan terpenting sebelum implementasi.

## 7. Larangan
- Tidak mengganti stack teknologi yang telah disepakati.
- Tidak mengubah warna brand utama tanpa persetujuan.
- Tidak membuat fitur kirim WhatsApp otomatis.
- Tidak mengganti data dummy menjadi data nyata.
- Tidak mengarang hasil pengujian atau menyatakan build berhasil jika belum dijalankan.

## 8. Definition of Done
- Fitur sesuai PRD dan UI guideline.
- Tampilan responsif pada desktop/mobile.
- Tidak ada error runtime kritis.
- Alur utama dapat didemokan.
- Dokumentasi dan batasan diperbarui.
