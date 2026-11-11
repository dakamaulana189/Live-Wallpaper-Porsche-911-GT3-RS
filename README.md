# Minimal Porsche Clock — Lively Wallpaper

Wallpaper HTML/CSS/JS yang memakai gambar referensi yang kamu unggah sebagai sumber visual mobil.

## Isi folder
- `index.html` — struktur wallpaper
- `style.css` — background, posisi jam, dan pemotongan area mobil
- `script.js` — jam real-time mengikuti waktu lokal Windows
- `assets/reference-car.png` — gambar referensi yang kamu berikan

## Menjalankan di browser
Buka `index.html` dengan Chrome/Edge.

## Memasang ke Lively Wallpaper
1. Buka Lively Wallpaper.
2. Pilih tombol `+ Add Wallpaper`.
3. Pilih `Browse`.
4. Pilih file `index.html` di folder proyek ini.
5. Tambahkan lalu terapkan wallpaper.

PENTING:
Jangan memindahkan `index.html` sendirian. Folder `assets` harus tetap berada di sampingnya agar gambar mobil dapat ditemukan.

## Penyesuaian
- Ukuran jam: ubah `font-size` pada `.clock` di `style.css`.
- Posisi jam: ubah `top` pada `.clock`.
- Warna jam: ubah properti `color`.
- Bentuk potongan mobil: sesuaikan koordinat `clip-path` pada `.car-layer`.

Catatan:
Gambar sumber yang diberikan sudah mengandung angka jam statis. Proyek ini memisahkan jam dinamis dari gambar dengan mempertahankan area mobil melalui `clip-path`. Karena potongan mobil mengikuti siluet secara perkiraan, mungkin perlu sedikit penyesuaian posisi/potongan setelah diuji di monitor.
