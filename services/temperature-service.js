import { UNITS } from "../constant";

function getOptionsitUnit(unit) {
  return unit === UNITS.celcius ? UNITS.farenheit : UNITS.celcius;
}

function convertTemperatureTo(unit, value) {
    if(unit === UNITS.celcius) {
        return (value - 32) / 1.8;
    } else {
        return value * 1.8 + 32; 
    }
}


export { getOptionsitUnit, convertTemperatureTo };
