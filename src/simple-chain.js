const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  storage : null,
  getLength() {
    return this.storage.length;
  },
  addLink(value) {
    if (this.storage === null) this.storage = new Array();
    value = value == null ? 'null' : value;
    this.storage.push((value).toString());
    return this;
  },
  removeLink(position) {
    if (this.storage === null) this.storage = new Array();
    position = +position;
    if (position > 0 && position < this.storage.length) {
      let temp = [];
      for (let i = 0; i < this.storage.length; i++) {
        if (i+1 != position) temp.push(this.storage[i]);
      }
      this.storage = [...temp];
      temp = [];
      return this;
    } else {
      this.storage = [];
      throw new Error("You can't remove incorrect link!");
    }
    
  },
  reverseChain() {
    if (this.storage === null) this.storage = new Array();
    let temp = [];
    let len = this.storage.length;
    for (let i = 0; i < len; i++) {
      temp.push(this.storage[len - i - 1]);
    }
    this.storage = [...temp];
    temp = [];
    return this;
  },
  finishChain() {
    let finish = '( ' + this.storage[0] + ' )';
    let len = this.storage.length;
    for (let i = 1; i < len; i++) {
      finish+=this.wrapper(this.storage[i]);
    }
    this.storage = null;
    return finish;
  },

  wrapper(value) {
    return "~~( " + value + " )";
  }
};

module.exports = {
  chainMaker
};
