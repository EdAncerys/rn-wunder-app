import * as React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Animated,
  Keyboard,
} from 'react-native';

import Colors from '../../config/colors';
import DonateInput from './DonateInput';
import ConfirmDonation from './ConfirmDonation';
import DonationConfirmationMsg from './DonationConfirmationMsg';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: Colors.transparentWhite,
    width: width - width / 10,
    borderRadius: 30,
  },
});

const DonatePopUp = ({setDonateAction}) => {
  const [donateCoins, setDonateCoins] = React.useState(false);
  const [confirmCoins, setConfirmCoins] = React.useState(false);
  const [coins, setCoins] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const inputRef = React.createRef();

  // KEEP KEYBOARD VISIBLE
  const focusOn = () => {
    // inputRef.current.focusOn();
    console.log('press');
  };

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
    <TouchableWithoutFeedback onPress={focusOn}>
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
          <DonateInput
            setDonateAction={setDonateAction}
            coins={coins}
            setCoins={setCoins}
            msg={msg}
            setMsg={setMsg}
            setDonateCoins={setDonateCoins}
          />
        )}
        {donateCoins && !confirmCoins && (
          <ConfirmDonation
            setDonateAction={setDonateAction}
            coins={coins}
            msg={msg}
            setDonateCoins={setDonateCoins}
            setConfirmCoins={setConfirmCoins}
          />
        )}
        {confirmCoins && (
          <DonationConfirmationMsg
            setDonateAction={setDonateAction}
            setConfirmCoins={setConfirmCoins}
          />
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default DonatePopUp;
