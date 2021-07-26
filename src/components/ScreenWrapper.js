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
  ScrollView,
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
const ServeScrollView = ({props}) => {
  let screen = (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      {props.children}
    </ScrollView>
  );

  if (!props.scroll) screen = <View>{props.children}</View>;

  return screen;
};
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
    <LinearGradient
      colors={gradientFilter}
      start={{x: 0.4, y: 0.4}}
      style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 1, backgroundColor: screenFilter}}>
            {!props.statusBar && <StatusBar hidden />}
            <SafeAreaView style={styles.wrapper}>{props.children}</SafeAreaView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

// RETURN ---------------------------------------------------------
const ScreenWrapper = props => {
  return <ServeImgBackground props={props} />;
};

export default ScreenWrapper;
