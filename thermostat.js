class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  };

  getPowerSavingStatus() {
    return this.powerSavingMode
  }

  getTemperature() {
    return this.temperature;
  };

  up() {
    if (this.temperature < 25 && this.powerSavingMode === true){
      this.temperature += 1;
    } else if (this.temperature < 32 && this.powerSavingMode === false){
      this.temperature += 1;
    };
  };

  down() {
    if (this.temperature > 10) {
      this.temperature -= 1;
    };
  };

  setPowerSavingMode(boolean) {
    this.powerSavingMode = boolean;
  }

  reset() {
    this.temperature = 20;
  }

  getEnergyUsage() {
    if (this.temperature < 18) {
      return 'low-usage';
    } else if (this.temperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
};

module.exports = Thermostat;
