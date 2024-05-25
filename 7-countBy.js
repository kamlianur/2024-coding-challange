// WPU Coding Challange
// 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

// function countBy(x, n) {
//   let z = [];
//   for(i=1; i<= n; i++){
//     z.push(i*x);
//   }
//   return z;
// }

// function countBy(x, n) {
//   return [...Array(n)].map((el, i) => (i+1)*x);
// }

const countBy = (x, n) => [...Array(n)].map((_, i) => (i+1)*x);

console.log(countBy(1,10));
console.log(countBy(2,5));