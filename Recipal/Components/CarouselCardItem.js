import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={item.imgUrl}
        style={styles.image}
      />
      <Text style={styles.header}>{item.header}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 150,
    paddingBottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  header: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10
  },
  body: {
    color: "black",
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  }
})

export default CarouselCardItem;