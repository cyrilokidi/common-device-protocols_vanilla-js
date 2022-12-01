const JT808Body = require("./jt808.body");

module.exports = class JT808LocationInformationReport extends JT808Body {
  b;

  constructor(byte) {
    super(byte);
    this.b = byte;
  }

  get data() {
    return this.b;
  }
};
