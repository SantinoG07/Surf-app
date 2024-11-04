import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import BarGraphics from "../components/bargraphics"

const Avanzado = () => {
  return (
    <View style={{backgroundColor:'#3f3f3f', flex:1}}>
      <Text>Página Principal</Text>
      <StatusBar style="light" />
      <BarGraphics/>
    </View>
  );
};

export default Avanzado;
