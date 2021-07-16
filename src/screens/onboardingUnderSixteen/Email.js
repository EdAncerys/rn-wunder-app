import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
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
  const [btnInactive, setBtnInactive] = React.useState(true);

  React.useEffect(() => {
    setBtnInactive(true);
    if (!!firstName && !!lastName) setBtnInactive(false);
  }, [firstName, lastName]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <StatusBar hidden />
        <View style={styles.wrapper}>
          <View style={styles.navigateActionContainer}>
            <NavigateAction
              title="Step 2 of 7"
              onPress={() => navigation.navigate('Name')}
            />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Please input your parent or guardians contact info
              </Text>
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
                inactive={btnInactive}
                onPress={() => navigation.navigate('UploadLicenceFront')}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default UploadIdentity;
