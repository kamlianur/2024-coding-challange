// WPU Coding Challange
// 16/366
// https://www.codewars.com/kata/563e320cee5dddcf77000158

const getAverage = marks => Math.floor(marks.reduce((acc, curr) => acc + curr)/marks.length);


console.log(getAverage([2,2,2,2])); // 2
console.log(getAverage([1,1,1,1,1,1,1,2])); // 1