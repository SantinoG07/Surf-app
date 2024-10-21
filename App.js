import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import SideMenu from "./components/SideMenu"

import 'react-native-gesture-handler';



export default function App() {
  return (
      <View>
      <StatusBar style="light" />
      <SideMenu />
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
