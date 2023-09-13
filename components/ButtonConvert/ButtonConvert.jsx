import { Text, Pressable } from "react-native";
import { s } from "./ButtonConvert.style";

export function ButtonConvert({ onPress, unit }) {
  return (
    <Pressable onPress={onPress} style={s.button}>
      <Text style={s.text}>Convertir en {unit}</Text>
    </Pressable>
  );
}
