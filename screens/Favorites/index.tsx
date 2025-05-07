import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import HeaderPage from '../../src/components/HeaderPage';

function Favorites(){

return(
    <SafeAreaView style={styles.safeArea}>
        <HeaderPage titulo="Favoritos" destino="Perfil" />
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name="construct-sharp" size={36} color="black" />
            </TouchableOpacity>
            <Text style={styles.text}>Página em construção</Text>
        </View>
    </SafeAreaView>
    )
}
export default Favorites;
