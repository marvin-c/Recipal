import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TouchableHighlight, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
 
const NextStepButton = () => {
  const navigation = useNavigation()
  const route = useRoute();

  function handlePress() {
    if (route.name === 'StepByStep') {
      navigation.navigate('StepOne');
    }
    if (route.name === 'StepOne') {
        navigation.navigate('StepTwo');
    }
    if (route.name === 'StepTwo') {
        navigation.navigate('StepThree');
    }
    if (route.name === 'StepThree') {
        navigation.navigate('StepFour');
    }
    if (route.name === 'StepFour') {
        navigation.navigate('StepFive');
    }
    if (route.name === 'StepFive') {
        navigation.navigate('StepSix');
    }
    if (route.name === 'StepSix') {
        navigation.navigate('StepSeven');
    }
}

return (
    <View style={styles.container}>
        <View style={styles.screen}>
            <TouchableHighlight style={styles.buttonX}
                underlayColor="rgba(255, 200, 0, 0.75)" //Downpress button
                onPress={handlePress}>
                <Text>Next Step</Text>
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
    buttonX:{
        alignItems: 'center',
        justifyContent: 'center',
        borderTopStartRadius: 25,
        borderBottomLeftRadius: 25,
        bottom: 80,
        height: 50,
        width: 80,
        backgroundColor: '#FFC800',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8 ,
        shadowRadius: 2,
        elevation: 4,
    },
})

export default NextStepButton;