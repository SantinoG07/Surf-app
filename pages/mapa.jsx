import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Text, Image, TouchableWithoutFeedback } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const { width, height } = Dimensions.get('window');

const CustomMarker = ({ onPress }) => {
  return (
    <View style={styles.markerContainer}>
      
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.markerBubble}>
          <Text style={styles.markerTitle}>Your Location</Text>
          <Text style={styles.markerDescription}>This is your current location</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const App = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {currentLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider="google"
        >
          <Marker
            coordinate={currentLocation}
            onPress={() => {}}
            anchor={{ x: 0.5, y: 1 }} // Ajusta el anclaje del marcador
          >
            <CustomMarker />
          </Marker>
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width,
    height: height,
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerImage: {
    width: 40, // Ajusta el tamaño de la imagen
    height: 40,
    borderRadius: 20, // Hace que la imagen sea circular
  },
  markerBubble: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
  },
  markerTitle: {
    fontWeight: 'bold',
  },
  markerDescription: {
    fontSize: 12,
  },
});

export default App;
