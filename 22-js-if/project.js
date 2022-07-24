const yeniSifre = 'sadfasdfasdfasdf!321';

if (yeniSifre.length > 12) {
  console.log('sifre guclu');
} else if (yeniSifre.length >= 8 && yeniSifre.length <= 12) {
  console.log('sifre yeterli');
} else {
  console.log('sifreyi yeniden gir');
}
