import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import 'react-native-gesture-handler';
import CitySelection1 from '../components/cityselection1';
import SearchBar from '../components/searchbar';

const initialCitySelection = [{ ciudad: "Buenos Aires" }];

const Cuenta = () => {
  const [citySelection, setCitySelection] = useState(initialCitySelection);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const addCity = () => {
    if (searchQuery && !citySelection.find(city => city.ciudad.toLowerCase() === searchQuery.toLowerCase())) {
      const newCity = { ciudad: searchQuery };
      setCitySelection([...citySelection, newCity]);
      setSearchQuery('');
    }
  };

  const handleSelectCity = (city) => {
    setSelectedCities((prevSelected) => {
      if (prevSelected.includes(city)) {
        return prevSelected.filter(selectedCity => selectedCity !== city);
      } else {
        return [...prevSelected, city];
      }
    });
  };

  const filteredCities = citySelection.filter(city =>
    city.ciudad.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{backgroundColor:'#3f3f3f', flex:1, alignItems:'center'}}>
      <StatusBar style="light" />
      
      <Image source={require("../assets/cuenta.png")} style={styles.logo}/>
      <Text style={styles.nombre}>Usuario</Text>
      <Text style={styles.ciudad}>Buenos Aires</Text>

      <View style={{backgroundColor:'#353535', flex:1, borderRadius:25, width:350, marginTop: 20, padding: 15}}>
        <Text style={styles.playas}>Ciudades visitadas</Text>

        <SearchBar
          searchQuery={searchQuery}
          onSearch={handleSearch}
          onSubmit={addCity}
        />

        <FlatList
          data={filteredCities}
          keyExtractor={(item) => item.ciudad}
          renderItem={({ item }) => (
            <CitySelection1
              ciudad={item.ciudad}
              onSelect={handleSelectCity}
              isSelected={selectedCities.includes(item.ciudad)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
  );
};

export default Cuenta;

const styles = StyleSheet.create({
  playas: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 10,
  },
  ciudad: {
    fontWeight: '300',
    color: 'grey',
    fontSize: 13,
    marginTop: 5,
  },
  nombre: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 35,
  },
  logo: {
    marginTop: 48,
    width: 140,
    height: 140,
    borderRadius: 100,
  }
});
