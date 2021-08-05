import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import AppActions from '../../components/AppActions';
import ProfileHeaderActions from '../../components/ProfileHeaderActions';
import {Verified} from '../../config/icons';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  donateContainer: {
    justifyContent: 'center',
  },
  appActions: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  postContainer: {
    flex: 2,
    marginVertical: '5%',
  },
  getInvolvedActions: {
    marginVertical: 5,
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  profile: {
    ...Fonts.N_400_16,
    color: Colors.white,
    paddingHorizontal: 8,
  },
  title: {
    ...Fonts.N_700_34,
    color: Colors.white,
    overflow: 'hidden',
  },
  isVerified: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  postWrapper: {
    flex: 3,
  },
  postTitle: {
    ...Fonts.N_400_16,
    color: Colors.planet,
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

const Post = ({navigation, route}) => {
  const {profileDataInfo} = route.params;
  const {
    url,
    profileImageUrl,
    title,
    name,
    isVerified,
    post,
    category,
    getInvolved,
  } = profileDataInfo;

  // SERVERS ---------------------------------------------------------
  const ServeProfileHeaderActions = () => {
    return (
      <View style={styles.donateContainer}>
        <ProfileHeaderActions
          navigation={navigation}
          profileDataInfo={profileDataInfo}
        />
      </View>
    );
  };
  const ServeProfileInfo = ({}) => {
    return (
      <TouchableOpacity
        style={styles.rowWrapper}
        onPress={() =>
          navigation.navigate('AppStack', {
            screen: 'Profile',
            params: {profileDataInfo: profileDataInfo},
          })
        }>
        <View>
          <Image
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              overflow: 'hidden',
            }}
            source={{uri: profileImageUrl}}
          />
        </View>
        <Text style={styles.profile}>@{name}</Text>
        {isVerified && (
          <View style={styles.isVerified}>
            <View>
              <Verified width={20} height={20} fill={Colors.primary} />
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  const ServePostTitle = ({}) => {
    return <Text style={styles.title}>{title}</Text>;
  };
  const ServePost = ({}) => {
    const postTagIcon = category === 'planet' ? 'Planet' : 'People';
    const iconColor = category === 'planet' ? Colors.planet : Colors.primary;

    return (
      <View style={styles.rowWrapper}>
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
          <View style={styles.postWrapper}>
            <Text style={styles.postTitle}>{post}</Text>
          </View>
        </ScrollView>
        <View style={styles.badgeContainer}>
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

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper
      image={url}
      gradient={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}>
      <View style={styles.wrapper}>
        <ServeProfileHeaderActions navigation={navigation} />
        <View style={styles.appActions}>
          <AppActions
            Commend
            Applaud
            Shoutout
            Comment
            profileDataInfo={profileDataInfo}
          />
        </View>
        <View style={styles.postContainer}>
          <ServeProfileInfo />
          <ServePostTitle />
          <ServePost />
          {getInvolved && (
            <View style={styles.getInvolvedActions}>
              <CustomButton
                title="get involved"
                onPress={() => alert('get involved')}
              />
            </View>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Post;
