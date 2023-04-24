import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, } from 'react-native';
import CarouselCards from '../Components/CarouselCards';

export default function UserProfile() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.username}>
        <Image
          source={require('../assets/profile.png')}
          style={{ width: 100, height: 100, borderRadius: 50 }}/>
        <Text>
          John Doe
        </Text>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>
          Recently Viewed</Text>
      </View>
      <CarouselCards />

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  username: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  headerContainer: {
    alignSelf: 'flex-start',
  },
  header: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
  },
})
