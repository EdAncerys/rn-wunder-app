import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {openCamera, openGallery} from '../../config/deviceCamera';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';
import CameraActionsPopUp from '../../components/CameraActionsPopUp';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  bioContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: '5%',
  },
  bioWrapper: {
    flex: 1,
  },
  bioTitleWrapper: {
    flex: 2,
  },
  title: {
    ...Fonts.N_700_16,
    color: Colors.lightBlack,
    textAlign: 'justify',
  },
  bioTitle: {
    ...Fonts.N_400_14,
    color: Colors.lightBlack,
    textAlign: 'justify',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '5%',
  },
  footerTitle: {
    ...Fonts.N_400_8,
    color: Colors.lightBlack,
    textAlign: 'justify',
    marginHorizontal: '5%',
  },
  navigateActionContainer: {
    marginTop: '5%',
    marginHorizontal: '5%',
  },
  content: {
    flex: 1,
    marginHorizontal: '5%',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSilver,
    marginVertical: '2%',
  },
  btnTitleStyling: {
    flex: 1,
    ...Fonts.N_400_16,
    color: Colors.lightBlack,
  },
  btnStyling: {
    backgroundColor: Colors.transparent,
    marginVertical: 5,
  },
  contentWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSilver,
  },
  logoContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: '5%',
  },
});

const Account = ({navigation, route}) => {
  const [image, setImage] = React.useState(null);
  const [imgType, setImgType] = React.useState(null);
  const [avatar, setAvatar] = React.useState(false);
  const [uploadOptions, setUploadOptions] = React.useState(false);
  const {item} = route.params;
  const {url, name, about, location} = item;
  const renderImg = image || url;

  // HANDLERS ---------------------------------------------------------
  const handleGallery = () => {
    openGallery(setImage);
  };

  const handleCamera = () => {
    openCamera(setImage);
  };

  React.useEffect(() => {
    if (image) imgType === 'photo' ? setAvatar(false) : setAvatar(true);
    setImgType(null);
    setUploadOptions(false);
  }, [image]);

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.white}>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <NavigateAction
            title="Account"
            titleStyling={{color: Colors.lightBlack}}
            iconFill={Colors.lightBlack}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.content}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                height: 170,
              }}>
              <Image
                style={{
                  width: 80,
                  height: avatar ? 80 : 170,
                  borderRadius: avatar ? 40 : 10,
                  overflow: 'hidden',
                }}
                source={renderImg}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-around',
              }}>
              <CustomButton
                title="Change Profile Photo"
                style={{
                  ...Fonts.N_700_14,
                }}
                onPress={() => {
                  setImgType('photo');
                  setUploadOptions(true);
                }}
              />
              <CustomButton
                title="Select an Avatar"
                style={{
                  ...Fonts.N_700_14,
                }}
                onPress={() => {
                  setImgType('avatar');
                  setUploadOptions(true);
                }}
              />
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.bioContainer}>
              <View style={styles.bioWrapper}>
                <Text style={styles.title}>Name</Text>
              </View>
              <View style={styles.bioTitleWrapper}>
                <Text style={styles.bioTitle}>{`${name}`}</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.bioContainer}>
              <View style={styles.bioWrapper}>
                <Text style={styles.title}>Username</Text>
              </View>
              <View style={styles.bioTitleWrapper}>
                <Text style={styles.bioTitle}>{`${name}`}</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.bioContainer}>
              <View style={styles.bioWrapper}>
                <Text style={styles.title}>Bio</Text>
              </View>
              <View style={styles.bioTitleWrapper}>
                <Text style={styles.bioTitle}>{`${about}`}</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.bioContainer}>
              <View style={styles.bioWrapper}>
                <Text style={styles.title}>Location</Text>
              </View>
              <View style={styles.bioTitleWrapper}>
                <Text style={styles.bioTitle}>{`${location}`}</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <CustomButton
              title="Select Interests"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() =>
                navigation.navigate('ProfileStack', {screen: 'SelectInterests'})
              }
            />
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerTitle}>
            © Copyright 2021 • All Rights Reserved
          </Text>
          <Text style={styles.footerTitle}>
            Terms & Conditions Privacy Policy
          </Text>
        </View>
      </View>
      {uploadOptions && (
        <CameraActionsPopUp
          handleCamera={handleCamera}
          handleGallery={handleGallery}
          setUploadOptions={setUploadOptions}
        />
      )}
    </ScreenWrapper>
  );
};

export default Account;
