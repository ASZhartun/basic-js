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
    if (date.getMonth() == 2 && date.getDay() > 29) throw new Error('Invalid date!');
    if (date.getMonth()%2==0 && date.getDay() > 31) throw new Error('Invalid date!');
    if (date.getMonth()%2!=0 && date.getDay() > 30) throw new Error('Invalid date!');
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

module.exports = {
  getSeason
};