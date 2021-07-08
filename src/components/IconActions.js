import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../config/colors';
import CustomButton from './CustomButton';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: Colors.white,
    fontFamily: 'Sailec',
    fontSize: 10,
  },
});

// SERVERS ---------------------------------------------------------
const serveActionIcon = props => {
  return (
    <CustomButton
      image={props.actionImage}
      onPress={props.onPress}
      style={{backgroundColor: Colors.transparent}}
      imageStyling={{paddingVertical: 9, paddingHorizontal: 0}}
    />
  );
};
const serveActionTitle = props => {
  return (
    <Text style={{...styles.actionText, ...props.actionTitleStyle}}>
      {props.actionTitle}
    </Text>
  );
};

// RETURN ---------------------------------------------------------
const IconActions = props => {
  return (
    <View style={styles.container}>
      {props.actionImage && serveActionIcon(props)}
      {props.actionTitle && serveActionTitle(props)}
    </View>
  );
};

export default IconActions;
