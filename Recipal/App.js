import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import BackgroundImg from './Components/BackgroundImage';

export default function App() {
  return (
    <View style={styles.container}>
      <BackgroundImg />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Recipal
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

/*
wexport default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { textAlign: 'center', textAnchor: 'middle' }]}>
      Begin your culinary journey!
      </Text>
      <BackgroundImg/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    zIndex: 1, // check parent container zIndex 
    
  },
  text: {
    textAlignVertical: 'center', // center text vertically
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',

  },
});
//export default App;*/