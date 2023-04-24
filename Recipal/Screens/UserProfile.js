import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, } from 'react-native';
import CarouselCards from '../Components/CarouselCards';

export default function UserProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={{ uri: 'profile.jpg' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
/>
        <Text>
          John Doe
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Recently Viewed</Text>
      <CarouselCards />
      </View>

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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  }
})
