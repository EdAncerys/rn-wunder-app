import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Colors from '../config/colors';
import LeftIcon from '../assets/icons/back-left.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'Sailec',
    fontSize: 16,
  },
  iconContainer: {},
  textContainer: {
    flex: 1,
  },
});

const NavigateAction = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        <Image source={LeftIcon} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default NavigateAction;
