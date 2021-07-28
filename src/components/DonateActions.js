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
const ServeNavigateProfile = ({navigation, screen}) => {
  const [active, setActive] = React.useState({color: Colors.white});
  const [inactive, setInactive] = React.useState({color: Colors.lightSilver});

  React.useEffect(() => {
    setInactive({color: Colors.lightSilver});
    setActive({color: Colors.white});

    if (screen === 'CreateProAccount') {
      setActive({color: Colors.lightSilver});
      setInactive({color: Colors.white});
    }
  }, [screen]);

  return (
    <View style={styles.profileContainer}>
      <CustomButton
        style={{backgroundColor: Colors.transparent}}
        title="Personal"
        titleStyling={{...styles.profileType, ...active}}
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
        titleStyling={{...styles.profileType, ...inactive}}
        onPress={() =>
          navigation.navigate('ProfileStack', {
            screen: 'CreateProAccount',
            params: {screen: 'CreateProAccount'},
          })
        }
      />
    </View>
  );
};
const ServeProjects = ({navigation}) => {
  return (
    <View>
      <CustomButton
        style={{
          backgroundColor: Colors.transparent,
        }}
        title="Projects"
        titleStyling={{color: Colors.lightBlack, ...Fonts.N_700_16}}
        // onPress={() => navigation.navigate('AppStack', {screen: 'Profile'})}
      />
    </View>
  );
};

// RETURN ---------------------------------------------------------
const DonateActions = ({navigation, profile, projects, screen}) => {
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
            onPress={() =>
              navigation.navigate('HomeStack', {screen: 'Notifications'})
            }
          />
        </View>
        {profile && (
          <ServeNavigateProfile navigation={navigation} screen={screen} />
        )}
        {projects && <ServeProjects />}
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
