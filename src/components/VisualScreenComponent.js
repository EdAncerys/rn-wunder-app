import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Colors from '../config/colors';
import CustomButton from './CustomButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .4)',
  },
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  skipAction: {
    alignItems: 'flex-end',
    paddingTop: '15%',
    paddingHorizontal: '5%',
  },
  skipText: {
    color: Colors.white,
    fontFamily: 'Sailec',
    fontSize: 12,
    opacity: 0.6,
  },
  titleContainer: {
    flex: 1,
    paddingTop: '75%',
  },
  titleText: {
    color: Colors.white,
    fontFamily: 'Sailec',
    fontSize: 29,
    textAlign: 'center',
  },
  dot: {
    color: Colors.primary,
  },
});

const VisualScreenComponent = ({
  background,
  rowOneText,
  rowTwoText,
  navigation,
}) => {
  return (
    <ImageBackground source={background} style={styles.imgBackground}>
      <View style={styles.container}>
        <View style={styles.skipAction}>
          <CustomButton
            onPress={() => navigation.navigate('CreateAccountScreen')}
            title="skip"
            style={{backgroundColor: Colors.transparent}}
            titleStyling={{fontSize: 12}}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{rowOneText}</Text>
          <Text style={styles.titleText}>
            {rowTwoText}
            <Text style={styles.dot}>.</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default VisualScreenComponent;
