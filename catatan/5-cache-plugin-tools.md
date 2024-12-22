## Caching

adalah sebuah teknik untuk menyimpan data di dalam komponen hardware atau software, dilakukan agar request (berikutnya) untuk data tersebut terjadi dengan lebih cepat.

kalau kita melakukan refresh halaman dengan menekan ctrl + r atau refresh, maka itu namanya bukan hard refresh, kalau hard refresh itu pakainya ctrl + shift + r

pada saat sudah di deploy ke server, client itu menggunakan browser akan mengakses server untuk mengambil situs dan asset-asset nya.
Cache memungkinkan website untuk melakukan load lebih cepat dengan trafic network yang lebih kecil.
tapi ini akan menjadi masalah kalau code yang di bundling ada perubahan.

## Output Filenames

Webpack akan melakukan bundling tidak hanya javascript melainkan juga html, agar kalau ada perubahan pada script js, maka html nya juga dilakukan generate ulang dan itu kita membutuhkan sebuah plugin yang namanya `HtmlWebpackPlugin`

sebelum nya buat dulu template sehingga ketika di generate html, itu sudah menggunakan template bawaan kita.
