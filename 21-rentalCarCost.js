// WPU Coding Challange
// 21/366
// https://www.codewars.com/kata/568d0dd208ee69389d000016

// function rentalCarCost(d) {
//   if(d>=7) return d * 40 - 50;
//   if(d >= 3) return d * 40 - 20;
//   return d * 40;
// }


// const rentalCarCost = d => (d >= 7) ? d * 40 - 50 : (d >= 3) ? d * 40 - 20 : d * 40;


const rentalCarCost = d => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);


console.log(rentalCarCost(1)); // 40
console.log(rentalCarCost(3)); // 100
console.log(rentalCarCost(8)); // 270