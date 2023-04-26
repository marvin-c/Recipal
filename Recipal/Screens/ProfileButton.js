import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
 
const ProfileButton = () => {
  const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                <View style={styles.buttonP}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Text>Profile</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },
    container: {
        flex: 1
    },
    buttonP:{
        marginLeft: 280,
        borderTopStartRadius: 25,
        borderBottomLeftRadius: 25,
        bottom: 80,
        height: 50,
        width: 60,
        backgroundColor: '#FFC800',
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default ProfileButton;