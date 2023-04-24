import { TouchableHighlight, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

const HomeScreen = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  // Load the custom font
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'DancingScript-Regular': require('../assets/fonts/DancingScript-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null; // Wait for the font to load before rendering the screen
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Recipal</Text>
          </View>
          <View>
            <View style={styles.searchBox}>
              <Text style={styles.searchText}>Search...</Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
              <MaterialCommunityIcons name="menu" size={22} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.btn}>
              <Text style={{ color: 'black' }}>Categories</Text>
            </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.subttlContainer}>Featured</Text>
          <Text style={styles.subttlContainer}>Recommended based on preferences</Text>
          <TouchableHighlight style={styles.btn} underlayColor="rgba(255, 200, 0, 0.75)">
            <Text style={styles.buttonText}>Recipe Page</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
      {menuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <Text style={styles.menuButton}>Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
            <Text style={styles.menuButton}>About Us</Text>
          </TouchableOpacity>
        </View>
      )}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerText: {
    fontFamily: 'DancingScript-Regular',
    fontWeight: '600',
    fontSize: 40,
    color: 'black',
  },
  searchBox: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15,
    borderRadius: 100,
    height: 40,
    width: 330,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  searchText: {
    fontFamily: 'System',
    fontSize: 16,
    color: 'gray',
  },
  subttlContainer: {
    paddingLeft: 15,
    fontSize: 16,
    marginTop: 10,
  },
    btn: {
        marginTop: 7,
        padding: 10,
        left: 213,
        backgroundColor: '#FFC800',
        width: 130,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 16,
        color: 'black',
    },
    menuContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginHorizontal: 15,
      marginBottom: 10,
    },
    menuBtn: {
      backgroundColor: '#FFC800',
      width: 50,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default HomeScreen;
