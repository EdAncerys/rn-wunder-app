import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../config/colors';
import CustomButton from '../components/CustomButton';

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
});

const AppActions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.iconContainer}>
          <CustomButton
            iconLeft="Settings"
            iconWidth={24}
            iconHeight={24}
            iconFill={Colors.white}
            onPress={() => alert('inbox')}
            style={{backgroundColor: Colors.transparent}}
          />
        </View>
        <View style={styles.iconContainer}>
          <CustomButton
            iconLeft="Shoutout"
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

export default AppActions;
