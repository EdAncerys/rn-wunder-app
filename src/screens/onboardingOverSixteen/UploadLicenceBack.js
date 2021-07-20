import * as React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';
import LicenceImage from '../../assets/images/onboardingOverSixteen/upload-licence.png';
import RightArrow from '../../assets/icons/app/right-arrow-white.png';

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

const UploadLicenceBack = ({navigation}) => {
  return (
    <ScreenWrapper filter={Colors.lightBlack}>
      <View style={styles.navigateActionContainer}>
        <NavigateAction
          title="Step 3 of 7"
          onPress={() => navigation.navigate('UploadIdentity')}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Upload a clear picture of the back of your licence
        </Text>
        <View style={styles.imageContainer}>
          <Image source={LicenceImage} />
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <CustomButton
          imageLeft={RightArrow}
          style={{paddingVertical: 10, paddingHorizontal: 24}}
          imageStyling={{width: 24, height: 18}}
          onPress={() => navigation.navigate('UploadPictureOfYourself')}
        />
      </View>
    </ScreenWrapper>
  );
};

export default UploadLicenceBack;
