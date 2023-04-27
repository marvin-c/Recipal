import React, { useState, useEffect } from 'react';
import { useRoute } from "@react-navigation/native";
import { TouchableHighlight, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SearchBar from "../Components/SearchBar";
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import CustomSideMenu from './SideMenu';
import ProfileButton from '../Components/ProfileButton';
import BackButton from '../Components/BackButton';

const SearchScreen = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const route = useRoute()

    const { title, description } = route.params ? route.params : {}

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
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Recipal</Text>
                </View>
                <SearchBar />
                
                <View style={styles.row}>
                    <View style={styles.screen}>
                        <Text>List of Recipes under the category {title}</Text>
                        <Text>{description}</Text>
                    </View>
                    <View style={styles.screens}/>
                </View>
            </View>
        </ScrollView>
        <ProfileButton />
        <BackButton />
        <View style={styles.sideMenuContainer}>
            <CustomSideMenu />
        </View>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    sideMenuContainer:{
        flex: 1,
            bottom: '79.3%'
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
    screen: {
        padding: 20,
        height: 269,
        width: 211,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginStart: 20,
        backgroundColor: '#FFC800',
    },
    screens: {
        padding: 20,
        height: 125,
        width: 99,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginStart: 20,
        backgroundColor: '#FFC800',
    },
    container: {
        backgroundColor: 'white',
        height: 1600,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

export default SearchScreen;
