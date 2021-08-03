import * as React from 'react';
import {useAuthState, useAuthDispatch, addPostAction} from '../../context/auth';
import {useApiDispatch} from '../../context/api';
import {
  StatusBar,
  FlatList,
  Dimensions,
  Animated,
  View,
  StyleSheet,
} from 'react-native';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
import {HOME_SCREEN_DATA} from '../../config/data';

const {width, height} = Dimensions.get('screen');

import HomeScreen from '../../components/HomeScreen';

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    width: width,
    height: height,
    overflow: 'hidden',
  },
});

const Home = ({navigation, route}) => {
  const dispatchAuth = useAuthDispatch();
  const dispatchApi = useApiDispatch();
  const {addAction} = useAuthState();
  console.log(addAction);

  const [data, setData] = React.useState(HOME_SCREEN_DATA);
  const scrollYIndex = React.useRef(new Animated.Value(0)).current;
  const scrollYAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const setActiveIndex = React.useCallback(activeIndex => {
    scrollYIndex.setValue(activeIndex);
    setIndex(activeIndex);
  });

  React.useEffect(() => {
    if (index === data.length - 1) {
      const newData = [...data, ...data]; // Apply looping to render components
      setData(newData);
    }
  });

  React.useEffect(() => {
    Animated.spring(scrollYAnimated, {
      toValue: scrollYIndex,
      useNativeDriver: true,
      friction: 15,
    }).start();
  });

  // SERVERS ---------------------------------------------------------
  const ServeScreen = ({item, currentIndex}) => {
    let screenBorder = {};
    if (currentIndex !== index)
      screenBorder = {
        borderTopLeftRadius: ITEM_WIDTH / 10,
        borderTopRightRadius: ITEM_WIDTH / 10,
      };

    return (
      <View style={{...styles.screenContainer, ...screenBorder}}>
        <HomeScreen navigation={navigation} item={item} />
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    const inputRange = [index - 1, index, index + 1];
    let screenOverlap = ITEM_HEIGHT - 180;
    const translateY = scrollYAnimated.interpolate({
      inputRange,
      outputRange: [screenOverlap, 0, 0],
    });
    const scale = scrollYAnimated.interpolate({
      inputRange,
      outputRange: [1, 1, 0],
    });

    return (
      <Animated.View
        style={{
          position: 'absolute',
          left: -ITEM_WIDTH / 2,
          transform: [
            {
              translateY,
            },
            {scale},
          ],
        }}>
        <ServeScreen item={item} currentIndex={index} />
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
};

export default Home;
