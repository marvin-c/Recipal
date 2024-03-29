import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";

const ProfileDetailScreen = () => {
    const route = useRoute ()
    const navigation = useNavigation()
    const { profileId } = route.params
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft: () =>(
                <HeaderBackButton 
                    tintColor="white"
                    onPress={()=>navigation.goBack()}
                />
            )
        })
    }, [])
    return (
        <View>
            <Text>Profile id: {profileId}</Text>
        </View>
    )
}

export default ProfileDetailScreen;