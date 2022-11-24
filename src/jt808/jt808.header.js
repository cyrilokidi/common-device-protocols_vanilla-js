const {
  removeWhiteSpace,
  hexToDec,
  arrToString,
  hexToBin,
  binToDec,
} = require("../cdp.lib");
const {
  MESSAGE_ID,
  MESSAGE_BODY_ATTRIBUTES,
  MESSAGE_BODY_LENGTH,
  DATA_ENCRYPTION,
} = require("./jt808.constant");

module.exports = class JT808Header {
  byte;

  constructor(byte) {
    this.byte = byte;
  }

  property(name) {
    return this.byte.slice(...name);
  }

  get messageId() {
    let result = this.property(MESSAGE_ID);
    result = arrToString(result);
    result = removeWhiteSpace(result);
    result = hexToDec(result);
    return result;
  }

  get messageBodyLength() {
    let result = this.messageBodyAttributes(MESSAGE_BODY_LENGTH);
    result = binToDec(result);
    return result;
  }

  get dataEncyption() {
    let result = this.messageBodyAttributes(DATA_ENCRYPTION);
    const [third, second, first] = result;
    if (first === "0" && second === "0" && third === "0") {
      result = "None";
    } else if (first) {
      result = "RSA";
    } else result = "Reserved";
    return result;
  }

  messageBodyAttributes(name) {
    let result = "";
    this.property(MESSAGE_BODY_ATTRIBUTES).map((hex) => {
      result += hexToBin(hex);
    });
    result = result.slice(...name);
    return result;
  }
};
