import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight,SafeAreaView, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddRecipe= () => {
    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate('UserRecipe');
    }
    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                <TouchableHighlight style={styles.buttonP} // User profile preference settings etc
                    underlayColor="rgba(255, 200, 0, 0.75)" //Downpress button
                    onPress={handlePress}>
                    <Image 
                        source={require('../assets/AddUserRecipe.png')} 
                        style={{ height: 33, width: 30, }}
                    />
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
        alignSelf: 'flex-start',
      },
      buttonP:{
        alignItems: 'center',
        justifyContent: 'center',
        borderTopEndRadius: 25,
        borderBottomRightRadius: 25,
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

export default AddRecipe;
