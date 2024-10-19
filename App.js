import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import WeatherCard from "./components/weathercard"


export default function App() {
  return (
      <View>
      <StatusBar style="light" />
      <WeatherCard />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a2a2a",
    alignItems: "center",
    justifyContent: "center",
  },
  Textos: {
    color: "white",
  },
});
