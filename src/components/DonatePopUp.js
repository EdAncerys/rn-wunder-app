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

import Colors from '../config/colors';
import CloseIcon from '../assets/icons/app/close-black.png';
import CustomButton from './CustomButton';

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
    fontFamily: 'Sailec',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 27.5,
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
    fontFamily: 'Sailec',
    textAlign: 'center',
    fontWeight: '400',
    paddingVertical: 6,
    fontSize: 20,
  },
  textInput: {
    textAlign: 'left',
    fontSize: 15,
    lineHeight: 25,
    height: 80,
  },
  closeContainer: {
    alignSelf: 'flex-end',
  },
  icon: {
    width: 16,
    height: 16,
  },
});

// SERVERS ---------------------------------------------------------
const ServeDonateInput = ({
  setDonateAction,
  setCoins,
  setMsg,
  setDonateCoins,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.closeContainer}>
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
          onChangeText={setMsg}
          autoCapitalize="none"
          multiline={true}
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
  setCoins,
  setMsg,
  setDonateCoins,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.closeContainer}>
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
          onChangeText={setMsg}
          autoCapitalize="none"
          multiline={true}
        />
      </View>
      <CustomButton
        title="Confirm Coin(s)"
        onPress={() => setDonateCoins(true)}
      />
    </View>
  );
};

const DonatePopUp = ({setDonateAction}) => {
  const [donateCoins, setDonateCoins] = React.useState(false);
  const [coins, setCoins] = React.useState(0);
  const [msg, setMsg] = React.useState('');

  // ANIMATION HANDLER -----------------------------------------------------
  const scrollYAnimated = React.useRef(
    new Animated.Value(height / 6.5),
  ).current;

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      Animated.spring(scrollYAnimated, {
        toValue: height / 12,
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
          setCoins={setCoins}
          setMsg={setMsg}
          setDonateCoins={setDonateCoins}
        />
      )}
    </Animated.View>
  );
};

export default DonatePopUp;
