import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const BackButton = () => {
  const navigation = useNavigation();
  const route = useRoute();

  function handlePress() {
    if (route.name === 'Search') {
      navigation.navigate('Home');
    }
    if (route.name === 'ProfileEdit') {
        navigation.navigate('Profile');
    }
    if (route.name === 'RecipePage') {
        navigation.navigate('Home');
    }
    if (route.name === 'Search') {
        navigation.navigate('Home');
    } else {
      navigation.navigate('Profile');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.buttonP}>
          <TouchableOpacity onPress={handlePress}>
            <Icon name='arrow-left-circle' size={35} />
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

export default BackButton;
