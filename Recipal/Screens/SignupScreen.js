import React, { useState, useEffect } from 'react';
import { ImageBackground, Button, TouchableOpacity,StyleSheet, SafeAreaView, ScrollView, Dimensions, View, Text, TextInput, TouchableHighlight,Alert,KeyboardAvoidingView,} from 'react-native';
import * as Font from 'expo-font';  //font 
import { FontAwesome, Feather } from 'react-native-vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const SignUpScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [fontLoaded, setFontLoaded] = useState(false);
    const handleLoginPress = () => {navigation.navigate('Login');}; //call the loginScreen on button press
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

  const handleSignUp = () => {
    // Check if the passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Your sign up logic goes here

    // Clear input fields and error message
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground

        source={require('../assets/SignUp.png')} //background image file path 
        resizeMode= 'cover'  
        style={styles.BgImgContainer}>

        <View style={styles.textContainer}>
          {fontLoaded ? ( //Recipal main logo, Touchable opacity allows for button behaviour, activeOpacity changes the transparency when clicked
            <TouchableOpacity onPress= {handleLogoPress} activeOpacity={1}> 
              <Text style={[styles.text, { fontFamily: 'Satisfy-Regular' }]}> 
                Recipal
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={styles.container}>
          <Text style={[styles.text2, { fontFamily: 'Satisfy-Regular' }]}>
              Sign up 
          </Text> 
          {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
          
          <View style={styles.inputContainer}>
          <FontAwesome name="user" size={24} color="black" style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder="UserName"
            value={username}
            onChangeText={(value) => setUsername(value)}/>
          </View>

          <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={24} color="black" style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}/>
          </View>
          
          <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="black" style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry/>
          </View>  
          
          <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="black" style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(value) => setConfirmPassword(value)}
            secureTextEntry/>
          </View>
          
          <TouchableHighlight style={styles.button} 
            underlayColor="rgba(255, 200, 0, 0.75)" //Downpress button color and alpha level
            onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.SupContainer}>
          <Text style={[styles.text3, { fontFamily: 'Satisfy-Regular' }]}>
            Already have an account?
          </Text>

          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={[styles.text4, { fontFamily: 'Satisfy-Regular' }]}>
              Login here
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 50,
    marginHorizontal: 0,
    marginVertical: 5,
    paddingLeft: 10,
  },
  inputIcon: {
    padding: 0,
    color: '#FFC800',
  },
  input: {
    height: 50,
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
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
    top: '20%'
  },
  text2: { //signup text style properties
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
    left: '62%',
    top: '-100%',
    fontSize: 18,
    color: '#FFC800',
    textShadowColor: '#b37700',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    //textDecorationLine: 'underline',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUpScreen;
