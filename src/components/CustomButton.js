import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  titleText: {
    color: Colors.white,
    fontFamily: 'Sailec',
    fontSize: 16,
    padding: 12,
  },
  imageContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});

// SERVERS ---------------------------------------------------------
const ServeBtnTitle = ({props}) => {
  return (
    <Text style={{...styles.titleText, ...props.titleStyling}}>
      {props.title}
    </Text>
  );
};
const ServeBtnImage = ({props}) => {
  return (
    <View style={{...styles.imageContainer, ...props.imageStyling}}>
      {props.image}
    </View>
  );
};

// RETURN ---------------------------------------------------------
const CustomButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...styles.container, ...props.style}}>
        {props.title && <ServeBtnTitle props={props} />}
        {props.image && <ServeBtnImage props={props} />}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
