import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const App = () => {
    const citycard = [
      {
        ciudad: 'Buenos Aires',
        temperature: "30"

      },
    ];




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
        
        
      {citycard.map((data) => (
        <Citycard
        ciudad={data.ciudad}
        temperature={data.temperature}
        />
      ))}
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
