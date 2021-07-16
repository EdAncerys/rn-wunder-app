import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  containerInactive: {
    opacity: 0.2,
  },
  titleText: {
    ...Fonts.N_700_16,
    color: Colors.white,
    padding: 12,
  },
  imageContainer: {
    padding: 5,
  },
  icon: {
    width: 24,
    height: 24,
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
  const image = props.imageLeft || props.imageRight;

  return (
    <View style={styles.imageContainer}>
      <Image source={image} style={{...styles.icon, ...props.imageStyling}} />
    </View>
  );
};

const ServeBtnFeedback = ({props, children}) => {
  console.log(props.inactive);

  let visualFeedback = (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...styles.container, ...props.style}}>{children}</View>
    </TouchableOpacity>
  );
  if (props.inactive)
    visualFeedback = (
      <View
        style={{
          ...styles.container,
          ...styles.containerInactive,
          ...props.style,
        }}>
        {children}
      </View>
    );
  return visualFeedback;
};

// RETURN ---------------------------------------------------------
const CustomButton = props => {
  return (
    <ServeBtnFeedback props={props}>
      {props.imageRight && <ServeBtnImage props={props} />}
      {props.title && <ServeBtnTitle props={props} />}
      {props.imageLeft && <ServeBtnImage props={props} />}
    </ServeBtnFeedback>
  );
};

export default CustomButton;
