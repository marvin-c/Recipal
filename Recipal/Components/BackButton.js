import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TouchableHighlight, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome, Feather } from 'react-native-vector-icons';

const BackButton = () => {
  const navigation = useNavigation();
  const route = useRoute();

  function handlePress() {
    if (route.name === 'Search') {
      navigation.navigate('Categories');
    }
    if (route.name === 'ProfileEdit') {
        navigation.navigate('Profile');
    }
    if (route.name === 'RecipePage') {
        navigation.navigate('Home');
    }
    if (route.name === 'StepByStep') {
      navigation.navigate('RecipePage');
  }
  }

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <TouchableHighlight style={styles.buttonP} //back navigation button
          underlayColor="rgba(255, 200, 0, 0.75)" //Downpress button
          onPress={handlePress}>
          <Feather name="arrow-left-circle" size={36} color="black" style={styles.inputIcon}/>
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

export default BackButton;
