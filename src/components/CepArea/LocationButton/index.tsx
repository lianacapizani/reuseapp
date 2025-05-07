import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

type Props = {
  text: string;
  onPress: () => void;
  isInfo?: boolean;
};

function LocationButton({ text, onPress, isInfo = false }: Props) {
  return (
    <TouchableOpacity
      style={isInfo ? styles.localInfoContainer : styles.addAddressBtn}
      onPress={onPress}
    >
      <View style={isInfo ? styles.infoContent : styles.addAddressContent}>
        <Ionicons name="location-outline" size={20} color={isInfo ? '#333' : '#000'} style={{ marginRight: 6 }} />
        <Text style={isInfo ? styles.localInfo : styles.addAddressText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default LocationButton;
