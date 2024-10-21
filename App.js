import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Principal from "./pages/principal";  
import  Cuenta from "./pages/cuenta";
import  Mapa  from "./pages/mapa";
import  Lugares  from "./pages/lugares";
import  Avanzado  from "./pages/avanzado";

const Menu = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={styles.drawerContent}>
      <Image 
        source={require('./assets/logo2.png')} // Cambia la ruta de la imagen según sea necesario
        style={styles.icon}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Principal")} style={styles.drawerItem}>
        <Text style={styles.drawerText}>Principal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Avanzado")} style={styles.drawerItem}>
        <Text style={styles.drawerText}>Avanzado</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Lugares")} style={styles.drawerItem}>
        <Text style={styles.drawerText}>Lugares</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Mapa")} style={styles.drawerItem}>
        <Text style={styles.drawerText}>Mapa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cuenta")} style={styles.drawerItem}>
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
  drawerContent: {
    flex: 1,
    paddingTop: 120,
    backgroundColor: "#12a2a2a",
    alignItems: 'center',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginTop:-300,
    width: '70%',
    height: '70%',
    
  },
  drawerText: {
    fontSize: 16,
    color: 'white',
  },
});