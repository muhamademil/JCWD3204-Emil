//case 1
//Masukan input angka untuk tabel perkalian
let angka = 9

// Menggunakan loop untuk menampilkan tabel perkalian dari 1 hingga 10
for (let i = 1; i <= 10; i++) {
    let hasil = angka * i;
    console.log(`${angka} x ${i} = ${hasil}`);
}
console.log("=================================")

// case 2 polindrome

// Input string dari pengguna
let inputString = "kasur rusak "
// Hapus spasi dan ubah ke huruf kecil
inputString = inputString.replace(/\s+/g, '').toLowerCase();
// Membalikkan string
let reversedString = inputString.split('').reverse().join('');
// Membandingkan string asli dengan string yang dibalik
if (inputString === reversedString) {
    console.log(inputString, ": adalah palindrome!");
} else {
    console.log(inputString, ":  bukan palindrome.");
}
console.log("=================================")

// case 3
let cm = 100000
let km = cm / 100000
console.log(`maka :${cm} adalah :${km}km `)
console.log("=================================")

// case 4
//Masukkan angka
let uang = 1000
// Memformat angka sebagai IDR (Rupiah Indonesia)
let formatMataUang = uang.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR'
});
// Menampilkan hasil format
console.log(formatMataUang);
console.log("=================================")

// case 5
// Masukkan string utama dan string yang ingin dicari
let mainString = "Hello World!"
let searchString = "ell"
// Menggunakan replace() untuk menghapus kemunculan pertama dari string pencarian
let remove = mainString.replace(searchString, '');
// Menampilkan hasil string yang sudah diubah
console.log("Kalimat menjadi:", remove);
console.log("=================================")

// case 6
let message = "hello world!"

console.log(message.toUpperCase())
console.log(message.toLowerCase())

//

