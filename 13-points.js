// WPU Coding Challange
// 13/366
// https://www.codewars.com/kata/5bb904724c47249b10000131

// function points(games) {
//   let total = 0;
//   for (let i = 0; i < games.length; i++){
//     let a = games[i].split(':');
//     a1 = parseFloat(a[0]);
//     a2 = parseFloat(a[1]);
//     if(a1 === a2){
//       total+=1
//     }else if(a1>a2){
//       total+=3
//     }else{
//       total+=0
//     }
//   }
//   return total;
// }


// function points(games) {
//   let total = 0;
//   for (let i = 0; i < games.length; i++){
//     let a = games[i].split(':');
//     a1 = parseFloat(a[0]);
//     a2 = parseFloat(a[1]);
//     (a1 === a2) ? total+=1 : (a1 > a2) ? total+=3 : total;
//   }
//   return total;
// }


// function points(games) {
//   let total = 0;
//   for (let i = 0; i < games.length; i++){
//     (games[i][0] === games[i][2]) ? total+=1 : (games[i][0] > games[i][2]) ? total+=3 : 0;
//   }
//   return total;
// }

// const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)

const points = (games) => games.reduce((acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0);


console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])); // 30
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])); // 10
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])); // 0