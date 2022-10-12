const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (Object.entries(options).length == 0) return str;
  checkAids(options);
  let fullAdditional = createAdditionalPart(options['addition'], options['additionSeparator'], options['additionRepeatTimes']);
  str = (str + fullAdditional + options['separator']).repeat(options['repeatTimes']);
  str = str.slice(0, str.length-options['separator'].length);
  return str;
}

function checkAids(options) {
  if (options['repeatTimes'] == undefined) options['repeatTimes'] = 1;
  if (options['separator'] == undefined) options['separator'] = '+';
  if (options['addition'] === null) options['addition'] = 'null';
  if (options['addition'] == undefined) options['addition'] = '';
  if (options['additionRepeatTimes'] == undefined) options['additionRepeatTimes'] = 1;
  if (options['additionSeparator'] == undefined) options['additionSeparator'] = '|';
}

function createAdditionalPart(addition, separator, times) {
  let res = (addition + separator).repeat(times);
  return res.slice(0, res.length - separator.length);
}

module.exports = {
  repeater
};
