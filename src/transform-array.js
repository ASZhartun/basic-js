const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  /*   throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here */
    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
    let newer = [...arr];
    for (let i = 0; i < newer.length; i++) {
      if (isCommand(newer[i])) {
          if (newer[i] == '--discard-next') {
            newer[i+1] = undefined;
            newer[i] = undefined;
          }
          else if (newer[i] == '--discard-prev') {
            newer[i-1] = undefined;
            newer[i] = undefined;
          }
          else if (newer[i] == '--double-next') newer[i] = newer[i+1];
          else if (newer[i] == '--double-prev') newer[i] = newer[i-1];
      }
    }

    return newer.filter(item => item !== undefined);;
  }

  function isCommand(item) {
      return item == '--discard-next' || item == '--discard-prev' || item == '--double-prev' || item == '--double-next';
  }

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));

module.exports = {
  transform
};
