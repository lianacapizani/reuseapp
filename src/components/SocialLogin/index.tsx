import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './style'; // ou usa os estilos direto aqui, como preferir

const SocialLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ou faça login com:</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          
          <FontAwesome5 name="facebook" size={24} color="#1877F2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="whatsapp" size={24} color="#25D366" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialLogin;
