import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';


const WeatherCard = () => {
  return (
    <View style={styles.container}>


        <Pressable style={styles.pressable}>
            

         <Text>Avanzado</Text>
        </Pressable>
        <Pressable>
         <Text>Principal</Text>
        </Pressable>
        <Pressable>
         <Text>Mapa</Text>
        </Pressable>
        <Pressable>
         <Text>Lugares</Text>
        </Pressable>
        <Pressable>
         <Text>Cuenta</Text>
        </Pressable>

        
    </View>
  );
};

const styles = StyleSheet.create({
    imagenes: {
        width:100,
        height:10
    },
    pressable: {
        marginTop:80,
        padding: 10,
        marginVertical: 5, 
        width: '100%',
        alignItems: 'center', 
      },
  container: {
    backgroundColor: "#2a2a2a",
    height:"100%",
    width:250
  },
  text: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WeatherCard;
