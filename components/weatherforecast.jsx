import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const WeatherForecast = () => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const apiKey = 'e3ca4788ae9a4b04b5a170108241810';
  const location = 'Mar Del Plata';

  useEffect(() => {
    axios
      .get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=4`)
      .then((response) => {
        setForecast(response.data.forecast.forecastday);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error al cargar el pronóstico');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false} // Oculta la barra de desplazamiento horizontal
    >
      {forecast.map((day, index) => (
        <LinearGradient key={index} colors={['#393939', '#393939']} style={styles.card}>
          <Image style={styles.icon} source={{ uri: `https:${day.day.condition.icon}` }} />
          <Text style={styles.temp}>Max: {day.day.maxtemp_c}°C</Text>
          <Text style={styles.temp}>Min: {day.day.mintemp_c}°C</Text>
        </LinearGradient>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    height: 280,
    marginBottom: -215,
    flexDirection: 'row',
  },
  card: {
    width: 220,
    borderRadius: 25,
    padding: 15,
    margin: 10,
    alignItems: 'center',
  },
  date: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
  },
  temp: {
    fontSize: 16,
    color: 'white',
    marginTop: 14,
    marginBottom: 5,
  },
  icon: {
    width: 95,
    height: 95,
    marginVertical: 10,
  },
  condition: {
    fontSize: 14,
    color: 'white',
  },
});

export default WeatherForecast;
