import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 4,
    alignItems: 'center',
    paddingTop: '15%',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '9.5%',
  },
  title: {
    ...Fonts.N_700_16,
    color: Colors.white,
  },
  inputWrapper: {
    width: '100%',
  },
  inputContainer: {
    ...Fonts.N_400_12,
    marginVertical: 10,
    padding: 15,
    borderRadius: 4,
    backgroundColor: Colors.white,
  },
  actionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsWrapper: {
    width: '100%',
  },
  navigateActionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

const UploadIdentity = ({navigation}) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.wrapper}>
          <View style={styles.navigateActionContainer}>
            <NavigateAction
              title="Step 1 of 7"
              onPress={() => navigation.navigate('AgeQuestion')}
            />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>What is your name?</Text>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="First Name"
                placeholderTextColor={Colors.lightSilver}
                onChangeText={setFirstName}
                autoCapitalize="none"
                value={firstName}
                style={styles.inputContainer}
              />
              <TextInput
                placeholder="Last Name"
                placeholderTextColor={Colors.lightSilver}
                onChangeText={setLastName}
                secureTextEntry={true}
                value={lastName}
                style={styles.inputContainer}
              />
            </View>
          </View>
          <View style={styles.actionsContainer}>
            <View style={styles.actionsWrapper}>
              <CustomButton
                title="Driving Licence"
                inactive
                // onPress={() => navigation.navigate('UploadLicenceFront')}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UploadIdentity;
