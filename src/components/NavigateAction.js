import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from './CustomButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    ...Fonts.N_700_16,
    color: Colors.lightSilver,
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
});

const NavigateAction = props => {
  return (
    <View style={styles.container}>
      <CustomButton
        onPress={props.onPress}
        iconLeft="ChevronLeft"
        iconWidth={12}
        iconFill={Colors.white}
        style={{backgroundColor: Colors.transparent}}
        iconStyling={{width: 12, height: 20}}
      />
      <View style={styles.textContainer}>
        <Text style={{...styles.titleText, ...props.titleStyling}}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default NavigateAction;
