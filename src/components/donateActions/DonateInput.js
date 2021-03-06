import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../CustomButton';

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: '10%',
  },
  title: {
    ...Fonts.N_500_22,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: Colors.white,
    marginVertical: '5%',
    borderRadius: 9,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: Colors.lightBlack,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 1,
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  coinInput: {
    ...Fonts.N_400_20,
    paddingVertical: 5,
    textAlign: 'center',
    textAlignVertical: 'top',
  },
  textInput: {
    ...Fonts.N_400_15,
    textAlign: 'left',
    height: 80,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const DonateInput = ({
  setDonateAction,
  coins,
  setCoins,
  msg,
  setMsg,
  donateCoins,
  setDonateCoins,
  setConfirmCoins,
}) => {
  return (
    <View>
      <View style={{...styles.actionContainer, alignSelf: 'flex-end'}}>
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          iconLeft="Cross"
          iconWidth={16}
          iconHeight={16}
          onPress={() => setDonateAction(!donateCoins)}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Enter number of coin(s) you wish to donate
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.coinInput}
          value={coins}
          onChangeText={setCoins}
          autoCapitalize="none"
          keyboardType="numeric"
          maxLength={6}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Leave a message!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={{...styles.coinInput, ...styles.textInput}}
          value={msg}
          onChangeText={setMsg}
          autoCapitalize="none"
          multiline
        />
      </View>
      <CustomButton
        title="Donate Coin(s)"
        onPress={() => {
          setDonateCoins(false);
          setConfirmCoins(true);
        }}
      />
    </View>
  );
};

export default DonateInput;
