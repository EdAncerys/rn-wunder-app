import * as React from 'react';
import {
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');

import Colors from '../../config/colors';
import HomeScreen from '../../components/HomeScreen';
import BackgroundExpOne from '../../assets/images/home/home-exp-one-background.png';
import ProfileIconOne from '../../assets/icons/profile-wunder.png';

const DATA = [
  {
    background: BackgroundExpOne,
    profileIcon: ProfileIconOne,
    profileName: '@wunder',
    verified: true,
    title: 'Healthy Eating',
    post: 'It’s recommended that you eat at least 5 portions of a variety',
    postTag: 'planet',
    getInvolved: false,
    donateActions: true,
    navigateActions: false,
  },
  {
    background: BackgroundExpOne,
    profileIcon: ProfileIconOne,
    profileName: '@wunder',
    verified: true,
    title: 'Healthy Eating',
    post: 'It’s recommended that you eat at least 5 portions of a variety',
    postTag: 'planet',
    getInvolved: false,
    donateActions: true,
    navigateActions: false,
  },
];

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height;

export default function App() {
  const [data, setData] = React.useState(DATA);
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollYAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const setActiveIndex = React.useCallback(activeIndex => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  });

  // Apply looping to render components
  React.useEffect(() => {
    if (index === data.length - 1) {
      const newData = [...data, ...data];
      setData(newData);
    }
  });

  React.useEffect(() => {
    Animated.spring(scrollYAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  // SERVERS ---------------------------------------------------------
  const ServeScreen = ({item}) => {
    return (
      <View style={styles.screenContainer}>
        <HomeScreen
          background={item.background}
          profileIcon={item.profileIcon}
          profileName={item.profileName}
          verified={item.verified}
          title={item.title}
          post={item.post}
          postTag={item.postTag}
          getInvolved={item.getInvolved}
          donateActions={item.donateActions}
          navigateActions={item.navigateActions}
        />
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    console.log(item);
    const inputRange = [index - 1, index, index + 1];
    const translateY = scrollYAnimated.interpolate({
      inputRange,
      outputRange: [ITEM_HEIGHT - 150, 0, 0],
    });
    const scale = scrollYAnimated.interpolate({
      inputRange,
      outputRange: [1, 1, 0],
    });
    const opacity = scrollYAnimated.interpolate({
      inputRange,
      outputRange: [1, 1, 0],
    });

    return (
      <Animated.View
        style={{
          position: 'absolute',
          left: -ITEM_WIDTH / 2,
          opacity,
          transform: [
            {
              translateY,
            },
            {scale},
          ],
        }}>
        <ServeScreen item={item} />
      </Animated.View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <FlingGestureHandler
      key="up"
      direction={Directions.UP}
      onHandlerStateChange={ev => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}>
      <FlingGestureHandler
        key="down"
        direction={Directions.DOWN}
        onHandlerStateChange={ev => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}>
        <View style={styles.container}>
          <StatusBar hidden />
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            horizontal
            inverted
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
            }}
            scrollEnabled={false}
            removeClippedSubviews={false}
            renderItem={renderItem}
          />
        </View>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    width: width,
    height: height,
    borderTopLeftRadius: ITEM_WIDTH / 10,
    borderTopRightRadius: ITEM_WIDTH / 10,
    overflow: 'hidden',
  },
});
