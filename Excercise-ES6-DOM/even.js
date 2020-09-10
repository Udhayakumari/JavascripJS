const form = document.getElementById('number');
const result = document.getElementById('even');

form.addEventListener('submit', e => {
    e.preventDefault();
    const a = isEven();
    alert(a);
    console.log(a);
});

function isEven() {
    const val = result.value.trim();
    return ((val%2 == 0) ? "true" : "false");
}