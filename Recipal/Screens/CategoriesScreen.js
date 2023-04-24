import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';


const CategoriesScreen = () => {
  return (
          <View style={styles.container}>
            <View>
              <Text>Searchbar</Text>
            </View>
            <View style={styles.wrapper}>
                <View style={{backgroundColor: 'white'}}>
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
    backgroundColor: 'white'
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
