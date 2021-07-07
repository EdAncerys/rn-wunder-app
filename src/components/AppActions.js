import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Colors from '../config/colors';
import LeftIcon from '../assets/icons/notifications.png';
import RightIcon from '../assets/icons/wallet.png';
import CustomButton from './CustomButton';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: Colors.white,
    backgroundColor: Colors.matFilter,
  },
});

const actions = [
  {
    image: (
      <CustomButton
        style={{backgroundColor: Colors.transparent}}
        image={<Image source={LeftIcon} />}
        onPress={() => alert('path')}
      />
    ),
    onPress: () => alert('path'),
  },
  {
    image: (
      <CustomButton
        style={{backgroundColor: Colors.transparent}}
        image={<Image source={LeftIcon} />}
        onPress={() => alert('path')}
      />
    ),
    onPress: () => alert('path'),
  },
];

const AppActions = props => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <CustomButton
            style={{backgroundColor: Colors.transparent}}
            image={<Image source={LeftIcon} />}
            onPress={() => alert('path')}
          />
        </View>
        <View>
          <CustomButton
            style={{backgroundColor: Colors.transparent}}
            image={<Image source={RightIcon} />}
            onPress={() => alert('path')}
          />
        </View>
      </View>
    </View>
  );
};

export default AppActions;
