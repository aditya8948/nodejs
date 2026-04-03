// import the exported object from math.js file
// "./" means current directory
const math = require("./math.js");

console.log("hello node js");

console.log(math);
// printing the whole object received from math.js
// output: { add: [Function: add], sub: [Function: sub] }


// calling add function from the imported object
// math.add refers to add function inside exported object
console.log(math.add(2, 3)); // 5