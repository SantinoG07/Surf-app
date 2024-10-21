import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// Agregar esta línea al inicio


const App = () => {
    const weatherData = [
      {
        ciudad: 'Buenos Aires',
        temperature: 22,

      },
    ];




const WeatherCard = ({ ciudad, temperature, icon }) => {
  return (
  <LinearGradient  colors={['#198bff', '#66b2ff']}  style={styles.view}  >
  <Text style={styles.ciudad}>{ciudad}</Text>
  <Text style={styles.temperatura}> {temperature}°C</Text>
  <Image style={styles.icono} source={require('../assets/nube.png')}>{icon}</Image>
      
  </LinearGradient>
      
  );
};



  return (
    <View style={styles.view}>
        
        
      {weatherData.map((data) => (
        <WeatherCard
          ciudad={data.ciudad}
          temperature={data.temperature}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    view: {
        width: 220,
        borderRadius: 25,
        padding: 15,
      },
      
    icono:{
        width:80,
        height:80,
        marginLeft: 15,

    },
    ciudad:{
        paddingLeft:19,
        fontSize: 14,
        color:"white",

    },
    temperatura:{
        paddingLeft:13,
        fontSize: 24,
        color:"white",
    },
    
  });
  
export default App;
