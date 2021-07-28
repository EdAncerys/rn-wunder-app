import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  LinearGradient,
  Dimensions,
  Image,
} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import {Planet, People} from '../../config/icons';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import DonateActions from '../../components/DonateActions';
import {SEARCH_PAGE_DATA} from '../../config/data';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectsContainer: {
    backgroundColor: 'tomato',
  },
  imgIconBackground: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionTitle: {
    ...Fonts.N_700_12,
    color: Colors.lightBlack,
  },
  inputWrapper: {
    width: '100%',
  },
  actionsWrapper: {
    width: '100%',
  },
  navigateActionContainer: {
    marginTop: '5%',
    marginHorizontal: '5%',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
    overflow: 'hidden',
  },
  imgInfoOverlay: {
    zIndex: 1,
    position: 'absolute',
    bottom: 10,
    width: '100%',
    paddingHorizontal: 5,
  },
  textOverlay: {
    ...Fonts.N_400_10,
    color: Colors.white,
  },
});

const OrganizationName = ({navigation}) => {
  const [data, setData] = React.useState(SEARCH_PAGE_DATA);

  // SERVERS ---------------------------------------------------------
  const ServeActions = ({navigation}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="All"
          titleStyling={styles.actionTitle}
          // onPress={() => navigation.navigate('AppStack', {screen: 'Profile'})}
        />
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="People"
          titleStyling={styles.actionTitle}
          // onPress={() => navigation.navigate('AppStack', {screen: 'Profile'})}
        />
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="Planet"
          titleStyling={styles.actionTitle}
          // onPress={() => navigation.navigate('AppStack', {screen: 'Profile'})}
        />
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="Near Me"
          titleStyling={styles.actionTitle}
          // onPress={() => navigation.navigate('AppStack', {screen: 'Profile'})}
        />
      </View>
    );
  };
  const ServePeopleIcon = () => {
    return (
      <View
        style={{
          ...styles.imgIconBackground,
          backgroundColor: Colors.primary,
        }}>
        <People width={10} height={10} fill={Colors.white} />
      </View>
    );
  };

  const ServePlanetIcon = () => {
    return (
      <View
        style={{
          ...styles.imgIconBackground,
          backgroundColor: Colors.planet,
        }}>
        <Planet width={10} height={10} fill={Colors.white} />
      </View>
    );
  };

  // HANDLERS ---------------------------------------------------------
  const renderFlatListItem = ({item, index}) => (
    <TouchableOpacity
      style={{flexDirection: 'row'}}
      onPress={() =>
        // navigation.navigate('ProjectPage', {projectItem: item, index})
        alert(item.title)
      }>
      <View style={{flex: 1}}>
        <View style={styles.imageContainer}>
          <ImageBackground source={item.url} style={styles.image}>
            <LinearGradient
              colors={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}
              start={{x: 0.4, y: 0.4}}
              style={{flex: 1}}>
              <View style={styles.imgInfoOverlay}>
                <Text style={styles.textOverlay}>{item.title}</Text>
                <View
                  style={{
                    paddingVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textOverlay}>{item.time}</Text>
                  {item.category === 'people' && <ServePeopleIcon />}
                  {item.category !== 'people' && <ServePlanetIcon />}
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>
  );

  const RenderItems = () => {
    const items = data.map(item => {
      const {title, total, images} = item;

      return (
        <View>
          <FlatList
            keyExtractor={(_, index) => String(index)}
            horizontal={true}
            data={images}
            renderItem={renderFlatListItem}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
    });
    return items;
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.navigateActionContainer}>
          <DonateActions navigation={navigation} projects />
          <View style={styles.actionsContainer}>
            <ServeActions navigation={navigation} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <RenderItems />
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default OrganizationName;


