import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const AboutUsScreen = ({ navigation }) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    navigation.navigate('Home');
  };

  const handleDecline = () => {
    navigation.navigate('Splash');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.agreementText}>
        About Us

        Welcome to Recipal, an online platform created by a group of passionate foodies
        who believe that everyone should have access to great recipes, no matter where they are in the world.

        Our team consists of three graduate students who share a love of cooking and baking. 
        We started this project with a simple goal in mind: 
        to build a platform where food lovers from all over the world can come together to share and discover new recipes.

        For us, cooking and baking isn't just about creating delicious food. 
        It's about exploring new cultures, experimenting with flavors, 
        and connecting with others over a shared love of great food. 
        We wanted to create a space where people could do just that
         - where they could find inspiration for their next meal, connect with other home cooks, and share their own culinary creations.

        We believe that food has the power to bring people together, 
        and we're committed to building a platform that reflects that belief. 
        That's why we're not just focused on the recipes - we're also building a community. 
        A place where people can share their thoughts, ask for advice, and support each other as they explore new flavors and techniques.

        Our team is dedicated to making Recipal the best possible platform for home cooks and food enthusiasts everywhere. 
        We're constantly working to improve our platform and add new features, so stay tuned for more exciting updates in the future!

        We thank you for being a part of the Recipal community. We can't wait to see what you'll create!
        </Text>
      </ScrollView>

      {!accepted && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.declineButton} onPress={handleDecline}>
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContainer: {
    padding: 20,
  },
  agreementText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  declineButton: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  acceptButton: {
    backgroundColor: '#00FF00',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutUsScreen;
