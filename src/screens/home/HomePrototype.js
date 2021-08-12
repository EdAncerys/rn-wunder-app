import * as React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import AddPostAction from '../../components/AddPostAction';
import Loading from '../../components/Loading';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import AppActions from '../../components/AppActions';
import DonateActions from '../../components/DonateActions';

// GRAPH QL ---------------------------------------------------------
import {useAuthState, useAuthDispatch, getPosts} from '../../context/auth';
import {useApiDispatch} from '../../context/api';

const {width, height} = Dimensions.get('screen');
const CARD_WIDTH = width;
const CARD_HEIGHT = height;
const OVERLAP = -200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullScreen: {
    width,
    height,
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

const HomePrototype = ({navigation}) => {
  const dispatchAuth = useAuthDispatch();
  const dispatchApi = useApiDispatch();
  const {addAction, posts} = useAuthState();
  const [addPostPopUp, setAddPostPopUp] = React.useState(null);
  const jwt =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGJjZmYwMWQ1YjBmZTRjMzBhZWNiNyIsImlhdCI6MTYyODU5NjQ1NSwiZXhwIjoxNjMxMTg4NDU1fQ.2Yi-c-1LhCd7Xbk8Z5WgNL45N99QeBJenM-nvpiStk4';

  const [postData, setPostData] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const onViewRef = React.useRef(viewableItems => {
    setCurrentIndex(viewableItems.viewableItems[0].index);
  });

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
    const {title, body, canVolunteer, people, planet, picture, user} = item;
    const isVerified = user.confirmed;
    const profileImage = user.picture[0].url;
    const username = user.username;

    const borderRadius = currentIndex !== index ? CARD_WIDTH / 6 : 0;
    const inputRange = [
      (index - 1) * CARD_HEIGHT,
      index * CARD_HEIGHT,
      (index + 1) * CARD_HEIGHT,
    ];

    const overlap = scrollY.interpolate({
      inputRange,
      outputRange: [OVERLAP, 0, 0],
      extrapolate: 'clamp',
    });
    const translateY = scrollY.interpolate({
      inputRange,
      outputRange: [0, 0, CARD_HEIGHT * 1],
    });

    // SERVERS ---------------------------------------------------------
    const ServeProfileInfo = ({}) => {
      return (
        <TouchableOpacity
          style={styles.rowWrapper}
          // onPress={() =>
          //   navigation.navigate(navStack, {
          //     screen: navScreen,
          //     params: {
          //       profileDataInfo: item,
          //     },
          //   })
          // }
        >
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Image
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  overflow: 'hidden',
                }}
                source={{uri: profileImage}}
              />
            </View>
            <Text
              style={{
                ...Fonts.N_400_16,
                color: Colors.white,
                paddingHorizontal: 8,
              }}>
              {username}
            </Text>
            {isVerified && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomButton
                  iconLeft="Verified"
                  iconFill={Colors.primary}
                  iconWidth={20}
                  iconHeight={20}
                  style={{backgroundColor: Colors.transparent}}
                  noFeedback
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
      );
    };

    const ServeHeader = ({}) => {
      return (
        <View
          style={{
            flex: 0.3,
            justifyContent: 'center',
          }}>
          {isVerified && <DonateActions navigation={navigation} />}
        </View>
      );
    };

    const ServePostTitle = ({}) => {
      return (
        <View style={{marginVertical: 10}}>
          <Text
            style={{...Fonts.N_700_34, color: Colors.white}}
            numberOfLines={1}>
            {title}
          </Text>
        </View>
      );
    };

    const ServePost = ({}) => {
      const postTagIcon = people === 'planet' ? 'Planet' : 'People';
      const iconColor = people === 'planet' ? Colors.planet : Colors.primary;

      return (
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flex: 3}}>
            <TouchableOpacity
            // onPress={() =>
            //   navigation.navigate('ProjectStack', {
            //     screen: 'Post',
            //     params: {profileDataInfo: profileDataInfo},
            //   })
            // }
            >
              <View>
                <Text
                  style={{
                    ...Fonts.N_400_16,
                    color: Colors.planet,
                  }}
                  numberOfLines={3}>
                  >{body}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: iconColor,
                padding: 8.75,
                borderRadius: 100,
              }}>
              <CustomButton
                iconLeft={postTagIcon}
                iconFill={Colors.white}
                iconWidth={25}
                iconHeight={25}
                iconStyling={styles.postTagIcon}
                style={{
                  backgroundColor: Colors.transparent,
                }}
                onPress={() => alert(postTagIcon)}
              />
            </View>
          </View>
        </View>
      );
    };

    const ServePostContent = () => {
      return (
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              paddingBottom: -OVERLAP,
            }}>
            <ServeProfileInfo />
            <ServePostTitle />
            <ServePost />
          </View>
        </View>
      );
    };

    const ServeContent = () => {
      return (
        <ImageBackground
          source={{uri: picture.url}}
          style={{
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            resizeMode: 'cover',
          }}>
          <LinearGradient
            colors={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}
            start={{x: 0.4, y: 0.4}}
            style={{flex: 1}}>
            <View style={{flex: 1, marginHorizontal: '5%'}}>
              <ServeHeader />
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}>
                <AppActions
                  navigation={navigation}
                  Commend
                  Applaud
                  Shoutout
                  Comment
                  profileDataInfo={item}
                />
              </View>
              <ServePostContent />
            </View>
          </LinearGradient>
        </ImageBackground>
      );
    };

    return (
      <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          style={{
            transform: [{translateY: overlap}],
          }}>
          <Animated.View
            style={{
              transform: [{translateY}],
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
              overflow: 'hidden',
            }}>
            <ServeContent />
          </Animated.View>
        </Animated.View>
      </View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {addPostPopUp && <AddPostAction navigation={navigation} />}
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
        onViewableItemsChanged={onViewRef.current}
        data={postData}
        renderItem={renderFlatList}
      />
    </View>
  );
};

export default HomePrototype;
