import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './style';

const products = [
  { id: '1', name: 'Produto 1', price: 'R$ 10,00', image: require('../../../assets/produto1.png') },
  { id: '2', name: 'Produto 2', price: 'R$ 20,00', image: require('../../../assets/produto2.png') },
  { id: '3', name: 'Produto 3', price: 'R$ 30,00', image: require('../../../assets/produto3.png') },
  { id: '4', name: 'Produto 4', price: 'R$ 40,00', image: require('../../../assets/produto4.png') },
  { id: '5', name: 'Produto 5', price: 'R$ 50,00', image: require('../../../assets/produto5.png') },
  { id: '6', name: 'Produto 6', price: 'R$ 60,00', image: require('../../../assets/produto6.png') },
];

function ProductGrid({ title }: { title: string }) {
  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.viewMore}>Ver mais</Text>
      </View>
      <FlatList
        data={products}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ProductGrid;
