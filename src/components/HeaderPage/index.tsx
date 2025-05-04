import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

interface HeaderPageProps {
    titulo: string;
    destino?: string; 
}
function HeaderPage ({ titulo, destino }: HeaderPageProps) {
    const navigation = useNavigation();

    const handlePress = () => {
        if (destino) {
          navigation.navigate(destino as never);
        } else {
          navigation.goBack();
        }
      };

    return(
        <View style={styles.header}>
        <TouchableOpacity onPress={handlePress}>
          <Ionicons name="arrow-back" size={24} color="#016DAD" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{titulo}</Text>
        <View style={{ width: 24 }} /> {/* para alinhar o título no centro */}
      </View>
    )
}

export default HeaderPage;