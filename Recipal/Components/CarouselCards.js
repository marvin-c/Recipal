import React from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../Components/CarouselCardItem';

const CarouselCards = ({ images }) => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    const renderItem = ({ item }) => {
      return <CarouselCardItem item={item} />;
  };

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={1}
        ref={isCarousel}
        data={images}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={150}
        onSnapToItem={(index) => setIndex(index)}
      />
      
    </View>
  );
};

export default CarouselCards;

/*<Pagination // pagination add the little dots to the carousel, indicating what slide is currently in focus
        dotsLength={images.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 3,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      /> */