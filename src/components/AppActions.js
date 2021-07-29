import * as React from 'react';
import {Text, View, StyleSheet, Share} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from '../components/CustomButton';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    minWidth: 40,
    minHeight: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
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
  },
});

// HANDLERS ---------------------------------------------------------
const handleShoutout = async ({title}) => {
  try {
    const result = await Share.share({
      message: `Wunder App | ${title}`,
    });
    console.log(result.activityType);
    console.log(result.action);
    if (result.action === Share.sharedAction) {
      console.log(Share.sharedAction);
    } else if (result.action === Share.dismissedAction) {
      console.log(Share.dismissedAction);
    }
  } catch (error) {
    alert(error.message);
  }
};

// RETURN ---------------------------------------------------------
const AppActions = ({Settings, Commend, Applaud, Shoutout, Comment, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {Settings && (
          <View style={styles.iconContainer}>
            <CustomButton
              iconLeft="Settings"
              iconWidth={24}
              iconHeight={24}
              iconFill={Colors.white}
              onPress={() => alert('Settings')}
              style={{backgroundColor: Colors.transparent}}
            />
          </View>
        )}
        {Commend && (
          <View style={styles.iconContainer}>
            <CustomButton
              iconLeft="Commend"
              iconWidth={24}
              iconHeight={24}
              iconFill={Colors.white}
              onPress={() => alert('Commend')}
              style={{backgroundColor: Colors.transparent}}
            />
            <Text style={styles.title}>1346</Text>
          </View>
        )}
        {Applaud && (
          <View style={styles.iconContainer}>
            <CustomButton
              iconLeft="Applaud"
              iconWidth={24}
              iconHeight={24}
              iconFill={Colors.white}
              onPress={() => alert('Applaud')}
              style={{backgroundColor: Colors.transparent}}
            />
            <Text style={styles.title}>346</Text>
          </View>
        )}
        {Shoutout && (
          <View style={styles.iconContainer}>
            <CustomButton
              iconLeft="Shoutout"
              iconWidth={24}
              iconHeight={20}
              iconFill={Colors.white}
              style={{backgroundColor: Colors.transparent}}
              onPress={() => handleShoutout(title)}
            />
            <Text style={styles.title}>346</Text>
          </View>
        )}
        {Comment && (
          <View style={styles.iconContainer}>
            <CustomButton
              iconLeft="Comment"
              iconWidth={24}
              iconHeight={20}
              iconFill={Colors.white}
              onPress={() => alert('Comment')}
              style={{backgroundColor: Colors.transparent}}
            />
            <Text style={styles.title}>346</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default AppActions;
