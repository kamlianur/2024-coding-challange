// WPU Coding Challange
// 28/366
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

// const bonusTime = (salary, bonus) =>  bonus === true ? `£${salary * 10}` : `£${salary}`;


const bonusTime = (salary, bonus) => `£${bonus === true ? salary * 10 : salary}`;

console.log(bonusTime(10000, true)); // '£100000'
console.log(bonusTime(78, false)); // '£78'