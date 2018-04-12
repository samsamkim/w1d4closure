var countdownGenerator = function (x) {
  x = x + 1
  return function(){
    if(x === 1){
      x -= 1;
      return "Blast Off!"
    }else if(x < 1){
      return "Rockets already gone, bub"
    }
    x -= 1;
    return x;
  }

};

var countdown = countdownGenerator(3);

console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()) // Blast Off!
console.log(countdown()) // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!
