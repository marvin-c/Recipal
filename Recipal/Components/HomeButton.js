import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

const HomeButton = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.buttonP}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name='home' size={33} style={{marginEnd: 10, marginBottom: 5}}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    marginRight: 80,
  },
  container: {
    flex: 1
  },
  buttonP:{
    borderTopEndRadius: 25,
    borderBottomRightRadius: 25,
    bottom: 80,
    height: 50,
    width: 60,
    backgroundColor: '#FFC800',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeButton;
