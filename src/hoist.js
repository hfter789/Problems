//Hoisting is 'moving declarations to the top of a scope', 
//allow us to 'use a function or a variable before it has been declared'
//from https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

foo = 2
console.log(foo);
var foo;

hoisted(); // logs "foo"

function hoisted() {
  console.log("foo");
}