import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  FlatList,
  LinearGradient,
  Image,
  ScrollView,
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
  container: {
    flex: 1,
  },
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
    height: 400,
    justifyContent: 'flex-start',
    marginHorizontal: '5%',
    height: height / 6,
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
    width: width * 0.5,
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
  image: {
    height: height / 4 + 50,
    width: width / 2 - 30,
    resizeMode: 'cover',
  },
  imageStyle: {
    resizeMode: 'cover',
    height: 200,
    width: width / 3,
  },
});

const ProfileHome = ({navigation}) => {
  const [data, setData] = React.useState(PROFILE_DATA);

  // SERVERS ---------------------------------------------------------
  const ServeDonate = ({navigation}) => {
    return (
      <View style={styles.donateContainer}>
        <DonateActions navigation={navigation} profile />
      </View>
    );
  };

  const renderFlatListItem = ({item, index}) => (
    <TouchableOpacity
      style={{flexDirection: 'row'}}
      onPress={() => {
        toggleOverlay();
        setFirstImage(index);
      }}>
      <Image
        style={[
          styles.imageStyle,
          {
            borderTopLeftRadius: index === 0 ? 30 : 0,
            borderTopRightRadius: index === 2 ? 30 : 0,
          },
        ]}
        source={item.url}
      />
      <View style={{backgroundColor: 'white', height: 200, width: 1}} />
    </TouchableOpacity>
  );

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper image={Background}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          </View>

          <View style={{flex: 4}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={3}
              data={IMAGE_DATA_ARRAY}
              renderItem={renderFlatListItem}
              keyExtractor={(_, index) => String(index)}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default ProfileHome;
