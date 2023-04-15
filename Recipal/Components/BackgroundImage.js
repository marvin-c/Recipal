import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

const BackgroundImg = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  // Load custom font asynchronously
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({ 
        'Satisfy-Regular': require('../assets/fonts/Satisfy-Regular.ttf'), //Font name and path
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  // Render the component with the loaded font
  return (
    <View>
      <ImageBackground
        source={require('../assets/SplashScreen.png')}
        resizeMode="stretch"
        style={styles.img}>
        <View style={styles.textContainer}>
          {fontLoaded ? ( //text with font applied within a text container
            <Text style={[styles.text, { fontFamily: 'Satisfy-Regular' }]}>
              Recipal
            </Text>
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
};
export default BackgroundImg;

const styles = StyleSheet.create({
  img: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 86,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    top: '-25%',
  },
});
