import * as React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Animated,
  Keyboard,
  Modal,
} from 'react-native';

import Colors from '../../config/colors';
import SelectDonateReason from '../donateReason/SelectDonateReason';
import DonateEvent from './DonateEvent';
import DonateVolunteer from './DonateVolunteer';
import DonateBoth from './DonateBoth';
import ConfirmDonation from '../donateActions/ConfirmDonation';
import DonationConfirmationMsg from '../donateActions/DonationConfirmationMsg';
import DonateInput from '../donateActions/DonateInput';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: width / 20,
    backgroundColor: Colors.transparentMatWhite,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: Colors.lightBlack,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 1,
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});

const DonateReason = ({donateReason, setDonateReason}) => {
  const [reason, setReason] = React.useState(true);
  const [event, setEvent] = React.useState(false);
  const [volunteer, setVolunteer] = React.useState(false);
  const [both, setBoth] = React.useState(false);

  const [donateCoins, setDonateCoins] = React.useState(false);
  const [confirmCoins, setConfirmCoins] = React.useState(false);
  const [coins, setCoins] = React.useState('');
  const [msg, setMsg] = React.useState('');

  // RETURN ---------------------------------------------------------
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={donateReason}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.modalView}>
            {reason && (
              <SelectDonateReason
                setDonateReason={setDonateReason}
                setReason={setReason}
                setEvent={setEvent}
                setVolunteer={setVolunteer}
                setBoth={setBoth}
              />
            )}
            {event && (
              <DonateEvent
                setDonateReason={setDonateReason}
                setReason={setReason}
                setEvent={setEvent}
                setDonateCoins={setDonateCoins}
              />
            )}
            {volunteer && (
              <DonateVolunteer
                setDonateReason={setDonateReason}
                setReason={setReason}
                setVolunteer={setVolunteer}
                setDonateCoins={setDonateCoins}
              />
            )}
            {both && (
              <DonateBoth
                setDonateReason={setDonateReason}
                setReason={setReason}
                setBoth={setBoth}
                setDonateCoins={setDonateCoins}
              />
            )}
            {donateCoins && (
              <DonateInput
                setDonateAction={setDonateReason}
                coins={coins}
                setCoins={setCoins}
                msg={msg}
                setMsg={setMsg}
                setDonateCoins={setDonateCoins}
              />
            )}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default DonateReason;
