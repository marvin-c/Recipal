import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ThemedText from './ThemedText';

const FavouritesRating = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.favouriteButton}>
        <FontAwesome name="heart-o" size={24} color="black" />
        <ThemedText style={styles.buttonText}>Add to favourites</ThemedText>
      </TouchableOpacity>
      <View style={styles.ratingBar}>
        <FontAwesome name="star" size={24} color="#FFD700" />
        <FontAwesome name="star" size={24} color="#FFD700" />
        <FontAwesome name="star" size={24} color="#FFD700" />
        <FontAwesome name="star-o" size={24} color="#FFD700" />
        <FontAwesome name="star-o" size={24} color="#FFD700" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  favouriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  ratingBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default FavouritesRating;
