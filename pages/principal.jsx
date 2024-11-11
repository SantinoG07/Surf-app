import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import WeatherCard from '../components/weathercard';
import CityCard from '../components/citycard';
import UVIndex from "../components/indiceuv";
import WeatherForecast from "../components/weatherforecast";
import BarGraphics from "../components/bargraphics1";
import WindDir from "../components/windir";
import WinSpeed from "../components/windspeed";

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.4;
const SPACING = (width - CARD_WIDTH) / 4;

const Principal = ({ selectedCities = ['Buenos Aires'] }) => { 
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
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollView}>
      <StatusBar style="light" />
      
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled
        contentContainerStyle={styles.scrollViewInner}
        snapToInterval={CARD_WIDTH}
        snapToAlignment="center"
        onScroll={handleScroll}
        scrollEventThrottle={1000}
        showsHorizontalScrollIndicator={false}
      >
        {cards.map(({ type, key }, index) => (
          <View
            key={key}
            style={[styles.cardContainer, {
              opacity: index === activeIndex ? 1 : 0.7,
              transform: [{ scale: index === activeIndex ? 1 : 0.9 }],
            }]}>

            {type === 'weather' ? (
              selectedCities.length > 0 ? (
                selectedCities.map((city, index) => (
                  <WeatherCard key={index} ciudad={city} />
                ))
              ) : (
                <Text>No hay ciudades seleccionadas</Text> 
              )
            ) : (
              <CityCard />
            )}
          </View>
        ))}
      </ScrollView>

      <Text style={styles.title}>Pronostico</Text>
      <WeatherForecast />

      <BarGraphics />

      <View style={styles.row}>
        <WindDir />
        <WinSpeed />
      <UVIndex />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#1e6fc7',
    marginBottom: 10,
    marginTop:60,
  },
  row: {
    marginTop:20,
    flexDirection: 'row',  
    width: '100%',
    paddingHorizontal: 2,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#3f3f3f',
    paddingTop:30,
  },
  scrollView: {
    flexGrow: 1, 
    alignItems: 'center', 
    paddingBottom: 20, 
    backgroundColor: '#3f3f3f',
  },
  scrollViewInner: {
    paddingHorizontal: 50,
  },
  cardContainer: {
    width: CARD_WIDTH,
    marginHorizontal: SPACING / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Principal;
