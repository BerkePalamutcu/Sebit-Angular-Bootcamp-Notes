let isimler = ['can', 'ridvan', 'elif'];

//index
console.log(isimler[0]);
console.log(isimler[1]);

let yaslar = [43, 5, 6, 30];
console.log(yaslar[yaslar.length - 1]);

let rastgele = ['can', 'boz', 10, 15];
console.log(rastgele);

let tireli = isimler.join('-');
console.log(tireli);

let virgullu = isimler.join(', ');
console.log(virgullu);

//concat methodu
let eklenmis = isimler.concat(['osman', 'merve']);
//concat methodu ana diziyi degistmez.

isimler.push('leyle');
//diziyi modifiye eder
