import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../CustomButton';

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: '10%',
  },
  title: {
    ...Fonts.N_700_18,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: Colors.white,
    marginVertical: '10%',
    borderRadius: 9,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: Colors.lightBlack,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 1,
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  coinInput: {
    ...Fonts.N_400_20,
    paddingVertical: 5,
    textAlign: 'center',
    textAlignVertical: 'top',
  },
  textInput: {
    ...Fonts.N_400_15,
    textAlign: 'left',
    height: 80,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 16,
    height: 16,
  },
});

const SelectDonateReason = ({
  setDonateReason,
  setReason,
  setEvent,
  setVolunteer,
  setBoth,
}) => {
  return (
    <View>
      <View style={{...styles.actionContainer, alignSelf: 'flex-end'}}>
        <CustomButton
          style={{backgroundColor: Colors.transparent}}
          iconLeft="Cross"
          iconWidth={16}
          iconHeight={16}
          iconStyling={styles.icon}
          onPress={() => setDonateReason(false)}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Do you wish to donate coins to the event or to the users donating?
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginVertical: '5%'}}>
        <View style={{flex: 1, marginRight: 10}}>
          <CustomButton
            title="Event"
            onPress={() => {
              setReason(false);
              setEvent(true);
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <CustomButton
            title="Volunteer"
            onPress={() => {
              setReason(false);
              setVolunteer(true);
            }}
          />
        </View>
      </View>
      <View>
        <CustomButton
          title="Both"
          style={{backgroundColor: Colors.success}}
          onPress={() => {
            setReason(false);
            setBoth(true);
          }}
        />
      </View>
    </View>
  );
};

export default SelectDonateReason;
