const CDP = require("../cdp");
const { toUpperCase, pairSplit, restoreEscape } = require("../cdp.lib");

module.exports = class JT808 extends CDP {
  str;

  constructor(str) {
    super(str);
    this.str = this.deserialize(str);
  }

  deserialize(str) {
    let result = toUpperCase(str);
    result = pairSplit(result);
    result = restoreEscape(result);
    result = pairSplit(result);
    return result;
  }

  property(name) {
    const result = this.str.slice(...name);
    return result;
  }
};
