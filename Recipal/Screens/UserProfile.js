import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight,SafeAreaView, ScrollView, } from 'react-native';
import CarouselCards from '../Components/CarouselCards';
import { Pagination } from 'react-native-snap-carousel';
import Data from '../Components/Data';
import { FontAwesome, Feather } from 'react-native-vector-icons';
import SearchBar from '../Components/SearchBar';
import CustomSideMenu from '../Components/SideMenu';
import PreferencesButton from '../Components/PreferencesButton';
import HomeButton from '../Components/HomeButton';
import { ThemeContext } from '../Components/ThemeContext';


const UserProfile = ({ navigation }) => {

  const handleHomePress = () => { //home button navigation handling
  navigation.navigate('Home')
  };
  const handleProfileEdit = () => { //Profile Editor button navigation handling
    navigation.navigate('ProfileEdit')
  };

  const { theme } = useContext(ThemeContext);

  return (
    
    <View style={styles.container}>

      <View style={{ backgroundColor: theme.colors.background }}>
        <Text style={{ color: theme.colors.text }}>User Profile</Text>
        <TouchableOpacity
          onPress={() => console.log('Toggle theme')}
          style={{
            backgroundColor: theme.colors.primary,
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <Text style={{ color: theme.colors.text }}>Toggle Theme</Text>
        </TouchableOpacity>
      </View>

    <ScrollView contentContainerStyle={styles.scrollContainer}>

      <View style={styles.username}>
        <Image
          source={require('../assets/profile.png')} //User Profile Picture. Will need to be a prop or variable - Same for username below
          style={{ width: 100, height: 100, borderRadius: 50 }}/>
        <Text>
          John Doe  
        </Text> 
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>
          Recently Viewed
        </Text>
      </View>
      <View style={styles.carouselContainer}>
        <CarouselCards images={Data[0].images}  //Recently viewed recipes 
        />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>
          Favourites
        </Text>
      </View>
      <View style={styles.carouselContainer}>
        <CarouselCards images={Data[1].images} //User favourites carousel
        />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>
          Your Recipes
        </Text>
      </View>
      <View style={styles.carouselContainer}>
        <CarouselCards images={Data[2].images} //User added recipes carousel
        />
      </View>

      <View style={styles.userStatsContainer} //user stats containers 
      >
        <View style={styles.userStat}>
          <Text style={styles.userStatLabel}>Recipes submitted</Text>
          <Text style={styles.userStatValue}>5</Text>
        </View>
      </View>

      <View style={styles.userStatsContainer}>
        <View style={styles.userStat}>
          <Text style={styles.userStatLabel}>Average rating</Text>
          <Text style={styles.userStatValue}>4.2</Text>
        </View>
      </View>

      <View style={styles.userStatsContainer}>
        <View style={styles.userStat}>
          <Text style={styles.userStatLabel}>Completed recipes</Text>
          <Text style={styles.userStatValue}>12</Text>
        </View>
      </View>

    </ScrollView>

    <View style={styles.sidemenuContainer}>
        <CustomSideMenu/>
    </View> 

    <HomeButton/>
    <PreferencesButton/>
    
  </View>
  );
}

const styles = StyleSheet.create({
  darkTheme:{
  },
  container:{
    flex:1,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    height: 200,
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
  sidemenuContainer: {
    flex: 1,
    bottom: '90%',
  },
  //button text style properties
  buttonText: {
    color: 'black',
    fontWeight: 'regular',
    fontSize: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  userStatsContainer: {
    backgroundColor: 'white',
    padding: 5,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  }, // User stats 
  userStat: {
    alignItems: 'center',
  },
  userStatLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 5,
  },
  userStatValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFC800',
  },
});

export default UserProfile;
