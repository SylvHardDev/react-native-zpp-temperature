import { Text, TextInput, View } from "react-native";
import { s } from "./InputTemperature.style";

export function InputTemperature({ defalutValue, onChangeText }) {
  return (
    <View style={s.container}>
        <TextInput
        style={s.input}
        placeholder="Tape une temperature"
        inputMode="numeric"
        maxLength={4}
        defalutValue={defalutValue}
        onChangeText={onChangeText}
        />
        <Text style={s.unit}>°C</Text>
    </View>
  );
}
