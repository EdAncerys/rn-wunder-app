import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import * as Icons from '../../config/icons';
import NavigateAction from '../../components/NavigateAction';
import CustomButton from '../../components/CustomButton';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
    marginVertical: '5%',
  },
  divider: {
    borderColor: Colors.silver,
    borderBottomWidth: 1,
    marginVertical: '3%',
  },
  title: {
    ...Fonts.N_400_14,
    color: Colors.lightBlack,
    marginVertical: 5,
    textAlign: 'center',
  },
});

const UserNotification = ({navigation, route}) => {
  const {profileDataInfo} = route.params;
  const {name} = profileDataInfo;
  console.log(profileDataInfo);

  // SERVERS ---------------------------------------------------------
  const ServeNavigation = () => {
    return (
      <View>
        <View style={{marginHorizontal: '5%'}}>
          <NavigateAction
            iconFill={Colors.lightBlack}
            title={`${name}`}
            titleStyling={{...Fonts.N_700_16, color: Colors.lightBlack}}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.divider}></View>
      </View>
    );
  };
  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper>
      <ServeNavigation />
      <View style={styles.container}>
        <Text style={styles.title}>Your QR code for:</Text>
        <Text style={styles.title}>savetheoceans - Local Beach Clean Up</Text>

        <View style={{justifyContent: 'center'}}>
          <CustomButton
            iconLeft="QRCode"
            iconWidth={width - 100}
            iconHeight={width}
            style={{backgroundColor: Colors.transparent, padding: 0}}
          />
        </View>
        <View>
          <CustomButton
            title="download to photos"
            onPress={() => alert('download to photos')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default UserNotification;
