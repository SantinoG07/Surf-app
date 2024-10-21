import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";

import 'react-native-gesture-handler';



export function Principal() {
  return (
      <View>
      <StatusBar style="light" />
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
