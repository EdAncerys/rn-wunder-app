import * as React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CloseIcon from '../../assets/icons/app/close-black.png';
import LeftBlack from '../../assets/icons/app/left-black.png';
import CustomButton from '../CustomButton';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  titleContainer: {
    paddingHorizontal: '20%',
  },
  title: {
    ...Fonts.N_500_22,
    textAlign: 'center',
  },
  coinContainer: {
    marginVertical: 20,
  },
  coins: {
    ...Fonts.N_400_45,
    textAlign: 'center',
  },
  msgContainer: {
    maxHeight: 150,
    marginBottom: 20,
  },
  msg: {
    ...Fonts.N_400_15,
    textAlign: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 16,
    height: 16,
  },
});

const ConfirmDonation = ({
  setDonateAction,
  coins,
  msg,
  setDonateCoins,
  setConfirmCoins,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          imageLeft={LeftBlack}
          imageStyling={styles.icon}
          onPress={() => setDonateCoins(false)}
        />
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          imageLeft={CloseIcon}
          imageStyling={styles.icon}
          onPress={() => setDonateAction(false)}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Confirm your donation</Text>
      </View>
      <View style={styles.coinContainer}>
        <Text style={styles.coins}>{coins}</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.msgContainer}>
          <Text style={styles.msg}>{msg}</Text>
        </View>
      </ScrollView>
      <View>
        <CustomButton
          title="Confirm Coin(s)"
          onPress={() => setConfirmCoins(true)}
        />
      </View>
    </View>
  );
};

export default ConfirmDonation;
