import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ searchQuery, onSearch, onSubmit }) => {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder="Buscar ciudad..."
      placeholderTextColor="#aaa"
      value={searchQuery}
      onChangeText={onSearch}
      onSubmitEditing={onSubmit} 
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    width: '100%',
    height: 40,
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: '#393939',
    color: 'white',
    marginBottom: 10,
  },
});

export default SearchBar;
