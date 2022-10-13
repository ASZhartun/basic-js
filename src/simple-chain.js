const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  storage : [],
  getLength() {
    return this.storage.length;
  },
  addLink(value) {
    value = value == null ? 'null' : value;
    this.storage.push((value).toString());
    return this;
  },
  removeLink(position) {
    position = +position;
    if (position > 0 && position < this.storage.length) {
      let temp = [];
      for (let i = 0; i < this.storage.length; i++) {
        if (i+1 != position) temp.push(this.storage[i]);
      }
      this.storage = temp;
      return this;
    } else {
      throw new Error("You can't remove incorrect link!");
    }
    
  },
  reverseChain() {
    let temp = [];
    let len = this.storage.length;
    for (let i = 0; i < len; i++) {
      temp.push(this.storage[len - i - 1]);
    }
    this.storage = temp;
    return this;
  },
  finishChain() {
    let finish = '( ' + this.storage[0] + ' )';
    let len = this.storage.length;
    for (let i = 1; i < len; i++) {
      finish+=this.wrapper(this.storage[i]);
    }
    return finish;
  },

  wrapper(value) {
    return "~~( " + value + " )";
  }
};

module.exports = {
  chainMaker
};
