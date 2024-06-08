// WPU Coding Challange
// 26/366
// https://www.codewars.com/kata/58649884a1659ed6cb000072

// function updateLight(current) {
//   if(current === 'green') return 'yellow';
//   if(current === 'yellow') return 'red';
//   return 'green';
// }

// const updateLight = current => current === 'green' ? 'yellow' : current  === 'yellow' ? 'red' : 'green';


const updateLight = current => ({
  green: 'yellow',
  yellow: 'red',
  red: 'green'
})[current];

console.log(updateLight("green")); // "yellow"
console.log(updateLight("red")); // "green"