
class Boolean{
    nand(bool1, bool2) {
        return (bool1 && bool2 == true) ? "false":"true";
    }
}
var obj = new Boolean();
var result = obj.nand(true, true);

console.log(result);

// document.getElementById("js").innerHTML = result;

// myfunc();{
//     document.getElementById("bool").value;
//     document.getElementById("bool").innerHTML.value = result;
// };
