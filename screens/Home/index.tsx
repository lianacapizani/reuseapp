import React from 'react';
import { FlatList, View, SafeAreaView } from 'react-native';
import Header from '../../src/components/Header';
import SearchBar from '../../src/components/SearchBar';
import Carousel from '../../src/components/Carousel';
import ProductGrid from '../../src/components/ProductGrid';
import styles from './style';

function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={[]}
        ListHeaderComponent={() => (
          <View style={styles.container}>
            <Header />
            <SearchBar />
            <Carousel />
            <ProductGrid title="Lançamentos" />
            <ProductGrid title="Mais visualizados" />
          </View>
        )}
        renderItem={null}
      />
    </SafeAreaView>
  );
}

export default Home;
