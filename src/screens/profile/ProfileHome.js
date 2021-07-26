import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import ProfileActions from '../../components/ProfileActions';
import DonateActions from '../../components/DonateActions';

import Background from '../../assets/images/profile/profile-background.png';
import ProfileIcon from '../../assets/dummyAssets/profile-beth.png';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  donateContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  appNavigateContainer: {
    position: 'absolute',
    bottom: -height / 12,
    borderRadius: 30,
    height: height / 5,
    width: width,
    marginBottom: '10%',
    overflow: 'hidden',
  },
  appActions: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginTop: '30%',
  },
  postContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    marginHorizontal: '5%',
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  post: {
    ...Fonts.N_700_22,
    color: Colors.white,
  },
  info: {
    ...Fonts.N_400_13,
    color: Colors.white,
    marginVertical: 3,
    width: width * 0.4,
  },
  postTagIcon: {
    width: 40,
    height: 40,
  },
  postAction: {
    opacity: 0.8,
  },
  badge: {
    flex: 1,
  },
});

const DATA = {
  background: Background,
  profileIcon: ProfileIcon,
  profileName: '@sarah_wills',
  followers: '5k',
  about: 'She/Her. Passionate about plants.',
};

const ProfileHome = ({navigation}) => {
  const [data, setData] = React.useState(DATA);

  // SERVERS ---------------------------------------------------------
  const ServeDonate = ({navigation}) => {
    return (
      <View style={styles.donateContainer}>
        <DonateActions navigation={navigation} profile />
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
        <View style={styles.appActions}>
          <ProfileActions />
        </View>
        <View style={styles.postContainer}>
          <View style={styles.rowWrapper}>
            <TouchableOpacity onPress={() => alert('profile')}>
              <View>
                <Text style={styles.post}>{data.profileName}</Text>
                <Text style={styles.info}>{data.followers} followers</Text>
                <Text style={styles.info}>{data.about}</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={styles.badge}>
                <CustomButton
                  iconLeft="Paw"
                  iconFill={Colors.white}
                  style={{backgroundColor: Colors.transparent}}
                  onPress={() => alert('paw')}
                />
              </View>
              <View style={styles.badge}>
                <CustomButton
                  iconLeft="WindTurbine"
                  iconFill={Colors.white}
                  style={{backgroundColor: Colors.transparent}}
                  iconStyling={{width: 23, height: 32}}
                  onPress={() => alert('wind')}
                />
              </View>
              <View style={styles.badge}>
                <CustomButton
                  iconLeft="Health"
                  iconFill={Colors.white}
                  style={{backgroundColor: Colors.transparent}}
                  onPress={() => alert('health')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ProfileHome;
