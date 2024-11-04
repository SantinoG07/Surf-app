import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Weathercard from '../components/weathercard';
import Citycard from '../components/citycard';
import App from '../components/pointgraphics';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.4;
const SPACING = (width - CARD_WIDTH) / 4;

const Principal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const components = [
    { Component: Citycard, key: 'city1' },
    { Component: Weathercard, key: 'weather' },
    { Component: Citycard, key: 'city2' },
  ];

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / CARD_WIDTH);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        horizontal
        pagingEnabled
        contentContainerStyle={styles.scrollView}
        snapToInterval={CARD_WIDTH}
        snapToAlignment="center"
        onScroll={handleScroll}
        scrollEventThrottle={100}
      >
        {components.map(({ Component, key }, index) => (
          <View
            key={key}
            style={[
              styles.cardContainer,
              { opacity: index === activeIndex ? 1 : 0.7,
                transform: [{ scale: index === activeIndex ? 1 : 0.9 }] }
            ]}
          >
            <Component />
          </View>
        ))}
      </ScrollView>
      <App/>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#3f3f3f'
  },
  scrollView: {
    paddingHorizontal: SPACING,
    marginTop: -460,
    marginBottom:-340
  },
  cardContainer: {
    width: CARD_WIDTH,
    marginHorizontal: SPACING / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Principal;