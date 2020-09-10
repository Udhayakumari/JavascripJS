const form = document.getElementById('farray');
var val = document.getElementById('array');
const add = document.getElementById('add');
const button = document.getElementById('button');


add.addEventListener('click', e => {
    e.preventDefault();
    getAddElement(); 
});

button.addEventListener('click', e => {
    e.preventDefault();
    getFirstElement(); 
});

let array = [];

function getAddElement() {
    array.push(val.value);
    val.value="";
}

function getFirstElement() {
    console.log(array[0]);
}