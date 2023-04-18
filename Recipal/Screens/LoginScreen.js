import React, { useState, useEffect } from 'react';
import { ImageBackground, TouchableOpacity,StyleSheet, SafeAreaView, View, Text, TextInput, TouchableHighlight,Alert,KeyboardAvoidingView,} from 'react-native';
import * as Font from 'expo-font';  //font 

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fontLoaded, setFontLoaded] = useState(false);
  
    // Load custom font asynchronouslyc
    useEffect(() => {
      async function loadFont() {//"Try/Catch function to load font before rendering"
        await Font.loadAsync({ 
          'Satisfy-Regular': require('../assets/fonts/Satisfy-Regular.ttf'), //Font name and path
        });
        setFontLoaded(true);
      }
      loadFont();
    }, []);

  const handleLogin = () => {
    // Here you can implement your login logic, e.g. make an API call
    // to your backend with the entered email and password, and handle
    // the response appropriately
    if (email === 'user@example.com' && password === 'password') {
      // Successful login, navigate to home screen
      navigation.navigate('Home');
    } else {
      // Failed login, show an error message
      Alert.alert('Invalid credentials', 'Please try again');
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <SafeAreaView style={styles.container}>
          <ImageBackground
            source={require('../assets/LoginScreen.png')} //background image file path 
            resizeMode="stretch"  
            style={styles.img}>

            <View style={styles.textContainer}>

              {fontLoaded ? (
                <Text style={[styles.text, { fontFamily: 'Satisfy-Regular' }]}>
                  Recipal
                </Text>
              ) : null}

              <Text style={[styles.text2, { fontFamily: 'Satisfy-Regular' }]}>
                Login
              </Text>

              <Text style={[styles.text3, { fontFamily: 'Satisfy-Regular' }]}>
                Don't have an account?
              </Text>

              <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
                <Text style={[styles.text4, { fontFamily: 'Satisfy-Regular' }]}>
                  Sign up here
                </Text>
              </TouchableOpacity>

              <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry
            />

            <TouchableHighlight style={styles.button} 
              underlayColor="rgba(255, 200, 0, 0.75)" //Downpress button color and alpha level
              onPress={handleLogin}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableHighlight>

            </View>
            
          </ImageBackground>
          </SafeAreaView>
    </KeyboardAvoidingView>
    
  );
};

const styles = StyleSheet.create({
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
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: '10%',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    top: '18%',
  },
  //button style properties
  button: {
    backgroundColor: '#FFC800',
    padding: 7,
    borderRadius: 20,
    marginVertical: 0,
    marginHorizontal: 110,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8 ,
    shadowRadius: 2,
    elevation: 4,
    left:'20%',
    top: '18%',
  },
  //button text style properties
  buttonText: {
    color: 'black',
    fontWeight: 'regular',
    fontSize: 18,
    textAlign: 'center',
    flexDirection: 'row',
  },
  img: {  //background image style properties
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { //Main logo text style properties
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 60,
    top: '5%'
  },
  text2: { //Login text style properties
    left: 40,
    top: '25%',
    fontSize: 40,
  },
  text3: { //'Don't have an account?' text style properties
    left: 30,
    top: '67.5%',
    fontSize: 18,
  },
  text4: { //'Sign up here' text style properties
    left: 220,
    top: '1595%',
    fontSize: 18,
    color: '#FFC800',
    textShadowColor: '#b37700',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    //textDecorationLine: 'underline',
  },
  textContainer: {  //text container style properties
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    top: '-25%',
  },
});

export default LoginScreen;

