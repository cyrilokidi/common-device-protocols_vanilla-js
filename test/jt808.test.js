const JT808 = require("../src/jt808");
const { expect } = require("chai");
const data = require("./data").jt808;

describe("JT808", () =>
  data.map((d, i) => {
    const jt808 = new JT808(d);

    describe("Header", () => {});
  }));
