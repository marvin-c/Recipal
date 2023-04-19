import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";

// const EventItem = ({id, name, description, qrCode}) => {
    const EventItem = ({id, title, description}) => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Event", {eventID: id, title, description})}>
            <View>
                <Text>{title}</Text>
                <Text>{description}</Text>
            </View>
            {/* <Image 
                style={{width:100, height:100}}
                source={{uri:qrCode}}
            /> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'space-around',
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    }
})




export default EventItem;