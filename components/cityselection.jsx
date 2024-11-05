import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CitySelection = ({ ciudad, onSelect, isSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(ciudad)}>
      <LinearGradient
        colors={isSelected ? ['#1e90ff', '#00bfff'] : ['#393939', '#5f5f5f']}
        style={styles.view}
      >
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
