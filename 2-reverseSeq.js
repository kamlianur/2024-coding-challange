// WPU Coding Challange
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = n => {
//   const result = [];
//   for(i = n; i >= 1; i--){
//     result.push(i);
//   }
//   return result;
// };

// const sample = n => {
//   return [...Array(n)].fill().map((el, i) => i+1).reverse()
// }

// console.log(sample(5));


const reverseSeq = n => [...Array(n)].map((el, i) => n-i);

console.log(reverseSeq(5));



