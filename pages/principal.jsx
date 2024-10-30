import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet} from "react-native";
import Weathercard from "../components/weathercard";
import Citycard from "../components/citycard"
import PointGraphics from "../components/pointgraphics"
import Cityselection from "../components/cityselection"

const Principal = () => {
  return (
    <View>
      <Weathercard style={styles.citysel}/>
      <Citycard/>
      <Cityselection />
      <StatusBar style="light" />
      <PointGraphics/>
    </View>
  );
};


const styles = StyleSheet.create({
});

export default Principal;
