import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchBar from '../Components/SearchBar';
import * as Font from 'expo-font';

const RecipePage = ({ navigation }) => {
  const handleHomeScreen = () => {navigation.navigate('Home');}; //call the Landing page on button press

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Recipal</Text>
                    </View>
                    <SearchBar />


                    <Text style={styles.title}>Recipe Name</Text>
                    <Text style={styles.subttlCointainer}>Ingredients</Text>
                    <Text>Ingredient 1</Text>
                    <Text>Ingredient 2</Text>
                    <Text>Ingredient 3</Text>
                    <Text style={styles.subttlCointainer}>Instructions</Text>
                    <Text>Step 1</Text>
                    <Text>Step 2</Text>
                    <Text>Step 3</Text>
                </View>
            </ScrollView>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 15,
    },
    subttlCointainer: {
        paddingLeft: 15,
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
    },
});

export default RecipePage;