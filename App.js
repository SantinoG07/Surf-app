import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

const icon = require("./assets/icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => (alert = "Chau")}
      >
        <Text style={{ color: "white" }}>Otro Aqui</Text>
      </TouchableHighlight>
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
