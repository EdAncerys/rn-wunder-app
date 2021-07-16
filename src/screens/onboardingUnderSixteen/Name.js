import * as React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';

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
  inputContainer: {
    flex: 4,
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '25%',
  },
  actionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
    backgroundColor: 'tomato',
  },
  actionsWrapper: {
    width: '100%',
  },
  titleText: {
    ...Fonts.N_700_16,
    color: Colors.white,
  },
  navigateActionContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: '5%',
    backgroundColor: 'tomato',
  },
});

const UploadIdentity = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.navigateActionContainer}>
        <NavigateAction
          title="Step 1 of 7"
          onPress={() => navigation.navigate('AgeQuestion')}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>What is your name?</Text>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.titleText}>What is your name?</Text>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <View style={styles.actionsWrapper}>
          <CustomButton
            title="Driving Licence"
            onPress={() => navigation.navigate('UploadLicenceFront')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadIdentity;
