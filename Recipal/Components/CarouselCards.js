import React from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../Components/CarouselCardItem';

const CarouselCards = ({ data }) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const renderItem = ({ item }) => {
    return <CarouselCardItem item={item} />;
  };

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={1}
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
    </View>
  );
};

export default CarouselCards;

// pagination add the little dots to the carousel, indicating what slide is currently in focus
/* <Pagination
        dotsLength={Data.length}
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
      /> */