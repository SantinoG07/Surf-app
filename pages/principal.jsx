import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet} from "react-native";
import Weathercard from "../components/weathercard"

const Principal = () => {
  return (
    <View>
      <Weathercard style={styles.weather}/>
      <StatusBar style="light" />
    </View>
  );
};


const styles = StyleSheet.create({
  weather:{
  }
});

export default Principal;
