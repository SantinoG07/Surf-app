import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import 'react-native-gesture-handler';
import BarGraphics from "../components/bargraphics1"

const Cuenta = () => {
  return (
    <View>
      <StatusBar style="light" />
      <BarGraphics/>
    </View>
  );
};

export default Cuenta;
