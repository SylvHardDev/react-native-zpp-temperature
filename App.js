import { ImageBackground, Text, View } from "react-native-web";
import { s } from "./App.style";
import hotBackground from "./assets/2.3_hot.png";
import { InputTemperature } from "./components/inputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT, UNITS } from "./constant";
import { useState } from "react";
import { getOptionsitUnit, convertTemperatureTo } from "./services/temperature-service";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositeUnit = getOptionsitUnit(currentUnit);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat) 
    ? ""
    : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
  }
  return (
    <>
      <ImageBackground source={hotBackground} style={s.container}>
        <View style={s.workspace}>
          <TemperatureDisplay
            value={getConvertedTemperature()}
            unit={getOptionsitUnit(currentUnit)}
          />
          <InputTemperature
            onChangeText={setInputValue}
            defalutValue={DEFAULT_TEMPERATURE}
            unit={currentUnit}
          />
          <ButtonConvert onPress={()=> {
            setCurrentUnit(oppositeUnit)
          }} unit={currentUnit}/>
        </View>
      </ImageBackground>
    </>
  );
}
