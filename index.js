// function powitaj() {
  //   alert("Witaj Świecie!");
  // }
  // powitaj()
  // w tej linii wywołaj powyższą funkcję, komentarz zostaw w spokoju
  
  // function suma(a,b) {
    //   return a + b
    // }
    // console.log(suma(3,5));
    
    // function test() {
//   return "No cześć!";
// }

// const container = document.querySelector('.container');

// function test() {
//   container.textContent = `Cześć, cześć.`  
// }
// test()

// const suma = (a,b) => a + b
// const a = prompt('Podaj a')
// const b = prompt('Podaj b')

// alert(suma(+a,+b));

// const a = prompt('Podaj a')
// const b = prompt('Podaj b')

// const podstawy = (a,b) => [+a/+b, +a*+b, +a-+b]
// alert(podstawy(a,b))

// const a = prompt('Podaj a')
// const b = prompt('Podaj b')
// const c = prompt('Co robimy?')

// const dzialanie = (a,b,callback) => callback(+a,+b)
// const dodawanie = (a,b) => a+b
// const odejmowanie = (a,b) => a-b
// const dzielenie = (a,b) => a/b
// const mnozenie = (a,b) => a*b

// alert(c == 'dodawanie' ? dzialanie(a,b,dodawanie) :
//       c == 'odejmowanie' ? dzialanie(a,b,odejmowanie) :
//       c == 'mnozenie'? dzialanie(a,b,mnozenie) :
//       c == 'dzielenie'? dzialanie(a,b,dzielenie): 'bledne dane')


// const a = prompt('Podaj a')
// const b = prompt('Podaj b')
// const c = prompt('Podaj c')

// const najwieksza = (a, b, c) => Math.max(a, b, c)
// alert(najwieksza(a, b, c))

// const a = prompt('Podaj a')

// const czyWysoki = (a) => {
//   if(a < 150){
//     return 'niski'
//   }else if(a > 180){
//     return 'wysoki'
//   }else{
//     return 'sredni'
//   }  
// }
// alert(czyWysoki(+a))

// const waga = prompt('Podaj wage')
// const wzrost = prompt('Podaj wzrost')

// const BMI = (waga, wzrost) => {
//   const wzrostWmetrach = wzrost / 100
//   const wynikBMI = waga / (wzrostWmetrach ** 2)
//   if(wynikBMI < 18.5){
//     return 'Za mało'
//   }else if(wynikBMI > 25){
//     return 'za duzo'
//   }else{
//     return wynikBMI
//   }  
// }
// alert(BMI(+waga, +wzrost))

// const first = document.getElementById('first')
// const second = document.getElementById('second')
// const button = document.getElementById('button')
// const ktoStarszy = (a) => {
//   const data1 = first.value.split(".")
//   const data2 = second.value.split(".")
//   let wynik = ''
//   if(data1[0] < data2[0]){
//     wynik = 'starszy pierwszy'
//   }else if(data1[0] > data2[0]){
//     wynik = 'starszy drugi'
//   }else if(data1[1] < data2[1]){
//     wynik = 'starszy pierwszy'
//   }else if(data1[1] > data2[1]){
//     wynik = 'starszy drugi'
//   }else if(data1[2] < data2[2]){
//     wynik = 'starszy pierwszy'
//   }else if(data1[2] > data2[2]){
//     wynik = 'starszy drugi'
//   }
//   alert(wynik)
// }
// button.addEventListener('click', ktoStarszy)

// const rok = 2020
// const czyPrzystepny = (rok) => rok % 4 == 0 ? 'przystepny' : 'niePrzystepny'
// console.log(czyPrzystepny(rok));

// const haslo = prompt('podaj hasło')

// const czyDuzoZnakow = (haslo) => haslo.length < 4 ? 'hasło słabe' : haslo.length < 8 ? 'hasło średnie' : 'hasło mocne';

// const czyDuzeLitery = (haslo) => haslo.split('').some(znak => znak === znak.toUpperCase());

// const czyMaleLitery = (haslo) => haslo.split('').some(znak => znak === znak.toLowerCase()) ? 'hasło słabe' : czyDuzeLitery(haslo);

// const czyCyfry = (haslo) => haslo.split('').some(znak => /^\d$/.test(znak)) ? 'hasło słabe' : czyMaleLitery(haslo);

// const czySilne = (haslo) => czyCyfry(haslo);

// console.log(czyDuzoZnakow(haslo));
// console.log(czySilne(haslo));

// const a = 5
// const b = 3
// const c = 7
// const czyTrojkat = (a, b, c) => {
//   if(a + b > c){
//     return 'Mozna'
//   }else{
//     return 'Nie mozna'
//   }
// }
// console.log(czyTrojkat(a,b,c));

// const haslo = 'siemaneckzo'

// const szyfr = (haslo) => {
// const newHaslo = [...haslo]
// const result = []
//   for (let i = 0; i < newHaslo.length; i++) {
//     const char = newHaslo[i];
//     if (char >= 'a' && char <= 'x') {
//       result.push(String.fromCharCode(char.charCodeAt(0) + 2));
//     } else if (char == 'y') {
//       result.push('a');
//     } else if (char == 'z') {
//       result.push('b');
//     } else if (char >= 'A' && char < 'X') {
//       result.push(String.fromCharCode(char.charCodeAt(0) + 2));
//     } else if (char === 'X') {
//       result.push('Z');
//     } else {
//       result.push(char);
//     }
//   }
//   return result.join('');
// }
// console.log(szyfr(haslo));