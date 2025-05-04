import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  onPress?: () => void;
}

function MenuItem({ icon, text, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      {icon}
      <Text style={styles.menuText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default MenuItem;
