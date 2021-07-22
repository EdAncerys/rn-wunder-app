import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CloseIcon from '../../assets/icons/app/close-black.png';
import LeftBlack from '../../assets/icons/app/left-black.png';
import CustomButton from '../CustomButton';
import Tick from '../../assets/icons/app/tick.png';

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
  imageContainer: {
    alignItems: 'center',
    marginVertical: 25,
  },
  msg: {
    ...Fonts.N_400_10,
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

const DonationConfirmationMsg = ({setDonateAction, setConfirmCoins}) => {
  return (
    <TouchableWithoutFeedback onPress={() => setDonateAction(false)}>
      <View style={styles.container}>
        <View style={styles.actionContainer}>
          <CustomButton
            style={{backgroundColor: Colors.transparent}}
            iconLeft={LeftBlack}
            iconStyling={styles.icon}
            onPress={() => setConfirmCoins(false)}
          />
          <CustomButton
            style={{backgroundColor: Colors.transparent}}
            iconLeft={CloseIcon}
            iconStyling={styles.icon}
            onPress={() => setDonateAction(false)}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Thank you for your donation!</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={Tick} />
        </View>
        <View>
          <Text style={styles.msg}>
            (a receipt can be found in your wallet)
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DonationConfirmationMsg;
