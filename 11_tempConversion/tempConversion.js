const convertToCelsius = function(f) {

  const c = (f - 32) * 5 / 9;
  const cRound = Math.round(c * 10) / 10;
  return cRound;
};

const convertToFahrenheit = function(c) {

  const f = (c * 9 / 5) + 32;
  const fRound = Math.round(f * 10) / 10;
  return fRound;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
