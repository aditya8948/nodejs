// function to add two numbers
function add(a, b) {
    return a + b; 
}
// function to subtract two numbers
function sub(a, b) {
    return a - b; 
}
// By default, these functions are private to this file (module)
// To use them in another file, we must export them

// If we want to export only one function:
// module.exports = add;

// Here we export multiple functions as an object
module.exports = {
    add, // same as add: add
    sub  // same as sub: sub
}
