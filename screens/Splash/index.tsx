import React, { useEffect } from 'react';
import {Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types';
import styles from './style';

type Navigation = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

function SplashScreen() {
  const navigation = useNavigation<Navigation>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 2000); // segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.slogan}>
        "Menos descarte, mais atitude. Com o Reuse, o que é bom ganha uma nova chance."
      </Text>
      <Text style={styles.footer}>
        © 2025 ReUSE. Todos os direitos reservados.
      </Text>
    </View>
  );
  
}

export default SplashScreen;
