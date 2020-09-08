class Even{
    isEven(num) {
        return (num%2 == 0) ? "true" : "false";
    }
}
var obj = new Even();
var result = obj.isEven(6);

console.log(result);

// document.getElementById("js").innerHTML = result;