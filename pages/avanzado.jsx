import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import React from 'react';
import Windir from "../components/windir";
import WindSpeed from "../components/windspeed";
import PointGraphic from "../components/pointgraphics"

const Avanzado = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View>
      <PointGraphic/>
      </View>

      <View style={styles.row}>
        <Windir />
        <WindSpeed />
      </View>
      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3f3f3f',
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingTop: 20
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20, 
  }
});

export default Avanzado;
