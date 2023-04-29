import React, { useState, useEffect } from 'react';
import { useRoute } from "@react-navigation/native";
import { TouchableHighlight, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import SearchBar from "../Components/SearchBar";
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import CustomSideMenu from '../Components/SideMenu';
import ProfileButton from '../Components/ProfileButton';
import BackButton from '../Components/BackButton';
import SideMenuButton from '../Components/SideMenuButton';

const SearchScreen = ({ navigation }) => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const route = useRoute()

    const { title, description } = route.params ? route.params : {}

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'DancingScript-Regular': require('../assets/fonts/DancingScript-Regular.ttf'),
            });
            setFontLoaded(true);
        }
        loadFont();
    }, []);

    if (!fontLoaded) {
        return null; // Wait for the font to load before rendering the screen
    }

    return (
        <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Recipal</Text>
                </View>
                <SearchBar />
                <Text style={styles.subttlCointainer}>Soups</Text>
                <View style={styles.row}>
                    <View style={[styles.box, styles.bigBox]}>
                    <TouchableOpacity  onPress={() => navigation.navigate('RecipePage')}>
                    <Image 
                        source={require('../assets/pumpkin.png')} 
                        style={{ height: 269, width: 220, borderRadius: 10, marginHorizontal: - 20 }}
                    />
                    <View style={styles.bigTitleBox}>
                        <Text style={styles.bigTitle}>Creamy pumpkin soup</Text>
                        <Text style={styles.reviewTitle}>4.5</Text>
                    </View>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.verticalBox}>
                        <View style={[styles.box, styles.smallBox]}>
                        <TouchableOpacity  onPress={() => navigation.navigate('RecipePage')}>
                        <Image 
                            source={require('../assets/seafoodsoup.png')} 
                        />
                        <View style={styles.smallTitleBox}>
                            <Text style={styles.smallTitle}>Seafood soup</Text>
                            <Text style={styles.smallreviewTitle}>4.5</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
                    <View style={[styles.box, styles.smallBox]}>
                        <TouchableOpacity  onPress={() => navigation.navigate('RecipePage')}>
                        <Image 
                            source={require('../assets/abcsoup.png')} 
                        />
                        <View style={styles.smallTitleBox}>
                            <Text style={styles.smallTitle}>Chinese ABC soup</Text>
                            <Text style={styles.smallreviewTitle}>4.5</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5, marginBottom: 20}}>
                    <TouchableOpacity  onPress={() => navigation.navigate('RecipePage')}>
                    <Image 
                        source={require('../assets/chowder.png')} 
                    />
                    <View style={styles.smallTitleBox}>
                        <Text style={styles.smallTitle}>Chicken Chowder</Text>
                        <Text style={styles.smallreviewTitle}>4.5</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('RecipePage')}>
                    <Image 
                        source={require('../assets/shellfish.png')} 
                    />
                    <View style={styles.smallTitleBox}>
                        <Text style={styles.smallTitle}>Lovely shellfish soup</Text>
                        <Text style={styles.smallreviewTitle}>4.5</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('RecipePage')}>
                    <Image 
                        source={require('../assets/tomatosoup.png')} 
                    />
                    <View style={styles.smallTitleBox}>
                        <Text style={styles.smallTitle}>Traditional Tomato soup</Text>
                        <Text style={styles.smallreviewTitle}>4.5</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <View style={styles.verticalBox}>
                        <View style={[styles.box, styles.smallBox]}>
                        <TouchableOpacity  onPress={() => navigation.navigate('RecipePage')}>
                        <Image 
                            source={require('../assets/soup1.png')} 
                            style={{   height: 125,  justifyContent: 'center', borderRadius: 10 }}
                        />
                        <View style={styles.smallTitleBox}>
                        <Text style={styles.smallTitle}>Tangy Tomato soup</Text>
                        <Text style={styles.smallreviewTitle}>4.5</Text>
                    </View>
                        </TouchableOpacity>
                        </View> 
                        <View style={[styles.box, styles.smallBox]}>
                        <TouchableOpacity  onPress={() => navigation.navigate('RecipePage')}>
                        <Image 
                            source={require('../assets/potatosoup.png')} 
                            style={{   height: 125,  justifyContent: 'center', borderRadius: 10 }}
                        />
                        <View style={styles.smallTitleBox}>
                            <Text style={styles.smallTitle}>Potato and Chicken soup</Text>
                            <Text style={styles.smallreviewTitle}>4.5</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.box, styles.bigBox]}>
                        <TouchableOpacity  onPress={() => navigation.navigate('RecipePage')}>
                        <Image 
                            source={require('../assets/beersoup.png')} 
                            style={{ height: 269, width: 220, borderRadius: 10, marginHorizontal: - 20 }}
                        />
                        <View style={styles.bigTitleBox}>
                            <Text style={styles.bigTitle}>Potato beer cheese soup</Text>
                            <Text style={styles.reviewTitle}>4.5</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </ScrollView>
        <ProfileButton />
        <BackButton />
        <SideMenuButton />
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 10,
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'DancingScript-Regular',
        fontWeight: '600',
        fontSize: 40,
        color: 'black',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    box: {
        margin: 10,
    },
    bigBox: {
        flex: 0.6,
        padding: 20,
        height: 269,
        justifyContent: 'center',
        borderRadius: 10, 
        marginTop: 10,
    },
    smallBox: {
        flex: 1,
        height: 50,
        borderRadius: 10,
    },
    verticalBox: {
        flexDirection: 'column',
        flex: 0.4,
    },
    sideMenuContainer:{
        flex: 1,
        bottom: '79.3%'
    },
    subttlCointainer: {
        paddingLeft: 15,
        fontSize: 16,
        marginTop: 10,
        marginBottom: 15,
    },
    bigTitleBox: {
        position: 'absolute',
        bottom: 0,
        width: '122%',
        height: 63,
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
        marginHorizontal: - 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
      },
      bigTitle: {
        color: '#fff',
        fontSize: 16,
        marginStart: 15,
        marginTop: 3
      },
      reviewTitle: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 180,
        marginTop: 15
      },
      smallTitleBox: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 40,
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
      },
      smallTitle: {
        color: '#fff',
        fontSize: 10,
        marginStart: 3,
      },
      smallreviewTitle:{
        color: '#fff',
        fontSize: 10,
        marginLeft: 80,
        marginTop: 12,
      },
})

export default SearchScreen;
