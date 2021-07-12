import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../config/colors';
import CustomButton from './CustomButton';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  actionText: {
    color: Colors.white,
    fontFamily: 'Sailec',
    fontSize: 10,
    marginTop: 8,
  },
});

// SERVERS ---------------------------------------------------------
const ServeActionIcon = ({props}) => {
  return (
    <CustomButton
      image={props.actionImage}
      onPress={props.onPress}
      style={{backgroundColor: Colors.transparent}}
      imageStyling={{paddingVertical: 0, paddingHorizontal: 0}}
    />
  );
};
const ServeActionTitle = ({props}) => {
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
      {props.actionImage && <ServeActionIcon props={props} />}
      {props.actionTitle && <ServeActionTitle props={props} />}
    </View>
  );
};

export default IconActions;
