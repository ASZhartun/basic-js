const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
  if (date instanceof Date) {
    if (isInvalidDate(date)) throw 'Invalid date!';
    let possibilities = { 
      spring: Date.parse(new Date(date.getFullYear(), 2, 1)), 
      summer: Date.parse(new Date(date.getFullYear(), 5, 1)), 
      autumn: Date.parse(new Date(date.getFullYear(), 8, 1)), 
      winter: Date.parse(new Date(date.getFullYear(), 11, 1)),};
      date = Date.parse(date);
      console.log(`spring: ${possibilities.spring}`);
      console.log(`summer:${possibilities.summer}`);
      console.log(`autumn:${possibilities.autumn}`);
      console.log(`winter:${possibilities.winter}`);
      console.log(`actual date: ${date}`);
      if (date < possibilities.winter) {
        if (date < possibilities.autumn) {
          if (date < possibilities.summer) {
            if (date < possibilities.spring) {
              return 'winter';
            } else return 'spring';
          } else return 'summer';
        } else return 'autumn';
      } else return 'winter';
  } else return 'Unable to determine the time of year!';
}

function isInvalidDate(date) {
  switch(date.getMonth()) {
    case 0,2,4,6,8,10:
      return date.getDay() > 31 || date.getDay < 1 ? true : false;
    case 1:
      return date.getDay() > 29 || date.getDay < 1 ? true : false;
    case 1,3,5,7,9:
      return date.getDay() > 31 || date.getDay < 1 ? true : false;
    default: return true;
  }
}

console.log(getSeason(new Date(2020, 02, 31)));

module.exports = {
  getSeason
};
