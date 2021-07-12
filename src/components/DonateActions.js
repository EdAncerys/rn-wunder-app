import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../config/colors';
import LeftIcon from '../assets/icons/app/notifications.png';
import RightIcon from '../assets/icons/app/wallet.png';
import CustomButton from './CustomButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 32,
    height: 32,
  },
});

const DonateActions = props => {
  return (
    <View style={styles.container}>
      <View>
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          image={LeftIcon}
          imageStyling={styles.icon}
          onPress={() => alert('path')}
        />
      </View>
      <View>
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          image={RightIcon}
          imageStyling={styles.icon}
          onPress={() => alert('path')}
        />
      </View>
    </View>
  );
};

export default DonateActions;
