import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import HeaderPage from '../../src/components/HeaderPage';

function Categories(){
    
return(
    <SafeAreaView style={styles.safeArea}>
        <HeaderPage titulo="Categorias" destino="Perfil" />
         <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons style={styles.icon} name="construct-sharp" size={36} color="black" />
            </TouchableOpacity>
            <Text style={styles.text}> Página em construção </Text>
        </View>
    </SafeAreaView>
    )
}
export default Categories;
