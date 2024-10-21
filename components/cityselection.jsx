import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const App = () => {
    const cityselection = [
      {
        ciudad: 'Buenos Aires',
      },
    ];




const Cityselection = ({ ciudad}) => {
  return (
  <LinearGradient  colors={['#393939', '#5f5f5f']}  style={styles.view}  >
  <Text style={styles.ciudad}>{ciudad}</Text>
      
  </LinearGradient>
      
  );
};



  return (
    <View style={styles.view}>
        
        
      {cityselection.map((data) => (
        <Cityselection
        ciudad={data.ciudad}
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
        width: '100%',
        height: 52,
        borderRadius: 25,
        padding: 15,
        marginTop: 10
      },
    ciudad:{
        paddingLeft:19,
        fontSize: 14,
        color:"white",

    },
    
  });
  
export default App;
