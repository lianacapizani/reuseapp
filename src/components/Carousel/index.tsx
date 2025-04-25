import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import styles from './style';

function Carousel(){
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/fotovideo.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default Carousel;
