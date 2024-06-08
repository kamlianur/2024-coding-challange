// WPU Coding Challange
// 24/366
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

// const quarterOf = (month) => (month <= 3) ? 1 : (month <= 6) ? 2 : (month <= 9) ? 3 : 4;

const quarterOf = (month) =>  Math.ceil(month / 3); 

console.log(quarterOf(3)); // 1
console.log(quarterOf(11)); // 4