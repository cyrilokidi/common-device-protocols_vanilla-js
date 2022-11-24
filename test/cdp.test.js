const CDP = require("../src/cdp");
const { expect } = require("chai");
const data = require("../data").cdp;

describe("CDP", () =>
  data.map((d, i) => {
    it(`Should return deserialized string [${i + 1}]`, () => {
      const cdp = new CDP(d);
      expect(cdp)
        .to.have.property("str")
        .equal(d, "Invalid deserialized string.");
    });
  }));
