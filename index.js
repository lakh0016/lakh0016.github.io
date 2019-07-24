const textbox = document.querySelector('.sizes');
const pizza = document.getElementById('pizza');
const sizes = document.getElementById('sizes');

sizes.addEventListener("change", function (){
    textbox.textContent = sizes.value
});

const pepperroni = document.getElementById('pepperoni');
pepperroni.addEventListener("click", function (){
    pepperroni.classList.toggle("checked")
    const toppingpepperoni = document.querySelector('.pepperoni');
    toppingpepperoni.classList.toggle("show")
});

const olives = document.getElementById('olives');
olives.addEventListener("click", function (){
    olives.classList.toggle("checked")
    const toppingolives = document.querySelector('.olives');
    toppingolives.classList.toggle("show")
});

const sausage = document.getElementById('sausage');
sausage.addEventListener("click", function (){
    sausage.classList.toggle("checked")
    const toppingsausage = document.querySelector('.sausage');
    toppingsausage.classList.toggle("show")
});