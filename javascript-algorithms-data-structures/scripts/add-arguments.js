/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3)should return 5, and addTogether(2)should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3)returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether(a, b) {
  return (typeof a != 'number' || b && typeof b != 'number') ? undefined : 
          arguments.length == 2 ? (a + b) : 
          function(x) {
            return (typeof a == 'number' && typeof x == 'number') ?                                a + x : undefined;
          }
}

addTogether(2,3);