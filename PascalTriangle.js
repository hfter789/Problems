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

// pastri(100);

var numTiers = 50000,
    triangle, 
    start, 
    stop;

/**
*
* First version uses recursion
*
*/

function pascalRecursive(n, a) {

  if (n < 2) return a; // We already have the top row

  var prevTier = a[a.length-1];
  var curTier = [1];

  for (var i = 1; i < prevTier.length; i++) {
    curTier[i] = prevTier[i] + prevTier[i-1];
  }
  curTier.push(1);
  a.push(curTier);

  return pascalRecursive(n-1, a);
}

start = new Date().getTime();
// var triangle = pascalRecursive(numTiers, [[1]]);
stop = new Date().getTime();
var executionTime = stop - start;
console.log('Recursion Execution time: ' + executionTime + '\n');

/**
*
* Second version is simpler, but slower
*
*/

function pascalSimple(numTiers) {

  var triangle = [
    [1]
  ],
  tier;

  for (var j = 0; j < numTiers-1; j++) {
    tier = [1];
    for (var k = 1; k < triangle[j].length; k++) {
      tier[k] = triangle[j][k] + triangle[j][k-1];
    }
    tier.push(1);
    triangle.push(tier);
  }

  return triangle;
}

start = new Date().getTime();
var triangle = pascalSimple(numTiers);
stop = new Date().getTime();
var executionTime = stop - start;
console.log('Iteration Execution time: ' + executionTime + '\n');
