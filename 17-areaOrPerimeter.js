// WPU Coding Challange
// 17/366
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

  // const areaOrPerimeter = function(l , w) {
  //   if( l === w) return l*w;
  //   if(l !== w) return 2*l + 2*w;
  // };


  const areaOrPerimeter = (l , w) => (l === w) ? l*w : 2*(l + w);

console.log(areaOrPerimeter(3,  3)); // 9
console.log(areaOrPerimeter(6, 10)); // 32