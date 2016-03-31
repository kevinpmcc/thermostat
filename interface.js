$(document).ready(function(){
  var thermostat = new Thermostat();

  energyMode();
  updateTemperature();
  getTemperature();

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

  function getTemperature() {
    $.get('localhost:4567/temperature', function(temp) {
      $('#temperature').text(temp));
    }
    }


  }
  function energyMode() {
    $('#energySavingMode').text('Energy Saving: ' + thermostat.powerSaving());
  }


  function updateTemperature() {
    $('#temperature').attr('class', thermostat.color());
    $('#temperature').text(thermostat._temperature + 'º');
  }

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function displayWeather(city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
    var token = '&appid=80094036d29253b6655f36cf24da6cf2';
    var units = '&units=metric';
    $.get(url + units + token, function(data){
      temp = "Current temperature: " + data.main.temp + ' ºC';
      conditions = "Weather conditions: " + data.weather[0].description;
      $('#current-temperature').text(temp);
      $('#weather-conditions').text(conditions);
    });
  }
});
