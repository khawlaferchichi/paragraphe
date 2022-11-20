'use strict';
let btn=document.getElementById("btn")
let form=document.querySelector("form")
let choix=document.querySelector(".choix")
let res=document.getElementById('result')
function traitData(response) {
    response.forEach(element => {
        let parag=document.createElement('p')
        parag.textContent=element
        // parag.style.color='#000'
        res.classList.add('result')
       res.appendChild(parag)
   });
 }

function submitfrom(event) {
 event.preventDefault() 
 res.innerHTML="" 
let value=choix.value
ajaxGetJson("https://baconipsum.com/api/?type=all-meat&paras="+value+"&start-with-lorem=1",traitData) 
//console.log(response)
}

form.addEventListener("submit",submitfrom)