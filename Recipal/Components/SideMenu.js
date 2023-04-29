import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useState, useContext } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from '../Components/ThemeContext';
import ThemedText from '../Components/ThemedText';
 
const CustomSideMenu = () => {
  const navigation = useNavigation()
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                <View style={styles.buttonP}>
                <TouchableOpacity onPress={()=> setShowMenu(!showMenu)}>
                    <Icon name='menu-sharp' size={20} />
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.overlayContainer}>
              {showMenu && (
                <SafeAreaView style={styles.overlaySafeAreaView}>
                  <View style={styles.overlay}>
                    <TouchableOpacity style={styles.menuItem} onPress={toggleTheme}>
                      <Text style={styles.menuItemText}>Toggle Theme</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
                      <Text style={styles.menuItemText}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Categories')}>
                      <Text style={styles.menuItemText}>Categories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Menu item 3 pressed')}>
                      <Text style={styles.menuItemText}>Your Recipes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Menu item 3 pressed')}>
                      <Text style={styles.menuItemText}>Favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('UserAgreement')}>
                      <Text style={styles.menuItemText}>User Agreement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AboutUs')}>
                      <Text style={styles.menuItemText}>About Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logOutButton} onPress={() => console.log('Menu item 3 pressed')}>
                      <Text style={styles.menuItemText}>Log out</Text>
                    </TouchableOpacity>
                  </View>
                </SafeAreaView>
              )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 10,
    },
    container: {
        flex: 1,
    },
    buttonP:{
        alignSelf: 'flex-end',
        borderTopStartRadius: 25,
        borderBottomLeftRadius: 25,
        bottom: 60,
        height: 40,
        width: 43,
        backgroundColor: '#FFC800',
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlayContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 160,
      right: 0,
      zIndex: 1,
    },
    overlaySafeAreaView: {
      flex: 1,
      justifyContent: 'space-between',
    },
    overlay: {
      alignSelf: 'flex-end',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#323232',
      justifyContent: 'center',
      paddingHorizontal: 15,
      paddingVertical: 20,
      width: 200,
      height: 800,
      zIndex: 1
    },
    menuItem: {
      borderRadius: 20,
      padding: 15,
      height: 50,
      width: 175,
      bottom: 60,
      borderBottomColor: '#FFC800',
      backgroundColor: '#FFC800',
      marginVertical: 5,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logOutButton: {
      borderRadius: 20,
      padding: 15,
      height: 50,
      width: 175,
      bottom: 20,
      borderBottomColor: '#FFC800',
      backgroundColor: '#FFC800',
      marginVertical: 5,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuItemText: {
      fontSize: 16,
      flexWrap: 'wrap',
      color: 'black'
    },
})

export default CustomSideMenu;
