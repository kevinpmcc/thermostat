$(document).ready(function(){
  var thermostat = new Thermostat();
  energyMode(); 
  updateTemperature();


  $('#up').click(function() {
    thermostat.up();
  updateTemperature();
  });
  
  $('#down').click(function() {
    thermostat.down();
  updateTemperature();
  });
  
  $('#reset').click(function() {
    thermostat.reset();
  updateTemperature();
  });
  
  $('#energySavingButton').click(function() {
    thermostat.powerSavingSwitch();
    updateTemperature();
    energyMode();
  });

  function energyMode() {
    $('#energySavingMode').text('Energy Saving: ' + thermostat.powerSaving());
  }
  

  function updateTemperature() {
    $('#temperature').attr('class', thermostat.color());
    $('#temperature').text(thermostat._temperature + 'ºC');
  }

    
});
