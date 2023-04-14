import React, { useState, useEffect } from 'react';
import { Font } from 'expo';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';

const BackgroundImg = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'DancingScript-Bold': require('../assets/fonts/DancingScript-Bold.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  return (
    <View>
      <ImageBackground
        source={require('../assets/SplashScreen.png')}
        resizeMode="stretch"
        style={styles.img}
      >
        {fontLoaded && (
          <Text style={styles.text} fontFamily="DancingScript-Bold">
            Recipal
          </Text>
        )}
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
    fontSize: 48,
    color: '#ffffff',
  },
});
