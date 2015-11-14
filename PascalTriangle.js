/*Define a function that returns n lines of Pascal’s Triangle.*/

'use strict'

function pastri(n) {
  var i = 1,
      arr1 = [],
      arr2 = [];

  while(i <= n) {
    process.stdout.write(' '.repeat(n-i));
    for (var j = 0; j < i; j++) {
      if(j === 0 || j === i-1) {
        process.stdout.write(1+' '); //no trailing new lines
        arr2.push(1);
      } else {
        let sum = arr1[j-1] + arr1[j];
        process.stdout.write(sum+' ');
        arr2.push(sum);
      }
    }
    console.log();
    arr1 = arr2;
    arr2 = [];
    i++;
  }
}

pastri(100);
