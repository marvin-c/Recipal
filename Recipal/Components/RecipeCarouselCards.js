import React from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../Components/RecipeCarouselCardItem';

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
        itemWidth={370}
        onSnapToItem={(index) => setIndex(index)}
      />
      <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center' }}>
      <Pagination // pagination add the little dots to the carousel, indicating what slide is currently in focus
        dotsLength={images.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 5,
          borderRadius: 5,
          paddingTop: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
        
      />
      </View>
    </View>
  );
};

export default CarouselCards;

/**/