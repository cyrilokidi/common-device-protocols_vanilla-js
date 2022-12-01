const { hexToBin } = require("../cdp.lib");
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

  alarmSign(prop) {
    let bin = "";
    prop.slice(0, 4).map((p) => {
      bin += hexToBin(p);
    });
    const result = {
      emergencyAlarm: bin[bin.length - 1],
      overspeedAlarm: bin[bin.length - 2],
      drivingAlarmMalfunction: bin[bin.length - 3],
      riskWarning: bin[bin.length - 4],
      gnssModuleMalfunction: bin[bin.length - 5],
      gnssAntennaWasNotConnectedOrCut: bin[bin.length - 6],
      gnssAntennaShortCircuited: bin[bin.length - 7],
      terminalMainPowerUndervoltage: bin[bin.length - 8],
      terminalMainPowerIsTurnedOff: bin[bin.length - 9],
      terminalLCDOrDisplayMalfunction: bin[bin.length - 10],
      ttsModuleMalfunction: bin[bin.length - 11],
      cameraMalfunction: bin[bin.length - 12],
      roadTransportCertificateICCardModuleMalfunction: bin[bin.length - 13],
      overspeedWarning: bin[bin.length - 14],
      fatigueDrivingWarning: bin[bin.length - 15],
      reserve: bin.slice(bin.length - 18, bin.length - 16),
      accumulatedOverspeedDrivingTimeOfTheDay: bin[bin.length - 19],
      timeoutParking: bin[bin.length - 20],
      enterAndExitTheArea: bin[bin.length - 21],
      enterAndExitTheRoute: bin[bin.length - 22],
      drivingTimeOfTheRouteIsNotEnoughOrTooLong: bin[bin.length - 23],
      offTrackAlarm: bin[bin.length - 24],
      vehicleVssMalfunction: bin[bin.length - 25],
      abnormalFuelCapacityOfVehicle: bin[bin.length - 26],
      vehicleIsStolen: bin[bin.length - 27],
      illegalIgnitionOfVehicle: bin[bin.length - 28],
      illegalDisplacementOfVehicle: bin[bin.length - 29],
      collisionWarning: bin[bin.length - 30],
      rolloverWarning: bin[bin.length - 31],
      illegalOpenDoors: bin[bin.length - 32],
    };
    return result;
  }

  get locationBasicInformation() {
    const prop = this.property(LOCATION_BASIC_INFORMATION);
    return {
      alarmSign: this.alarmSign(prop),
    };
  }

  get data() {
    return {
      locationBasicInformation: this.locationBasicInformation,
    };
  }
};
