import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Verified} from '../../config/icons';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import UserProfileHeaderActions from '../../components/UserProfileHeaderActions';
import {PROFILE_DATA, PROFILE_DATA_ONE} from '../../config/data';
import CommendActions from '../../components/CommendActions';
import Location from '../../assets/dummyAssets/location.png';

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
  divider: {
    borderColor: Colors.silver,
    borderBottomWidth: 1,
    marginVertical: '6%',
  },
});

const Commending = ({navigation}) => {
  const [profile, setProfile] = React.useState(PROFILE_DATA);
  const [projectImages, setProjectImages] = React.useState(PROFILE_DATA_ONE);
  const {url, about, name, followers, post} = profile;
  const {locationMap, progressBar} = profile;

  console.log(locationMap);

  // HELPERS ---------------------------------------------------------
  const renderFlatListItem = ({item, index}) => (
    <TouchableOpacity
      key={index}
      style={{flexDirection: 'row'}}
      onPress={() =>
        navigation.navigate('ProjectStack', {
          screen: 'FullScreenImage',
          params: {profileDataInfo: item},
        })
      }>
      <View style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 15,
            overflow: 'hidden',
          }}>
          <ImageBackground
            source={item.url}
            style={{
              height: height / 8,
              width: width / 2,
              resizeMode: 'cover',
            }}>
            <LinearGradient
              colors={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}
              start={{x: 0.4, y: 0.4}}
              style={{flex: 1}}>
              <View
                style={{
                  zIndex: 1,
                  position: 'absolute',
                  bottom: 10,
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{
                    ...Fonts.N_400_10,
                    color: Colors.white,
                  }}>
                  {item.title}
                </Text>
                <View
                  style={{
                    paddingVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      ...Fonts.N_400_10,
                      color: Colors.white,
                    }}>
                    {item.time}
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>
  );

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
      <ScrollView>
        <View style={{height: height / 2}}>
          <ImageBackground
            source={url}
            style={{
              flex: 1,
              resizeMode: 'cover',
              justifyContent: 'center',
            }}>
            <View
              style={{flex: 1, alignItems: 'center', marginVertical: '10%'}}>
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
          <View>
            <FlatList
              keyExtractor={(_, index) => String(index)}
              horizontal={true}
              data={projectImages}
              renderItem={renderFlatListItem}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={{marginVertical: '5%'}}>
            <Text style={{...Fonts.N_400_14, color: Colors.lightBlack}}>
              {post}
            </Text>
          </View>
          <View style={{marginVertical: '5%'}}>
            <Image
              style={{
                width: '100%',
                height: width / 1.5,
                overflow: 'hidden',
                resizeMode: 'cover',
              }}
              source={locationMap}
            />
            <View style={{marginVertical: '5%'}}>
              <CustomButton
                title="get involved"
                onPress={() => alert('get involved')}
              />
            </View>
          </View>

          <View>
            <Text style={{...Fonts.N_700_14, color: Colors.lightBlack}}>
              {post}
            </Text>
          </View>
          <View style={{marginVertical: '5%'}}>
            <Text style={{...Fonts.N_400_14, color: Colors.lightBlack}}>
              {post}
            </Text>
          </View>
          <View style={styles.divider}></View>
          <View style={{marginVertical: '5%'}}>
            <Text style={{...Fonts.N_700_28, color: Colors.lightBlack}}>
              Funding Goals
            </Text>
          </View>
          <View style={{marginVertical: '5%'}}>
            <Text style={{...Fonts.N_400_16, color: Colors.lightBlack}}>
              {post}
            </Text>
          </View>
          <View style={{marginVertical: '5%'}}>
            <Text style={{...Fonts.N_700_16, color: Colors.lightBlack}}>
              Progress
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View>
              <Text style={{...Fonts.N_700_24, color: Colors.primary}}>
                £15.000
              </Text>
            </View>
            <View>
              <Text
                style={{
                  ...Fonts.N_400_12,
                  color: Colors.primary,
                  marginHorizontal: 10,
                  marginBottom: 5,
                }}>
                Goal
              </Text>
            </View>
          </View>
          <View style={{marginVertical: '5%'}}>
            <Image
              style={{
                width: '100%',
                overflow: 'hidden',
                resizeMode: 'cover',
              }}
              source={progressBar}
            />
            <View style={{marginVertical: '5%'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{
                      ...Fonts.N_700_18,
                      color: Colors.lightBlack,
                    }}>
                    £9750
                  </Text>
                  <Text
                    style={{
                      ...Fonts.N_400_12,
                      color: Colors.lightBlack,
                    }}>
                    Raised
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      ...Fonts.N_700_18,
                      color: Colors.lightBlack,
                    }}>
                    £5250
                  </Text>
                  <Text
                    style={{
                      ...Fonts.N_400_12,
                      color: Colors.lightBlack,
                    }}>
                    Required
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <CustomButton
              title={`Commend ${name}`}
              iconRight="Commend"
              iconWidth={28}
              iconHeight={28}
              iconFill={Colors.white}
              onPress={() => alert('commend')}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <CustomButton
              title={`Sponsor ${name}`}
              iconRight="HandShake"
              iconWidth={28}
              iconHeight={28}
              iconFill={Colors.white}
              style={{backgroundColor: Colors.success}}
              onPress={() => alert('get involved')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Commending;
