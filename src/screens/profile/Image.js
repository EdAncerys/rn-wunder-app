import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  navigateActionContainer: {
    marginTop: '5%',
    alignSelf: 'flex-start',
  },
});

const Image = ({navigation, item}) => {
  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <CustomButton
            style={{
              backgroundColor: Colors.secondary,
              padding: 10,
              borderRadius: 100,
            }}
            onPress={navigation.goBack()}
            iconLeft="ChevronLeft"
            iconWidth={12}
            iconHeight={12}
            iconFill={Colors.white}
            iconStyling={{width: 12, height: 20}}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Image;
