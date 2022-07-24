function hello() {
  console.log('Hello');
}

// hello();
// hello();
// hello();

//Fonksiyonlara parametre gonderme
const canboz = function (ad, soyad) {
  console.log(`isim: ${ad}, soyisim: ${soyad}`);
};

canboz('kemal', 'dogukan');

const karealani = function (kenar) {
  return kenar * kenar;
};

let sonuc = karealani(6);
console.log(sonuc);

const karealanim = (kenar) => kenar ** 2;
console.log(karealanim(7));

//Uygulama
//urunlerin ham fiyati vergili halini bulan bir hesapalama yap
const urunSatis = function (urunler, vergi) {
  let toplam = 0;
  for (let i = o; i < urunler.length; i++) {
    toplam += toplam + urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};
urunSatis([10, 20, 30], 0.25);

const urunSatisArrow = (urunler, vergi) => {
  let toplam = 0;
  for (let i = o; i < urunler.length; i++) {
    toplam += toplam + urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};
