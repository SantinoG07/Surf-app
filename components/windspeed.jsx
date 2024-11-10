import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import axios from 'axios';

const Windir = () => {
  const [windSpeed, setWindSpeed] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const apiKey = 'e3ca4788ae9a4b04b5a170108241810';  
        const location = 'Belgrado';
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

        console.log("Haciendo solicitud a la API...");

        const response = await axios.get(url);

        const windSpeed = response.data.current.wind_kph;

        setWindSpeed(windSpeed);

        console.log("Velocidad del viento:", windSpeed);
      } catch (error) {
        console.error("Error en la API:", error);
      }
    };

    getWeatherData();
  }, []);

  

  return (
    <View style={{ backgroundColor: '#3f3f3f', flex: 1, paddingTop: 20 }}>
      <StatusBar style="light" />

      {windSpeed ? (
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Velocidad del viento</Text>
          
          <Text style={styles.text}>{windSpeed}</Text>
          <Text style={styles.km}>KM/H</Text>
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
  km:{
    color:'#868686',
    fontSize:20,
  },
  text: {
    fontSize: 45,
    color: 'white',
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor:'#393939',
    paddingTop:16,
    paddingBottom:19,
    borderRadius:22,
    height:190,
    width:180,
    marginTop: 0,
    alignItems: 'center',
    margin:10,
  },
});

export default Windir;
