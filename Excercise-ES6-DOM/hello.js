const name = document.getElementById('name');
const button = document.getElementById('button');

button.addEventListener("click", e => {
    e.preventDefault();
    myFunction();
});

function myFunction() {
    const nameValue = name.value.trim();
    console.log("Hello " + nameValue);
}

