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
  WHETHER_TO_SUBCONTRACT,
  TERMINAL_PHONE_NUMBER,
  MESSAGE_SEQUENCE_NUMBER,
} = require("./jt808.constant");
const { messageType } = require("./jt808.lib");

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

  get type() {
    return messageType(this.messageId);
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

  get wheatherToSubContract() {
    let result = this.messageBodyAttributes(WHETHER_TO_SUBCONTRACT);
    result = result === "1" ? "Long Message" : "Not Long Message";
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

  get terminalPhoneNumber() {
    let result = this.property(TERMINAL_PHONE_NUMBER);
    result = arrToString(result);
    return result;
  }

  get messageSequenceNumber() {
    let result = this.property(MESSAGE_SEQUENCE_NUMBER);
    result = arrToString(result);
    result = removeWhiteSpace(result);
    result = hexToDec(result);
    return result;
  }
};
