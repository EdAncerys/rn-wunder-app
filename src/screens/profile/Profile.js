import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import CustomButton from '../../components/CustomButton';
import PostSnapshot from '../../components/PostSnapshot';
import ProfileActions from '../../components/ProfileActions';
import DonateActions from '../../components/DonateActions';
import AppNavigateActions from '../../components/AppNavigateActions';

import Background from '../../assets/images/profile/profile-background.png';
import Footer from '../../assets/images/profile/profile-footer.png';
import ProfileIcon from '../../assets/icons/content/profile-beth.png';

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
});

const DATA = [
  {
    background: Background,
    profileIcon: ProfileIcon,
    profileName: '@wunder',
    verified: true,
    title: 'Healthy Eating',
    post: 'It’s recommended that you eat at least 5 portions of a variety',
    postTag: 'planet',
    getInvolved: false,
    donateActions: true,
    navigateActions: false,
  },
];

const Profile = ({
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
  navigateActions,
}) => {
  const [data, setData] = React.useState(DATA);

  const applyMarginPost = getInvolved
    ? {marginBottom: '50%'}
    : {marginBottom: '25%'};
  const applyMarginAppActions =
    donateActions || navigateActions ? {marginTop: '0%'} : {marginTop: '40%'};

  // SERVERS ---------------------------------------------------------
  const ServeDonate = ({navigation}) => {
    return (
      <View style={styles.donateContainer}>
        <DonateActions navigation={navigation} />
      </View>
    );
  };

  const ServeAppNavigate = ({navigation}) => {
    return (
      <View style={styles.appNavigateContainer}>
        <AppNavigateActions navigation={navigation} />
      </View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper
      image={Background}
      gradient={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}>
      <View style={styles.wrapper}>
        <ServeDonate navigation={navigation} />
        <View style={{...styles.appActions, ...applyMarginAppActions}}>
          <ProfileActions />
        </View>
        <View style={{...styles.postContainer, ...applyMarginPost}}></View>
        <ServeAppNavigate navigation={navigation} />
      </View>
    </ScreenWrapper>
  );
};

export default Profile;
