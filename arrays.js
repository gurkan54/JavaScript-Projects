// // let urun1 = "iphone 12";
// // let urun2 = "iphone 13";
// // let urun3 = "iphone 13 pro";

// let urunler = ["iphone 12","iphone 13","iphone 13 pro"];
// let fiyatlar = [9000, 12000, 20000];
// let renkler = ["gold","siyah","beyaz"];

// let urun1 = ["iphone 12", 9000, "gold"];

// let urun2 = [];
// urun2[0] = "iphone 13";
// urun2[1] = 12000;
// urun2[2] = "siyah";

// let urun3 = [
//     "iphone 13 pro",
//     20000,
//     ["siyah","beyaz","mavi"]
// ];

// console.log(urun3[2]);
// console.log(urun3[2][0]);
// console.log(urun3[2][1]);
// console.log(urun3[2][2]);
// console.log(typeof urun3[2]);

// console.log(urunler[0]);
// console.log(urunler[1]);
// console.log(urunler[2]);

// console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
// console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
// console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);

// let kursAdi = "Komple Web Geliştirme Eğitimi";
// console.log(kursAdi[5]);
// console.log(kursAdi.split(" ")[3]);

// let ogrenciler = ["çınar","yiğit","ada"];

// sonuc = ogrenciler.length;

// // array to string
// sonuc = ogrenciler.toString();
// sonuc = ogrenciler.join(" ");

// // eleman silme
// // sonuc = ogrenciler.pop();       // son eleman silinir ve silinen eleman geri döndürülür.
// // sonuc = ogrenciler.shift();     // ilk eleman silinir.

// // eleman ekleme
// // sonuc = ogrenciler.push("sena");    // dizinin sonuna eleman eklenir.
// // sonuc = ogrenciler.unshift("sena");

// let markalar1 = ["mazda","toyota"];
// let markalar2 = ["opel","renault"];
// let markalar3 = ["mercedes"];

// // sonuc = markalar1.concat(markalar2, markalar3);
// // sonuc = markalar1.splice(0, 1, "bmw","audi");
// sonuc = markalar1.splice(0, 1);

// console.log(sonuc);
// console.log(markalar1);

// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.

let meyveler = ["Elma","Armut","Muz","Çilek"];

// 2- Dizi kaç elemanlıdır?

console.log(meyveler.length);

// 3- Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0]);   // Elma
console.log(meyveler[meyveler.length - 1]);   // Çilek

// 4- Elma dizinin bir elemanımıdır?
console.log(meyveler.includes("Elma"));
console.log(meyveler.indexOf("Elma"));

// 5- Kiraz meyvesini listenin sonuna ekleyiniz.

// meyveler[meyveler.length] = "Kiraz";
meyveler.push("Kiraz");

// 6- Dizinin son 2 elemanını siliniz.

// meyveler.pop();
// meyveler.pop();

// meyveler.splice(meyveler.length - 2, 2);

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
    /*
        Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
        Öğrenci 2: Ada Bilgi 2012   (80,80,90)
        Öğrenci 3: Ahmet  2009 (60,60,70)
    */

let ogr1 = [
    "Yiğit",
    "Bilgi",
    2010,
    [70,60,80]
];

let ogr2 = [
    "Ada",
    "Bilgi",
    2012,
    [80,80,90]
];

let ogr3 = [
    "Ahmet",
    "Turan",
    2009,
    [60,60,70]
];

let ogrenciler = [ogr1, ogr2, ogr3];

let yigit_yas =  new Date().getFullYear() - ogrenciler[0][2];
let ada_yas =  new Date().getFullYear() - ogrenciler[1][2];
let ahmet_yas =  new Date().getFullYear() - ogrenciler[2][2];

let yigit_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let ada_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let ahmet_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

console.log(yigit_not.toFixed(1), ada_not.toFixed(1), ahmet_not.toFixed(1));