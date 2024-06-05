// WPU Coding Challange
// 15/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// function sumArray(array) {
//   if(array === null || array.legth <= 2 ) return 0;
//   if(array.length >= 3){
//     let min = Math.min(...array);
//     let max = Math.max(...array);
//     let sum = array.reduce((acc, curr) => acc + curr) - (min + max);
//     return sum;
//   }
// };


// const sumArray = array => (array == null || array.length <= 2) ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((acc, curr) => acc + curr);


const sumArray = array => array ? array.sort((a, b) => a - b).slice(1, -1).reduce((acc, curr) => acc + curr, 0) : 0;

console.log(sumArray(null)); // 0
console.log(sumArray([ ])); // 0
console.log(sumArray([ 3, 5 ])); // 0
console.log(sumArray([ 6, 2, 1, 8, 10 ])); // 16 