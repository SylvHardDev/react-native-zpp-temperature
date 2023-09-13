import { ImageBackground, Text, View } from "react-native-web";
import { s } from "./App.style";
import hotBackground from './assets/2.3_hot.png'

export default function App() {
  return (
    <>
      <ImageBackground source={hotBackground} style={s.container}>
        <View style={s.workspace}>
          <View>
            <Text>Temperature</Text>
          </View>
          <View>
            <Text>input</Text>
          </View>
          <View>
            <Text>button</Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
