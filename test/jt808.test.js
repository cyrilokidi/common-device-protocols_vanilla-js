const JT808 = require("../src/jt808");
const { expect } = require("chai");
const data = require("./data").jt808;

describe("JT808", () =>
  data.map((d, i) =>
    describe(`Transmission [${i + 1}]`, () => {
      const jt808 = new JT808(d);

      describe("Header", () => {
        it("Should return message body length", () => {
          const result = jt808.header().messageBodyLength;
          expect(result).to.equal(38, "Incorrect message body length.");
        });

        it("Should return data encryption", () => {
          const result = jt808.header().dataEncyption;
          expect(result).to.equal("None", "Invalid data encryption.");
        });
      });
    })
  ));
