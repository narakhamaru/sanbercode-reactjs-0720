//soal1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
// Jawab Soal1
console.log(kataPertama,kataKedua,kataKetiga,kataKeempat);

//soal2
var kataPertama = 1;
var kataKedua = 2;
var kataKetiga = 4;
var kataKeempat = 5;
var hasilTambah = kataPertama + kataKedua + kataKetiga + kataKeempat;
//jawaban soal2
console.log(hasilTambah);

//soal3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua= kalimat.substring(4,14); // do your own! 
var kataKetiga=kalimat.substring(15,18); // do your own! 
var kataKeempat=kalimat.substring(19,25); // do your own! 
var kataKelima=kalimat.substring(25,33); // do your own! 
//jawaban soal3
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

//soal4
var nilai = "40"
if(nilai >= 80) grade = "A"
else if(nilai >= 70) grade = "B"
else if(nilai >= 60) grade = "C"
else if(nilai >= 50) grade = "D"
else if(nilai < 50) grade = "D"
//jawab soal4
console.log(`Grade anda: ${grade}`)

//soal5
var tanggal = 2;
var bulan = 1;
var tahun = 1992;

switch(bulan) {
  case 1:   { console.log(tanggal,'Februari',tahun); }
 }