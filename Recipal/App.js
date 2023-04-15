import React from 'react';
import {
  StyleSheet,
  Button,
  TouchableHighlight,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Color from 'color';
import BackgroundImg from './Components/BackgroundImage';

const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.BgImgContainer}>
      <BackgroundImg />
    </View>
    <TouchableHighlight
      style={styles.button}
      underlayColor="rgba(255, 200, 0, 0.5)"
      onPress={() => Alert.alert('Button pressed')}>
      <Text style={styles.buttonText}>Get started</Text>
    </TouchableHighlight>
    <TouchableHighlight 
    style={styles.button}
    underlayColor="rgba(255, 200, 0, 0.5)"
      onPress={() => Alert.alert('Button pressed')}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableHighlight>
    <TouchableHighlight 
    style={styles.button}
    underlayColor="rgba(255, 200, 0, 0.5)"
    onPress={() => Alert.alert('Button pressed')}>
      <Text style={styles.buttonText}>Sign up</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  //safeAreaView Container
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 0,
  },
  //background Image container
  BgImgContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  //button properties
  button: {
    backgroundColor: '#FFC800',
    padding: 7,
    borderRadius: 20,
    marginVertical: 12,
    marginHorizontal: 110,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8 ,
    shadowRadius: 2,
    elevation: 4,
  },
  //button text properties
  buttonText: {
    color: 'black',
    fontWeight: 'regular',
    fontSize: 22,
    textAlign: 'center',
    flexDirection: 'row',
  },
  //resizes button to text (right and left buttons)
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
