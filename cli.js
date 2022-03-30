const Thermostat = require('./thermostat')

const readline = require('readline');
const { get } = require('http');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const thermostat = new Thermostat

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



