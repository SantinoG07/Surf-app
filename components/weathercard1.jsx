import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import getWeather from '../api/weatherApi'; // Asegúrate de que la ruta sea correcta

const WeatherCard = ({ ciudad }) => {
  const [DatosClima, SetDatosClima] = useState({ ciudad: ciudad, temperature: '', icon: '' });

  useEffect(() => {
    const fetchClima = async () => {
      try {
        const data = await getWeather(ciudad);

        if (data) {
          SetDatosClima({
            ciudad: data.location.name,
            temperature: data.current.temp_c,
            icon: `https:${data.current.condition.icon}`,
          });
        } else {
          console.error('No se recibieron datos del clima');
        }
      } catch (error) {
        console.error('Error fetching weather data: ', error);
      }
    };
    fetchClima();
  }, [ciudad]);

  return (
    <LinearGradient colors={['#198bff', '#66b2ff']} style={styles.view}>
      <Text style={styles.ciudad}>{DatosClima.ciudad}</Text> 
      <Text style={styles.temperatura}>{DatosClima.temperature}°C</Text>
      <Image style={styles.icono} source={{ uri: DatosClima.icon }} />
    </LinearGradient>
  );
  
};

const styles = StyleSheet.create({
  view: {
    width: 140,
    borderRadius: 25,
    padding: 15,
    margin: 10, 
    height:200,
    marginLeft:0,
  },
  icono: {
    width: 98,
    height: 98,
    marginLeft: -10,
  },
  ciudad: {
    paddingLeft: 13,
    fontSize: 19,
    color: "white",
  },
  temperatura: {
    paddingLeft: 13,
    fontSize: 20,
    color: "white",
  },
});

export default WeatherCard;
