import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../CustomButton';

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: '15%',
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
    ...Fonts.N_400_45,
    color: Colors.lightBlack,
    textAlign: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const SponsorConfirmation = ({
  setSponsorAction,
  setSponsor,
  setThanksMsg,
  setConfirmSponsor,
}) => {
  return (
    <View style={{width: '100%'}}>
      <View style={{...styles.actionContainer}}>
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          iconLeft="ChevronLeft"
          iconWidth={16}
          iconHeight={16}
          onPress={() => {
            setConfirmSponsor(false);
            setSponsor(true);
          }}
        />
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          iconLeft="Cross"
          iconWidth={16}
          iconHeight={16}
          onPress={() => setSponsorAction(false)}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Confirm your sponsorship</Text>
      </View>
      <View style={styles.msgContainer}>
        <Text style={styles.msg}>📝</Text>
      </View>

      <CustomButton
        title="Confirm"
        onPress={() => {
          setConfirmSponsor(false);
          setThanksMsg(true);
        }}
      />
    </View>
  );
};

export default SponsorConfirmation;
