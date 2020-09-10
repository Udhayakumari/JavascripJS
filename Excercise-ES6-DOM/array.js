const form = document.getElementById("array");
const val1 = document.getElementById("val1");
const val2 = document.getElementById("val2");

form.addEventListener("submit", e => {
    e.preventDefault();
    toArray();
});

function toArray() {
    let val = [];
    val.push(val1.value, val2.value);
    console.log(val);
}
