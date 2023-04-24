import { TouchableHighlight, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../Components/SearchBar';
import CategoriesList from '../Components/recipes/categories-list';
import * as Font from 'expo-font';

const HomeScreen = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const handleRecipePage = () => {navigation.navigate('RecipePage');}; //call the Recipe page on button press

    // const navigation = useNavigation();

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
    // const handleRecipePage = () => {navigation.navigate('RecipePage');}; //call the Recipe page on button press

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
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
                    <Text style={styles.subttlCointainer}>
                        Recommended based on preferences
                    </Text>
                    <TouchableHighlight
                      style={styles.btn}
                      underlayColor="rgba(255, 200, 0, 0.75)"
                      onPress={handleRecipePage}
                    >  
                      <Text style={styles.buttonText}>Recipe Page</Text> 
                    </TouchableHighlight>
                </View>
            </ScrollView>
            <StatusBar style='dark' />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        paddingBottom: 10,
        // backgroundColor: '#FFC800',
        alignItems: 'center',
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
    subttlCointainer: {
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
});

export default HomeScreen;
