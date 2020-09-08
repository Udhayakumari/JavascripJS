class Index{
    indexOfIgnoreCase(str1, str2) {
        [str1].forEach(c => {
            return (str1[c] === str2[0]) ? str1.indexOf(str1[c]) : "Not matched";
        });
    }
}
var obj = new Index();
var result = obj.indexOfIgnoreCase("udhaya", "duck");
console.log(result);
// console.log(indexOfIgnoreCase("udhaya", "duck"));

//Another method

// class Index{
//     indexOfIgnoreCase(str1, str2) {
//         for(let i of str1) {
//             let x = (str1[i] == str2[0]) ? str1.indexOf(str1[i]) : "Not matched";
//             return x;
//         };
//     }
// }
// var obj = new Index();
// var result = obj.indexOfIgnoreCase("udhaya", "duck");
// console.log(result);