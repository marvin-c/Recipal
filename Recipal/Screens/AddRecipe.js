import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight,SafeAreaView, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddRecipe= () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <View>
                <ScrollView>
                    <TouchableOpacity style={styles.buttonP} onPress={() => navigation.navigate('Profile')}>
                        <Image 
                            source={require('../assets/addrecipe.png')} 
                            style={{ width: 100, height: 100, borderRadius: 50 }}
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    buttonP:{
        width: 70,
        borderTopEndRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: '#FFC800',
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default AddRecipe;