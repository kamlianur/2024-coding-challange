// WPU Coding Challange
// 14/366
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5


// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// function getGrade (...s) {
//   const score = s.reduce((acc, curr) => acc + curr) / s.length;
//   if(score>=90){
//     return 'A'
//   } else if (score>=80){
//     return 'B'
//   } else if (score >= 70){
//     return 'C'
//   } else if (score >= 60){
//     return 'D'
//   } else { return 'F'}
// }


// function getGrade (...s) {
//   const score = s.reduce((acc, curr) => acc + curr) / s.length;
//   if (score < 60) return 'F';
//   if (score < 70) return 'D';
//   if (score < 80) return 'C';
//   if (score < 90) return 'B';
//   return 'A';
// }


function getGrade (...s) {
  const avr = s.reduce((acc, curr) => acc + curr) / s.length;
  return avr >= 90 ? 'A' : avr >= 80 ? 'B' : avr >= 70 ? 'C' : avr >= 60 ? 'D' : 'F';
}


// const getGrade = (...s) => (s.reduce((acc, curr) => acc + curr) / s.length) >= 90 ? 'A' : (s.reduce((acc, curr) => acc + curr) / s.length) >= 80 ? 'B' : (s.reduce((acc, curr) => acc + curr) / s.length) >= 70 ? 'C' : (s.reduce((acc, curr) => acc + curr) / s.length) >= 60 ? 'D' : 'F';

console.log(getGrade(95,90,93)); // A
console.log(getGrade(60,82,76)); // C
console.log(getGrade(58,59,60)); // F