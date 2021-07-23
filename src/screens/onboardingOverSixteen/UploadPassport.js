import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';
import LicenceImage from '../../assets/images/onboardingOverSixteen/upload-passport.png';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 4,
    alignItems: 'center',
  },
  actionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginVertical: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...Fonts.N_700_16,
    textAlign: 'center',
    paddingHorizontal: '20%',
    color: Colors.white,
  },
  navigateActionContainer: {
    flex: 1,
    marginTop: '5%',
    marginHorizontal: '5%',
  },
});

const UploadLicenceFront = ({navigation}) => {
  return (
    <ScreenWrapper filter={Colors.lightBlack}>
      <View style={styles.navigateActionContainer}>
        <NavigateAction
          title="Step 2 of 7"
          onPress={() => navigation.navigate('UploadIdentity')}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Upload a clear picture of the inside page of your passport
        </Text>
        <View style={styles.imageContainer}>
          <Image source={LicenceImage} />
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <CustomButton
          iconLeft="ArrowRight"
          iconWidth={24}
          style={{paddingVertical: 10, paddingHorizontal: 24}}
          onPress={() => navigation.navigate('UploadPictureOfYourself')}
        />
      </View>
    </ScreenWrapper>
  );
};

export default UploadLicenceFront;
