const form = document.getElementById('unshift');
var val = document.getElementById('array');
const add = document.getElementById('add');
const variable = document.getElementById('variable');
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
    array.unshift(variable.value);
    console.log(array);
}