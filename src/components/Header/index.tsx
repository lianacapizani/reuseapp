import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';

function Header() { 
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.menu}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.title}>ReUSE!</Text>
      <TouchableOpacity>
        <Text style={styles.cart}>🛒</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
