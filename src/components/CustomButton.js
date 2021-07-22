import * as React from 'react';
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
const ServeIcon = ({iconLeft, iconRight, iconWidth, iconHeight, iconFill}) => {
  const iconName = iconLeft || iconRight;
  const SvgIcon = Icons[iconName];

  return (
    <View style={styles.iconContainer}>
      <SvgIcon width={iconWidth} height={iconHeight} fill={iconFill} />
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
  iconLeft,
  iconRight,
  onPress,
  shadow,
  style,
  titleStyling,
  iconFill,
  iconWidth,
  iconHeight,
  inactive,
}) => {
  return (
    <ServeBtnFeedback
      onPress={onPress}
      shadow={shadow}
      style={style}
      inactive={inactive}>
      {iconLeft && (
        <ServeIcon
          iconLeft={iconLeft}
          iconFill={iconFill}
          iconWidth={iconWidth}
          iconHeight={iconHeight}
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
