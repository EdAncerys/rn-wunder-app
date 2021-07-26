import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import ScreenWrapper from './ScreenWrapper';
import Colors from '../config/colors';
import CustomButton from './CustomButton';
import PostSnapshot from './PostSnapshot';
import AppActions from './AppActions';
import DonateActions from './DonateActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  donateContainer: {
    flex: 1,
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
});

const HomeScreen = ({
  navigation,
  background,
  profileIcon,
  profileName,
  verified,
  title,
  post,
  postTag,
  getInvolved,
  donateActions,
}) => {
  const applyMarginPost = getInvolved
    ? {marginBottom: '15%'}
    : {marginBottom: '10%'};

  // SERVERS ---------------------------------------------------------
  const ServeDonate = ({navigation}) => {
    return (
      <View style={styles.donateContainer}>
        <DonateActions navigation={navigation} />
      </View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper
      image={background}
      gradient={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}>
      <View style={styles.wrapper}>
        {donateActions && <ServeDonate navigation={navigation} />}
        <View style={{...styles.appActions}}>
          <AppActions Commend Applaud Shoutout Comment />
        </View>
        <View style={{...styles.postContainer, ...applyMarginPost}}>
          <PostSnapshot
            profileIcon={profileIcon}
            profileName={profileName}
            verified={verified}
            title={title}
            post={post}
            postTag={postTag}
          />
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

export default HomeScreen;
