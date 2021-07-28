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
  Modal,
} from 'react-native';
import {PROFILE_DATA, IMAGE_DATA_ARRAY} from '../../config/data';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import ProfileActions from '../../components/ProfileActions';
import DonateActions from '../../components/DonateActions';

import Background from '../../assets/images/profile/profile-background.png';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  donateContainer: {
    justifyContent: 'center',
    marginHorizontal: '5%',
    height: height / 10,
  },
  appActions: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: '5%',
    height: height / 2,
  },
  postContainer: {
    justifyContent: 'flex-start',
    marginHorizontal: '5%',
    height: height / 6,
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
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
  badge: {
    flex: 1,
  },
  imageContainer: {
    marginBottom: 60,
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
  const [data, setData] = React.useState(PROFILE_DATA);
  const [navigate, setNavigate] = React.useState(false);

  React.useEffect(() => {
    console.log(navigate);
    navigation.navigate('ProfileStack', {
      screen: 'FullScreenImage',
      params: {item: navigate},
    });
  }, [navigate]);

  // SERVERS ---------------------------------------------------------
  const renderFlatListItem = ({item, index}) => (
    <TouchableOpacity onPress={() => setNavigate(item)}>
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
        <View style={styles.rowWrapper}>
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
  );

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper image={Background}>
      <View style={styles.wrapper}>
        <View style={styles.donateContainer}>
          <DonateActions navigation={navigation} profile />
        </View>
        {/* <View
          style={{
            zIndex: 1,
            position: 'relative',
            alignItems: 'flex-start',
            width: '100%',
            marginTop: height / 3.5,
            marginLeft: '5%',
            backgroundColor: 'tomato',
          }}>
          <ProfileActions />
        </View>

        <View
          style={{
            zIndex: 1,
            position: 'absolute',
            alignItems: 'flex-start',
            width: '100%',
            marginTop: height / 1.65,
            marginLeft: '5%',
            backgroundColor: 'tomato',
          }}>
          <ServeProfileInfo />
        </View> */}
        <View>
          <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
            <View style={styles.appActions}>
              <ProfileActions />
            </View>
            <View style={styles.postContainer}>
              <ServeProfileInfo />
            </View>

            <View style={styles.imageContainer}>
              <FlatList
                keyExtractor={(_, index) => String(index)}
                showsVerticalScrollIndicator={false}
                numColumns={3}
                data={IMAGE_DATA_ARRAY}
                renderItem={renderFlatListItem}
                nestedScrollEnabled={true}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Profile;
