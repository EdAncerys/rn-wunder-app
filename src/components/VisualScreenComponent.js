import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground, StatusBar} from 'react-native';

import ScreenWrapper from '../components/ScreenWrapper';
import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from './CustomButton';

const styles = StyleSheet.create({
  skipAction: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: '5%',
  },
  skipText: {
    ...Fonts.N_700_12,
    color: Colors.white,
    opacity: 0.6,
  },
  titleContainer: {
    flex: 8,
    justifyContent: 'center',
    paddingHorizontal: '12%',
    marginBottom: '35%',
  },
  title: {
    ...Fonts.N_700_28,
    color: Colors.white,
    textAlign: 'center',
  },
  dot: {
    color: Colors.primary,
  },
});

const VisualScreenComponent = ({background, title, navigation}) => {
  return (
    <ScreenWrapper image={background} filter={Colors.screenFilter}>
      <View style={styles.skipAction}>
        <CustomButton
          onPress={() => navigation.navigate('CreateAccountScreen')}
          title="skip"
          style={{backgroundColor: Colors.transparent}}
          titleStyling={{fontSize: 12}}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {title}
          <Text style={styles.dot}>.</Text>
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default VisualScreenComponent;
