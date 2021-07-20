import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import RightArrowWhite from '../../assets/icons/app/right-arrow-white.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  formContainer: {
    flex: 4,
    alignItems: 'center',
    paddingTop: '15%',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
    marginVertical: '8%',
  },
  title: {
    ...Fonts.N_700_16,
    textAlign: 'center',
    marginVertical: '4%',
    color: Colors.black,
  },
  info: {
    ...Fonts.N_500_12,
    textAlign: 'center',
    color: Colors.lightSilver,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  inputContainer: {
    ...Fonts.N_700_24,
    textAlign: 'center',
    width: 56,
    marginVertical: '2%',
    padding: 13,
    borderRadius: 4,
    backgroundColor: Colors.white,
  },
  actionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigateActionContainer: {
    flex: 1,
    marginTop: '5%',
  },
});

const Interests = ({navigation}) => {
  const [codeOne, setCodeOne] = React.useState('');
  const [codeTwo, setCodeTwo] = React.useState('');
  const [codeThree, setCodeThree] = React.useState('');
  const [codeFour, setCodeFour] = React.useState('');
  const [btnInactive, setBtnInactive] = React.useState(true);

  React.useEffect(() => {
    setBtnInactive(true);
    if (!!codeOne && !!codeTwo && !!codeThree && !!codeFour)
      setBtnInactive(false);
  }, [codeOne, codeTwo, codeThree, codeFour]);

  // HANDLERS ---------------------------------------------------------
  const handleContinue = () => {
    navigation.navigate('Username');
  };

  // RETURN ---------------------------------------------------------
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <StatusBar hidden />
        <SafeAreaView style={styles.wrapper}>
          <View style={styles.formContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>What are you interested in?</Text>
            </View>
          </View>
          <View style={styles.actionsContainer}>
            <CustomButton
              imageLeft={RightArrowWhite}
              onPress={() => handleContinue()}
              style={{paddingHorizontal: 24, paddingVertical: 10}}
              imageStyling={{width: 24, height: 18}}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Interests;
