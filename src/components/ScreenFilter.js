import * as React from 'react';
import {View, Dimensions} from 'react-native';

import Colors from '../config/colors';
const {width, height} = Dimensions.get('screen');

const ScreenFilter = ({filter}) => {
  const gradient = filter || Colors.gradientFilterBottom;

  return (
    <View
      style={{
        width: width,
        height: height,
        position: 'absolute',
        zIndex: 99,
        backgroundColor: gradient,
      }}
    />
  );
};

export default ScreenFilter;
