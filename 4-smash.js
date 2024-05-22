// WPU Coding Challange
// 4/366
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

// function smash (words) {
//   return words.join(' ');
// };

function smash(words) {
  let result = '';
  for (let i = 0; i < words.length; i++){
    result += words[i];
    if(i != words.length - 1){
      result += ' ';
    }
  }
  return result;
}

// const smash = words => words.join(' ');

console.info(smash(["hello", "world"]));
console.info(smash(["this", "is", "a", "really", "long", "sentence"]));