import * as React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Animated,
  Platform,
} from 'react-native';
import AddPostAction from '../../components/AddPostAction';
import {useAuthState} from '../../context/auth';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';

import {HOME_SCREEN_DATA} from '../../config/data';

const {width, height} = Dimensions.get('screen');
const CARD_WIDTH = width / 2;
const CARD_HEIGHT = height / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    height: CARD_WIDTH * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});

const Loading = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text style={styles.paragraph}>Loading...</Text>
  </View>
);

const Prototype = ({navigation}) => {
  const {addAction} = useAuthState();
  const [addPostPopUp, setAddPostPopUp] = React.useState(null);

  const [postData, setPostData] = React.useState(HOME_SCREEN_DATA);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    console.log('currentIndex', currentIndex);
  }, [currentIndex]);

  if (postData.length === 0) {
    return <Loading />;
  }

  // SERVERS ---------------------------------------------------------
  const ServeHomeScreen = ({item}) => {
    const {url, title, post} = item;
    return (
      <ImageBackground
        source={url}
        style={{
          resizeMode: 'cover',
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
        }}>
        <LinearGradient
          colors={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}
          start={{x: 0.4, y: 0.4}}
          style={{flex: 1}}>
          <View
            style={{
              zIndex: 1,
              position: 'absolute',
              width: '100%',
              bottom: 10,
              paddingHorizontal: 10,
            }}
          />
          <Text style={{fontSize: 24}} numberOfLines={1}>
            {title}
          </Text>
          <Text style={{fontSize: 12}} numberOfLines={3}>
            {post}
          </Text>
        </LinearGradient>
      </ImageBackground>
    );
  };

  const renderFlatList = ({item, index}) => {
    // let screenBorder = {};
    // if (currentIndex !== currentIndex - 1)
    //   screenBorder = {
    //     borderTopLeftRadius: CARD_WIDTH / 10,
    //     borderTopRightRadius: CARD_WIDTH / 10,
    //   };
    setCurrentIndex(index);
    console.log(currentIndex);
    console.log('index', index);

    const inputRange = [
      (index - 2) * CARD_HEIGHT,
      (index - 1) * CARD_HEIGHT,
      index * CARD_HEIGHT,
    ];

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [100, 50, 100],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={{
          alignItems: 'center',
          transform: [{translateY}],
          backgroundColor: 'pink',
          overflow: 'hidden',
          // borderRadius: 34,
        }}>
        <ServeHomeScreen item={item} />
      </Animated.View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {addPostPopUp && <AddPostAction navigation={navigation} />}
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={postData}
        keyExtractor={item => item.key}
        // horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{alignItems: 'center'}}
        snapToInterval={CARD_WIDTH}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        renderItem={renderFlatList}
      />
    </View>
  );
};

export default Prototype;
