import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";

import Principal from "./pages/principal";  
import Cuenta from "./pages/cuenta";
import Mapa from "./pages/mapa";
import Lugares from "./pages/lugares";
import Avanzado from "./pages/avanzado";

const Menu = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const [activeScreen, setActiveScreen] = useState("Principal");

  const handleNavigation = (screenName) => {
    setActiveScreen(screenName);
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.drawerContent}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <TouchableOpacity 
        onPress={() => handleNavigation("Principal")} 
        style={[styles.drawerItem, activeScreen === "Principal" && styles.activeDrawerItem]} 
      >
        <Image source={require('./assets/principal.png')} style={styles.icono} />
        <Text style={styles.drawerText}>Principal</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => handleNavigation("Avanzado")} 
        style={[styles.drawerItem, activeScreen === "Avanzado" && styles.activeDrawerItem]} 
      >
        <Image source={require('./assets/avanzado.png')} style={styles.icono} />
        <Text style={styles.drawerText}>Avanzado</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => handleNavigation("Lugares")} 
        style={[styles.drawerItem, activeScreen === "Lugares" && styles.activeDrawerItem]} 
      >
        <Image source={require('./assets/lugares.png')} style={styles.icono} />
        <Text style={styles.drawerText}>Lugares</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => handleNavigation("Mapa")} 
        style={[styles.drawerItem, activeScreen === "Mapa" && styles.activeDrawerItem]} 
      >
        <Image source={require('./assets/mapa.png')} style={styles.icono} />
        <Text style={styles.drawerText}>Mapa</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => handleNavigation("Cuenta")} 
        style={[styles.drawerItem, activeScreen === "Cuenta" && styles.activeDrawerItem]} 
      >
        <Image source={require('./assets/cuenta.png')} style={styles.icono} />
        <Text style={styles.drawerText}>Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Menu.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Menu.Screen name="Principal" component={Principal} />
          <Menu.Screen name="Avanzado" component={Avanzado} />
          <Menu.Screen name="Lugares" component={Lugares} />
          <Menu.Screen name="Mapa" component={Mapa} />
          <Menu.Screen name="Cuenta" component={Cuenta} />
        </Menu.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  icono: {
    width: 30,
    height: 30,
  },
  drawerContent: {
    flex: 1,
    paddingTop: 120,
    backgroundColor: "#2a2a2a",
    alignItems: 'center',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#3f3f3f',
    width: '90%',
    borderRadius: 25,
    marginBottom: 12,
  },
  activeDrawerItem: { 
    backgroundColor: '#1a1a1a', 
  },
  logo: {
    marginTop: -300,
    marginBottom: -180,
    width: '70%',
    height: '70%',
  },
  drawerText: {
    fontSize: 16,
    color: 'white',
  },
});
