import Thermostat from './thermostat.js';
import WeatherApi from './weather.js';
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const weather = new WeatherApi;
const thermostat = new Thermostat(weather);


const logTemperature = () => {
  if (thermostat.getTemperature() >= 25 && thermostat.getPowerSavingStatus() === true){ 
    console.log(`Temperature is ${thermostat.getTemperature()} - (maximum reached)`);
  } else {
    console.log(`Temperature is ${thermostat.getTemperature()}`);
  }
}

const getUserInput = () => {
  rl.question('Enter command > ', (command) => {
    if (command === 'up'){
      thermostat.up();
      logTemperature();
      getUserInput()
    } else if (command === 'down'){
      thermostat.down();
      logTemperature();
      getUserInput();
    } else if (command === 'psm on') {
      thermostat.setPowerSavingMode(true);
      logTemperature();
      getUserInput();
    } else if (command === 'psm off') {
      thermostat.setPowerSavingMode(false);
      logTemperature();
      getUserInput();
    }
    else {
      getUserInput();
    }
  });
}

logTemperature();
getUserInput()



