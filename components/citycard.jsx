import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import getWeather from '../api/weatherApi';

const ciudad = 'São Paulo'; 

const App = () => {
  const[DatosClima, SetDatosClima] = useState({ciudad:ciudad, temperature:''});
  
  useEffect(()=> {
    const fetchClima = async () => {
      const data = await getWeather(ciudad);

      if(data){
        SetDatosClima({
          ciudad:data.location.name,
          temperature:data.current.temp_c
        });
      }
    };
    fetchClima();
  },[])





const Citycard = ({ ciudad, temperature}) => {
  return (
  <LinearGradient  colors={['#393939', '#5f5f5f']}  style={styles.view}  >
  <Text style={styles.ciudad}>{ciudad}</Text>
  <Text style={styles.temperature}> {temperature}°</Text>
      
  </LinearGradient>
      
  );
};



  return (
    <View style={styles.view}>
        
        
      <Citycard ciudad={DatosClima.ciudad} temperature={DatosClima.temperature} />
    </View>
  );
};

const styles = StyleSheet.create({
    temperature:{
        paddingLeft:15,
        fontSize: 28,
        color:"white",
    } ,
    view: {
        width: 220,
        height: 110,
        borderRadius: 25,
        padding: 15,
      },
    ciudad:{
        paddingLeft:19,
        fontSize: 14,
        color:"white",
        paddingBottom:13,

    },
    
  });
  
export default App;
