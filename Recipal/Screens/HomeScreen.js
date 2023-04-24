import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../Components/SearchBar';

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.bgcolorContainer}>
                <SearchBar />
                    <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.btn}>
                       <Text style={{color: 'black'}}>Categories</Text> 
                    </TouchableOpacity>
                    <Text style={styles.subttlCointainer}>
                        Featured
                    </Text>
                    <Text style={styles.subttlCointainer}>
                        Recommended based on preferences
                    </Text>
                </View>
            </ScrollView>
            <StatusBar style='dark' />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bgcolorContainer: {
      backgroundColor: 'white', 
      height: 1600,
    },
    subttlCointainer: {
      paddingLeft: 15,
      fontSize: 16,
      marginTop: 10,
    },
    btn: {
      marginTop: 7,
      padding: 10,
      left: 213,
      backgroundColor: '#FFC800',
      width: 130,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnText: {
      fontSize: 16,
      color: 'black',
    },
  });

export default HomeScreen;