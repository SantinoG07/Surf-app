import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CitySelection from '../components/cityselection';
import SearchBar from '../components/searchbar';

const App = () => {
  const initialCitySelection = [
    { ciudad: 'Buenos Aires' },
    { ciudad: 'Córdoba' },
    { ciudad: 'Rosario' },
  ];

  const [citySelection, setCitySelection] = useState(initialCitySelection);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredCities = citySelection.filter(city =>
    city.ciudad.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar
        searchQuery={searchQuery}
        onSearch={handleSearch}
        onSubmit={addCity}
      />
      <FlatList
        data={filteredCities}
        renderItem={({ item }) => (
          <CitySelection
            key={item.ciudad}
            ciudad={item.ciudad}
            onSelect={setSelectedCity}
          />
        )}
        keyExtractor={item => item.ciudad}
      />
      {selectedCity && (
        <Text style={styles.selectedCityText}>
          Ciudad seleccionada: {selectedCity}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282828',
    padding: 20,
  },
  selectedCityText: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
  },
});

export default App;
