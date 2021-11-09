/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.

1- creare una funzione che genera numeri random
2- stampare 5 numeri nel box html
3- con setInterval e setTimeout li faccio sparire dopo 30 sec
4- creo 5 prompt per far scrivere all'utente un numero per volta
5- se numeroUtente = numeroBox allora li stampo nel box
6- se numeroUtente != numeroBox ==> hai indovinato TOT num

*/

const box = document.getElementById('box')
console.log(box)
const h3 = document.querySelector('h3')
let randomNumArr = []
let numeroUtenteArr = []
let counter = 0
let attempts = 0


let stampaNumeri = box.innerHTML += `
<span>${getRandomNum(1, 99)}</span>`


const time = setInterval(function(){
  console.log('ciao',++counter)
},1000)

setTimeout(() => {
  clearInterval(time)
  box.innerHTML = ''
  
},5000)


// setTimeout(numeroPrompt(), 5000)

// function numeroPrompt(){
//   const numeroUtente = prompt('inserire un numero')
// }

setTimeout(function(){ 
  for (let i=0; i<5; i++){
  let numeroUtente = prompt('inserire un numero'); 
  console.log('numero inserito: ',numeroUtente)
  console.log('array',randomNumArr)

    

    if (randomNumArr.includes(numeroUtente)){
      console.log('indovinato')

      numeroUtenteArr.push(numeroUtente)
      console.log('numeroUtenteArr',numeroUtenteArr)

      attempts++

      box.innerHTML = `<span> ${numeroUtenteArr} </span>`
      h3.innerHTML = `<span> Hai indovinato ${attempts} numeri</span>`
      

      
    } else {
      console.log('hai perso')
    }

  }

  
}, 5010);




// function stampa(num){

// }



function getRandomNum(min, max){
  
  for (let i=0; i<5; i++){
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    console.log('numeri random',randomNum)
    randomNumArr.push('' + randomNum)
  }
    
  console.log('array',randomNumArr)
  
  return randomNumArr

}
