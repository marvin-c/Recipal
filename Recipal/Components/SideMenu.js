import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from '../Components/ThemeContext';
import ThemedText from '../Components/ThemedText';
import { Feather } from 'react-native-vector-icons';

const CustomSideMenu = ({ onClose }) => {
  const navigation = useNavigation()
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Feather name="x" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.menuItemText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Categories')}>
          <Text style={styles.menuItemText}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('StepByStep')}>
          <Text style={styles.menuItemText}>Your Recipes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Menu item "favourites" pressed')}>
          <Text style={styles.menuItemText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('UserAgreement')}>
          <Text style={styles.menuItemText}>User Agreement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AboutUs')}>
          <Text style={styles.menuItemText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={toggleTheme}>
          <Text style={styles.menuItemText}>Toggle Theme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logOutButton} onPress={() => navigation.navigate('Splash')}>
          <Text style={styles.menuItemText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: '50%',
    bottom: 0,
    right: 0,
    width: '50%',
    flexDirection: 'row',
    backgroundColor: 'rgba(20, 20, 20, 0.95)', //background color for the backdrop
     borderTopStartRadius: 25,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    width: '100%',
    marginVertical: '10%',
  },
  closeButton: {
    paddingVertical: 10,
    marginBottom: 10,
  },
  menuItem: {
    borderRadius: 20,
    height: 50,
    width: 175,
    backgroundColor: '#FFC800',
    marginVertical: 5,
    marginHorizontal: 15,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOutButton: {
    borderRadius: 20,
    height: 50,
    width: 175,
    backgroundColor: '#FFC800',
    marginTop: '80%',
    marginHorizontal: 15,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    flexWrap: 'wrap',
    color: 'black',
  },
});

export default CustomSideMenu;