// WPU Coding Challange
// 23/366
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// function monkeyCount(n) {
//   const array = [];
//   for(let i = 1; i <= n; i++){
//     array.push(i);
//   }
//   return array;
//   }


// const monkeyCount = n => [...Array(n)].map((_, i) => i + 1);


const monkeyCount = n => Array.from({ length: n }, (_, i) => i+1);


console.log(monkeyCount(5)); // [1, 2, 3, 4, 5]
console.log(monkeyCount(11)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]