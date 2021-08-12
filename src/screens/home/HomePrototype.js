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
  const scrollY = React.useRef(new Animated.Value(0)).current;

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

    const BORDER_RADIUS = CARD_WIDTH / 6;
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
    const borderRadiusY = scrollY.interpolate({
      inputRange,
      outputRange: [BORDER_RADIUS, 0, 0],
    });

    // SERVERS ---------------------------------------------------------
    const ServeHeader = ({}) => {
      return (
        <View
          style={{
            marginTop: '10%',
            justifyContent: 'center',
          }}>
          {/* {isVerified && <DonateActions navigation={navigation} />} */}
          <DonateActions navigation={navigation} />
        </View>
      );
    };

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
            flex: 2,
          }}>
          <View
            style={{
              flex: 1,
              marginBottom: -OVERLAP + 20,
              justifyContent: 'flex-end',
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
        <Animated.View
          style={{
            transform: [{translateY}],
          }}>
          <ImageBackground
            source={{uri: picture.url}}
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              resizeMode: 'cover',
            }}>
            <View style={{flex: 1, marginHorizontal: '5%'}}>
              <ServeHeader />
              <ServePostContent />
            </View>
          </ImageBackground>
        </Animated.View>
      );
    };

    return (
      <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          style={{
            transform: [{translateY: overlap}],
            borderTopLeftRadius: borderRadiusY,
            borderTopRightRadius: borderRadiusY,
            overflow: 'hidden',
          }}>
          <ServeContent />
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
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => String(index)}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        onScrollAnimationEnd={e => console.log('end')}
        data={postData}
        renderItem={renderFlatList}
      />
    </View>
  );
};

export default HomePrototype;
