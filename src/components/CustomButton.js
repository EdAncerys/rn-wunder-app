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
  btnText: {
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
const serveBtnTitle = title => {
  return (
    <View>
      <Text style={styles.btnText}>{title}</Text>
    </View>
  );
};
const serveBtnImage = image => {
  return <View style={styles.imageContainer}>{image}</View>;
};

// RETURN ---------------------------------------------------------
const CustomButton = props => {
  const title = props.title;
  const image = props.image;

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...styles.container, ...props.style}}>
        {title && serveBtnTitle(title)}
        {image && serveBtnImage(image)}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
