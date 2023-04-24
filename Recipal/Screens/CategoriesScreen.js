import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar';
import CategoriesList from '../Components/recipes/categories-list';


const CategoriesScreen = () => {
  return (
          <View style={styles.container}>
            <View>
              <SearchBar />
            </View>
            <View style={styles.wrapper}>
                <View style={{backgroundColor: 'white'}}>
                <CategoriesList />
                </View>
            </View>
          </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CategoriesScreen;
