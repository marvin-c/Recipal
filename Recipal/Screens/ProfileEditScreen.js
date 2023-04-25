import React, { useState, useEffect } from "react";
import {View, Alert, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, SafeAreaView, ScrollView} from 'react-native';
import { FontAwesome, Feather } from 'react-native-vector-icons';


const ProfileEdit = ({navigation}) => {
    const handleBackPress = () => { //home button navigation handling
    navigation.navigate('Profile')
    };
    const handleProSave = () => { //Profile Editor button navigation handling
    navigation.navigate('ProfileSave')
    };
    const profilePicUpload = () => { //Profile Picture file search and uploader
   Alert.alert('Profile pic upload')
    };

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
                        <FontAwesome name="pencil" size={36} color="black" style={styles.inputIcon}/> 
                    </TouchableHighlight>
                </View>
                
            </View>



        </ScrollView>

        <View style={styles.navigationContainer}>
      <TouchableHighlight style={styles.backButton} //Home navigation button
          underlayColor="rgba(255, 200, 0, 0.75)" //Downpress button
          onPress={handleBackPress}>
          <FontAwesome name="arrow-circle-o-left" size={36} color="black" style={styles.inputIcon}/>
      </TouchableHighlight>

      <TouchableHighlight style={styles.saveButton} // User profile preference settings etc
        underlayColor="rgba(255, 200, 0, 0.75)" //Downpress button
        onPress={handleProSave}>
        <FontAwesome name="save" size={36} color="black" style={styles.inputIcon}/>
      </TouchableHighlight>
    </View>

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

    },
    uploadButtonContainer:{
        backgroundColor: '#FFC800',
        borderRadius: 10,
        width: 40,
        height: 35,
        },
    ProPicUpload:{
        alignSelf: 'center',
    },
    navigationContainer: {
        flexDirection: 'row', // added this line
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
  },
    saveButton: {
        backgroundColor: '#FFC800',
        padding: 7,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 0,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8 ,
        shadowRadius: 2,
        elevation: 4,
  },
    backButton: {
        backgroundColor: '#FFC800',
        padding: 7,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 0,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8 ,
        shadowRadius: 2,
        elevation: 4,
  },
  //button text style properties
  buttonText: {
    color: 'black',
    fontWeight: 'regular',
    fontSize: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },

})


export default ProfileEdit;