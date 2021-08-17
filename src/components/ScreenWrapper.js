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

const ScreenWrapper = ({
  image,
  filter,
  gradient,
  statusBar,
  scroll,
  children,
}) => {
  // SERVERS ---------------------------------------------------------
  const ServeScrollView = () => {
    let screen = (
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        {children}
      </ScrollView>
    );

    if (!scroll) screen = <View>{children}</View>;

    return screen;
  };

  const ServeImgBackground = () => {
    let screen = <ServeScreenView />;
    if (image)
      screen = (
        <ImageBackground source={image} style={styles.backgroundImg}>
          <ServeScreenView />
        </ImageBackground>
      );
    return screen;
  };
  const ServeScreenView = () => {
    const screenFilter = filter || Colors.transparent;
    const gradientFilter = gradient || [Colors.transparent, Colors.transparent];

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
              {!statusBar && <StatusBar hidden />}
              <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  };

  // RETURN ---------------------------------------------------------
  return <ServeImgBackground />;
};

export default ScreenWrapper;
