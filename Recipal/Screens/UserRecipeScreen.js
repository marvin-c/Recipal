import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SideMenuButton from "../Components/SideMenuButton";
import BackButton from "../Components/BackButton";
import SaveButton from "../Components/SaveButton"; 

const UserRecipe = () => {
  const navigation = useNavigation()

    return (
        <SafeAreaView>
                <View>
                    <Text style={styles.buttonP}>User Recipe</Text>
                </View>
                <BackButton/>
                <SaveButton/>
                <SideMenuButton/>

        </SafeAreaView>

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