import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Weather = ({ city }) => {
  const [precipitationProb, setPrecipitationProb] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'e3ca4788ae9a4b04b5a170108241810'; // Sustituye con tu clave de API
  const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1`; 

  useEffect(() => {
    // Función para obtener los datos del clima
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        // Obtén la probabilidad de precipitación del pronóstico
        const precipProb = data.forecast.forecastday[0].day.daily_chance_of_rain;
        setPrecipitationProb(precipProb);
      } catch (err) {
        setError('Error al obtener los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Probabilidad de precipitación en {city}: {precipitationProb}% 
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default Weather;
