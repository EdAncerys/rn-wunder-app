import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import {
  Search as SearchIcon,
  Cross,
  Planet,
  People,
  Hash,
} from '../../config/icons';
import {SEARCH_PAGE_DATA} from '../../config/data';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  inputContainer: {
    ...Fonts.N_700_12,
    marginTop: '5%',
    flexDirection: 'row',
    height: 40,
    padding: 10,
    borderRadius: 5,
  },
  iconBackground: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    overflow: 'hidden',
    backgroundColor: Colors.lightBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgIconBackground: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
    overflow: 'hidden',
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    height: height / 4 + 50,
    width: width / 2 - 30,
    resizeMode: 'cover',
  },
  imgInfoOverlay: {
    zIndex: 1,
    position: 'absolute',
    bottom: 10,
    width: width / 2 - 30,
    paddingHorizontal: 10,
  },
  textOverlay: {
    ...Fonts.N_400_10,
    color: Colors.white,
  },
  hashtagContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
});

// SERVERS ---------------------------------------------------------
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

const Search = ({navigation}) => {
  const [data, setData] = React.useState(SEARCH_PAGE_DATA);

  const renderFlatListItem = ({item, index}) => (
    <TouchableOpacity
      style={{flexDirection: 'row'}}
      onPress={() =>
        navigation.navigate('ProjectPage', {projectItem: item, index})
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

  const renderItems = () => {
    const items = data.map(item => {
      const {title, total, images} = item;

      return (
        <View>
          <View style={styles.hashtagContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.iconBackground}>
                <Hash width={14} height={16} fill={Colors.white} />
              </View>
              <Text style={{marginLeft: 10}}>{`#${title}`}</Text>
            </View>
            <Text>{`${total} >`}</Text>
          </View>
          <FlatList
            horizontal={true}
            data={images}
            renderItem={renderFlatListItem}
            keyExtractor={(_, index) => String(index)}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
    });
    return items;
  };

  return (
    <ScreenWrapper>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'lightgrey',
          borderRadius: 40,
          marginHorizontal: 20,
          alignItems: 'center',
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.iconBackground}>
            <SearchIcon width={16} height={16} fill={Colors.white} />
          </View>
          <TextInput
            style={styles.inputContainer}
            placeholder="Looking for something specific?"
            placeholderTextColor={Colors.lightBlack}
            multiline={true}
          />
        </View>
        <Cross width={16} height={16} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        <TouchableOpacity>
          <Text>Top</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Near Me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Users</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Hashtags</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 45}}>{renderItems()}</View>
    </ScreenWrapper>
  );
};

export default Search;
