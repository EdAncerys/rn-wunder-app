import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {openCamera, openGallery} from '../../config/deviceCamera';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';
import LicenceImage from '../../assets/images/onboardingOverSixteen/upload-passport.png';
import CameraActionsPopUp from '../../components/CameraActionsPopUp';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 4,
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  actionsContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    marginBottom: '5%',
  },
  image: {
    width: 280,
    height: 360,
    borderRadius: 12,
    overflow: 'hidden',
    resizeMode: 'cover',
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
  const [image, setImage] = React.useState(false);
  const [uploadOptions, setUploadOptions] = React.useState(false);
  const renderImg = image || LicenceImage;
  const imgOpacity = uploadOptions ? 0.4 : 1;

  // HANDLERS ---------------------------------------------------------
  const handleContinue = () => {
    if (!image) {
      setUploadOptions(true);
      return;
    }
    navigation.navigate('UploadPictureOfYourself');
    setImage(null);
  };

  const handleGallery = () => {
    openGallery(setImage);
  };

  const handleCamera = () => {
    openCamera(setImage);
  };

  React.useEffect(() => {
    if (image) setUploadOptions(false);
  }, [image]);

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.lightBlack}>
      <View style={styles.wrapper}>
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
            <Image
              source={renderImg}
              resizeMode="cover"
              style={{...styles.image, opacity: imgOpacity}}
            />
          </View>
        </View>

        <View style={styles.actionsContainer}>
          {!uploadOptions && (
            <View style={{alignItems: 'center'}}>
              <CustomButton
                iconLeft="ArrowRight"
                iconWidth={24}
                iconFill={Colors.white}
                style={{paddingVertical: 10, paddingHorizontal: 24}}
                onPress={handleContinue}
              />
            </View>
          )}
          {uploadOptions && (
            <CameraActionsPopUp
              handleCamera={handleCamera}
              handleGallery={handleGallery}
              setUploadOptions={setUploadOptions}
            />
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default UploadLicenceFront;
