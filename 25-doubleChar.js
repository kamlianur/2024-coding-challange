// WPU Coding Challange
// 25/366
// https://www.codewars.com/kata/56b1f01c247c01db92000076

// function doubleChar(str) {
//   let string = '';
//   for (let i = 0; i < str.length; i++){
//     string+=str[i]
//     string+=str[i]
//   }
//   return string;
// } 


const doubleChar = str => [...str].map((el) => el + el).join('');


// const doubleChar = str => str.split().map((el) => el + el).join('');

console.log(doubleChar("abcd")); // "aabbccdd"
console.log(doubleChar("123456")); // "112233445566"
console.log(doubleChar("%^&*(")); // "%%^^&&**(("