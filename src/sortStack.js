var stack = [5,6,1,6,7,8,2,9];
var stack1 = [9,8,7,6,5,4,3,2,1];

var sortedStack = sortStack(stack);
console.log(sortedStack);

sortedStack = sortStack(stack1);
console.log(sortedStack);

// sort the stack in ascending order
function sortStack(stack) {
  var result = [];
  while(stack.length !== 0) {
    var num = stack.pop();
    while (result.length !== 0 && num > result[result.length - 1]) {
      stack.push(result.pop());
    }
    result.push(num);
  }
  return result;
}
