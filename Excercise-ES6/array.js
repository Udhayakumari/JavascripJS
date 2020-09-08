class Array{
    toArray(val1, val2) {
        let val = [];
        val.push(val1, val2);
        return val;
    }
}
var obj = new Array();
console.log(obj.toArray(3, 6));  //[ 3, 6 ]
console.log(obj.toArray('Donkey', 'Duck'));