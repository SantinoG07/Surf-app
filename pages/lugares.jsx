import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import BarGraphics from "../components/bargraphics1"
import 'react-native-gesture-handler';

const Lugares = () => {
  return (
    <View>
      <StatusBar style="light" />
      <BarGraphics/>
    </View>
  );
};

export default Lugares;
