const button = document.getElementById('button');
const bool1 = document.getElementById('bool1');
const bool2 = document.getElementById('bool2');


button.addEventListener('submit', e => {
    e.preventDefault();
    nand();
});

function nand(){
    const val1 = bool1.value.trim();
    const val2 = bool2.value.trim();
    const result = ((val1 && val2) == "true") ? "false":"true";
    console.log(result);
};

