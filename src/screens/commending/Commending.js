import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Verified} from '../../config/icons';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import UserProfileHeaderActions from '../../components/UserProfileHeaderActions';
import {PROFILE_DATA} from '../../config/data';
import CommendActions from '../../components/CommendActions';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  profileInfoContainer: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginVertical: '10%',
  },
  post: {
    ...Fonts.N_700_16,
    color: Colors.white,
  },
  info: {
    ...Fonts.N_400_13,
    color: Colors.white,
    marginVertical: 3,
  },
  container: {
    flex: 1,
    marginHorizontal: '5%',
    marginVertical: '10%',
  },
});

const Commending = ({navigation}) => {
  const [profile, setProfile] = React.useState(PROFILE_DATA);
  const {url, about, name, followers, post} = profile;

  console.log(profile);

  // SERVERS ---------------------------------------------------------
  const ServeProfileInfo = () => (
    <View style={styles.profileInfoContainer}>
      <View
        style={{
          flex: 3,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.post}>@{name}</Text>
          <View style={{marginHorizontal: '5%'}}>
            <Verified width={20} height={20} fill={Colors.primary} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.info}>{followers} followers</Text>
        </View>
      </View>

      <View style={{flex: 2, justifyContent: 'center'}}>
        <View style={{marginVertical: '5%'}}>
          <CustomButton title="commend" onPress={() => alert('Follow')} />
        </View>
      </View>
    </View>
  );

  // RETURN ---------------------------------------------------------
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <View style={{height: height / 2}}>
        <ImageBackground
          source={url}
          style={{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
          }}>
          <View style={{flex: 1, alignItems: 'center', marginVertical: '10%'}}>
            <UserProfileHeaderActions
              navigation={navigation}
              profileDataInfo={profile}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.postContainer}>
            <ServeProfileInfo />
          </View>
        </ImageBackground>
      </View>

      <View style={styles.container}>
        <View>
          <Text style={{...Fonts.N_700_24, color: Colors.lightBlack}}>
            {about}
          </Text>
          <View style={{marginVertical: 10}}>
            <Text style={{...Fonts.N_700_12, color: Colors.lightBlack}}>
              About Project
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            marginLeft: -5,
          }}>
          <CommendActions navigation={navigation} profileDataInfo={profile} />
        </View>
        <View style={{marginVertical: '5%'}}>
          <Text style={{...Fonts.N_400_14, color: Colors.lightBlack}}>
            {post}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Commending;
