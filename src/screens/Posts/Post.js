import * as React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import AppActions from '../../components/AppActions';
import ProfileHeaderActions from '../../components/ProfileHeaderActions';
import {PROFILE_DATA} from '../../config/data';
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
    flex: 0.8,
    justifyContent: 'center',
  },
  appNavigateContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  appActions: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  postContainer: {
    flex: 3,
    justifyContent: 'flex-start',
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
    width: width * 0.7,
  },
  isVerified: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  post: {
    ...Fonts.N_400_16,
    color: Colors.planet,
    width: width * 0.7,
  },
  badge: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Post = ({navigation, route}) => {
  const {item} = route.params;
  const {
    url,
    profileImageUrl,
    title,
    name,
    isVerified,
    post,
    category,
    getInvolved,
    donateActions,
  } = item;

  let applyMarginPost = {marginBottom: '15%'};
  if (getInvolved) applyMarginPost = {marginBottom: '40%'};
  if (donateActions) applyMarginPost = {marginBottom: '5%'};

  const applyMarginActions = donateActions
    ? {marginTop: '0%'}
    : {marginTop: '30%'};

  // SERVERS ---------------------------------------------------------
  const ServeDonate = () => {
    return (
      <View style={styles.donateContainer}>
        <ProfileHeaderActions navigation={navigation} item={item} />
      </View>
    );
  };
  const ServeProfileInfo = ({profileImageUrl, name, isVerified}) => {
    return (
      <View style={styles.rowWrapper}>
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
      </View>
    );
  };
  const ServePostTitle = ({title}) => {
    return <Text style={styles.title}>{title}</Text>;
  };
  const ServePost = ({post, category}) => {
    const postTagIcon = category === 'planet' ? 'Planet' : 'People';
    const iconColor = category === 'planet' ? Colors.planet : Colors.primary;

    return (
      <View style={styles.rowWrapper}>
        <View>
          <Text style={styles.post}>{post}</Text>
        </View>
        <View style={styles.badge}>
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
        <ServeDonate navigation={navigation} />
        <View style={{...styles.appActions, ...applyMarginActions}}>
          <AppActions Commend Applaud Shoutout Comment />
        </View>
        <View style={{...styles.postContainer, ...applyMarginPost}}>
          <ServeProfileInfo
            profileImageUrl={profileImageUrl}
            name={name}
            isVerified={isVerified}
          />
          <ServePostTitle title={title} />
          <ServePost post={post} category={category} />
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
