let sayilar = [1,5,7,15,3,25];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.
console.log("Dizi elemanlarının karesi; ");
for (let i in sayilar) {
    console.log(Math.pow(sayilar[i],2));
}
console.log("---------------------------------------------------");

// 2- sayilar listesindeki hangi sayılar 5'in katıdır?

console.log("5' in katı olan sayılar; ");
for (let i in sayilar) {
    if (sayilar[i] % 5 == 0) {
        console.log(sayilar[i]);  
    }
}
console.log("---------------------------------------------------");

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.

console.log("Dizideki çift sayıların toplamı; ");
let toplam = 0;
for (let i in sayilar) {
    if (sayilar[i] % 2 == 0) {
        toplam += 0;
    }
}
console.log(toplam + "\n" + "---------------------------------------------------");

let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23"];

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

console.log("Dizideki tüm ürünlerin büyük harf ile yazımı; ");
for (let urun of urunler) { 
    console.log(urun.toUpperCase());
}
console.log("---------------------------------------------------");

// 5- urunler listesinde içinde samsung geçen kaç ürün vardır?

console.log("Dizide içinde samsung geçen ürün sayısı; ");
let samsungSayisi = 0;
for (let i in urunler) {
    if(urunler[i].includes("samsung")) {
        samsungSayisi++;     
    }
}
console.log(samsungSayisi + "\n" + "---------------------------------------------------");

let ogrenciler = [
    {"ad":"yiğit", "soyad":"bilgi", "notlar":[60,70,60]},
    {"ad":"ada", "soyad":"bilgi", "notlar":[80,70,80]},
    {"ad":"çınar", "soyad":"turan", "notlar":[10,20,70]}
];

// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

console.log("öğrencilerin not ortalamarı;");
let notOrt, basariDurumu, toplamNot = 0, genelNotToplam = 0;
let notlar = [];
for (let ogrenci of ogrenciler) {
    let adet = 0;
    notOrt = 0;
    toplamNot = 0;
    for (let not of ogrenci.notlar) {
        toplamNot += not; 
        adet++;
    }
    notOrt = (toplamNot / adet);
    notlar.push(notOrt);
    genelNotToplam += notOrt;

    console.log(ogrenci.ad + " " + ogrenci.soyad + ": " + notOrt.toFixed(2));
}
console.log("---------------------------------------------------");
console.log("Öğrencilerin başarı durumları;")
for (let basariliMi of notlar) {
    if (basariliMi >= 50)
        console.log("Geçti");
    else
        console.log("Kaldı");
}

console.log("---------------------------------------------------");

// tüm öğrencilerin not ortalaması kaçtır?

console.log("Tüm öğrencilerin not ortalaması: " + (genelNotToplam / ogrenciler.length).toFixed(2));
console.log("---------------------------------------------------");
