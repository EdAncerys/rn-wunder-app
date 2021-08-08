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
  const background = props.image || props.url;
  let screen = <ServeScreenView props={props} />;
  if (background)
    screen = (
      <ImageBackground source={background} style={styles.backgroundImg}>
        <ServeScreenView props={props} />
      </ImageBackground>
    );
  return screen;
};
const ServeScreenView = ({props}) => {
  const screenFilter = props.filter || Colors.white;
  const gradientFilter = props.gradient || [
    Colors.transparent,
    Colors.transparent,
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1, backgroundColor: screenFilter}}>
          <LinearGradient
            colors={gradientFilter}
            start={{x: 0.4, y: 0.4}}
            style={styles.container}>
            {!props.statusBar && <StatusBar hidden />}
            <SafeAreaView style={styles.wrapper}>{props.children}</SafeAreaView>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

// RETURN ---------------------------------------------------------
const ScreenWrapper = props => {
  return <ServeImgBackground props={props} />;
};

export default ScreenWrapper;
