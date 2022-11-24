module.exports.HEADER = [1, 13];

module.exports.MESSAGE_ID = [0, 2];

module.exports.MESSAGE_BODY_ATTRIBUTES = [
  this.MESSAGE_ID[1],
  this.MESSAGE_ID[1] + 2,
];

module.exports.MESSAGE_BODY_LENGTH = [6, 16];
