import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Colors from '../config/colors';

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
    paddingHorizontal: '10%',
  },
  skipText: {
    color: Colors.white,
    // fontFamily: 'Sailec-Bold',
    fontSize: 12,
    opacity: 0.6,
  },
  titleContainer: {
    flex: 1,
    paddingTop: '75%',
  },
  titleText: {
    color: Colors.white,
    // fontFamily: 'Sailec-Bold',
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
          <TouchableOpacity>
            <Text
              style={styles.skipText}
              onPress={() => navigation.navigate('CreateAccountScreen')}>
              skip
            </Text>
          </TouchableOpacity>
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
