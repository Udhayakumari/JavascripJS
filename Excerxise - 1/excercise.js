// //1
// let firstname = 'Nextazy';
// console.log(firstname);

// //2
// let x = 'Web Development';
// x = 'Nextazy';
// x = 'Development';
// console.log(x) 
// // result:Nextazy
// //  Development

// //3
// let x = 'Laurel';
// let y = 'Hardy';
// z = y;
// y = x;
// x = z
// console.log(x)
// // result: Hardy

// //4
// function hello() {
//     return "Hello World!";
// }
// console.log(hello());

// //5
// function a() {
//     return "Hello A!";
// }
// function b() {
//     return "Hello B!";
// }
// console.log(a());
// console.log(b());

// //6
// function greet() {
//     return "Haydo!";
// }

// let salutation = greet();
// console.log(salutation);

// //7
// function hello() {
//     return 'Hi!';
// }

// let x = hello()
// console.log(x);
// // result: Hi!

// //8
// function company(data='Nextazy') {
//     return data;
// }

// console.log(company());

// // another method
// function company(data) {
//     return data;
// }

// console.log(company('Nextazy'));

// //9
// function reply(phrase) {
//     return phrase;
// }

// let x = reply('How do you do?');
// console.log(x);
// // result: How do you do?

// //10
// function greet(name) {
//     return 'Hello ' + name + '!';
// }

// console.log(greet("Ada"));
// console.log(greet("Grace"));

// //11
// function hi(name) {
//     return 'Hi ' + name + '!';
// }

// let h1 = hi('Selva');
// let h2 = hi('Pola');
// let x = h1 + ' ' + h2;
// console.log(x);
// // result:Hi Selva! Hi Pola!

// //12
// function log() {
//     console.log("Hello Console!");
// }

// log();
// // Result: Editor console output is Hello Console! and i didn't get any output in developer tool in desktop browser.

// //13
// function log(data) {
//     console.log(data);
// }

// console.log(log("Bangtan Sonyeodan!"));
// // result: Bangtan Sonyeodan!
// //         undefined
// console.log("Bangtan Sonyeodan!")
// // result: Bangtan Sonyeodan!

// //14
// function shout(str = 'Magic Shop') {
//     return str;
// }
// console.log(shout());

// //15
// function length(str) {
//     return str.length;
// }
// console.log(length("VKookie"));
// // result: 7

// // 16
// function shortcut(str1, str2) {
//     return str1[0] + str2[0];
// }
// console.log(shortcut('Dna', 'Dynamite'));
// result: DD

// //17
// function firstChar(name) {
//     let value = name.replace(/\s/g, '');
//     return value;
// }
// console.log(firstChar('Bring The Soul!'));

// //18
// function indexOfIgnoreCase(str1, str2) {
//     for(let i=0; i<str1.length; i++) {
//         if (str1[i] === str2[0]) {
//             return str1.indexOf(str1[i]);
//         }
//     }
// }
// console.log(indexOfIgnoreCase('bit', 'it')); //1
// console.log(indexOfIgnoreCase('butter', 'rabbit')); //5
// console.log(indexOfIgnoreCase('bit', 'rain')); //undefined

// //19
// function firstWord(str) {
//     // let str = 'BTS won two deasang awards!';
//     return str.split(' ')[0];
// }
// console.log(firstWord('BTS won two deasang awards!'));  //BTS

// //20
// function normalize(date) {
//     let value = date.replace(/\-/g, '/');
//     return value;
// }
// console.log(normalize('31-08-2020'));  //31/08/2020

// //21
// function add(num1, num2) {
//     return num1 + num2;
// }
// console.log(add(2, 5)); //7

// //22
// let x = 3;
// x++;
// x = x * 2;
// x--;
// console.log(x); //7

// //23
// function toFahrenheit(celsius) {
//     const fah = celsius * 9/5 + 32;  //formula C to F
//     return fah;
// }
// console.log(toFahrenheit(0)); //32
// console.log(toFahrenheit(70)); //158

// //24
// function mean(num1, num2) {
//     return (num1 + num2) / 2;
// }
// console.log(mean(2, 5)); //3.5

// //25
// function hypotenuse(a,b) {
//     let c = Math.pow(a,2) + Math.pow(b, 2);
//     return Math.sqrt(c);
// }
// console.log(hypotenuse(3, 4)); //5
// console.log(hypotenuse(5, 7)); //8.6

// //26
// function round100(a) {
//     const num = Math.round(a/100)*100;
//     return num;
// }
// console.log(round100(1749)); //1700
// console.log(round100(856.12)); //900
// console.log(round100(150)); //200

// //27
// function dice() {
//     // let i = Range(1,6);
//     return Math.floor(Math.random() * 6) + 1;   
// }
// console.log(dice()); //randomly gives output from 1 to 6

// //28
// function add(str) {
//     let a = str.split('+');
//     let sum = 0;
//     for(let j=0; j<a.length;j++) {
//         // console.log(a[j]);
//         // let val = parseInt(a[j]);
//         // console.log(val);
//         // sum += val[j];
//         sum += parseInt(a[j]);
//     }
//     return sum;
// }
// console.log(add('102+17'));

// //29
// function addWithSurcharge(num1, num2) {
//     let amount = num1 + num2;
//     if (amount <= 10) {
//         return (amount+1);
//     } else if ((amount > 10) && (amount <= 20)) {
//         return (amount+2);
//     } else if(amount > 20) {
//         return (amount+3);
//     }
// }
// console.log(addWithSurcharge(5,4)); //10
// console.log(addWithSurcharge(5,15)); //22
// console.log(addWithSurcharge(7,18)); //28


// //30
// function nand(bool1, bool2) {
//     if (bool1 && bool2 == true) {
//         return false;
//     } else {
//         return true;
//     }
// }
// console.log(nand(true, true)); //false
// console.log(nand(true, false)); //true

// //31
// function isEven(num) {
//     if(num % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isEven(7)); //false
// console.log(isEven(4));  //true
   
// //32
// function toArray(val1, val2) {
//     let val = [];
//     val.push(val1, val2);
//     return val;
// }
// console.log(toArray(3, 6));  //[ 3, 6 ]
// console.log(toArray('Donkey', 'Duck'));  //[ 'Donkey', 'Duck' ]

// //33
// function getFirstElement() {
//     let val = ['BTS', 'kpop', 7];
//     return val[0];
// }
// console.log(getFirstElement());  //BTS

// //34
// function setFirstElement () {
//     let val = ['music', 'best', 'always'];
//     let variable = 'BTS';
//     val.unshift(variable);
//     return val;
// }
// console.log(setFirstElement());
// //result: [ 'BTS', 'music', 'best', 'always' ]

// //36
// function getLengthArray () {
//     let val = ['BTS', 'music', 'best', 'always'];
//     return val.length;
// }
// console.log(getLengthArray());
// //result: 4

// //37
// function sort() {
//     let val = [7,1,6];
//     val.sort();
//     return val;
// }
// console.log(sort());
// //result:[ 1, 6, 7 ]

// //38 
// function rotate(val) {
//     val.shift(val.push(val[0]));
//     return val;
// }
// console.log(rotate(['a', 'b', 'c'])); //[ 'b', 'c', 'a' ]
// console.log(rotate(['1','2', '3', '4' ])); //[ '2', '3', '4', '1' ]
    
// //39
// function contains(val, n) {
//     for(let i=0; i<val.length;i++) {
//         if (val[i] === n) {
//             return true;
//         }
//     }
//     return false;
// }
// function add(val, n) {
//     let a = contains(val,n);
//     if (a == false) {
//         val.push(n);
//         return val;
//     } else {
//         return val;
//     }
// }
// console.log(add(['1,', '2'], '2')); //[ '1,', '2' ]
// console.log(add(['1,', '2'], '3')); //[ '1,', '2', '3' ]

// function  add(array,search){
//     if(array.indexOf(search)!==-1)
//     {
//         console.log(array);
//     }
//     else
//     {
//         console.log(array.concat(search));
//     }
    
// }

// add([1, 2],3);

// //40
// function concatUp(val1, val2) {
//     if (val1.length > val2.length) {
//         return val2.concat(val1);
//     } else if (val1.length == val2.length) {
//         return val1.concat(val2);
//     }
// }
// console.log(concatUp(['1,', '2'], ['3'])); //[ '3', '1,', '2' ]
// console.log(concatUp(['1,', '2'], ['3','4'])); //[ '1,', '2', '3', '4' ]
// console.log(concatUp(['1,'], ['3','4'])); //undefined

// //41
// function list() {
//     let val = ['Huey', 'Dewey', 'Louie'];
//     let last = val.pop();
//     let data = []
//     data.push(val.join(',') + ' and ' + last);
//     return data;
// }
// console.log(list()); //[ 'Huey,Dewey and Louie' ]

// //42
// function flat() {
//     let val1 = [['1','2','3'], ['4', '5', '6']];
//     let res =[].concat.apply([], val1);
//     return res;
// }
// console.log(flat()); //[ '1', '2', '3', '4', '5', '6' ]