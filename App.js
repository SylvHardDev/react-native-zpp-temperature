import { ImageBackground, Text, View } from "react-native-web";
import { s } from "./App.style";
import hotBackground from "./assets/2.3_hot.png";
import { InputTemperature } from "./components/inputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT, UNITS } from "./constant";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);

  return (
    <>
      <ImageBackground source={hotBackground} style={s.container}>
        <View style={s.workspace}>
          <TemperatureDisplay value={inputValue} unit={currentUnit} />
          <InputTemperature
            onChangeText={setInputValue}
            defalutValue={DEFAULT_TEMPERATURE}
          />
          <View>
            <Text>button</Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
