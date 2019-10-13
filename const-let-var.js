// Example of variable hoisting when using var
function example() {
  if (false) {
    var ex = 5;
  }
  return ex;
}

console.log(example());

/* This is how the code acts during run time
   the variable declaration gets moved to the top
   while the acutal value given to the variable stays
   in the same spot */
function example() {
  var ex;
  if (false) {
    ex = 5;
  }
  return ex;
}

console.log(example());

// let example - block scope
function example2() {
  if (false) {
    let ex2 = 5;
  }
  return ex2;
}

/* returns undefined as it should
   because the code only exist inside
   it's own scope */
console.log(example2());

// let example - reasigning
for (let i = 0; i < 20; i++) {
  // gives number 0 - 19
  console.log(i);
}

/* example of const and how you can modify
   variables with non-primitive values */
const conEx2 = [];
conEx2.push(2);
console.log(conEx2);

const conEx3 = {};
conEx3.name = "abdu";

console.log(conEx3);
