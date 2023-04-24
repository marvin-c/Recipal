import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../Components/CarouselCardItem';
import Data from '../Components/Data';

const CarouselCards = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    const renderItem = ({ item }) => {
      return <CarouselCardItem item={item} />;
  };

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        containerStyle={{ backgroundColor: 'transparent', paddingVertical: 8 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotStyle={
          {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        dotContainerStyle={{ marginHorizontal: -4 }}
      />
    </View>
  )
}

export default CarouselCards