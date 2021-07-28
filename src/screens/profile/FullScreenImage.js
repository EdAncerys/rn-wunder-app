import * as React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

import Colors from '../../config/colors';
import CustomButton from '../../components/CustomButton';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  navigateActionContainer: {
    zIndex: 1,
    position: 'absolute',
    top: '5%',
    left: '5%',
    alignSelf: 'flex-start',
  },
});

const FullScreenImage = ({navigation, route}) => {
  const {item} = route.params;
  const [image, setImage] = React.useState(item);

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
      <Image
        style={{
          resizeMode: 'cover',
          width: width,
          height: height,
        }}
        source={image.url}
      />
    </View>
  );
};

export default FullScreenImage;
