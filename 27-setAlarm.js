// WPU Coding Challange
// 27/366
// https://www.codewars.com/kata/568dcc3c7f12767a62000038

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

// function setAlarm(employed, vacation){
//   if(employed === true && vacation === true) return false;
//   if(employed === true && vacation === false) return true;
//   if(employed === false && vacation === true) return false;
//   return false;
// }


// function setAlarm(employed, vacation){
//   if (employed) {
//     if(vacation){
//       return false;
//     } else {
//       return true;
//     }
//   } else {
//     if(vacation){
//       return false;
//     } else {
//       return false;
//     }
//   }
// }


const setAlarm = (employed, vacation) => employed && !vacation;


// const setAlarm = (employed, vacation) => employed > vacation;

console.log(setAlarm(true, true)); // false
console.log(setAlarm(false, false)); // false