// App.js
import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CitySelection from '../components/cityselection';
import SearchBar from '../components/searchbar';

const App = ({ onSelectedCitiesChange }) => {
  const initialCitySelection = [
    { ciudad: 'Buenos Aires' },
    { ciudad: 'Córdoba' },
    { ciudad: 'Rosario' },
    { ciudad: 'Mendoza' },
    { ciudad: 'La Plata' },
  ];

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
      } else if (prevSelected.length < 3) {
        return [...prevSelected, city];
      } else {
        return [...prevSelected.slice(1), city];
      }
    });
  };

  const filteredCities = citySelection.filter(city =>
    city.ciudad.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Exportamos cada ciudad seleccionada en una variable individual.
  const city1 = selectedCities[0] || null;
  const city2 = selectedCities[1] || null;
  const city3 = selectedCities[2] || null;

  // Llamamos a la función de callback cuando cambian las ciudades seleccionadas
  React.useEffect(() => {
    if (onSelectedCitiesChange) {
      onSelectedCitiesChange({ city1, city2, city3 });
    }
  }, [city1, city2, city3, onSelectedCitiesChange]);

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
            isSelected={selectedCities.includes(item.ciudad)}
            onSelect={() => handleSelectCity(item.ciudad)}
          />
        )}
        keyExtractor={item => item.ciudad}
      />
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
});

export default App;
