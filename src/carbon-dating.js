const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (sampleActivity == null) return false;
  if (typeof sampleActivity != 'string') return false;
  if (sampleActivity.length == 0) return false;
  sampleActivity = +sampleActivity;
  if (Number.isNaN(sampleActivity) || sampleActivity == 0) return false;
/*   if (sampleActivity.match(/[0-9]+[.]?[0-9]+/) != null) return false; */
  if (+sampleActivity > 15 || +sampleActivity <= 0) return false;
  
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
}

module.exports = {
  dateSample
};
