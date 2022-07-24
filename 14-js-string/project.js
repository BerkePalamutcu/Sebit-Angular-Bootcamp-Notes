let email = 'cnboz@hotmail.com';
console.log(email);

//birlestirme
let ad = 'Zekeriya';
let soyad = 'Duranel';
let adSoyad = ad + ' ' + soyad;
console.log(adSoyad);

//kac karakter
console.log(adSoyad.length);

//String metodlari
console.log(adSoyad.toLocaleUpperCase());
console.log(adSoyad.toLocaleLowerCase());

//kacinci index
let index = adSoyad.indexOf('a');
let lastIndex = adSoyad.lastIndexOf('a');
console.log(index);

//Slice kullanimi
let ilkIsim = adSoyad.slice(0, 8);
console.log(ilkIsim);

//Replace kullanimi
let yerDegistir = adSoyad.replace(' ', '');

//ReplaceAll
let yerDegistirAll = adSoyad.replaceAll(' ', '');
