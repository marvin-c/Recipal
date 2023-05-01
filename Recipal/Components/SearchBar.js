import react  from "react";
import { View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function SearchBar(){
    const navigation = useNavigation()
    return(
        <View style={styles.Main}>
        <TextInput placeholder='Search' style={styles.Input}></TextInput>
        <View style={styles.buttonP}>
        <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
            <Icon name='search' size={16} style={{transform: [{rotateY: '180deg'}]}}/>
        </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
   
    Main:{
        left: 15,
        right: 55,
        backgroundColor: 'white',
        marginTop: '0%',
        width: '75%',
        height: 40,
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 20,
    },
    Input:{
        top: 5,
        left: 48,
    },
    buttonP:{
        left: 10,
        bottom: 22,
        height: 25,
        width: 25,
        backgroundColor: '#FFC800',
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})