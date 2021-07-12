import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import Colors from '../config/colors';
import CustomButton from './CustomButton';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparentWhite,
    paddingHorizontal: 5,
    paddingVertical: 30,
    width: width - width / 10,
    borderRadius: 30,
  },
  wrapper: {
    width: '95%',
  },
  titleContainer: {
    width: '75%',
  },
  title: {
    fontFamily: 'Sailec',
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 27.5,
  },
  inputContainer: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    borderRadius: 9,
    padding: 10,
  },
  coinInput: {
    fontFamily: 'Sailec',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 20,
  },
  textInput: {
    textAlign: 'left',
  },
});

const DonatePopUp = ({props}) => {
  const [donateCoins, setDonateCoins] = React.useState(0);
  const [msg, setMsg] = React.useState('');
  const [keyboardOffset, setKeyboardOffset] = React.useState(height / 3);

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardOffset(height / 10);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOffset(height / 3);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{...styles.container, top: keyboardOffset}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Enter number of coin(s) you wish to donate
          </Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.coinInput}
              onChangeText={setDonateCoins}
              autoCapitalize="none"
              value={donateCoins}
              keyboardType="numeric"
              maxLength={6}
            />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Leave a message!</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.inputContainer}>
            <TextInput
              style={{...styles.coinInput, ...styles.textInput}}
              onChangeText={setMsg}
              autoCapitalize="none"
              value={msg}
              multiline
              numberOfLines={6}
            />
          </View>
        </View>
        <View style={styles.wrapper}>
          <CustomButton title="Donate Coin(s)" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default DonatePopUp;
