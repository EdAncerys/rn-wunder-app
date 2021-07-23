import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
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
            style={{
              backgroundColor: Colors.secondary,
              padding: 10,
              borderRadius: 100,
            }}
            iconLeft="NotificationsLine"
            iconWidth={18.5}
            iconHeight={20}
            iconFill={Colors.white}
            onPress={() => navigation.navigate('DonationNotification')}
          />
        </View>
        {profile && <ServeNavigateProfile />}
        <View>
          <CustomButton
            style={{
              backgroundColor: Colors.secondary,
              padding: 10,
              borderRadius: 100,
            }}
            iconLeft="Wallet"
            iconWidth={20}
            iconHeight={20}
            iconFill={Colors.white}
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
