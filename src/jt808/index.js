const CDP = require("../cdp");
const { toUpperCase, pairSplit, restoreEscape } = require("../cdp.lib");
const { HEADER } = require("./jt808.constant");
const JT808Header = require("./jt808.header");

module.exports = class JT808 extends CDP {
  byte;

  constructor(byte) {
    super(byte);
    this.byte = this.deserialize(byte);
  }

  deserialize(byte) {
    let result = toUpperCase(byte);
    result = pairSplit(result);
    result = restoreEscape(result);
    result = pairSplit(result);
    return result;
  }

  property(name) {
    return this.byte.slice(...name);
  }

  header() {
    const prop = this.property(HEADER);
    const h = new JT808Header(prop);
    return {
      messageId: h.messageId,
      messageBodyAttributes: {
        messageBodyLength: h.messageBodyLength,
        dataEncyption: h.dataEncyption,
        wheatherToSubContract: h.wheatherToSubContract,
      },
    };
  }
};
