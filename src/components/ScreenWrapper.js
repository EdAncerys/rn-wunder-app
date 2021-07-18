import * as React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  screenFilter: {
    flex: 1,
    backgroundColor: Colors.screenFilter,
  },
});

// SERVERS ---------------------------------------------------------
const ServeImgBackground = ({props}) => {
  let screen = <ServeScreenView props={props} />;
  if (props.image)
    screen = (
      <ImageBackground source={props.image} style={styles.backgroundImg}>
        <ServeScreenView props={props} />
      </ImageBackground>
    );
  return screen;
};
const ServeScreenView = ({props}) => {
  const screenFilter = props.filter || Colors.transparent;
  const gradientFilter = props.gradient || [
    Colors.transparent,
    Colors.transparent,
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={{flex: 1, backgroundColor: screenFilter}}>
        <LinearGradient
          colors={gradientFilter}
          start={{x: 0.4, y: 0.4}}
          style={styles.container}>
          {!props.statusBar && <StatusBar hidden />}
          <SafeAreaView style={styles.wrapper}>{props.children}</SafeAreaView>
        </LinearGradient>
      </View>
    </KeyboardAvoidingView>
  );
};

// RETURN ---------------------------------------------------------
const ScreenWrapper = props => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ServeImgBackground props={props} />
    </TouchableWithoutFeedback>
  );
};

export default ScreenWrapper;
