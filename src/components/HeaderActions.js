import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import LeftIcon from '../assets/icons/notifications.png';
import RightIcon from '../assets/icons/wallet.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  leftIconContainer: {
    flex: 1,
  },
  rightIconContainer: {},
});

const HeaderActions = ({ onPressLeftAction, onPressRightAction }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftIconContainer}
        onPress={onPressLeftAction}
      >
        <Image source={LeftIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rightIconContainer}
        onPress={onPressRightAction}
      >
        <Image source={RightIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderActions;
