//DOM'dan elementleri cekme:

// // const button = document.querySelector('button');
// const button = document.querySelector('#buttonId');
// const button = document.querySelector('.buttonClass');
const button = document.getElementById('buttonId');
//const button = document.getElementsByClassName('buttonClass')[0];

//1.yontem
// button.addEventListener('click', () => {
//   console.log('tilklandi');
// });
// console.log(button);

//2.yontem
const add = () => {
  console.log('Tiklandi');
};

const liElemanlari = document.querySelectorAll('li');
console.log(liElemanlari);

liElemanlari.forEach((eleman) => {
  eleman.addEventListener('click', (e) => {
    // console.log('tilklandi');
    // e.target.style.color = 'blue';
    e.target.remove();
  });
});

const ulDegerlerim = document.querySelector('ul');

//domdan element silme:
//ulDegerlerim.remove();

//element olusturma:

//append; // sona eleman ekler
//prepend; // basa eleman ekler

//STEP 1
//ul etiketini sec
const liste = document.querySelector('ul');
//li olusturduk

//STEP 3

//buttona tikadiginda ekle
button.addEventListener('click', (e) => {
  const liElemanim = document.createElement('li');
  liElemanim.textContent = 'Javascript';
  liste.append(liElemanim);
});
