import React from 'react';
import { StyleSheet } from 'react-native';

import Swiper from 'react-native-swiper';
import VisualOne from './VisualOne';
import VisualTwo from './VisualTwo';
import VisualThree from './VisualThree';
import VisualFour from './VisualFour';
import Colors from '../../config/colors';

const dotSize = 8;
const activeDotSize = 12;

const styles = StyleSheet.create({
  pagination: {
    paddingBottom: '20%',
  },
  dot: {
    width: dotSize,
    height: dotSize,
    borderRadius: dotSize / 2,
    marginRight: dotSize,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  activeDot: {
    marginRight: dotSize,
    backgroundColor: Colors.white,
    width: activeDotSize,
    height: activeDotSize,
    borderRadius: activeDotSize / 2,
  },
});

const Visual = ({ navigation }) => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      autoplay={true}
      paginationStyle={styles.pagination}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
    >
      <VisualOne navigation={navigation} />
      <VisualTwo navigation={navigation} />
      <VisualThree navigation={navigation} />
      <VisualFour navigation={navigation} />
    </Swiper>
  );
};

export default Visual;
