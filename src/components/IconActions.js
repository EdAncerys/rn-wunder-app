import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../config/colors';
import CustomButton from './CustomButton';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    color: Colors.white,
    fontFamily: 'Sailec',
    fontSize: 9,
    marginVertical: 9,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

const IconActions = ({actionImage, actionCount, onPress}) => {
  return (
    <View style={styles.container}>
      <View>
        <CustomButton
          image={actionImage}
          onPress={onPress}
          style={{backgroundColor: Colors.transparent}}
          imageStyling={{paddingVertical: 0, paddingHorizontal: 0}}
        />
      </View>
      <View>
        <Text style={styles.countText}>{actionCount}</Text>
      </View>
    </View>
  );
};

export default IconActions;
