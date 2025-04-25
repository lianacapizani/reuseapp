import React, { useEffect } from 'react';
import { ImageBackground, View, ActivityIndicator } from 'react-native';
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
    <ImageBackground
      source={require('../../assets/splash-bg.png')} // use sua imagem de fundo aqui
      style={styles.background}
    >
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </ImageBackground>
  );
}

export default SplashScreen;
