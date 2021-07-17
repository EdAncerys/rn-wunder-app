import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import LeftIcon from '../assets/icons/app/left-white.png';
import CustomButton from './CustomButton';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    ...Fonts.N_700_16,
    color: Colors.lightSilver,
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
});

const NavigateAction = props => {
  return (
    <View style={styles.container}>
      <CustomButton
        onPress={props.onPress}
        imageLeft={LeftIcon}
        style={{backgroundColor: Colors.transparent}}
        imageStyling={{width: 12, height: 20}}
      />
      <View style={styles.textContainer}>
        <Text style={{...styles.titleText, ...props.titleStyling}}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default NavigateAction;
