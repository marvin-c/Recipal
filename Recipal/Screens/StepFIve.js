import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import SearchBar from '../Components/SearchBar';
import * as Font from 'expo-font';
import CustomSideMenu from '../Components/SideMenu';
import SideMenuButton from '../Components/SideMenuButton';
import NextStepButton from '../Components/StepByStepButton';
import BackButton from '../Components/BackButton';

const StepFive= ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.overContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Red Snapper with Tamarind Sauce</Text>
                    </View>

                    <View>
                    <Image 
                        source={require('../assets/fish6.jpeg')} 
                        style={{  width: 320, height: 200, borderRadius: 10, marginStart: 20, marginTop: 30}}
                    />
                    </View>
                        <Text style={styles.subttlContainer}>Instructions</Text>
                        <Text style={styles.stepContainer}>Step 6</Text>
                        <Text style={styles.insContainer}>Drain the wok leaving enough oil to for sautéing. 
                        Add the spice paste together with the shallots and ginger, sauté until very fragrant.</Text>
                </View>
            </ScrollView>
            <SideMenuButton />
            <BackButton />
            <NextStepButton />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
    overContainer: {
        flex: 1,
        height: 800
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 15,
    },
    subttlContainer: {
        paddingLeft: 15,
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
    },
    stepContainer: {
        paddingLeft: 15,
        fontSize: 16,
        marginTop: 10,
    },
    insContainer: {
        paddingLeft: 15,
        fontSize: 16,
        marginTop: 10,
    },
});

export default StepFive;
