import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import WeatherCard from '../components/weathercard'; // Asegúrate de que la ruta sea correcta
import CityCard from '../components/citycard';
import UVIndex from "../components/indiceuv";
import WeatherForecast from "../components/weatherforecast";

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.4;
const SPACING = (width - CARD_WIDTH) / 4;

const Principal = ({ selectedCities = [] }) => { // Valor por defecto
  const [activeIndex, setActiveIndex] = useState(1);
  const cards = [
    { type: 'city', key: 'city1' },
    { type: 'weather', key: 'weather' },
    { type: 'city', key: 'city2' },
  ];

  const scrollViewRef = useRef(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: CARD_WIDTH, animated: false });
    }
  }, []);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / CARD_WIDTH);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled
        contentContainerStyle={styles.scrollView}
        snapToInterval={CARD_WIDTH}
        snapToAlignment="center"
        onScroll={handleScroll}
        scrollEventThrottle={100}
        showsHorizontalScrollIndicator={false}
      >
        {cards.map(({ type, key }, index) => (
          <View
            key={key}
            style={[styles.cardContainer, {
              opacity: index === activeIndex ? 1 : 0.7,
              transform: [{ scale: index === activeIndex ? 1 : 0.9 }],
            }]}
          >
            {type === 'weather' ? (
              selectedCities.length > 0 ? (
                selectedCities.map((city, index) => (
                  <WeatherCard key={index} ciudad={city} />
                ))
              ) : (
                <Text>No hay ciudades seleccionadas</Text> // Mensaje para indicar que no hay ciudades
              )
            ) : (
              <CityCard />
            )}
          </View>
        ))}
      </ScrollView>
      <Text style={styles.title}>Pronostico</Text>

      <WeatherForecast/>

      <View style={styles.row}>
      <UVIndex />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title:{
    fontSize: 18,
    color: '#1e6fc7',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20, 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3f3f3f',
  },
  scrollView: {
    paddingHorizontal: SPACING,
    marginTop: -400,
    marginBottom: -340,
  },
  cardContainer: {
    width: CARD_WIDTH,
    marginHorizontal: SPACING / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Principal;
