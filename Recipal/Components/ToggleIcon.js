import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const ToggleIcon = ({ iconSource, tickSource, style, label }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={toggleSelected}>
            <View style={style}>
                <Image source={iconSource} style={{ ...style }} />
                {selected && (
                <Image
                    source={tickSource}
                    style={{
                    position: 'absolute',
                    bottom: -5,
                    right: -5,
                    width: style.width / 2,
                    height: style.height / 2,
                    }}
                />
                )}
            </View>
        </TouchableOpacity>
        {label && <Text style={styles.label}>{label}</Text>}
    </View>
    
  );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    icon: {
      justifyContent: "center",
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: 'cover',
    },
    tickImage: {
      position: "absolute",
      bottom: -5, // Update the position of the tick icon according to your requirement
      right: 0,
      width: 20,
      height: 20,
    },
    label: {
      marginTop: 0, // Add space between the icon and the label
      fontSize: 8,
      textAlign: 'center',
      paddingLeft: 10,
    },
  });

export default ToggleIcon;
