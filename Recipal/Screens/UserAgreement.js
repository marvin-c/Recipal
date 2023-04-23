import React, { useState, useEffect } from 'react';
import { ImageBackground, Button, TouchableOpacity,StyleSheet, SafeAreaView, ScrollView, Dimensions, View, Text, TextInput, TouchableHighlight,Alert,KeyboardAvoidingView,} from 'react-native';
import * as Font from 'expo-font';  //font 
import { FontAwesome, Feather } from 'react-native-vector-icons';


    const UserAgreement = ({ navigation }) => {
    const [accepted, setAccepted] = useState(false);
    const handleAccept = () => {
        // Set the accepted state to true and navigate to the Home screen
        setAccepted(true);
        navigation.navigate('Home');
    };

    const handleDecline = () => {
        // Navigate to the Splash screen
        navigation.navigate('Splash');
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/useragreeBkgrnd.png')} // Background image path
                resizeMode="cover"
                style={styles.background}>
                
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.Maintitle}>Terms & Conditions</Text>
                <Text>
                <Text style={styles.title}>Privacy Policy:</Text>{"\n\n"}
                <Text>We at Recipal are committed to protecting your privacy and providing a safe and secure environment for your use of our cooking and baking application.</Text>{"\n\n"}
                <Text style={styles.subTitle}>What information do we collect?</Text>{"\n"}
                <Text>We collect information that you voluntarily provide to us, such as your name, email address, and other information necessary for your use of our application. </Text>{"\n\n"}
                <Text style={styles.subTitle}>How do we use your information?</Text>{"\n"}
                <Text>We use your information to provide you with a personalized experience in our application and to improve the functionality and features of our application. </Text>{"\n\n"}
                <Text style={styles.subTitle}>Do we share your information?</Text>{"\n"}
                <Text>We will not share your personal information with any third party unless required by law. </Text>{"\n\n"}
                <Text style={styles.subTitle}>How do we protect your information?</Text>{"\n"}
                <Text>We take the security of your information seriously and take appropriate measures to protect it. </Text>{"\n\n"}
                <Text style={styles.title}>User Agreement:</Text>{"\n\n"}
                <Text>You must be at least 18 years of age or have the permission of a parent or guardian to use this application. </Text>{"\n\n"}
                <Text>You are solely responsible for the content that you upload to Recipal. You agree not to upload any content that is illegal, offensive, or in violation of any third party's rights. </Text>{"\n\n"}
                <Text>You agree to use Recipal for lawful purposes only and to not engage in any activities that may harm or disrupt the application or its users. </Text>{"\n\n"}
                <Text>You agree to not reproduce, distribute, or modify any of the content or materials in Recipal without our prior written permission. </Text>{"\n\n"}
                <Text>You acknowledge that any information you provide to us will be stored in accordance with our privacy policy and may be used to provide you with a personalized experience in our application. </Text>{"\n\n"}
                <Text>You acknowledge that we may make changes to the application at any time, and that any such changes will be subject to these terms and conditions. </Text>{"\n\n"}
                <Text>You agree to indemnify and hold us harmless from any claims, damages, or other liabilities arising from your use of the application. </Text>{"\n\n"}
                <Text>These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which we are located, without giving effect to any principles of conflicts of law. </Text>{"\n\n"}
                <Text>By using Recipal, you agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, do not use the application. </Text>{"\n\n"}
                <Text style={styles.title}>Community Guidelines:</Text>{"\n\n"}
                <Text>Be respectful and kind to other users. Treat others as you would like to be treated. </Text>{"\n\n"}
                <Text>Do not use hate speech, derogatory language, or make personal attacks. </Text>{"\n\n"}
                <Text>Do not post spam, advertisements, or irrelevant content.</Text>{"\n\n"}
                <Text>Stay on topic and contribute to the conversation in a meaningful way.</Text>{"\n\n"}
                <Text>Do not engage in illegal activities, promote violence or threaten others.</Text>{"\n\n"}
                <Text style={styles.title}>Community Guidelines for Recipe Submissions:</Text>{"\n\n"}
                <Text>All recipes must be original, or if they are not, proper credit must be given to the original source.</Text>{"\n\n"}
                <Text>Recipes must be complete and accurate, with clear instructions and ingredients.</Text>{"\n\n"}
                <Text>Do not plagiarize or copy content from other sources without permission.</Text>{"\n\n"}
                <Text>Ensure that recipes are safe to prepare and consume.</Text>{"\n\n"}
                <Text>Do not include offensive or derogatory language in your recipe submissions.</Text>{"\n\n"}
                <Text>Recipes that include explicit or graphic content will not be accepted.</Text>{"\n\n"}
                <Text>These guidelines are in place to ensure that the Recipal community is a welcoming and safe space for all users.</Text>{"\n\n"}
                <Text>By following these guidelines, we can all work together to create a platform that is enjoyable, informative, and supportive for everyone.</Text>{"\n\n"}
                </Text>
                </ScrollView>

                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.declineButton} onPress={handleDecline}>
                    <Text style={styles.buttonText}>Decline</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
                    <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    Maintitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        width: '100%',
    },
    acceptButton: {
        backgroundColor: '#FFC800',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8 ,
        shadowRadius: 2,
        elevation: 4,
    },
    declineButton: {
        backgroundColor: '#FFC800',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8 ,
        shadowRadius: 2,
        elevation: 4,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'regular',
        fontSize: 20,
        textAlign: 'center',
        flexDirection: 'row',
      },
});

export default UserAgreement;