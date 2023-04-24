import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const CategoriesItem = ({id, title, description}) => {
    const navigation = useNavigation()
    return (
        <View>
            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Search", {searchId: id, title, description})}>
                <Text>{title}</Text>
                <Text>{description}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 2,
        backgroundColor: 'white', 
        width: 100,
        height: 125,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center'
    }
})

export default CategoriesItem;