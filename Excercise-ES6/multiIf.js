class Turnery{
    addWithSurcharge(num1, num2) {
        let amount = num1 + num2;
        switch(true){
            case (amount <= 10):
                return amount+1;
                break;
            case ((amount > 10) && (amount <= 20)):
                return amount+2;
                break;
            case (amount > 20):
                return amount+3;
                break;
            default:
                return "Nothing happend!"
                break;
        }
        
    }
}
var obj = new Turnery();
// var result = obj.addWithSurcharge();
console.log(obj.addWithSurcharge(5,4)); //10
console.log(obj.addWithSurcharge(5,15)); //22
console.log(obj.addWithSurcharge(7,18)); //28