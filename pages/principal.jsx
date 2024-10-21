import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet} from "react-native";
import Weathercard from "../components/weathercard";
import Citycard from "../components/citycard"
import Cityselection from "../components/cityselection"

const Principal = () => {
  return (
    <View>
      <Weathercard/>
      <Citycard/>
      <StatusBar style="light" />
      <Cityselection />
    </View>
  );
};


const styles = StyleSheet.create({
 
});

export default Principal;
