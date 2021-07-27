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
  profileType: {
    ...Fonts.N_400_16,
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
const ServeNavigateProfile = ({navigation, professional}) => {
  console.log(professional);

  let titleActive = {color: Colors.white};
  let titleInactive = {color: Colors.lightSilver};

  return (
    <View style={styles.profileContainer}>
      <CustomButton
        style={{backgroundColor: Colors.transparent}}
        title="Personal"
        titleStyling={{...styles.profileType, ...titleActive}}
        onPress={() => navigation.navigate('AppStack', {screen: 'Profile'})}
      />
      <View style={{justifyContent: 'center'}}>
        <View
          style={{
            borderRightWidth: 2,
            borderColor: Colors.white,
            height: 35,
          }}
        />
      </View>
      <CustomButton
        style={{backgroundColor: Colors.transparent}}
        title="Professional"
        titleStyling={{...styles.profileType, ...titleInactive}}
        onPress={() =>
          navigation.navigate('ProfileStack', {screen: 'CreateProAccount'})
        }
      />
    </View>
  );
};

// RETURN ---------------------------------------------------------
const DonateActions = ({navigation, profile, professional}) => {
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
        {profile && (
          <ServeNavigateProfile navigation={navigation} professional />
        )}
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
