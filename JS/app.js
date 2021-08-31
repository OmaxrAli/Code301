'use strict'

let theTable=document.getElementById('theTable');
let TableEL=document.createElement('table');
theTable.appendChild(TableEL);
let trEL=document.createElement("tr")
theTable.appendChild(trEL);
let thEL=document.createElement('th')
thEL.textContent='Order Image'
trEL.appendChild(thEL)
let thEL2=document.createElement('th')
thEL2.textContent='Order Details'
trEL.appendChild(thEL2)

let form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);



let Cars=['kia', 'ford', 'bmw']
let order=[];

function Orders(Name, Car){

    this.Name=Name;
    this.Car=Car;
    
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

Orders.prototype.render= function(){
    let trEL2=document.createElement('tr')
    theTable.appendChild(trEL2)
    let thEL3=document.createElement('th')
    let img = document.createElement('img');
            img.src = `/images/${this.Car}.jpg`;
    thEL3.appendChild(img);
    trEL2.appendChild(thEL3);
    let thEL4= document.createElement('th')
    thEL4.textContent=`Coutomer Name: ${this.Name} Cra Model: ${this.Car}
                        Car Price: ${getRandomInt(1000,10000)}`;
    trEL2.appendChild(thEL4)
}
function addToCrat(){

    let theName=document.getElementById('theName').value
    let CarSelect = document.getElementById('CarSelect').value
 
    let orderman = new Orders(theName, CarSelect);
    orderman.render()
}
form.addEventListener('submit',addToCrat)