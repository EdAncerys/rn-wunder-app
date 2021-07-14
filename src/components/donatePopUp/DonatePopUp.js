import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Animated,
  Keyboard,
} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CloseIcon from '../../assets/icons/app/close-black.png';
import CustomButton from '../CustomButton';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: Colors.transparentWhite,
    width: width - width / 10,
    borderRadius: 30,
  },
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  titleContainer: {
    paddingHorizontal: '10%',
  },
  title: {
    ...Fonts.N_500_22,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: Colors.white,
    marginVertical: 24,
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
  icon: {
    width: 16,
    height: 16,
  },
});

// SERVERS ---------------------------------------------------------
const ServeDonateInput = ({
  setDonateAction,
  coins,
  setCoins,
  msg,
  setMsg,
  setDonateCoins,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={{...styles.actionContainer, alignSelf: 'flex-end'}}>
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          image={CloseIcon}
          imageStyling={styles.icon}
          onPress={() => setDonateAction(false)}
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
        onPress={() => setDonateCoins(true)}
      />
    </View>
  );
};

const ServeConfirmDonation = ({
  setDonateAction,
  coins,
  msg,
  setConfirmCoins,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.actionContainer}>
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          image={CloseIcon}
          imageStyling={styles.icon}
          onPress={() => setDonateAction(false)}
        />
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          image={CloseIcon}
          imageStyling={styles.icon}
          onPress={() => setDonateAction(false)}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Confirm your donation</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{coins}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{msg}</Text>
      </View>
      <CustomButton
        title="Confirm Coin(s)"
        onPress={() => setConfirmCoins(true)}
      />
    </View>
  );
};

const DonatePopUp = ({setDonateAction}) => {
  const [donateCoins, setDonateCoins] = React.useState(false);
  const [confirmCoins, setConfirmCoins] = React.useState(false);
  const [coins, setCoins] = React.useState('');
  const [msg, setMsg] = React.useState('');

  // ANIMATION HANDLER -----------------------------------------------------
  const scrollYAnimated = React.useRef(
    new Animated.Value(height / 6.5),
  ).current;

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      Animated.spring(scrollYAnimated, {
        toValue: height / 12,
        useNativeDriver: false,
        stiffness: 45,
      }).start();
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      Animated.spring(scrollYAnimated, {
        toValue: height / 6.5,
        useNativeDriver: false,
        stiffness: 80,
      }).start();
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  // RETURN ---------------------------------------------------------
  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [
          {
            translateY: scrollYAnimated,
          },
        ],
      }}>
      {!donateCoins && (
        <ServeDonateInput
          setDonateAction={setDonateAction}
          coins={coins}
          setCoins={setCoins}
          msg={msg}
          setMsg={setMsg}
          setDonateCoins={setDonateCoins}
        />
      )}
      {donateCoins && (
        <ServeConfirmDonation
          setDonateAction={setDonateAction}
          coins={coins}
          msg={msg}
          setConfirmCoins={setConfirmCoins}
        />
      )}
    </Animated.View>
  );
};

export default DonatePopUp;
