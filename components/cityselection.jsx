import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CitySelection = ({ ciudad, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(ciudad)}>
      <LinearGradient colors={['#393939', '#5f5f5f']} style={styles.view}>
        <Text style={styles.ciudad}>{ciudad}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 370,
    height: 52,
    borderRadius: 25,
    padding: 15,
    marginTop: 10,
  },
  ciudad: {
    paddingLeft: 19,
    fontSize: 14,
    color: 'white',
  },
});

export default CitySelection;
