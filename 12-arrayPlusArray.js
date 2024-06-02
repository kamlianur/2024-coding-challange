// WPU Coding Challange
// 12/366
// codewars.com/kata/5a2be17aee1aaefe2a000151

// function arrayPlusArray(arr1, arr2) {
//   const arr = arr1.concat(arr2);
//   let sum = 0;;
//   for(i=0; i<arr.length; i++){
//     sum+=arr[i];
//   }
//   return sum;
// }


// function arrayPlusArray(arr1, arr2) {
//   let sum = 0;
//   for(let i = 0; i < arguments.length; i++){
//     for( let j = 0; j < arguments[i].length; j++){
//       sum+=arguments[i][j]
//     }
//   }
//   return sum;
// }


const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, cur) => acc + cur);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));