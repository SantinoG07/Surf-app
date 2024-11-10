import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const apiKey = 'e3ca4788ae9a4b04b5a170108241810';
  const location = 'Buenos Aires';

  useEffect(() => {
    axios
      .get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=6`)
      .then((response) => {
        const forecastData = response.data.forecast.forecastday.map(day => day.day.daily_chance_of_rain);
        setData(forecastData);
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

  const maxValue = Math.max(...data);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Probabilidad de lluvia en los proximos dias</Text>
      <View style={styles.chartContainer}>
        {data.map((value, index) => (
          <View key={index} style={styles.barContainer}>
            <View style={styles.labelContainer}>
              <LinearGradient
                colors={['#6d6d6d', '#4c4c4c']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={styles.label}
              >
                <Text style={styles.labelText}>{value}%</Text>
              </LinearGradient>
            </View>
            <View
              style={[
                styles.bar,
                {
                  height: `${(value / maxValue) * 100}%`,
                },
              ]}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#1e6fc7',
    marginBottom: 10,
    marginTop:13,
  },
  container: {
    flex: 1,
    marginTop:100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(53,53,53,1.000)',
    borderRadius: 16,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: Dimensions.get('window').width - 20,
    height: 210,
    paddingTop: 70,
    padding: 10, 
    backgroundColor: '#fffff',
    marginTop: 0,
  },
  barContainer: {
    alignItems: 'center',
    flex: 1,
  },
  labelContainer: {
    marginBottom: 8,
  },
  bar: {
    width: 55,
    backgroundColor: '#494949',
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  label: {
    borderRadius: 15,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
});

export default App;
