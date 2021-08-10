import * as React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import Colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Loading = ({props}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ActivityIndicator
        color={Colors.primary}
        style={{transform: [{scale: 2}]}}
      />
    </View>
  );
};

export default Loading;
