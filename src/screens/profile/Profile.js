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
} from 'react-native';
import {useAuthState} from '../../context/auth';
import AddPostAction from '../../components/AddPostAction';
import {PROFILE_DATA, IMAGE_DATA_ARRAY} from '../../config/data';
import Draggable from 'react-native-draggable';
import SlidingUpPanel from 'rn-sliding-up-panel';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import AppActions from '../../components/AppActions';
import DonateActions from '../../components/DonateActions';

import Background from '../../assets/images/profile/profile-background.png';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerActions: {
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginVertical: '5%',
  },
  appActions: {
    flex: 1.5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: '5%',
    backgroundColor: Colors.matFilter,
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
    // zIndex: 1,
    // position: 'absolute',
    // marginTop: height - 350,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  image: {
    height: height / 4 + 50,
    width: width / 2 - 30,
    resizeMode: 'cover',
  },
});

const Profile = ({navigation}) => {
  const {addAction} = useAuthState();
  const [addPostPopUp, setAddPostPopUp] = React.useState(null);
  const [profile, setProfile] = React.useState(PROFILE_DATA);
  const [projects, setProjects] = React.useState(IMAGE_DATA_ARRAY);
  const {name, followers, about} = profile;

  React.useEffect(() => {
    if (addAction) setAddPostPopUp(addAction.addAction);
  }, [addAction]);

  // SERVERS ---------------------------------------------------------
  const renderFlatListItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProjectStack', {
          screen: 'FullScreenImage',
          params: {item: item},
        })
      }>
      <View>
        <Image
          style={{
            resizeMode: 'cover',
            height: 200,
            width: width / 3,
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
          flex: 1,
        }}>
        <Text style={styles.post}>{name}</Text>
        <Text style={styles.info}>{followers} followers</Text>
        <Text style={styles.info}>{about}</Text>
      </View>

      <View
        style={{
          flex: 1,
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
    </View>
  );

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper image={Background}>
      {addPostPopUp && <AddPostAction navigation={navigation} />}
      <View style={styles.wrapper}>
        <View style={styles.headerActions}>
          <DonateActions navigation={navigation} profile />
        </View>

        <View style={{flex: 1}}>
          <View style={styles.appActions}>
            <AppActions
              navigation={navigation}
              Settings
              Shoutout
              item={profile}
            />
          </View>
          <View style={styles.postContainer}>
            <ServeProfileInfo />
          </View>

          <SlidingUpPanel
            backdropOpacity={1}
            draggableRange={{top: height, bottom: 300}}
            // draggableRange={{top: height, bottom: 200}}
          >
            {/* <ScrollView
              style={{flexGrow: 1}}
              showsVerticalScrollIndicator={false}
              horizontal={false}> */}
            <View style={styles.flatListContainer}>
              {/* <FlatList
                keyExtractor={(_, index) => String(index)}
                showsVerticalScrollIndicator={false}
                numColumns={3}
                data={projects}
                renderItem={renderFlatListItem}
                nestedScrollEnabled={true}
              /> */}
              <View
                style={{
                  minHeight: height,
                  width: width / 2,
                  backgroundColor: 'pink',
                }}>
                <Text>Helllo</Text>
              </View>
            </View>
            {/* </ScrollView> */}
          </SlidingUpPanel>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Profile;
