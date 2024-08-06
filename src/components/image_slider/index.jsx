import { View, Image, FlatList } from 'react-native';
import React, { useCallback, useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { styles } from './styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const onSnapToItem = useCallback((index) => {
    setActiveSlide(index);
  }, []);

  const data = [
    {
      uri: 'https://www.dev.fxmaster.co.uk/images/money-transfer.jpg',
    },
    {
      uri: 'https://www.dev.fxmaster.co.uk/images/cardswidget.jpg',
    },
    {
      uri: 'https://www.dev.fxmaster.co.uk/images/money-transfer/money-transfer2.png',
    },
  ];
  return (
    <View style={styles.root}>
      <Carousel
        loop
        width={wp(95)}
        height={hp(30)}
        autoPlay={true}
        autoPlayInterval={5000}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({ item, index }) => (
          <Image
            key={index}
            source={{
              uri: item.uri,
            }}
            style={styles.image}
          />
        )}
        onSnapToItem={onSnapToItem}
        onScrollEnd={onSnapToItem}
      />

      {/*  Pagination, */}
      <FlatList
        style={styles.pagination}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View key={index} style={activeSlide === index ? styles.active_dot : styles.dot} />
        )}
      />
    </View>
  );
};

export default ImageSlider;
