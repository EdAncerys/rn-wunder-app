import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from './CustomButton';
import AppActions from './AppActions';
import DonateActions from './DonateActions';

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

const HomeScreen = ({item, index, scrollY, navigation}) => {
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
    extrapolate: 'clamp',
  });

  // SERVERS ---------------------------------------------------------
  const ServeHeader = ({}) => {
    return (
      <View
        style={{
          marginTop: '10%',
          justifyContent: 'center',
        }}>
        {isVerified && <DonateActions navigation={navigation} />}
      </View>
    );
  };

  const ServeAppActions = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
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
      <View style={{marginVertical: 5}}>
        <Text
          style={{...Fonts.N_700_34, color: Colors.white}}
          numberOfLines={1}>
          {title}
        </Text>
      </View>
    );
  };

  const ServePost = ({}) => {
    const postTagIcon = planet ? 'Planet' : 'People';
    const iconColor = planet ? Colors.planet : Colors.primary;

    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
          }}>
          <View style={{flex: 3}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProjectStack', {
                  screen: 'Post',
                  params: {profileDataInfo: item},
                })
              }>
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
        {canVolunteer && (
          <View>
            <CustomButton
              title="get involved"
              onPress={() => setCommendAction(true)}
            />
          </View>
        )}
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
          <LinearGradient
            colors={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}
            start={{x: 0.4, y: 0.4}}
            style={{flex: 1}}>
            <View style={{flex: 1, marginHorizontal: '5%'}}>
              <ServeHeader />
              <ServeAppActions />
              <ServePostContent />
            </View>
          </LinearGradient>
        </ImageBackground>
      </Animated.View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <Animated.View
      style={{
        transform: [{translateY: overlap}],
        borderTopLeftRadius: borderRadiusY,
        borderTopRightRadius: borderRadiusY,
        overflow: 'hidden',
      }}>
      <ServeContent />
    </Animated.View>
  );
};

export default HomeScreen;
