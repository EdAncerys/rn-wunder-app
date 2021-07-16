import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from './CustomButton';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  actionTitle: {
    ...Fonts.N_400_9,
    color: Colors.white,
    marginTop: 8,
  },
});

// SERVERS ---------------------------------------------------------
const ServeActionIcon = ({props}) => {
  return (
    <CustomButton
      imageLeft={props.image}
      onPress={props.onPress}
      style={{backgroundColor: Colors.transparent}}
      titleStyling={{...props.titleStyling}}
      imageStyling={{...props.imageStyling}}
    />
  );
};
const ServeActionTitle = ({props}) => {
  return (
    <Text style={{...styles.actionTitle, ...props.actionTitleStyle}}>
      {props.actionTitle}
    </Text>
  );
};

// RETURN ---------------------------------------------------------
const IconActions = props => {
  return (
    <View style={styles.container}>
      {props.image && <ServeActionIcon props={props} />}
      {props.actionTitle && <ServeActionTitle props={props} />}
    </View>
  );
};

export default IconActions;
