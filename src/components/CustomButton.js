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
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
});

// SERVERS ---------------------------------------------------------
const serveBtnTitle = props => {
  return (
    <Text style={{...styles.titleText, ...props.titleStyling}}>
      {props.title}
    </Text>
  );
};
const serveBtnImage = props => {
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
        {props.title && serveBtnTitle(props)}
        {props.image && serveBtnImage(props)}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
