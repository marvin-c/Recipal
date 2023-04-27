import { View, Alert, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TouchableHighlight, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome, Feather } from 'react-native-vector-icons';

const SaveButton = () => {
  const navigation = useNavigation();
  const route = useRoute();

  function handlePress() {
    Alert.alert('Changes Saved')
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <TouchableHighlight style={styles.buttonP} // User profile preference settings etc
            underlayColor="rgba(255, 200, 0, 0.75)" //Downpress button
            onPress={handlePress}>
            <FontAwesome name="save" size={36} color="black" />
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

export default SaveButton;
