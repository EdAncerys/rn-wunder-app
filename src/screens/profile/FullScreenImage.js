import * as React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

import Colors from '../../config/colors';
import CustomButton from '../../components/CustomButton';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    alignItems: 'center',
  },
  navigateActionContainer: {
    zIndex: 1,
    position: 'absolute',
    top: '5%',
    left: '5%',
    alignSelf: 'flex-start',
  },
  imgWrapper: {
    paddingHorizontal: 10,
  },
  imgContainer: {
    marginTop: height / 4,
    width: width,
    height: width / 1.2,
    borderRadius: 30,
    overflow: 'hidden',
  },
});

const FullScreenImage = ({navigation, route}) => {
  const {dataProfile} = route.params;
  const [image, setImage] = React.useState(dataProfile);

  // RETURN ---------------------------------------------------------
  return (
    <View style={styles.wrapper}>
      <View style={styles.navigateActionContainer}>
        <CustomButton
          iconLeft="ChevronLeft"
          iconWidth={12}
          iconHeight={12}
          iconFill={Colors.white}
          iconStyling={{width: 12, height: 20}}
          style={{
            backgroundColor: Colors.secondary,
            padding: 10,
            borderRadius: 100,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.imgWrapper}>
        <View style={styles.imgContainer}>
          <Image
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%',
              // flex: 1,
              // width: width,
              // height: height,
            }}
            source={image.url}
          />
        </View>
      </View>
    </View>
  );
};

export default FullScreenImage;
