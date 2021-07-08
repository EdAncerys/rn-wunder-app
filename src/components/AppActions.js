import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Colors from '../config/colors';
import LeftIcon from '../assets/icons/notifications.png';
import RightIcon from '../assets/icons/wallet.png';
import IconActions from './IconActions';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    minWidth: 40,
    minHeight: 40,
    borderWidth: 2,
    borderRadius: 24,
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderColor: Colors.white,
    backgroundColor: Colors.blurFilter,
  },
});

const actions = [
  {
    image: <Image source={LeftIcon} />,
    count: 99,
    onPress: () => alert('path'),
  },
  {
    image: <Image source={LeftIcon} />,
    count: 99,
    onPress: () => alert('path'),
  },
  {
    image: <Image source={LeftIcon} />,
    count: 99,
    onPress: () => alert('path'),
  },
];

const AppActions = props => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {actions.map(action => {
          return (
            <IconActions
              actionImage={action.image}
              actionCount={action.count}
              onPress={action.onPress}
            />
          );
        })}
      </View>
    </View>
  );
};

export default AppActions;
