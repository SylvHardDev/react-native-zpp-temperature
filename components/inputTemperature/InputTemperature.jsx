import { Text, TextInput, View } from "react-native";
import { s } from "./InputTemperature.style";

export function InputTemperature({ defalutValue }) {
  return (
    <View style={s.container}>
        <TextInput
        style={s.input}
        placeholder="Tape une temperature"
        keyboardType="numeric"
        maxLength={4}
        defalutValue={defalutValue}
        />
        <Text style={s.unit}>°C</Text>
    </View>
  );
}
