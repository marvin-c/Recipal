import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
 
const UserRecipe = () => {
  const navigation = useNavigation()

    return (
        <SafeAreaView>
                <View>
                    <Text style={styles.buttonP}>User Recipe</Text>
                </View>
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