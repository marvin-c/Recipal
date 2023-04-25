import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import CarouselCards from '../Components/CarouselCards';
import CarouselData from '../Components/CarouselData';

export default function UserProfile() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.username}>
        <Image
          source={require('../assets/profile.png')}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text>John Doe</Text>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Recently Viewed</Text>
      </View>

      <View style={styles.carouselContainer}>
        <CarouselCards data={CarouselData.recentlyViewed} />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Favourites</Text>
      </View>

      <View style={styles.carouselContainer}>
        <CarouselCards data={CarouselData.favourites} />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your Recipes</Text>
      </View>

      <View style={styles.carouselContainer}>
        <CarouselCards data={CarouselData.yourRecipes} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  username: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerContainer: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
  },
  header: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
  },
});