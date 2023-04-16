import React from 'react';
import {StyleSheet,Button,TouchableHighlight,View,SafeAreaView,Text,Alert,} from 'react-native';
import Color from 'color';
import BackgroundImg from './Components/BackgroundImage';

const App = () => (
  <SafeAreaView style={styles.container}>

    <View style={styles.BgImgContainer}>
      <BackgroundImg />
    </View>

    <TouchableHighlight //button container, 'TouchableHighlight' allowed me to use the borderRadius style tool
      style={styles.button}
      underlayColor="rgba(255, 200, 0, 0.5)" //Downpress button color and alpha level
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
  //safeAreaView Container style properties (android display modifier, ensures objects aren't shown infront of screen cut-outs, etc...)
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 0,
  },
  //background Image container style properties
  BgImgContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  //button style properties
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
  //button text style properties
  buttonText: {
    color: 'black',
    fontWeight: 'regular',
    fontSize: 22,
    textAlign: 'center',
    flexDirection: 'row',
  },
  //resizes button to text (not using in this code)
  /*
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },*/
});

export default App;
