import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {openCamera, openGallery} from '../../config/deviceCamera';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';
import LicenceImage from '../../assets/images/onboardingOverSixteen/upload-licence.png';
import CameraActionsPopUp from '../../components/CameraActionsPopUp';
import ScreenFilter from '../../components/ScreenFilter';

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
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
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

const OrganizationProfileImage = ({navigation}) => {
  const [image, setImage] = React.useState(false);
  const [uploadOptions, setUploadOptions] = React.useState(false);
  const renderImg = image || LicenceImage;

  // HANDLERS ---------------------------------------------------------
  const handleContinue = () => {
    if (!image) {
      setUploadOptions(true);
      return;
    }
    navigation.navigate('Profile');
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
    <View style={{flex: 1}}>
      {uploadOptions && <ScreenFilter />}
      <ScreenWrapper filter={Colors.lightBlack}>
        <View style={styles.wrapper}>
          <View style={styles.navigateActionContainer}>
            <NavigateAction
              title={image ? 'Step 6 of 6' : 'Step 5 of 6'}
              onPress={() => navigation.navigate('OrganizationWebsite')}
            />
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.title}>
              Add profile picture for your organisation
            </Text>
            <View style={styles.imageContainer}>
              <Image
                source={renderImg}
                resizeMode="cover"
                style={styles.image}
              />
            </View>
          </View>

          <View style={styles.actionsContainer}>
            {!uploadOptions && (
              <View>
                <CustomButton
                  title="Create Profile"
                  onPress={() => handleContinue()}
                />
                <CustomButton
                  title="Not Now"
                  style={{backgroundColor: Colors.transparent, marginTop: 10}}
                  onPress={() => navigation.navigate('Profile')}
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
    </View>
  );
};

export default OrganizationProfileImage;
