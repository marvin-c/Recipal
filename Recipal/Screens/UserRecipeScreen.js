import React, { useState, useEffect, useContext } from 'react';
import {View, Alert, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, ScrollView} from 'react-native';
import { FontAwesome, Feather } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import SideMenuButton from "../Components/SideMenuButton";
import BackButton from "../Components/BackButton";
import SaveButton from "../Components/SaveButton"; 
import { ThemeContext } from '../Components/ThemeContext';
import ThemedText from '../Components/ThemedText';

const UserRecipe = ({navigation}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>

        <ScrollView style={styles.scrollContainer}>

            <View style={styles.headerContainer}>
                <Text style={styles.header}>
                User Details
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome name="user" size={24} color="black" style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={username}
                    onChangeText={(value) => setUsername(value)}/>
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome name="vcard" size={24} color="black" style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={email}
                    onChangeText={(value) => setEmail(value)}/>
            </View>
            
            <View style={styles.inputContainer}>
                <FontAwesome name="envelope" size={24} color="black" style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                secureTextEntry/>
            </View>  
            
            <View style={styles.inputContainer}>
                <FontAwesome name="lock" size={24} color="black" style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={confirmPassword}
                    onChangeText={(value) => setConfirmPassword(value)}
                    secureTextEntry/>
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome name="flag" size={24} color="black" style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Country"
                    value={confirmPassword}
                    onChangeText={(value) => setConfirmPassword(value)}
                    secureTextEntry/>
            </View>

            <View style={styles.headerContainer}>
                <Text style={styles.header}>
                Dietary Requirements
                </Text>
                <View style={styles.dietContainer}>
                <View style={styles.iconWrapper}>
                <ToggleIcon
                    iconSource={require('../assets/keto.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Keto'/>
                    <ToggleIcon
                    iconSource={require('../assets/foodMap.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='FoodMap'/>
                    <ToggleIcon
                    iconSource={require('../assets/halal.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Halal'/>
                    <ToggleIcon
                    iconSource={require('../assets/vegan.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Vegan'/>
                    <ToggleIcon
                    iconSource={require('../assets/paleo.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label="Paleo"/>
                </View>
                </View>
            </View>

            <View style={styles.headerContainer}>   
                <Text style={styles.header}>
                Food allergies <Text style={styles.text}>Exclude these ingredients</Text>
                </Text>
                <View style={styles.allergyContainer}>
                <View style={styles.iconWrapper}>
                <ToggleIcon
                    iconSource={require('../assets/gluten.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Gluten'/>
                    <ToggleIcon
                    iconSource={require('../assets/eggs.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Eggs'/>
                    <ToggleIcon
                    iconSource={require('../assets/treeNuts.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='TreeNuts'/>
                    <ToggleIcon
                    iconSource={require('../assets/fish.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Fish'/>
                    <ToggleIcon
                    iconSource={require('../assets/lupin.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Lupin'/>
                    <ToggleIcon
                    iconSource={require('../assets/celery.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Celery'/>
                    <ToggleIcon
                    iconSource={require('../assets/crustaceans.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Crustaceans'/>
                    <ToggleIcon
                    iconSource={require('../assets/mustard.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Mustard'/>
                    <ToggleIcon
                    iconSource={require('../assets/peanut.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Peanuts'/>
                    <ToggleIcon
                    iconSource={require('../assets/sesame.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Sesame'/>
                    <ToggleIcon
                    iconSource={require('../assets/dairy.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Dairy'/>
                    <ToggleIcon
                    iconSource={require('../assets/molluscs.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Molluscs'/>
                    <ToggleIcon
                    iconSource={require('../assets/sodium.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Sodium'/>
                    <ToggleIcon
                    iconSource={require('../assets/soy.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Soy'/>
                    <ToggleIcon
                    iconSource={require('../assets/sulphurdioxide.png')}
                    tickSource={require('../assets/tick.png')}
                    style={styles.icon}
                    label='Preservatives'/>
                </View>
                </View>
            </View>

        </ScrollView>
        
        <BackButton/>
        <SaveButton/>

    </View>
    );
}

const styles = StyleSheet.create({
    buttonP:{
        marginTop: 200,
        marginStart: 100,
        height: 50,
        width: 60,
        backgroundColor: '#FFC800',
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default UserRecipe;