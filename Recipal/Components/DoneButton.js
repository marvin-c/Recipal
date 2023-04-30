import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TouchableHighlight, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
 
const DoneButton = () => {
  const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                <TouchableHighlight style={styles.buttonP}
                    underlayColor="rgba(255, 200, 0, 0.75)" //Downpress button
                    onPress={()=> navigation.navigate('RecipePage')}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17}}>Done!</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 10,
    },
    container: {
        flex: 1,
        alignSelf: 'flex-end',
    },
    buttonP:{
        alignItems: 'center',
        justifyContent: 'center',
        borderTopStartRadius: 25,
        borderBottomLeftRadius: 25,
        bottom: 80,
        height: 50,
        width: 60,
        backgroundColor: '#FFC800',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8 ,
        shadowRadius: 2,
        elevation: 4,
    },
})

export default DoneButton;