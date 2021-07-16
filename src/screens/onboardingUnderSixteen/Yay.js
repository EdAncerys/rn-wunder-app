import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import RightArrowWhite from '../../assets/icons/app/right-arrow-white.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  msgContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
    marginVertical: '8%',
  },
  title: {
    ...Fonts.N_700_28,
    textAlign: 'center',
    marginVertical: '4%',
    color: Colors.white,
  },
  info: {
    ...Fonts.N_500_12,
    textAlign: 'center',
    color: Colors.lightSilver,
  },
  actionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Yay = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <StatusBar hidden />
        <View style={styles.wrapper}>
          <View style={styles.msgContainer}>
            <View style={styles.titleContainer}>
              <Text style={{fontSize: 80, marginVertical: '5%'}}>🎉</Text>
              <Text style={styles.title}>Yay! Welcome!</Text>
              <Text style={styles.info}>
                You have been authorized by Wünder and can now create an account
                and enjoy the experience.
              </Text>
            </View>
          </View>
          <View style={styles.actionsContainer}>
            <CustomButton
              imageLeft={RightArrowWhite}
              style={{paddingHorizontal: 24, paddingVertical: 16}}
              imageStyling={{height: 18}}
              onPress={() => navigation.navigate('')}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Yay;
