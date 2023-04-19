const { View, Text, StyleSheet } = require("react-native")


const QrCodeScreen = () => {
    return (
        <View>
            <Text style={styles.screen}>qr code scan</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})
export default QrCodeScreen;