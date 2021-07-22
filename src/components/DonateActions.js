import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import LeftIcon from '../assets/icons/app/notifications.png';
import RightIcon from '../assets/icons/app/wallet.png';
import CustomButton from './CustomButton';
import DonatePopUp from './donateActions/DonatePopUp';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - width / 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  personalTitle: {
    ...Fonts.N_400_16,
    color: Colors.white,
  },
  professionalTitle: {
    ...Fonts.N_400_16,
    color: Colors.lightSilver,
  },
});

// SERVERS ---------------------------------------------------------
const ServeDonate = ({donateAction, setDonateAction}) => {
  return (
    <DonatePopUp
      donateAction={donateAction}
      setDonateAction={setDonateAction}
    />
  );
};
const ServeNavigateProfile = ({props}) => {
  return (
    <View style={styles.profileContainer}>
      <CustomButton
        style={{backgroundColor: Colors.transparent}}
        title="Personal"
        titleStyling={styles.personalTitle}
        // onPress={() => navigation.navigate('DonationNotification')}
        onPress={() => alert('Personal')}
      />
      <CustomButton
        style={{backgroundColor: Colors.transparent}}
        title="Professional"
        titleStyling={styles.professionalTitle}
        // onPress={() => navigation.navigate('DonationNotification')}
        onPress={() => alert('Professional')}
      />
    </View>
  );
};

// RETURN ---------------------------------------------------------
const DonateActions = ({navigation, profile}) => {
  const [donateAction, setDonateAction] = React.useState(false);

  return (
    <View>
      <View style={styles.container}>
        <View>
          <CustomButton
            style={{backgroundColor: Colors.transparent}}
            iconLeft={LeftIcon}
            iconStyling={styles.icon}
            onPress={() => navigation.navigate('DonationNotification')}
          />
        </View>
        {profile && <ServeNavigateProfile />}
        <View>
          <CustomButton
            style={{backgroundColor: Colors.transparent}}
            iconLeft={RightIcon}
            iconStyling={styles.icon}
            onPress={() => setDonateAction(!donateAction)}
          />
        </View>
      </View>
      {donateAction && (
        <ServeDonate
          donateAction={donateAction}
          setDonateAction={setDonateAction}
        />
      )}
    </View>
  );
};

export default DonateActions;
