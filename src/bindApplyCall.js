// bind, apply, and call all set the value of "this"

function printThis(arg1, arg2, arg3) {
  console.log(this.x, arg1, arg2, arg3);
}

//BIND
// bind does not immediately execute, it returns a function instead. (can do function currying)
var printer = printThis.bind({x:'I am bind!'});
printer();

//CALL
//call immediately execute, args are passed in seperately
printThis.call({x:'I am call!'}, 1, 2, 3);
//array will be treated as arg1. arg2 and arg3 would be undefined.
printThis.call({x:'I am call!'}, [1, 2, 3]);

//APPLY
//apply immediately execute, args are passed in array form
printThis.apply({x:'I am apply!'}, [1,2,3]);
//2 and 3 is not printed out because apply only takes the array [1]
printThis.apply({x:'I am apply!'}, [1],2,3);

