// 1. Date
//Untuk mendapatkan data hari secara real time
console.log("no.1--------------------------------------");
let a = Date();
console.log(a);

// 2. toPrecision
// membuat bilangan desimal menjadi bilangan presisi yang signifikan sesuai kebutuhan user
console.log("no.2--------------------------------------");
let b = 9.8097675;
console.log(b.toPrecision(3));

// 3. charAt()
// Untuk me-return character pada nomer index yang spesifik dari suatu string
console.log("no.3--------------------------------------");
let c = "Ini Budi"
console.log(c.charAt(0));
console.log(c.charAt(1));
console.log(c.charAt(2));

// 4.toFixed()
// Untuk mengambil angka di belakang koma
console.log("no.4--------------------------------------")
let d = 876.321154;
console.log(d.toFixed(0));
console.log(d.toFixed(1));
console.log(d.toFixed(2));

// 5.indexOf()
//Untuk mencari index pertama dari character string yang dicari
console.log("no.5--------------------------------------")
let str = "mencari index string satu"
console.log(str.indexOf("mencari"));
console.log(str.indexOf("index"));
console.log(str.indexOf("string"));

// 6. splice()
// Untuk merubah isi dari element array (menambah atau menghapus element lama)
// param1 untuk menentukan index/posisi yg akan diubah(wajib), param2 untuk menentukan jumlah elemen yg akan dihapus(opsional)
console.log("no.6--------------------------------------");
let arr = ["a", "b", "c", "d", "e"];
let rem = arr.splice(2,2,"x");
console.log(arr);

// 7.shift()
// Untuk menghapus elemen pertama array dan me-return element yang dihapus tadi
console.log("no.7--------------------------------------"); 
let e= [100, 300, 500, 700, 900, 1100];
console.log(e.shift());

// 8.unshift()
//Menambah 1 atau lebih elemen pada awal index array dan me-return panjang baru array tersebut
console.log("no.8--------------------------------------"); 
let arr1 = ["andi", "budi", "cindy", "edwin"];
let newLength = arr1.unshift("marry", "anton");
console.log(arr1);
console.log(newLength);

// 9.Math.random()
//Untuk me-return nilai random dari rentang 0 sampai 1
console.log("no.9--------------------------------------"); 
var acak = Math.random()
console.log(acak)
var acak = Math.random()
console.log(acak)

// 10.length()
//
console.log("no.10--------------------------------------"); 
let panjang = "bismillah";
console.log(panjang.length);