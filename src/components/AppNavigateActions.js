import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from '../components/CustomButton';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    minWidth: 40,
    minHeight: 40,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 24,
    backgroundColor: Colors.secondary,
  },
  iconContainer: {
    marginVertical: 5,
  },
  title: {
    ...Fonts.N_400_9,
    textAlign: 'center',
    color: Colors.white,
    marginTop: 8,
  },
});

const AppNavigateActions = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.iconContainer}>
          <CustomButton
            iconLeft="Home"
            iconWidth={24}
            iconHeight={24}
            iconFill={Colors.white}
            onPress={() => alert('inbox')}
            style={{backgroundColor: Colors.transparent}}
          />
          <Text style={styles.title}>999</Text>
        </View>
        <View style={styles.iconContainer}>
          <CustomButton
            iconLeft="Search"
            iconWidth={24}
            iconHeight={20}
            iconFill={Colors.white}
            onPress={() => alert('inbox')}
            style={{backgroundColor: Colors.transparent}}
          />
        </View>
        <View style={styles.iconContainer}>
          <CustomButton
            iconLeft="Create"
            iconWidth={24}
            iconHeight={20}
            iconFill={Colors.white}
            onPress={() => alert('inbox')}
            style={{backgroundColor: Colors.transparent}}
          />
        </View>
        <View style={styles.iconContainer}>
          <CustomButton
            iconLeft="Projects"
            iconWidth={24}
            iconHeight={20}
            iconFill={Colors.white}
            onPress={() => alert('inbox')}
            style={{backgroundColor: Colors.transparent}}
          />
        </View>
        <View style={styles.iconContainer}>
          <CustomButton
            iconLeft="Profile"
            iconWidth={24}
            iconHeight={20}
            iconFill={Colors.white}
            onPress={() => alert('inbox')}
            style={{backgroundColor: Colors.transparent}}
          />
        </View>
      </View>
    </View>
  );
};

export default AppNavigateActions;
