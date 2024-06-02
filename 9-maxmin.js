// WPU Coding Challange
// 8/366
// https://www.codewars.com/kata/577a98a6ae28071780000989

// var min = (list) => Math.min(...list);
// var max = (list) => Math.max(...list);

// var min = function(list){
//   let minValue = list[0];
//   for(let i = 1; i < list.length; i++){
//     if (minValue <= list[i]){
//       minValue
//     } else minValue = list[i]
//   }
//   return minValue;
// }

// var max = function(list){
//   let maxValue = list[0];
//   for(let i = 1; i < list.length; i++){
//     if (maxValue >= list[i]){
//       maxValue
//     } else maxValue = list[i]
//   }
//   return maxValue;
// }


const min = list => list.sort((a, b) => a - b)[0];

const max = list => list.sort((a, b) => b - a)[0];

console.log(min([42, 54, 65, 87, 0, 1, 11, 111]));
console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4,6,2,1,9,63,-134,566]));
console.log(max([5]));