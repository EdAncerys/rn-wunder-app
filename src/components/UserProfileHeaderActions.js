import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from './CustomButton';
import CommendActions from './commendActions/CommendActions';

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
});

const UserProfileHeaderActions = ({
  navigation,
  commend,
  profileDataInfo,
  color,
  onPress,
  walletOnPress,
}) => {
  const [donateReason, setDonateReason] = React.useState(false);
  const colorFill = color || Colors.white;

  // HANDLERS ---------------------------------------------------------
  const handleOnPress = () => {
    if (walletOnPress) {
      walletOnPress();
      return;
    }
    setDonateReason(true);
  };

  // SERVERS ---------------------------------------------------------
  const ServeProfileHeader = ({}) => {
    const {name, isVerified} = profileDataInfo;

    return (
      <View style={styles.container}>
        <View>
          <CustomButton
            style={{backgroundColor: Colors.transparent}}
            iconLeft="ChevronLeft"
            iconWidth={18.5}
            iconHeight={20}
            iconFill={colorFill}
            onPress={() => {
              navigation.goBack();
              onPress();
            }}
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              ...Fonts.N_700_16,
              color: colorFill,
            }}>
            @{name}
          </Text>
          {isVerified && (
            <CustomButton
              iconLeft="Verified"
              iconFill={Colors.primary}
              iconWidth={20}
              iconHeight={20}
              style={{backgroundColor: Colors.transparent}}
            />
          )}
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
            iconFill={colorFill}
            onPress={handleOnPress}
          />
        </View>
      </View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <View>
      <ServeProfileHeader />

      {donateReason && (
        <CommendActions
          commend
          donateReason={donateReason}
          setDonateReason={setDonateReason}
        />
      )}
    </View>
  );
};

export default UserProfileHeaderActions;
