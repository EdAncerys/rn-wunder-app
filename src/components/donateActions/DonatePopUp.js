import * as React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Animated,
  Keyboard,
  Modal,
} from 'react-native';

import Colors from '../../config/colors';
import DonateInput from './DonateInput';
import ConfirmDonation from './ConfirmDonation';
import DonationConfirmationMsg from './DonationConfirmationMsg';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: width / 20,
    backgroundColor: Colors.transparentMatWhite,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: Colors.lightBlack,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 1,
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});

const DonatePopUp = ({donateAction, setDonateAction}) => {
  const [donateCoins, setDonateCoins] = React.useState(true);
  const [confirmCoins, setConfirmCoins] = React.useState(false);
  const [thanksMsg, setThanksMsg] = React.useState(false);
  const [coins, setCoins] = React.useState('');
  const [msg, setMsg] = React.useState('');

  // ANIMATION HANDLER -----------------------------------------------------
  // const scrollYAnimated = React.useRef(
  //   new Animated.Value(height / 6.5),
  // ).current;

  // React.useEffect(() => {
  //   const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
  //     Animated.spring(scrollYAnimated, {
  //       toValue: height / 12,
  //       useNativeDriver: false,
  //       stiffness: 45,
  //     }).start();
  //   });
  //   const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
  //     Animated.spring(scrollYAnimated, {
  //       toValue: height / 6.5,
  //       useNativeDriver: false,
  //       stiffness: 80,
  //     }).start();
  //   });

  //   return () => {
  //     showSubscription.remove();
  //     hideSubscription.remove();
  //   };
  // }, []);

  // RETURN ---------------------------------------------------------
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={donateAction}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.modalView}>
            {donateCoins && (
              <DonateInput
                setDonateAction={setDonateAction}
                coins={coins}
                setCoins={setCoins}
                msg={msg}
                setMsg={setMsg}
                donateCoins={donateCoins}
                setDonateCoins={setDonateCoins}
                setConfirmCoins={setConfirmCoins}
              />
            )}
            {confirmCoins && (
              <ConfirmDonation
                setDonateAction={setDonateAction}
                coins={coins}
                msg={msg}
                setDonateCoins={setDonateCoins}
                setConfirmCoins={setConfirmCoins}
                setThanksMsg={setThanksMsg}
              />
            )}
            {thanksMsg && (
              <DonationConfirmationMsg
                setDonateAction={setDonateAction}
                setConfirmCoins={setConfirmCoins}
                setThanksMsg={setThanksMsg}
              />
            )}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default DonatePopUp;
