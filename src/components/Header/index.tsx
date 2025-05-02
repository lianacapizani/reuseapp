import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';


function Header() { 
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.menu}>☰</Text>
      </TouchableOpacity>
      <Image
        source={require('../../../assets/logo.png')} // ajuste o caminho conforme seu projeto
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity>
        <Ionicons name="cart-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
