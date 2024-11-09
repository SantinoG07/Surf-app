import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CitySelection1 = ({ ciudad, onSelect, isSelected, selectedColors = ['#ffffff', '#ffffff'], unselectedColors = ['#353535', '#353535'] }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(ciudad)}>
      <LinearGradient
        colors={isSelected ? selectedColors : unselectedColors}
        style={[
          styles.view,
          { 
            width: 'auto',
            borderColor: isSelected ? '#353535' :  'white' // Cambia el color del borde aquí
          }
        ]}
      >
        <Text style={[styles.ciudad, { color: isSelected ? 'black' : 'white' }]}>
          {ciudad}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 40,
    borderRadius: 15,
    borderWidth: 1.5,
    paddingHorizontal: 20,
    marginTop: 10,
    marginLeft: 34,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  ciudad: {
    fontSize: 14,
  },
});

export default CitySelection1;
