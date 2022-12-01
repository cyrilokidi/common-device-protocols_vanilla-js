const JT808 = require("../src/jt808");
const { expect } = require("chai");
const data = require("./data").jt808;

describe("JT808", () =>
  data.map((d, i) =>
    describe(`Transmission [${i + 1}]`, () => {
      const jt808 = new JT808(d);

      describe("Header", () => {
        it("Should return message type", () => {
          const result = jt808.header().type;
          expect(result).to.equal(
            "LOCATION_INFORMATION_REPORT",
            "Incorrect message id."
          );
        });

        describe("Message body attributes", () => {
          it("Should return message body length", () => {
            const result =
              jt808.header().messageBodyAttributes.messageBodyLength;
            expect(result).to.equal(38, "Incorrect message body length.");
          });

          it("Should return data encryption", () => {
            const result = jt808.header().messageBodyAttributes.dataEncyption;
            expect(result).to.equal("None", "Invalid data encryption.");
          });

          it("Should return sub-package status", () => {
            const result =
              jt808.header().messageBodyAttributes.wheatherToSubContract;
            expect(result).to.equal(
              "Not Long Message",
              "Invalid sub-package status."
            );
          });
        });

        it("Should return terminal phone number", () => {
          const result = jt808.header().terminalPhoneNumber;
          expect(result).to.equal(
            "123456789012",
            "Invalid terminal phone number."
          );
        });

        it("Should return message sequence number", () => {
          const result = jt808.header().messageSequenceNumber;
          expect(result).to.equal(126, "Invalid message sequence number.");
        });
      });
    })
  ));
