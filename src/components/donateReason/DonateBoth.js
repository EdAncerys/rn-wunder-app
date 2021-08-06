import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../CustomButton';

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: '10%',
  },
  title: {
    ...Fonts.N_700_18,
    color: Colors.lightBlack,
    textAlign: 'center',
  },
  msgContainer: {
    paddingHorizontal: '5%',
    marginVertical: '5%',
  },
  msg: {
    ...Fonts.N_400_12,
    color: Colors.lightBlack,
    textAlign: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const DonateBoth = ({setDonateReason, setReason, setBoth, setDonateCoins}) => {
  return (
    <View>
      <View style={{...styles.actionContainer}}>
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          iconLeft="ChevronLeft"
          iconWidth={16}
          iconHeight={16}
          iconStyling={styles.icon}
          onPress={() => {
            setBoth(false);
            setReason(true);
          }}
        />
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          iconLeft="Cross"
          iconWidth={16}
          iconHeight={16}
          onPress={() => setDonateReason(false)}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Donating to both will only occur if the financial goal is reached
        </Text>
      </View>
      <View style={styles.msgContainer}>
        <Text style={styles.msg}>
          Your donation will be split in half, half to the event and half
          distributed evenly amongst each user
        </Text>
      </View>

      <View>
        <CustomButton
          title="Continue"
          onPress={() => {
            setBoth(false);
            setDonateCoins(true);
          }}
        />
      </View>
    </View>
  );
};

export default DonateBoth;
