import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';
import {PROJECTS_DATA} from '../../config/data';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
});

const Draft = ({navigation}) => {
  const [data, setData] = React.useState(PROJECTS_DATA);

  const renderFlatListItem = ({item, index}) => {
    const {url} = item;

    return (
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() =>
          navigation.navigate('AddStack', {
            screen: 'SharePost',
            params: {image: item},
          })
        }>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: index % 2 === 0 ? 0 : 1,
            borderColor: Colors.lightSilver,
            padding: 20,
            width: width / 2.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground
            source={url}
            style={{
              resizeMode: 'cover',
              width: 70,
              height: 110,
              borderRadius: 10,
              marginBottom: 2,
              overflow: 'hidden',
            }}>
            <LinearGradient
              colors={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}
              start={{x: 0.4, y: 0.4}}
              style={{flex: 1}}>
              <View
                style={{
                  zIndex: 1,
                  position: 'absolute',
                  width: '100%',
                  bottom: 10,
                  paddingHorizontal: 10,
                }}>
                {/* <Text style={styles.textOverlay}>{item.title}</Text>
                <View
                  style={{
                    paddingVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textOverlay}>{item.time}</Text>
                </View> */}
              </View>
            </LinearGradient>
          </ImageBackground>
          <View
            style={{
              marginTop: 15,
              width: '100%',
            }}>
            <Text
              style={{
                ...Fonts.N_700_14,
                textAlign: 'center',
                color: Colors.lightBlack,
              }}>
              {item.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper>
      <View style={styles.wrapper}>
        <View>
          <NavigateAction
            title="Your Drafts"
            titleStyling={{color: Colors.lightBlack}}
            iconFill={Colors.lightBlack}
            onPress={() => navigation.goBack()}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '5%',
            }}>
            <FlatList
              keyExtractor={(_, index) => String(index)}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={data}
              renderItem={renderFlatListItem}
              nestedScrollEnabled={true}
            />
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default Draft;
