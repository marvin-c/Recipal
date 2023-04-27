import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight,SafeAreaView, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddRecipe= () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.addButton}>
                <TouchableOpacity onPress={() => navigation.navigate('UserRecipe')}>
                    <Image 
                        source={require('../assets/AddUserRecipe.png')} 
                        style={{ height: 33, width: 30, }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addButton: {
        position: 'absolute',
        bottom: 10,
        height: 50,
        width: 60,
        borderTopEndRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: '#FFC800',
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AddRecipe;
