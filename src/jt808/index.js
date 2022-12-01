const CDP = require("../cdp");
const { toUpperCase, pairSplit, restoreEscape } = require("../cdp.lib");
const { HEADER } = require("./jt808.constant");
const JT808Header = require("./jt808.header");
const JT808LocationInformationReport = require("./jt808.location-information-report");

module.exports = class JT808 extends CDP {
  b;

  constructor(byte) {
    super(byte);
    this.b = this.deserialize(byte);
  }

  deserialize(byte) {
    let result = toUpperCase(byte);
    result = pairSplit(result);
    result = restoreEscape(result);
    result = pairSplit(result);
    return result;
  }

  property(name) {
    return this.b.slice(...name);
  }

  get header() {
    const prop = this.property(HEADER);
    const h = new JT808Header(prop);
    return {
      messageId: h.messageId,
      messageBodyAttributes: {
        messageBodyLength: h.messageBodyLength,
        dataEncyption: h.dataEncyption,
        wheatherToSubContract: h.wheatherToSubContract,
      },
      terminalPhoneNumber: h.terminalPhoneNumber,
      messageSequenceNumber: h.messageSequenceNumber,
    };
  }

  get checkCode() {
    const [prop] = this.property([this.b.length - 2, this.b.length - 1]);
    return Number(prop);
  }

  get body() {
    const id = this.header.messageId;
    const body = this.property([HEADER[1], this.b.length - 2]);

    switch (id) {
      case 512:
        const b = new JT808LocationInformationReport(body);
        return b.data;

      default:
        throw new Error("Unknown message type.");
    }
  }
};
