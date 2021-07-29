import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from './CustomButton';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - width / 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileType: {
    ...Fonts.N_400_16,
  },
});

// RETURN ---------------------------------------------------------
const ProfileHeaderActions = ({navigation}) => {
  const [donateAction, setDonateAction] = React.useState(false);

  return (
    <View>
      <View style={styles.container}>
        <View>
          <CustomButton
            style={{
              backgroundColor: Colors.transparent,
              padding: 10,
              borderRadius: 100,
            }}
            iconLeft="ChevronLeft"
            iconWidth={12}
            iconHeight={20}
            iconFill={Colors.white}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View>
          <CustomButton
            style={{
              backgroundColor: Colors.transparent,
              padding: 10,
              borderRadius: 100,
            }}
            iconLeft="ThreeDots"
            iconWidth={32}
            iconHeight={32}
            iconFill={Colors.white}
            onPress={() => alert('actions')}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileHeaderActions;
