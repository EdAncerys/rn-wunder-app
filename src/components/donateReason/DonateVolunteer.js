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

const DonateVolunteer = ({
  setDonateReason,
  setReason,
  setVolunteer,
  setDonateCoins,
}) => {
  return (
    <View>
      <View style={{...styles.actionContainer}}>
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          iconLeft="ChevronLeft"
          iconWidth={16}
          iconHeight={16}
          onPress={() => {
            setVolunteer(false);
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
          Donating to users will only occur if the financial goal is reached
        </Text>
      </View>
      <View style={styles.msgContainer}>
        <Text style={styles.msg}>
          If the financial goal for the event is reached then your donation will
          be split evenly amongst each user
        </Text>
      </View>

      <View>
        <CustomButton
          title="Continue"
          onPress={() => {
            setVolunteer(false);
            setDonateCoins(true);
          }}
        />
      </View>
    </View>
  );
};

export default DonateVolunteer;
