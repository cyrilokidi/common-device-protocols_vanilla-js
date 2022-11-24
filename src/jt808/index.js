const CDP = require("../cdp");
const { toUpperCase, pairSplit, restoreEscape } = require("../cdp.lib");
const { HEADER } = require("./jt808.constant");
const JT808Header = require("./jt808.header");

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
    return this.str.slice(...name);
  }

  header() {
    const prop = this.property(HEADER);
    const h = new JT808Header(prop);
    return {
      messageId: h.messageId,
    };
  }
};
