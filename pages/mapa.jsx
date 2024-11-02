import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import 'react-native-gesture-handler';
import WeatherComponent from "../components/testapi"

const Mapa = () => {
  return (
    <View>
      <WeatherComponent/>
      <StatusBar style="light" />
    </View>
  );
};

export default Mapa;
