import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useAuthState} from '../../context/auth';
import AddPostAction from '../../components/AddPostAction';
import {PROFILE_DATA, POST_DATA} from '../../config/data';
import SlidingUpPanel from 'rn-sliding-up-panel';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import AppActions from '../../components/AppActions';
import DonateActions from '../../components/DonateActions';
import UserProfileHeaderActions from '../../components/UserProfileHeaderActions';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerActions: {
    zIndex: 2,
    position: 'absolute',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginVertical: '15%',
  },
  appActions: {
    flex: 1,
    marginTop: height / 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  postContainer: {
    flex: 1,
    marginHorizontal: '5%',
  },
  rowWrapper: {
    flexDirection: 'row',
  },
  post: {
    ...Fonts.N_700_22,
    color: Colors.white,
  },
  info: {
    ...Fonts.N_400_13,
    color: Colors.white,
    marginVertical: 3,
    width: width * 0.5,
  },
  flatListContainer: {
    backgroundColor: Colors.white,
  },
  image: {
    height: height / 4 + 50,
    width: width / 2 - 30,
    resizeMode: 'cover',
  },
});

const Profile = ({navigation, route}) => {
  const {addAction} = useAuthState();
  const [addPostPopUp, setAddPostPopUp] = React.useState(null);
  const [myProfile, setMyProfile] = React.useState(true);
  const [profile, setProfile] = React.useState(PROFILE_DATA);
  const [projects, setProjects] = React.useState(POST_DATA);
  const {url, name, followers, about} = profile;

  React.useEffect(() => {
    if (route.params) {
      const {profileDataInfo} = route.params;
      setMyProfile(false);
      setProfile(profileDataInfo);
    }
  }, [route.params]);

  React.useEffect(() => {
    if (addAction) setAddPostPopUp(addAction.addAction);
  }, [addAction]);

  // SERVERS ---------------------------------------------------------
  const projectsArrayLength = projects.length;
  const handlePictureWidth = index => {
    let picWidth = width / 3;

    if (projectsArrayLength <= 2) picWidth = width / 2;
    if (projectsArrayLength % 5 === 2 && index === projectsArrayLength - 2)
      picWidth = width / 2;
    if (projectsArrayLength % 5 === 2 && index === projectsArrayLength - 1)
      picWidth = width / 2;
    if (projectsArrayLength % 3 === 1 && index === projectsArrayLength - 1)
      picWidth = width;

    return picWidth;
  };

  const renderFlatListItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProjectStack', {
          screen: 'Post',
          params: {profileDataInfo: item},
        })
      }>
      <View>
        <Image
          style={{
            resizeMode: 'cover',
            height: 200,
            width: handlePictureWidth(index),
            marginLeft: index % 3 !== 0 ? 2 : 0,
            marginBottom: 2,
          }}
          source={item.url}
        />
      </View>
    </TouchableOpacity>
  );

  const ServeProfileInfo = () => (
    <View style={styles.rowWrapper}>
      <View
        style={{
          flex: 3,
        }}>
        <Text style={styles.post}>@{name}</Text>
        <Text style={styles.info}>{followers} followers</Text>
        <Text style={styles.info}>{about}</Text>
      </View>

      <View style={{flex: 2, justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View>
            <CustomButton
              iconLeft="LifeOnLand"
              iconFill={Colors.white}
              style={{backgroundColor: Colors.transparent}}
              onPress={() => alert('Life on Earth')}
            />
          </View>
          <View>
            <CustomButton
              iconLeft="Climate"
              iconFill={Colors.white}
              style={{backgroundColor: Colors.transparent}}
              iconStyling={{width: 23, height: 32}}
              onPress={() => alert('Climate')}
            />
          </View>
          <View>
            <CustomButton
              iconLeft="Health"
              iconFill={Colors.white}
              style={{backgroundColor: Colors.transparent}}
              onPress={() => alert('Health')}
            />
          </View>
        </View>
        {!myProfile && (
          <View style={{marginVertical: '5%'}}>
            <CustomButton title="Follow" onPress={() => alert('Follow')} />
          </View>
        )}
      </View>
    </View>
  );

  // RETURN ---------------------------------------------------------
  return (
    <ImageBackground
      source={url}
      style={{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      }}>
      <LinearGradient
        colors={[Colors.gradientProfile, Colors.transparent]}
        start={{x: 0, y: 0}}
        style={{flex: 1}}>
        <StatusBar hidden />
        <SafeAreaView style={styles.wrapper}>
          {addPostPopUp && <AddPostAction navigation={navigation} />}
          <View style={styles.headerActions}>
            {myProfile && <DonateActions navigation={navigation} profile />}
            {!myProfile && (
              <UserProfileHeaderActions
                navigation={navigation}
                profileDataInfo={profile}
                onPress={() => {
                  setMyProfile(true);
                  setProfile(PROFILE_DATA);
                }}
              />
            )}
          </View>
          <View style={styles.appActions}>
            <AppActions
              navigation={navigation}
              Settings
              Shoutout
              profileDataInfo={profile}
              More={!myProfile}
            />
          </View>
          <View style={styles.postContainer}>
            <ServeProfileInfo />
          </View>

          <SlidingUpPanel
            snappingPoints={[height / 2.1, height]}
            draggableRange={{top: height - height / 7, bottom: 220}}>
            {dragHandler => (
              <View
                style={{
                  flex: 1,
                  zIndex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 230,
                }}>
                <View
                  style={{
                    alignSelf: 'stretch',
                    height: 64,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Colors.matFilter,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    overflow: 'hidden',
                  }}
                  {...dragHandler}>
                  <Text>Drag handler</Text>
                </View>
                <ScrollView>
                  <View style={styles.flatListContainer}>
                    <FlatList
                      keyExtractor={(_, index) => String(index)}
                      showsVerticalScrollIndicator={false}
                      numColumns={3}
                      data={projects}
                      renderItem={renderFlatListItem}
                      nestedScrollEnabled={true}
                    />
                  </View>
                </ScrollView>
              </View>
            )}
          </SlidingUpPanel>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Profile;
