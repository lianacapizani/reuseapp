import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import MenuItem from '../../src/components/MenuItem';
import styles from './style';
 function Perfil() {
   const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio' as never)}>
          <Ionicons name="arrow-back" size={24} color="#016DAD" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Página Inicial</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.loginBox}>
        <Text style={styles.loginText}>Não está logado?</Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText} onPress={() => navigation.navigate('Login' as never)}>ENTRAR</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.menuList}>
        <MenuItem icon={<Feather name="home" size={20} color='#016DAD' />} onPress={() => navigation.navigate('Inicio' as never)} text="Home" />
        <MenuItem icon={<Feather name="grid" size={20} color='#016DAD' />} onPress={() => navigation.navigate('Categorias' as never)} text="Categorias" />
        <MenuItem icon={<Feather name="heart" size={20} color='#016DAD' />} onPress={() => navigation.navigate('Favoritos' as never)} text="Favoritos" />
        <MenuItem icon={<MaterialIcons name="confirmation-number" size={20} color='#016DAD' />} text="Cupons" />
        <MenuItem icon={<Feather name="user" size={20} color='#016DAD' />} text="Meus dados" />
        <MenuItem icon={<Feather name="list" size={20} color='#016DAD' />} text="Meus pedidos" />
        <MenuItem icon={<Feather name="shopping-bag" size={20} color='#016DAD' />} text="Minha sacola" />
        <MenuItem icon={<Feather name="truck" size={20} color='#016DAD' />} text="Rastreamento de pedidos" />
        <MenuItem icon={<Feather name="file-text" size={20} color='#016DAD' />} text="Regras de promoções" />
        <MenuItem icon={<Feather name="file" size={20} color='#016DAD' />} text="Contrato de venda" />
        <MenuItem icon={<Feather name="message-circle" size={20} color='#016DAD' />} text="Contato" />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Perfil;