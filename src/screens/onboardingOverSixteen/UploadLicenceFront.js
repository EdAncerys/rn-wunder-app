import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';
import LicenceImage from '../../assets/images/onboardingOverSixteen/upload-licence.png';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  contentContainer: {
    flex: 4,
  },
  actionsContainer: {
    flex: 1.5,
    justifyContent: 'center',
  },
  imageContainer: {
    marginVertical: '8%',
    alignItems: 'center',
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    resizeMode: 'cover',
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
  },
});

const UploadLicenceFront = ({navigation}) => {
  const [image, setImage] = React.useState(false);
  const [uploadOptions, setUploadOptions] = React.useState(false);
  console.log(image);
  const imgFile = image || LicenceImage;

  // SERVERS ---------------------------------------------------------
  const ServeActions = ({props}) => {
    return (
      <View>
        <CustomButton
          title="Camera"
          titleStyling={{...Fonts.N_400_20, color: Colors.lightBlue}}
          style={{
            backgroundColor: Colors.transparentMatWhite,
            borderRadius: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomWidth: 1,
            borderColor: Colors.lightSilver,
          }}
          onPress={openCamera}
        />
        <CustomButton
          title="Photo & Video Gallery"
          titleStyling={{...Fonts.N_400_20, color: Colors.lightBlue}}
          style={{
            backgroundColor: Colors.transparentMatWhite,
            borderRadius: 0,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
          onPress={openGallery}
        />
        <CustomButton
          title="Cancel"
          titleStyling={{...Fonts.N_400_20, color: Colors.lightBlue}}
          style={{backgroundColor: Colors.white, marginVertical: 10}}
          onPress={() => setUploadOptions(false)}
        />
      </View>
    );
  };

  // HANDLERS ---------------------------------------------------------
  const handleContinue = () => {
    if (!image) {
      setUploadOptions(true);
      return;
    }
    navigation.navigate('UploadLicenceBack');
    setImage('');
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
        quality: 0.7,
        includeBase64: false,
      },
      response => {
        const image = response.assets[0];
        setImage({uri: image.uri});
        setUploadOptions(false);
      },
    );
  };
  const openCamera = () => {
    launchCamera(
      {saveToPhotos: true, mediaType: 'photo', includeBase64: false},
      response => {
        console.log(response);
      },
    );
  };

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
            Upload a clear picture of the front of your licence
          </Text>
          <View style={styles.imageContainer}>
            <Image source={imgFile} resizeMode="cover" style={styles.image} />
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
          {uploadOptions && <ServeActions />}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default UploadLicenceFront;
