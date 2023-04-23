import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ImageBackground, Button, TouchableOpacity,StyleSheet, SafeAreaView, ScrollView, Dimensions, TextInput, TouchableHighlight,Alert,KeyboardAvoidingView, } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const UserProfile = ({ data }) => {
    const [activeSlide, setActiveSlide] = useState(0);
  
    const renderItem = ({ item, index }) => {
      return (
        <View style={styles.carouselItem}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      );
    };


  return (
    <View style={styles.container}>
        
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image
          source={{ uri: 'profile.jpg' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
          John Doe
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
        <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={300}
            itemWidth={250}
            onSnapToItem={(index) => setActiveSlide(index)}
        />
        <Text style={styles.carouselCounter}>
            {activeSlide + 1}/{data.length}
        </Text>
        </View>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    carouselItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 250,
        padding: 10,
        marginLeft: 25,
        marginRight: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    image: {
        width: '100%',
        height: '80%',
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    carouselCounter: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 16,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
    },

});

export default UserProfile;
