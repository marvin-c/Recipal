import React, { useState, useEffect, useContext } from 'react';
import { Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import CarouselCards from '../Components/RecipeCarouselCards';
import { ThemeContext } from '../Components/ThemeContext';
import ThemedText from '../Components/ThemedText';

import Data from '../Components/Data'; //carousel image data
import StepModeButton from '../Components/StepModeButton';
import BackButton from '../Components/BackButton';
import SideMenuButton from '../Components/SideMenuButton';
import FavouritesRating from '../Components/FavouritesRating';

const RecipePage = ({ navigation }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [photo, setPhoto] = useState(null);
  
    const onStarRatingPress = (rating) => {
        setRating(rating);
      };
  
    const handleCommentChange = (text) => {
      setComment(text);
    };
  
    const handlePhotoUpload = () => {
      // Implement photo upload logic
    };
  
    const handlePostComment = () => {
      // Implement post comment logic
    };
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: theme.colors.background }}>

                <ScrollView contentContainerStyle={styles.scrollContainer}>

                    <View style={styles.header}>
                        <ThemedText style={styles.headerText}>Red Snapper with Tamarind Sauce</ThemedText>
                    </View>

                    <View style={styles.carouselContainer}>
                    <CarouselCards images={Data[3].images}/>
                    </View>

                    <ThemedText style={styles.description}>Don't put the party hats away just yet, it's Chinese New Year. And what better way to celebrate than with festive fish? The Chinese word for fish sounds like the word for abundance. Serve the fish whole, with the head and tail intact, to represent a good beginning and a good end to the coming year.</ThemedText>
                    <FavouritesRating />

                    <ThemedText style={styles.subttlCointainer}>Ingredients:</ThemedText>
                    <ThemedText>
                    <Text>1.2 kg whole snapper</Text>{"\n\n"}
                    <Text>2 cups vegetable oil, for deep-frying</Text>{"\n\n"}
                    <Text>¼ cup plain flour</Text>{"\n\n"}
                    <Text>½ tsp sea salt</Text>{"\n\n"}
                    <Text>2 tbsp vegetable oil, for wok frying</Text>{"\n\n"}
                    <Text>2 tbsp finely chopped ginger</Text>{"\n\n"}
                    <Text>3 spring onions, cut into 4cm lengths</Text>{"\n\n"}
                    <Text>½ red capsicum, diced into large cubes, about 1.5 cm</Text>{"\n\n"}
                    <Text>½ green capsicum, diced into large cubes, about 1.5 cm</Text>{"\n\n"}
                    <Text>1 tbsp Shaoxing wine</Text>{"\n\n"}
                    <Text>½ cup fresh chicken stock</Text>{"\n\n"}
                    <Text>2 tbsp light soy sauce</Text>{"\n\n"}
                    <Text>4 tbsp caster sugar</Text>{"\n\n"}
                    <Text>4 tbsp Chinese red vinegar (available from Asian supermarkets)</Text>{"\n\n"}
                    <Text>2 tbsp tomato sauce</Text>{"\n\n"}
                    <Text>½ cup roughly chopped fresh pineapple (see tip at bottom)</Text>{"\n\n"}
                    <Text>½ tsp sesame oil</Text>{"\n\n"}
                    <Text>small handful coriander leaves</Text>{"\n\n"}

                    <Text style={styles.subttlCointainer}>Method:</Text>{"\n\n"}

                    <Text>Make sure the fish is well scaled and wipe down with a paper towel. Cut fish through to the bone from head to tail at 3cm intervals on both sides.</Text>{"\n\n"}
                    <Text>Put oil in a large wok or a saucepan big enough to fry the whole fish. Heat oil to 180°C or until a cube of bread turns golden in 30 seconds.</Text>{"\n\n"}
                    <Text>Dust fish in a mixture of flour and salt, then shake off any excess. Carefully slide the whole fish into the wok and fry for about 5 minutes, then turn the fish over and repeat on the other side. The fish should be golden on the outside and the flesh just cooked through to the bone.
                    Remove the fish from the pan and drain on a paper towel. Remove excess oil from the wok and wipe clean.</Text>{"\n\n"}
                    <Text>Heat wok again with 2 tbsp vegetable oil until just smoking and stir-fry ginger, spring onions (whites only) and capsicum until fragrant. Deglaze wok with Shaoxing wine, then add stock, soy sauce, sugar, vinegar and tomato sauce. Bring to a boil and simmer until thickened slightly. Add the pineapple and the green ends of the spring onions and cook for 30 seconds.</Text>{"\n\n"}
                    <Text>Transfer the fish to a serving dish and spoon the sauce over the top. Sprinkle with sesame oil and coriander leaves, then serve immediately.</Text>{"\n\n"}

                    <Text style={styles.subttlCointainer}>Hot Tip!</Text>{"\n\n"}
                    <Text>Use fresh, ripe pineapple for the sweet and sour sauce.</Text>{"\n\n"}

                    </ThemedText>

                    <View style={styles.rateShareContainer}>
                        <Text>Did you make this? Share your comments and rating</Text>
                    </View>

                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={rating}
                        selectedStar={(rating) => onStarRatingPress(rating)}
                        starSize={40}
                        fullStarColor="#ffc800"
                        emptyStarColor="#ccc"
                    />

                    <View style={styles.commentContainer}>
                        <ThemedText style={styles.commentTitle}>Post a comment:</ThemedText>
                        <TextInput
                        style={styles.commentInput}
                        placeholder="Type your comment here"
                        value={comment}
                        onChangeText={handleCommentChange}
                        />
                        <TouchableOpacity style={styles.photoUploadButton} onPress={handlePhotoUpload}>
                        <Text style={styles.photoUploadButtonText}>Upload a photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.postCommentButton} onPress={handlePostComment}>
                        <Text style={styles.postCommentButtonText}>Post Comment</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            <BackButton />
            <SideMenuButton/>
            <StepModeButton/>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    scrollContainer: {// screen scroll container styles
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingBottom: 100, // add padding to the bottom
    },
    carouselContainer: {// picture carousel / gallery styles
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        height: 200,
    },
    header: {//recipe title container
        paddingTop: 20,
        paddingBottom: 10,
        alignItems: 'center',
    },
    headerText: {// recipe title font styles
        fontFamily: 'DancingScript-Regular',
        fontWeight: '500',
        fontSize: 30,
        textAlign: 'center'
    },
    description:{   //recipe description styling
        paddingVertical: 10,
    },
    subttlCointainer: {
        fontSize: 16,
        marginTop: 10,
        paddingBottom: 20,
        fontWeight: 'bold',
    },
    ratingTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },

});

export default RecipePage;
