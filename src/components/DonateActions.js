import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Colors from '../config/colors';
import LeftIcon from '../assets/icons/app/notifications.png';
import RightIcon from '../assets/icons/app/wallet.png';
import CustomButton from './CustomButton';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - width / 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
  donateContainer: {
    position: 'absolute',
    backgroundColor: Colors.lightBlack,
    top: 200,
    padding: 10,
    width: width - width / 10,
    height: width,
  },
});

// SERVERS ---------------------------------------------------------
const ServeDonate = () => {
  return (
    <View style={styles.donateContainer}>
      <View>
        <Text style={styles.title}>
          Enter number of coin(s) you wish to donate
        </Text>
      </View>
    </View>
  );
};

// RETURN ---------------------------------------------------------
const DonateActions = props => {
  const [donate, setDonate] = React.useState(false);

  return (
    <View>
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
            onPress={() => setDonate(true)}
          />
        </View>
      </View>
      {donate && <ServeDonate />}
    </View>
  );
};

export default DonateActions;
