import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';
import PassportImage from '../../assets/images/onboardingOverSixteen/upload-passport.png';
import RightArrow from '../../assets/icons/app/right-arrow-white.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
  },
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    paddingTop: '30%',
  },
  actionsContainer: {
    paddingBottom: '18%',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '10%',
  },
  titleText: {
    ...Fonts.N_700_16,
    color: Colors.white,
  },
  navigateActionContainer: {
    paddingTop: '20%',
    marginHorizontal: '5%',
  },
});

const UploadPassport = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navigateActionContainer}>
        <NavigateAction
          title="Step 2 of 7"
          onPress={() => navigation.navigate('UploadIdentity')}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Upload a clear picture of the</Text>
        <Text style={styles.titleText}>front of your licence</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={PassportImage} />
      </View>

      <View style={styles.actionsContainer}>
        <CustomButton
          image={RightArrow}
          imageStyling={{paddingVertical: 16, paddingHorizontal: 35}}
          // onPress={() => navigation.navigate('AgeIdentity')}
          onPress={() => alert('path')}
        />
      </View>
    </View>
  );
};

export default UploadPassport;
