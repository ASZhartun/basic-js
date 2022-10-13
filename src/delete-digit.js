const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let numbers = [];
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    let firstPart = n.slice(0, i);
    let lastPart = n.slice(i + 1);
    numbers.push(+(firstPart + lastPart));
  }
  numbers.sort((elem1, elem2) => elem2 - elem1);
  console.log(numbers);
  return numbers[0];
}

module.exports = {
  deleteDigit
};
