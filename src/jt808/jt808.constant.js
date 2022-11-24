module.exports.MESSAGE_ID = [1, 3];

module.exports.MESSAGE_BODY_ATTR = [this.MESSAGE_ID[1], this.MESSAGE_ID[1] + 2];

module.exports.TERMINAL_PHONE_NUMBER = [
  this.MESSAGE_BODY_ATTR[1],
  this.MESSAGE_BODY_ATTR[1] + 6,
];

module.exports.MESSAGE_SERIAL_NUMBER = [
  this.TERMINAL_PHONE_NUMBER[1],
  this.TERMINAL_PHONE_NUMBER[1] + 2,
];

module.exports.ALARM_FLAG = [
  this.MESSAGE_SERIAL_NUMBER[1],
  this.MESSAGE_SERIAL_NUMBER[1] + 4,
];

module.exports.STATUS_FLAG = [this.ALARM_FLAG[1], this.ALARM_FLAG[1] + 4];

module.exports.LATITUDE = [this.STATUS_FLAG[1], this.STATUS_FLAG[1] + 4];

module.exports.LONGITUDE = [this.LATITUDE[1], this.LATITUDE[1] + 4];

module.exports.ELEVATION = [this.LONGITUDE[1], this.LONGITUDE[1] + 2];

module.exports.SPEED = [this.ELEVATION[1], this.ELEVATION[1] + 2];

module.exports.DIRECTION = [this.SPEED[1], this.SPEED[1] + 2];

module.exports.GPS_TIME = [this.DIRECTION[1], this.DIRECTION[1] + 6];

module.exports.MILEAGE = [this.GPS_TIME[1], this.GPS_TIME[1] + 1];

module.exports.MILEAGE_LENGTH = [this.MILEAGE[1], this.MILEAGE[1] + 1];

module.exports.MILEAGE_VALUE = [
  this.MILEAGE_LENGTH[1],
  this.MILEAGE_LENGTH[1] + 4,
];

module.exports.OIL = [this.MILEAGE_VALUE[1], this.MILEAGE_VALUE[1] + 1];

module.exports.OIL_LENGTH = [this.OIL[1], this.OIL[1] + 1];

module.exports.OIL_VALUE = [this.OIL_LENGTH[1], this.OIL_LENGTH[1] + 2];

module.exports.CHECKSUM = [this.OIL_VALUE[1], this.OIL_VALUE[1] + 1];
