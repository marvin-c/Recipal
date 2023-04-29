import React, { useState, useEffect } from 'react';
import { ImageBackground, Image, Button, TouchableOpacity,StyleSheet, SafeAreaView, ScrollView, Dimensions, View, Text, TextInput, TouchableHighlight,Alert,KeyboardAvoidingView,} from 'react-native';
import * as Font from 'expo-font';  //font 
import { FontAwesome, Feather } from 'react-native-vector-icons';
import BackButton from '../Components/BackButton';

const AboutUsScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/AboutUsScreen.png')} // Background image path
        resizeMode="cover"
        style={styles.background}>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.Maintitle}>About Us</Text>
        <Text>
        <Text>Welcome to Recipal, an online platform created by a group of passionate foodies who believe that everyone should have access to great recipes, 
          no matter where they are in the world. Our team consists of three graduate students who share a love of cooking and baking. </Text>{"\n\n"}
        <Text>We started this project with a simple goal in mind: </Text>{"\n\n"}
        <Text>to build a platform where food lovers from all over the world can come together to share and discover new recipes.</Text>{"\n\n"}
        <Text>For us, cooking and baking isn't just about creating delicious food. It's about exploring new cultures, experimenting with flavors, 
          and connecting with others over a shared love of great food.</Text>{"\n\n"}
        <Text>We wanted to create a space where people could do just that 
          - where they could find inspiration for their next meal, connect with other home cooks, and share their own culinary creations.</Text>{"\n\n"}
        <Text>We believe that food has the power to bring people together, and we're committed to building a platform that reflects that belief. 
          That's why we're not just focused on the recipes - we're also building a community. A place where people can share their thoughts, ask for advice, and support each other as they explore new flavors and techniques.</Text>{"\n\n"}
        <Text>Our team is dedicated to making Recipal the best possible platform for home cooks and food enthusiasts everywhere. 
          We're constantly working to improve our platform and add new features, so stay tuned for more exciting updates in the future!</Text>{"\n\n"}
        <Text>We thank you for being a part of the Recipal community. We can't wait to see what you'll create!</Text>{"\n\n"}
        <Text style = {styles.title}>The Recipal Team:</Text></Text>
        <View style={styles.teamMembers}>
            <View style={styles.member}>
              <Image source={require('../assets/Rocelle.png')} style={styles.memberImage} />
              <Text style={styles.memberName}>Rocelle</Text>
            </View>
            <View style={styles.member}>
              <Image source={require('../assets/Marvin.png')} style={styles.memberImage} />
              <Text style={styles.memberName}>Marvin</Text>
            </View>
            <View style={styles.member}>
              <Image source={require('../assets/Darren.png')} style={styles.memberImage} />
              <Text style={styles.memberName}>Darren</Text>
            </View>
          </View>
        </ScrollView>
        <BackButton/>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  Maintitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  teamMembers: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 0, // Decrease the padding
    marginTop: 20, // Add a margin
  },
});

export default AboutUsScreen;
