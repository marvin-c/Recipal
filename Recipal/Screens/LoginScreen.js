import React, { useState, useEffect } from 'react';
import { ImageBackground, TouchableOpacity,StyleSheet, SafeAreaView, ScrollView, Dimensions, View, Text, TextInput, TouchableHighlight,Alert,KeyboardAvoidingView,} from 'react-native';
import * as Font from 'expo-font';  //font 

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fontLoaded, setFontLoaded] = useState(false);
  const handleSignUpPress = () => {navigation.navigate('Signup');}; //call the SignupScreen on button press
  const handleLogoPress = () => {navigation.navigate('Splash');};//send user back to the splash screen

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
      <SafeAreaView style={styles.container}>
        
        <ImageBackground
            source={require('../assets/LoginScreen.png')} //background image file path 
            resizeMode= 'cover'  
            style={styles.BgImgContainer}>

              <View style={styles.textContainer}>

                {fontLoaded ? ( //Recipal main logo
                <TouchableOpacity onPress= {handleLogoPress} activeOpacity={1}>
                  <Text style={[styles.text, { fontFamily: 'Satisfy-Regular' }]}> 
                    Recipal
                  </Text>
                </TouchableOpacity>
                ) : null}
                
              </View>

              <View style={styles.container}>

                <Text style={[styles.text2, { fontFamily: 'Satisfy-Regular' }]}>
                  Login 
                </Text> 

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

            <View style={styles.SupContainer}>

                <Text style={[styles.text3, { fontFamily: 'Satisfy-Regular' }]}>
                  Don't have an account?
                </Text>

                <TouchableOpacity onPress= {handleSignUpPress}
                >
                  <Text style={[styles.text4, { fontFamily: 'Satisfy-Regular' }]}>
                    Sign up here
                  </Text>
                </TouchableOpacity>

            </View>

          </ImageBackground>

      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    paddingHorizontal: 20,
  },
  //background Image container style properties
  BgImgContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  //button style properties
  button: {
    backgroundColor: '#FFC800',
    padding: 7,
    borderRadius: 20,
    marginVertical: 0,
    marginHorizontal: 100,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8 ,
    shadowRadius: 2,
    elevation: 4,
    left:'30%',
    top: '0%',
  },
  //button text style properties
  buttonText: {
    color: 'black',
    fontWeight: 'regular',
    fontSize: 16,
    textAlign: 'center',
    flexDirection: 'row',
  },
  text: { //Main logo text style properties
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 60,
    top: '25%'
  },
  text2: { //Login text style properties
    left: 0,
    top: '0%',
    fontSize: 40,
  },
  SupContainer: {  //Login prompt container style properties
    justifyContent: 'center',
    width: '100%',
    top: '0%',
  },
  text3: { //'Already have an account?' text style properties
    left: '13%',
    top: '0%',
    fontSize: 18,
  },
  text4: { //'Login here' text style properties
    left: '57%',
    top: '-100%',
    fontSize: 18,
    color: '#FFC800',
    textShadowColor: '#b37700',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    //textDecorationLine: 'underline',
  },
});

export default LoginScreen;