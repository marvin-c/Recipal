import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ImageBackground, Button, TouchableOpacity,StyleSheet, SafeAreaView, ScrollView, Dimensions, TextInput, TouchableHighlight,Alert,KeyboardAvoidingView, } from 'react-native';

const UserProfile = () => {
  const recentlyViewedRecipes = [
    { id: 1, image: 'recipe1.jpg' },
    { id: 2, image: 'recipe2.jpg' },
    { id: 3, image: 'recipe3.jpg' },
  ];

  const renderItem = ({ item }) => {
    return (
      <Image source={{ uri: item.image }} style={{ width: 150, height: 150 }} />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image
          source={{ uri: 'profile.jpg' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
          John Doe
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Recently Viewed</Text>
        <FlatList
          data={recentlyViewedRecipes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default UserProfile;

