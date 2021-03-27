function temperatureCelcius(valNum) {
    valNum = parseFloat(valNum);
  
    document.getElementById("outputReamur").innerHTML = valNum * 0.8;
    document.getElementById("outputFahrenheit").innerHTML = (valNum * 1.8) + 32;
    document.getElementById("outputKelvin").innerHTML = valNum + 273.15;
  }
  
  function temperatureReamur(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = valNum * 1.25;
    document.getElementById("outputFahrenheit").innerHTML = (valNum * 2.25) + 32;
    document.getElementById("outputKelvin").innerHTML = (valNum + 1.25) + 273.15;
  
  }
  
  function temperatureFahrenheit(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum -32) / 1.8;
    document.getElementById("outputReamur").innerHTML = (valNum -32) / 2.25;
    document.getElementById("outputKelvin").innerHTML = (valNum + 459.67) / 1.8;
  }
  
  function temperatureKelvin(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = valNum - 273.15;
    document.getElementById("outputReamur").innerHTML = (valNum - 273.15) * 0.8;
    document.getElementById("outputFahrenheit").innerHTML = (valNum * 1.8) - 459.67;
  }
  
  
  