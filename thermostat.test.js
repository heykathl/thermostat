// import { jest } from "@jest/globals";

// jest.mock('./weather.js', () => ({
//   fetchWeatherData(city, callback){
//     callback({main:{ temp: 27 }});
//   }
// }));

import Thermostat from './thermostat.js';
import WeatherApi from './weather.js';

describe('thermostat', () => {
  let thermostat;
  let weather;

  beforeEach(() => {
    weather = new WeatherApi()
    thermostat = new Thermostat(weather);
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

  test('resets the temperature to 20', () => {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });
  
  test('it returns medium-usage', () => {
    expect(thermostat.getEnergyUsage()).toBe('medium-usage');
  });

  test('it returns low-usage', () => {
    for (let i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(thermostat.getEnergyUsage()).toBe('low-usage');
  });

  test('it returns high-usage', () => {
    thermostat.setPowerSavingMode(false)
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getEnergyUsage()).toBe('high-usage');
  });

  test('sets temperature to the city given', async () => {
    await thermostat.setCity('Melbourne');
    expect(thermostat.getTemperature()).toBe(27);
  });

});

