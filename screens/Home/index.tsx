import React from 'react';
import { FlatList, View } from 'react-native';
import Header from '../../src/components/Header';
import SearchBar from '../../src/components/SearchBar';
import Carousel from '../../src/components/Carousel';
import ProductGrid from '../../src/components/ProductGrid';
import styles from './style';

function Home() {
  return (
    <FlatList
      data={[]} // pode ser vazio se você só quiser usar a rolagem
      ListHeaderComponent={() => (
        <View style={styles.container}>
          <Header />
          <SearchBar />
          <Carousel />
          <ProductGrid title="Lançamentos" />
          <ProductGrid title="Mais visualizados" />
        </View>
      )}
      renderItem={null} // ou () => null
    />
  );
}

export default Home;
