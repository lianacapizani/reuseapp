import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';

function SearchBar(){
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#999" />
      <TextInput
        placeholder="Buscar"
        placeholderTextColor="#999"
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;
