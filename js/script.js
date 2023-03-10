/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

// metto in una variabile il numero di box da creare
const numBox = 100;

const container = document.getElementById('container2');

for (let i = 1; i <= numBox; i++) {
    
    container.innerHTML += `<div class="box">
    <div id="fizzBuzz${i}" class="box-content d-flex justify-content-center align-items-center">
        ${i}
    </div>
    </div>`;
    
    if((i % 3) === 0 && (i % 5) === 0){
        document.getElementById(`fizzBuzz${i}`).classList.add('fizzbuzz');
        document.getElementById(`fizzBuzz${i}`).innerHTML = `<p class="text-center mt-3">FIZZ <br> BUZZ</p>`;
     }else if ((i % 3) === 0){
         document.getElementById(`fizzBuzz${i}`).classList.add('fizz');
         document.getElementById(`fizzBuzz${i}`).innerHTML = `<p class="text-center mt-3">FIZZ</p>`
     }else if ((i % 5) === 0){
         document.getElementById(`fizzBuzz${i}`).classList.add('buzz');
         document.getElementById(`fizzBuzz${i}`).innerHTML = `<p class="text-center mt-3">BUZZ</p>`
     };
}
















