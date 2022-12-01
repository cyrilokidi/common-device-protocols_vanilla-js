const JT808Body = require("./jt808.body");

const LOCATION_BASIC_INFORMATION = [0, 28];

module.exports = class JT808LocationInformationReport extends JT808Body {
  b;

  constructor(byte) {
    super(byte);
    this.b = byte;
  }

  property(name) {
    return this.b.slice(...name);
  }

  get locationBasicInformation() {
    const prop = this.property(LOCATION_BASIC_INFORMATION);
    return prop;
  }

  get data() {
    return {
      locationBasicInformation: this.locationBasicInformation,
    };
  }
};
