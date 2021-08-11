import * as React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import {HOME_SCREEN_DATA} from '../../config/data';

const {width, height} = Dimensions.get('screen');
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = height;

export default function App() {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);

  const renderFlatList = ({item, index}) => {
    const inputRange = [
      (index - 1) * CARD_HEIGHT,
      index * CARD_HEIGHT,
      (index + 1) * CARD_HEIGHT,
    ];
    let screenOverlap = -200;
    const overlap = scrollY.interpolate({
      inputRange,
      outputRange: [screenOverlap, 0, 0],
      extrapolate: 'clamp',
    });
    const translateY = scrollY.interpolate({
      inputRange,
      outputRange: [-height * 0.1, 0, height * 1],
    });
    const radius = scrollY.interpolate({
      inputRange,
      outputRange: [CARD_WIDTH / 8, 0, CARD_WIDTH / 8],
      extrapolate: 'clamp',
    });

    return (
      <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          style={{
            width: CARD_WIDTH,
            height: height,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{translateY: overlap}],
          }}>
          <View
            style={{
              // borderRadius: radius,
              overflow: 'hidden',
            }}>
            <Animated.Image
              source={item.url}
              style={{
                width: CARD_WIDTH,
                height: height,
                resizeMode: 'cover',
                transform: [{translateY}],
              }}
            />
          </View>
        </Animated.View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        snapToAlignment="start"
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => String(index)}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{alignItems: 'center'}}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        data={HOME_SCREEN_DATA}
        renderItem={renderFlatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
