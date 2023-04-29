import React, { useState, useEffect, useContext } from 'react';
import {View, Alert, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, ScrollView} from 'react-native';
import { FontAwesome, Feather } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import SideMenuButton from "../Components/SideMenuButton";
import BackButton from "../Components/BackButton";
import SaveButton from "../Components/SaveButton"; 
import { ThemeContext } from '../Components/ThemeContext';
import ThemedText from '../Components/ThemedText';
import ThemedTextBox from '../Components/ThemedTextBox';

const UserRecipe = ({navigation}) => {
  const recipePicUpload = () => { //Recipe Picture file search and uploader
        Alert.alert('Recipe pic upload')
  };
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [recipeTitle, setRecipe] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [method, setMethod] = useState('');

    return (
        <View style={styles.container}>
        <View style={{ backgroundColor: theme.colors.background }}>

        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <View style={styles.headerContainer}>
                <ThemedText style={styles.header}>
                Add your own recipe
                </ThemedText>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Recipe Title"
                    value={recipeTitle}
                    onChangeText={(value) => setRecipe(value)}/>
            </View>

            <View style={styles.imagesContainer}>
                <Text style={styles.imageInput}>Upload images of your creation</Text>

                    <View style={styles.uploadButtonContainer}>
                        <TouchableHighlight style={styles.ProPicUpload}
                            underlayColor="rgba(255, 200, 0, 0.75)" //Downpress button
                            onPress={recipePicUpload}>
                            <FontAwesome name="camera" size={28} color="black"/> 
                        </TouchableHighlight>
                    </View>
            </View>
            
            <View style={styles.descriptionContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={description}
                    onChangeText={(value) => setDescription(value)}
                />
            </View>  
            
            <View style={styles.categoryContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Category"
                    value={category}
                    onChangeText={(value) => setCategory(value)}
                    />
            </View>

            <View style={styles.ingredientsContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingredients"
                    value={ingredients}
                    onChangeText={(value) => setIngredients(value)}
                    />
            </View>

            <View style={styles.methodContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Method"
                    value={method}
                    onChangeText={(value) => setMethod(value)}
                    />
            </View>

        </ScrollView>
        
        <BackButton/>
        <SaveButton/>
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
        paddingVertical: 50,
        paddingBottom: 100, // add padding to the bottom
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
    //recipe images style section
    imagesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 250,
        marginHorizontal: 0,
        marginVertical: 2,
        paddingLeft: 10,
    },
    imageInput: {
        height: 50,
        flex: 1,
        fontWeight: 300,
        fontSize: 18,
        left: '15%',
    },
    uploadButtonContainer:{
        backgroundColor: '#FFC800',
        borderRadius: 10,
        width: 40,
        height: 35,
        alignSelf: 'flex-start',
        marginHorizontal: 5,
        marginVertical: 5,
    },
    ProPicUpload:{
        alignSelf: 'center',
        marginTop: 3.5,
    },
    // description and recipe body style section
    descriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 100,
        marginHorizontal: 0,
        marginVertical: 2,
        paddingLeft: 10,
    },
    categoryContainer: {
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
    ingredientsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 250,
        marginHorizontal: 0,
        marginVertical: 2,
        paddingLeft: 10,
    },
    methodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 250,
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
        alignSelf: 'flex-start',
        fontSize: 18,
        paddingLeft: 10,
      },
})

export default UserRecipe;