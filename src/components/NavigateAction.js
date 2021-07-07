import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import Colors from '../config/colors';
import LeftIcon from '../assets/icons/back-left.png';
import CustomButton from './CustomButton';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    textAlign: 'right',
    fontFamily: 'Sailec',
    fontSize: 16,
    paddingRight: width / 3,
  },
  textContainer: {
    flex: 1,
  },
});

const NavigateAction = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <CustomButton
        onPress={onPress}
        image={<Image source={LeftIcon} />}
        style={{backgroundColor: Colors.transparent}}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default NavigateAction;
