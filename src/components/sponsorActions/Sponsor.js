import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../CustomButton';

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: '8%',
  },
  title: {
    ...Fonts.N_500_22,
    textAlign: 'center',
  },
  msgContainer: {
    paddingHorizontal: '10%',
    marginVertical: '5%',
  },
  msg: {
    ...Fonts.N_400_12,
    color: Colors.lightBlack,
    textAlign: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Sponsor = ({setSponsorAction, setSponsor, setConfirmSponsor}) => {
  return (
    <View>
      <View style={{...styles.actionContainer, alignSelf: 'flex-end'}}>
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          iconLeft="Cross"
          iconWidth={16}
          iconHeight={16}
          onPress={() => setSponsorAction(false)}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Donate 2000 coins up front to become a sponsor
        </Text>
      </View>
      <View style={styles.msgContainer}>
        <Text style={styles.msg}>
          By donating you will appear as a sponsor on the project page.
        </Text>
      </View>

      <CustomButton
        title="Continue"
        onPress={() => {
          setSponsor(false);
          setConfirmSponsor(true);
        }}
      />
    </View>
  );
};

export default Sponsor;
