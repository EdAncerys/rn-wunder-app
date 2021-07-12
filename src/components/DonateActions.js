import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Colors from '../config/colors';
import LeftIcon from '../assets/icons/app/notifications.png';
import RightIcon from '../assets/icons/app/wallet.png';
import CustomButton from './CustomButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const DonateActions = props => {
  return (
    <View style={styles.container}>
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
  );
};

export default DonateActions;
