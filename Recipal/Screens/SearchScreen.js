import { View, Text, StyleSheet } from "react-native";

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                <Text>List of Recipes under the category {title}</Text>
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
        flex: 1
    },
})

export default SearchScreen;
