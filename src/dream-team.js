const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    if (members.length > 0) {
      let naming = '';
      members = members.filter(member => typeof member === 'string'); // оставляет элементы строки
      members = members.filter(member => member.length>0); // оставляет все строки кроме пустых
      members = members.map(elem => elem.trim());
      members = members.map(member => member.charAt(0).toUpperCase()).sort(); //оставляет отсортированные первые буквы имен
      members.forEach(elem => naming+=elem);
      if (naming == '') return false;
      return naming;
    }
  } else return false;
}

console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));
module.exports = {
  createDreamTeam
};
