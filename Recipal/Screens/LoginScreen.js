import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableHighlight,Alert,} from 'react-native';
import LoginBackgroundImg from '../Components/LoginBackground';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <View style={styles.BgImgContainer}>
        <LoginBackgroundImg />
      </View>
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
    </SafeAreaView>
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
    top: 65,
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
    top: 65,
  },
  //button text style properties
  buttonText: {
    color: 'black',
    fontWeight: 'regular',
    fontSize: 18,
    textAlign: 'center',
    flexDirection: 'row',
  },
});

export default LoginScreen;
