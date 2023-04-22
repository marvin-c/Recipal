import React from 'react';
import {StyleSheet,Button, ScrollView ,TouchableHighlight, TouchableOpacity, View,SafeAreaView,Text,Alert,} from 'react-native';
import Color from 'color';
import BackgroundImg from '../Components/BackgroundImage';

    const UserAgreement = ({ navigation }) => {
    const handleLoginPress = () => {navigation.navigate('Login');}; //call the loginScreen on button press
    const handleSignUpPress = () => {navigation.navigate('Signup');}; //call the SignupScreen on button press
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
                source={require('../assets/useragreeBkgrnd.jpg')} // Background image path
                resizeMode="cover"
                style={styles.background}>
                
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>User Agreement</Text>
                <Text style={styles.text}>
                    Privacy Policy:

                    We at Recipal are committed to protecting your privacy and providing a safe and secure environment for your use of our cooking and baking application. 
                    This privacy policy explains the types of information we collect, how we use and protect that information, and your rights in relation to that information.

                    What information do we collect? We collect information that you voluntarily provide to us, such as your name, email address, and other information necessary for your use of our application. 
                    We may also collect information about your use of our application, such as the recipes you have viewed or saved, to improve the functionality of our application and provide you with a better user experience.

                    How do we use your information? We use your information to provide you with a personalized experience in our application and to improve the functionality and features of our application. 
                    We may also use your information to communicate with you about our application and any updates or new features.

                    Do we share your information? We will not share your personal information with any third party unless required by law. 
                    We may use third-party service providers to assist us in providing the application and improving its functionality, 
                    but any information shared with those service providers will be limited to what is necessary to provide the service.

                    How do we protect your information? We take the security of your information seriously and take appropriate measures to protect it. 
                    We use secure servers and encryption technology to protect your information from unauthorized access, use, or disclosure.
                
                    User Agreement:

                    By using Recipal, you agree to the following terms and conditions:

                    You must be at least 18 years of age or have the permission of a parent or guardian to use this application.
                    You are solely responsible for the content that you upload to Recipal. You agree not to upload any content that is illegal, offensive, or in violation of any third party's rights.
                    You agree to use Recipal for lawful purposes only and to not engage in any activities that may harm or disrupt the application or its users.
                    You agree to not reproduce, distribute, or modify any of the content or materials in Recipal without our prior written permission.
                    You acknowledge that any information you provide to us will be stored in accordance with our privacy policy and may be used to provide you with a personalized experience in our application.
                    You acknowledge that we may make changes to the application at any time, and that any such changes will be subject to these terms and conditions.
                    You agree to indemnify and hold us harmless from any claims, damages, or other liabilities arising from your use of the application.
                    These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which we are located, without giving effect to any principles of conflicts of law.
                    By using Recipal, you agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, do not use the application.
                    
                    Community Guidelines:

                    Be respectful and kind to other users. Treat others as you would like to be treated.
                    Do not use hate speech, derogatory language, or make personal attacks.
                    Do not post spam, advertisements, or irrelevant content.
                    Stay on topic and contribute to the conversation in a meaningful way.
                    Do not engage in illegal activities, promote violence or threaten others.
                    Community Guidelines for Recipe Submissions:
                    All recipes must be original, or if they are not, proper credit must be given to the original source.
                    Recipes must be complete and accurate, with clear instructions and ingredients.
                    Do not plagiarize or copy content from other sources without permission.
                    Ensure that recipes are safe to prepare and consume.
                    Do not include offensive or derogatory language in your recipe submissions.
                    Recipes that include explicit or graphic content will not be accepted.
                    These guidelines are in place to ensure that the Recipal community is a welcoming and safe space for all users. 
                    By following these guidelines, we can all work together to create a platform that is enjoyable, informative, and supportive for everyone.
                </Text>
                // Add more Text components as needed for the agreement text
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
    title: {
        fontSize: 24,
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
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    declineButton: {
        backgroundColor: '#FFC800',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default UserAgreement;


  
