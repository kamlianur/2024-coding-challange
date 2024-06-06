// WPU Coding Challange
// 19/366
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// function sumMix(x){
//   let newArr = [];
//   for(let i = 0; i < x.length; i++){
//     // if(typeof x[i] === 'string' ) newArr += parseInt(x[i]);
//     newArr += parseInt(x[i]);
//   }
//   console.log(newArr)
//   return newArr.reduce((a, b) => a + b);
// }

// const sumMix = x => x.map((el) => parseInt(el)).reduce((a, b) => a + b);


// const sumMix = x => x.map((el) => Number(el)).reduce((a, b) => a + b);


const sumMix = x => x.reduce((acc, curr) => acc + +curr, 0);
// tanda '+' pada +curr merubah string jadi angka

console.log(sumMix([9, 3, '7', '3'])); // 22
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])); // 41