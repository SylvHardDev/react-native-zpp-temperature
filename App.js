import { ImageBackground, Text, View } from "react-native-web";
import { s } from "./App.style";
import hotBackground from './assets/2.3_hot.png'
import {  InputTemperature } from "./components/inputTemperature/InputTemperature"

export default function App() {
  return (
    <>
      <ImageBackground source={hotBackground} style={s.container}>
        <View style={s.workspace}>
          <View>
            <Text>Temperature</Text>
          </View>
            <InputTemperature defalutValue={'12'}/>
          <View>
            <Text>button</Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
