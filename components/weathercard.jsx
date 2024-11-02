import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import getWeather from '../api/weatherApi';

const ciudad='Denm'
const App = () => {
  const[DatosClima, SetDatosClima] = useState({ciudad:ciudad, temperature:'', icon:''});
  
  useEffect(()=> {
    const fetchClima = async () => {
      const data = await getWeather(ciudad);

      if(data){
        SetDatosClima({
          ciudad:data.location.name,
          temperature:data.current.temp_c,
          icon: `https:${data.current.condition.icon}`,
        });
      }
    };
    fetchClima();
  },[])




const WeatherCard = ({ ciudad, temperature, icon }) => {
  return (
  <LinearGradient  colors={['#198bff', '#66b2ff']}  style={styles.view}  >
  <Text style={styles.ciudad}>{ciudad}</Text>
  <Text style={styles.temperatura}> {temperature}°C</Text>
  <Image style={styles.icono} source={{ uri: icon }} />
      
  </LinearGradient>
      
  );
};



  return (
    <View style={styles.view}>
        
        
        <WeatherCard ciudad={DatosClima.ciudad} temperature={DatosClima.temperature} icon={DatosClima.icon} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


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
