import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight,SafeAreaView, ScrollView, } from 'react-native';
import CarouselCards from '../Components/CarouselCards';
import { Pagination } from 'react-native-snap-carousel';
import Data from '../Components/Data';
import { FontAwesome, Feather } from 'react-native-vector-icons';
import SearchBar from '../Components/SearchBar';
import CustomSideMenu from '../Components/SideMenu';

const UserProfile = ({ navigation }) => {

  const handleHomePress = () => { //home button navigation handling
  navigation.navigate('Home')
  };
  const handleProfileEdit = () => { //Profile Editor button navigation handling
    navigation.navigate('ProfileEdit')
  };

  return (
    <View style={styles.container}>

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

    <View style={styles.navigationContainer}>
      <TouchableHighlight style={styles.homebutton} //Home navigation button
          underlayColor="rgba(255, 200, 0, 0.75)" //Downpress button
          onPress={handleHomePress}>
          <FontAwesome name="home" size={36} color="black" style={styles.inputIcon}/>
      </TouchableHighlight>

      <TouchableHighlight style={styles.editbutton} // User profile preference settings etc
        underlayColor="rgba(255, 200, 0, 0.75)" //Downpress button
        onPress={handleProfileEdit}>
        <FontAwesome name="sliders" size={36} color="black" style={styles.inputIcon}/>
      </TouchableHighlight>
    </View>
    
  </View>
  );
}

const styles = StyleSheet.create({
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
  navigationContainer: {
    flexDirection: 'row', // added this line
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  sidemenuContainer: {
    flex: 1,
    bottom: '90%',
  },
  editbutton: {
    backgroundColor: '#FFC800',
    padding: 7,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8 ,
    shadowRadius: 2,
    elevation: 4,
  },
  homebutton: {
    backgroundColor: '#FFC800',
    padding: 7,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8 ,
    shadowRadius: 2,
    elevation: 4,
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
