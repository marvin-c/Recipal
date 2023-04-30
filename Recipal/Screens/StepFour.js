import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import SearchBar from '../Components/SearchBar';
import * as Font from 'expo-font';
import CustomSideMenu from '../Components/SideMenu';
import SideMenuButton from '../Components/SideMenuButton';
import NextStepButton from '../Components/StepByStepButton';
import BackButton from '../Components/BackButton';

const StepFour = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.overContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Red Snapper with Tamarind Sauce</Text>
                    </View>

                    <View>
                    <Image 
                        source={require('../assets/fish5.jpeg')} 
                        style={{  width: 320, height: 200, borderRadius: 10, marginStart: 20, marginTop: 30}}
                    />
                    </View>
                        <Text style={styles.subttlContainer}>Instructions</Text>
                        <Text style={styles.stepContainer}>Step 5</Text>
                        <Text style={styles.insContainer}>Soak tamarind pulp in 1 cup boiling water and once it turns 
                        soft remove the seeds if there are any. Set this aside.</Text>
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

export default StepFour;
