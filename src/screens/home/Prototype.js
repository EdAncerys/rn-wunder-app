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
import Loading from '../../components/Loading';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import AppActions from '../../components/AppActions';

// GRAPH QL ---------------------------------------------------------
import {useAuthState, useAuthDispatch, getPosts} from '../../context/auth';
import {useApiDispatch} from '../../context/api';

const {width, height} = Dimensions.get('screen');
const CARD_WIDTH = width;
const CARD_HEIGHT = height;

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

const Prototype = ({navigation}) => {
  const dispatchAuth = useAuthDispatch();
  const dispatchApi = useApiDispatch();
  const {addAction, posts, jwt} = useAuthState();
  const [addPostPopUp, setAddPostPopUp] = React.useState(null);

  const [postData, setPostData] = React.useState(null);
  const [currentIndex, seCurrentIndex] = React.useState(null);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const scrollYIndex = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (jwt) getPosts({dispatchAuth, dispatchApi, jwt});
  }, [jwt]);

  React.useEffect(() => {
    if (posts) setPostData(posts);
  }, [posts]);

  React.useEffect(() => {
    if (addAction) setAddPostPopUp(addAction.addAction);
  }, [addAction]);

  if (!postData) {
    return <Loading />;
  }

  // SERVERS ---------------------------------------------------------

  const renderFlatList = ({item, index}) => {
    const inputRange = [
      (index - 1) * CARD_HEIGHT,
      index * CARD_HEIGHT,
      (index + 1) * CARD_HEIGHT,
    ];
    let screenOverlap = -200;
    const translateY = scrollY.interpolate({
      inputRange,
      outputRange: [screenOverlap, 0, 0],
      extrapolate: 'clamp',
    });

    const ServeHomeScreen = ({}) => {
      const {id, title, body, picture} = item;
      const itemIndex = index + 1;

      return (
        <ImageBackground
          source={{uri: picture.url}}
          style={{
            resizeMode: 'cover',
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            // borderTopLeftRadius: item + 1 === itemIndex ? CARD_WIDTH / 10 : 0,
            borderTopRightRadius: CARD_WIDTH / 10,
            overflow: 'hidden',
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
            <View style={{marginHorizontal: '5%'}}>
              <View style={{marginVertical: '15%'}}>
                <Text
                  style={{...Fonts.N_700_34, color: Colors.white}}
                  numberOfLines={1}>
                  {title}
                </Text>
                <Text
                  style={{...Fonts.N_400_16, color: Colors.white}}
                  numberOfLines={3}>
                  {body}
                </Text>
              </View>
              <View
                style={{alignItems: 'flex-start', justifyContent: 'center'}}>
                <AppActions
                  navigation={navigation}
                  Commend
                  Applaud
                  Shoutout
                  Comment
                  profileDataInfo={item}
                />
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      );
    };

    return (
      <Animated.View
        style={{
          alignItems: 'center',
          transform: [{translateY}],
          overflow: 'hidden',
          // borderRadius: 34,
        }}>
        <ServeHomeScreen />
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
        keyExtractor={(_, index) => String(index)}
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{alignItems: 'center'}}
        // snapToInterval={CARD_HEIGHT}
        pagingEnabled
        snapToAlignment="start"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
        renderItem={renderFlatList}
      />
    </View>
  );
};

export default Prototype;
