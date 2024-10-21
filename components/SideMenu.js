import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const SideMenu = () => {
  const [pressedButton, setPressedButton] = useState(null); 
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {setPressedButton('avanzado');}}
        style={[{backgroundColor: pressedButton === 'avanzado' ? 'rgb(210, 230, 255)' : 'transparent',},
          styles.wrapperCustom,
        ]}
      >
        <Text style={styles.text}>Avanzado</Text>
      </Pressable>

      <Pressable
        onPress={() => setPressedButton('principal')}
        style={[{backgroundColor: pressedButton === 'principal' ? 'rgb(210, 230, 255)' : 'transparent',},
          styles.wrapperCustom,
        ]}
      >
        <Text style={styles.text}>Principal</Text>
      </Pressable>

      <Pressable
        onPress={() => setPressedButton('mapa')}
        style={[{backgroundColor: pressedButton === 'mapa' ? 'rgb(210, 230, 255)' : 'transparent',},
          styles.wrapperCustom,
        ]}
      >
        <Text style={styles.text}>Mapa</Text>
      </Pressable>

      <Pressable
        onPress={() => setPressedButton('lugares')}
        style={[{backgroundColor: pressedButton === 'lugares' ? 'rgb(210, 230, 255)' : 'transparent',},
          styles.wrapperCustom,
        ]}
      >
        <Text style={styles.text}>Lugares</Text>
      </Pressable>

      <Pressable
        onPress={() => setPressedButton('cuenta')}
        style={[{backgroundColor: pressedButton === 'cuenta' ? 'rgb(210, 230, 255)' : 'transparent',},
          styles.wrapperCustom,
        ]}
      >
        <Text style={styles.text}>Cuenta</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperCustom: {
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  container: {
    backgroundColor: '#2a2a2a',
    height: '100%',
    width: 250,
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SideMenu;
