import * as React from 'react';
import {Pressable} from 'react-native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import * as Icons from '../config/icons';

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
  iconContainer: {
    padding: 5,
  },
});

// SERVERS ---------------------------------------------------------
const ServeBtnTitle = ({title, titleStyling}) => {
  return <Text style={{...styles.titleText, ...titleStyling}}>{title}</Text>;
};
const ServeIcon = ({
  iconLeft,
  iconRight,
  iconWidth,
  iconHeight,
  iconFill,
  iconLeftWidth,
  iconLeftHeight,
}) => {
  const iconName = iconLeft || iconRight;
  const width = iconLeftWidth || iconWidth;
  const height = iconLeftHeight || iconHeight;
  const SvgIcon = Icons[iconName];

  return (
    <View style={styles.iconContainer}>
      <SvgIcon width={width} height={height} fill={iconFill} />
    </View>
  );
};
const ServeBtnFeedback = ({
  onPress,
  shadow,
  style,
  inactive,
  noFeedback,
  children,
}) => {
  let visualFeedback = (
    <TouchableOpacity onPress={onPress} style={{...shadow}}>
      <View style={{...styles.container, ...style}}>{children}</View>
    </TouchableOpacity>
  );
  if (noFeedback)
    visualFeedback = (
      <View
        style={{
          ...styles.container,
          ...style,
        }}>
        {children}
      </View>
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
  iconLeft,
  iconRight,
  onPress,
  shadow,
  style,
  titleStyling,
  iconFill,
  iconWidth,
  iconHeight,
  iconLeftWidth,
  iconLeftHeight,
  inactive,
  noFeedback,
}) => {
  return (
    <ServeBtnFeedback
      onPress={onPress}
      shadow={shadow}
      style={style}
      inactive={inactive}
      noFeedback={noFeedback}>
      {iconLeft && (
        <ServeIcon
          iconLeft={iconLeft}
          iconFill={iconFill}
          iconWidth={iconWidth}
          iconHeight={iconHeight}
          iconLeftWidth={iconLeftWidth}
          iconLeftHeight={iconLeftHeight}
        />
      )}
      {title && <ServeBtnTitle title={title} titleStyling={titleStyling} />}
      {iconRight && (
        <ServeIcon
          iconRight={iconRight}
          iconFill={iconFill}
          iconWidth={iconWidth}
          iconHeight={iconHeight}
        />
      )}
    </ServeBtnFeedback>
  );
};

export default CustomButton;
