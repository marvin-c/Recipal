import React, { useState, useEffect } from "react";
import {View, Alert, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, ScrollView} from 'react-native';
import { FontAwesome, Feather } from 'react-native-vector-icons';
import BackButton from "../Components/BackButton";
import SaveButton from "../Components/SaveButton";

const ProfileEdit = ({navigation}) => {

    const profilePicUpload = () => { //Profile Picture file search and uploader
   Alert.alert('Profile pic upload')
    };
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    

return (
    <View style={styles.container}>

        <ScrollView style={styles.scrollContainer}>

            <View style={styles.profilePic}>
                <Image
                source={require('../assets/profile.png')} //User Profile Picture. Will need to be a prop or variable - Same for username below
                style={{ width: 100, height: 100, borderRadius: 50 }}/>

                <View style={styles.uploadButtonContainer}>
                    <TouchableHighlight style={styles.ProPicUpload}
                        underlayColor="rgba(255, 200, 0, 0.75)" //Downpress button
                        onPress={profilePicUpload}>
                        <FontAwesome name="pencil" size={36} color="black"/> 
                    </TouchableHighlight>
                </View>
            </View>

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
                </View>
            </View>

            <View style={styles.headerContainer}>
                <Text style={styles.header}>
                Food allergies <Text style={styles.text}>Exclude these ingredients</Text>
                </Text>
                <View style={styles.allergyContainer}>
                </View>
            </View>

        </ScrollView>
        
        <BackButton/>

        <SaveButton/>


    </View>
);
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
    },
    scrollContainer: {
        paddingHorizontal: 20, 
        paddingVertical: 30,
    },
    profilePic:{
        alignSelf: 'center',
    },
    uploadButtonContainer:{
        backgroundColor: '#FFC800',
        borderRadius: 10,
        width: 40,
        height: 35,
        bottom: 100,
        left: 75,
    },
    ProPicUpload:{
        alignSelf: 'center',
    },
    //user details and edit profile main contents
    header: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 18,
    },
    text: {
        textAlign: 'right',
        fontWeight: 'normal',
        fontSize: 12,
    },
     //input box styles
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 50,
        marginHorizontal: 0,
        marginVertical: 2,
        paddingLeft: 10,
      },
      inputIcon: {
        padding: 0,
        color: '#FFC800',
      },
      input: {
        height: 50,
        flex: 1,
        fontSize: 18,
        paddingLeft: 10,
      },
      dietContainer: {
        borderWidth: 1,
        borderColor: '#FFC800',
        borderRadius: 10,
        height: 100,
        backgroundColor: '#FFFFFF',
      },
      allergyContainer: {
        borderWidth: 1,
        borderColor: '#FFC800',
        borderRadius: 10,
        height: 200,
        backgroundColor: '#FFFFFF',
      },
})


export default ProfileEdit;