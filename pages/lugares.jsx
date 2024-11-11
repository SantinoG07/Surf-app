import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions } from 'react-native';
import CitySelection from '../components/cityselection';
import SearchBar from '../components/searchbar';
import WeatherCard from '../components/weathercard1'; // Asegúrate de que la ruta sea correcta
import CityCard from '../components/citycard'; // Asegúrate de que la ruta sea correcta

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.1;
const SPACING = (width - CARD_WIDTH) / 10;

const App = () => {
  const [activeIndex] = useState(1); 
  const cards = [
    { type: 'weather', key: 'weather' },
  ];

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

      {cards.map(({ type, key }, index) => (
        <View
          key={key}
          style={[styles.cardContainer, {
            opacity: index === activeIndex ? 1 : 0.7,
            transform: [{ scale: index === activeIndex ? 1 : 0.9 }],
          }]}>
          {type === 'weather' ? (
            selectedCities.length > 0 ? (
              selectedCities.map((city, index) => (
                <WeatherCard key={index} ciudad={city} />
              ))
            ) : (
              <Text style={styles.noSelectionText}>No hay ciudades seleccionadas</Text>
            )
          ) : (
            <CityCard />
          )}
        </View>
      ))}
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
    paddingBottom:120,
    
  },
  cardContainer: {
    width: CARD_WIDTH,
    marginHorizontal: SPACING / 2,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  noSelectionText: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
  },
});

export default App;
