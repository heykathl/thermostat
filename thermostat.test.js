const classes = require('./thermostat')

describe('thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new classes.Thermostat();
  });

  test('starts with initial temperature of 20 degrees', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  test('increases temperature', () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  });

  test('decreases temperature', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19)
  })

  test('minimum possible temperature is 10 degrees', () => {
    for(let i = 0; i < 20; i++){
      thermostat.down()
    };
    expect(thermostat.getTemperature()).toBe(10)
  });

  test('power saving mode on by default, max temp is 25', () => {
    for(let i = 0; i < 20; i++){
      thermostat.up()
    };
    expect(thermostat.getTemperature()).toBe(25)
  });

  test('power saving mode is off, max temp is 32', () => {
    thermostat.setPowerSavingMode(false)
    for(let i = 0; i < 20; i++){
      thermostat.up()
    };
    expect(thermostat.getTemperature()).toBe(32)
  });
});

