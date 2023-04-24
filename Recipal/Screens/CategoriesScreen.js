import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar';
import CategoriesList from '../Components/recipes/categories-list';
import * as Font from 'expo-font';
import { FlatList } from 'react-native-gesture-handler';

const CategoriesScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recipal</Text>
      </View>
      <SearchBar />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={{ backgroundColor: 'white' }}>
          <CategoriesList />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'DancingScript-Regular',
    fontWeight: '600',
    fontSize: 40,
    color: 'black',
  },
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100,
  },
});

export default CategoriesScreen;
