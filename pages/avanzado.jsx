import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import BarGraphics from "../components/bargraphics"
import BarGraphics1 from "../components/bargraphics1"
import Windir from "../components/windir"
import WindSpeed from "../components/windspeed.jsx"

const Avanzado = () => {
  return (
    <View style={{backgroundColor:'#3f3f3f', flex:1}}>
      <StatusBar style="light" />
      <Windir/>
      <WindSpeed/>
    </View>
  );
};

export default Avanzado;
