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
const ServeBtnTitle = ({title, titleStyling}) => {
  return <Text style={{...styles.titleText, ...titleStyling}}>{title}</Text>;
};
const ServeBtnImage = ({imageLeft, imageRight, imageStyling}) => {
  const image = imageLeft || imageRight;

  return (
    <View style={styles.imageContainer}>
      <Image source={image} style={{...styles.icon, ...imageStyling}} />
    </View>
  );
};
const ServeBtnFeedback = ({onPress, shadow, style, inactive, children}) => {
  let visualFeedback = (
    <TouchableOpacity onPress={onPress} style={{...shadow}}>
      <View style={{...styles.container, ...style}}>{children}</View>
    </TouchableOpacity>
  );
  if (inactive)
    visualFeedback = (
      <View
        style={{
          ...styles.container,
          ...styles.containerInactive,
          ...style,
        }}>
        {children}
      </View>
    );
  return visualFeedback;
};

// RETURN ---------------------------------------------------------
const CustomButton = ({
  title,
  imageLeft,
  imageRight,
  onPress,
  shadow,
  style,
  titleStyling,
  imageStyling,
  inactive,
}) => {
  return (
    <ServeBtnFeedback
      onPress={onPress}
      shadow={shadow}
      style={style}
      inactive={inactive}>
      {imageRight && (
        <ServeBtnImage imageRight={imageRight} imageStyling={imageStyling} />
      )}
      {title && <ServeBtnTitle title={title} titleStyling={titleStyling} />}
      {imageLeft && (
        <ServeBtnImage imageLeft={imageLeft} imageStyling={imageStyling} />
      )}
    </ServeBtnFeedback>
  );
};

export default CustomButton;
