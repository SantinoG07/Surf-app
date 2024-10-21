import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet} from "react-native";
import Weathercard from "../components/weathercard";
import Citycard from "../components/citycard"

const Principal = () => {
  return (
    <View>
      <Weathercard/>
      <Citycard/>
      <StatusBar style="light" />
    </View>
  );
};


const styles = StyleSheet.create({
  weather:{
  }
});

export default Principal;
