class Summation{
    add(str) {
        let a = str.split('+');
        let sum = 0;
        for (let j of a) {
              sum += parseInt(j);
        }
        return sum;
    }
}
var obj = new Summation();
var result = obj.add('102+17');
console.log(result);