module.exports = class JT808Body {
  b;

  constructor(byte) {
    this.b = byte;
  }

  get data() {
    return this.b;
  }
};
