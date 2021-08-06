import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from './CustomButton';
import ManageDonateActions from './donateReason/ManageDonateActions';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - width / 10,
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
  profileName: {
    ...Fonts.N_700_16,
    color: Colors.white,
  },
});

// SERVERS ---------------------------------------------------------
const ServeProfileHeader = ({
  navigation,
  profileDataInfo,
  setDonateReason,
  onPress,
}) => {
  const {name} = profileDataInfo;

  return (
    <View style={styles.container}>
      <View>
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          iconLeft="ChevronLeft"
          iconWidth={18.5}
          iconHeight={20}
          iconFill={Colors.white}
          onPress={() => {
            navigation.goBack();
            onPress();
          }}
        />
      </View>

      <View>
        <Text style={styles.profileName}>@{name}</Text>
      </View>

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
          onPress={() => setDonateReason(true)}
        />
      </View>
    </View>
  );
};

// RETURN ---------------------------------------------------------
const UserProfileHeaderActions = ({navigation, profileDataInfo, onPress}) => {
  const [donateReason, setDonateReason] = React.useState(false);

  return (
    <View>
      <ServeProfileHeader
        navigation={navigation}
        profileDataInfo={profileDataInfo}
        setDonateReason={setDonateReason}
        onPress={onPress}
      />

      {donateReason && (
        <ManageDonateActions
          donateReason={donateReason}
          setDonateReason={setDonateReason}
        />
      )}
    </View>
  );
};

export default UserProfileHeaderActions;
