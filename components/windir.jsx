import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from "react-native";
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const Windir = () => {
  const [windDirection, setWindDirection] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const apiKey = 'e3ca4788ae9a4b04b5a170108241810';  
        const location = 'Rawson';
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

        console.log("Haciendo solicitud a la API...");

        const response = await axios.get(url);

        const windDirection = response.data.current.wind_dir;

        setWindDirection(windDirection);

        console.log("Dirección del viento:", windDirection);
      } catch (error) {
        console.error("Error en la API:", error);
      }
    };

    getWeatherData();
  }, []);

  const getRotationAngle = (direction) => {
    switch (direction) {
      case 'N': return '0deg'; 
      case 'NE': return '45deg'; 
      case 'E': return '90deg';
      case 'SE': return '135deg';
      case 'S': return '180deg'
      case 'SW': return '225deg'; 
      case 'W': return '270deg'; 
      case 'NW': return '315deg'; 
      default: return '0deg'; 
    }
  };

  return (
    <View style={{ backgroundColor: '#3f3f3f', flex: 1, paddingTop: 20 }}>
      <StatusBar style="light" />

      {windDirection ? (
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Dirección del viento</Text>
          <Animated.View style={{ transform: [{ rotate: getRotationAngle(windDirection) }] }}>
            <Ionicons name="arrow-up" size={85} color="white" />
          </Animated.View>
          <Text style={styles.text}>{windDirection}</Text>
        </View>
      ) : (
        <Text style={styles.text}>Cargando información del viento...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: '#1e6fc7',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor:'#393939',
    paddingTop:16,
    paddingBottom:19,
    borderRadius:22,
    height:190,
    width:120,
    marginTop: 0,
    margin:10,
    alignItems: 'center',
  },
});

export default Windir;
