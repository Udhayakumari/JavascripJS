class Magic{
    a() {
        return "Hello A!";
    }
    b() {
        return "Hello B!";
    }
}
var obj = new Magic();
var x = obj.a();
var y = obj.b();

console.log(x);
console.log(y);