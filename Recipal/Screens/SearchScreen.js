import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";

const SearchScreen = () => {
    return (
        <View style={styles.container}>
        <SearchBar />
            <View style={styles.screen}>
                <Text>List of Recipes under the category </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 100
    },
})

export default SearchScreen;
