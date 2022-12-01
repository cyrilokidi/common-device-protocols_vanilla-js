module.exports.messageType = (msgId) => {
  switch (msgId) {
    case 512:
      return "LOCATION_INFORMATION_REPORT";

    default:
      return;
  }
};
