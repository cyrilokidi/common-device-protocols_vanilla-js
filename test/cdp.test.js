const CDP = require("../src/cdp");
const { expect } = require("chai");

describe("CDP", () => {
  it("Should return deserialized string ", () => {
    const str =
      "7E02000026123456789012007D02000000010000000200BA7F0E07E4F11C0028003C00001810151010100104000000640202007D01137E";
    const cdp = new CDP(str);
    expect(cdp)
      .to.have.property("str")
      .equal(str, "Invalid deserialized string.");
  });
});
