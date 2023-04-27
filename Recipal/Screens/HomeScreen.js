import { TouchableHighlight, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../Components/SearchBar';
import * as Font from 'expo-font';
import CustomSideMenu from './SideMenu';
import ProfileButton from './ProfileButton';
import AddRecipe from './AddRecipe';

const HomeScreen = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [recipes, setRecipes] = useState([]);
  
  // Load the custom font and fetch the recipes data from the API
  useEffect(() => {
    async function fetchData() {
      await Font.loadAsync({
        'DancingScript-Regular': require('../assets/fonts/DancingScript-Regular.ttf'),
      });
      setFontLoaded(true);

      const response = await fetch('http://192.9.174.169/api/rcpl_app/');
      const data = await response.json();
      setRecipes(data);
    }
    fetchData();
  }, []);

  const handleRecipePage = () => {navigation.navigate('RecipePage');}; //call the Recipe page on button press

  if (!fontLoaded) {
    return null; // Wait for the font to load before rendering the screen
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.overContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Recipal</Text>
          </View>
          <SearchBar />
          
          <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.btn}>
            <Text style={{color: 'black'}}>Categories</Text> 
          </TouchableOpacity>
          <Text style={styles.subttlCointainer}>
            Featured
          </Text>
            <TouchableOpacity  onPress={handleRecipePage}>
              <Image 
                  source={require('../assets/homefish.png')} 
                  style={{  width: 320, height: 162, borderRadius: 10, marginStart: 20 }}
              />
            </TouchableOpacity>
          {recipes.map((recipe) => (
            <View key={recipe.id}>
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
              <Text style={styles.recipeDesc}>{recipe.description}</Text>
            </View>
          ))}
          <Text style={styles.subttlCointainer}>
            Recommended based on preferences
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5, marginBottom: 20}}>
            <TouchableOpacity  onPress={handleRecipePage}>
              <Image 
                  source={require('../assets/cupcake.png')} 
                  style={{  padding: 20, height: 125, width: 99, justifyContent: 'center', borderRadius: 10,  }}
              />
            </TouchableOpacity>
            <TouchableOpacity  onPress={handleRecipePage}>
              <Image 
                  source={require('../assets/bread3.png')} 
                  style={{   height: 125,  justifyContent: 'center', borderRadius: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity  onPress={handleRecipePage}>
              <Image 
                  source={require('../assets/image3.png')} 
                  style={{   height: 125,  justifyContent: 'center', borderRadius: 10 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, marginBottom: 20}}>
            <TouchableOpacity  onPress={handleRecipePage}>
              <Image 
                  source={require('../assets/image4.png')} 
                  style={{   height: 125,  justifyContent: 'center', borderRadius: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity  onPress={handleRecipePage}>
              <Image 
                  source={require('../assets/image5.png')} 
                  style={{   height: 125,  justifyContent: 'center', borderRadius: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRecipePage}>
              <Image 
                  source={require('../assets/image6.png')} 
                  style={{   height: 125,  justifyContent: 'center', borderRadius: 10 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, marginBottom: 20}}>
            <TouchableOpacity  onPress={handleRecipePage}>
              <Image 
                  source={require('../assets/recipe2.png')} 
                  style={{   height: 125,  justifyContent: 'center', borderRadius: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity  onPress={handleRecipePage}>
              <Image 
                  source={require('../assets/recipe7.png')} 
                  style={{   height: 125,  justifyContent: 'center', borderRadius: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity  onPress={handleRecipePage}>
              <Image 
                  source={require('../assets/recipe6.png')} 
                  style={{   height: 125,  justifyContent: 'center', borderRadius: 10 }}
              />
            </TouchableOpacity> 
          </View>
        </View>
      </ScrollView>
      <ProfileButton />  
      <AddRecipe />
      <View style={styles.sideMenuContainer}>
          <CustomSideMenu />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sideMenuContainer:{
      flex: 1,
      bottom: '79.5%'
      },
    overContainer: {
      flex: 1,
      backgroundColor: 'white'
    },
    header: {
        paddingTop: 50,
        paddingBottom: 10,
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'DancingScript-Regular',
        fontWeight: '600',
        fontSize: 40,
        color: 'black',
    },
    searchText: {
        fontFamily: 'System',
        fontSize: 16,
        color: 'gray',
    },
    subttlCointainer: {
        paddingLeft: 15,
        fontSize: 16,
        marginTop: 10,
        marginBottom: 15,
    },
    btn: {
        marginTop: 15,
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
});

export default HomeScreen;
