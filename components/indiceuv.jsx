import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchUVIndex } from '../api/indiceUVApi';

const UVIndex = () => {
  const [uvIndex, setUvIndex] = useState(null);

  useEffect(() => {
    const getUVData = async () => {
      const uv = await fetchUVIndex();
      setUvIndex(uv);
    };

    getUVData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indice UV</Text>
      {uvIndex !== null ? (
        <Text style={styles.value}>{uvIndex}</Text>
      ) : (
        <Text style={styles.value}>Cargando...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#393939',
    paddingTop:17,
    paddingBottom:0,
    borderRadius:22,
    height:140,
    width:180,
    margin:10,
    marginTop:100,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#1e6fc7',
    marginBottom: 10,
  },
  value: {
    fontSize: 43,
    color: 'white',
  },
});

export default UVIndex;
