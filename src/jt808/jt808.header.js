const { removeWhiteSpace, hexToDec, arrToString } = require("../cdp.lib");
const { HEADER_MESSAGE_ID } = require("./jt808.constant");

module.exports = class JT808Header {
  byte;

  constructor(byte) {
    this.byte = byte;
  }

  property(name) {
    return this.byte.slice(...name);
  }

  get messageId() {
    let result = this.property(HEADER_MESSAGE_ID);
    result = arrToString(result);
    result = removeWhiteSpace(result);
    result = hexToDec(result);
    return result;
  }
};
