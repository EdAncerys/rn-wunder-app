import * as React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Modal,
} from 'react-native';

import Colors from '../../config/colors';
import SelectDonateReason from './SelectDonateReason';
import DonateEvent from './DonateEvent';
import DonateVolunteer from './DonateVolunteer';
import DonateBoth from './DonateBoth';
import DonateInput from '../donateActions/DonateInput';
import ConfirmDonation from '../donateActions/ConfirmDonation';
import DonationConfirmationMsg from '../donateActions/DonationConfirmationMsg';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: height / 3,
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

const CommendActions = ({donateReason, setDonateReason, commend}) => {
  const [reason, setReason] = React.useState(!commend);
  const [event, setEvent] = React.useState(false);
  const [volunteer, setVolunteer] = React.useState(false);
  const [both, setBoth] = React.useState(false);

  const [donateCoins, setDonateCoins] = React.useState(commend);
  const [confirmCoins, setConfirmCoins] = React.useState(false);
  const [thanksMsg, setThanksMsg] = React.useState(false);
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
                msg={msg}
                setCoins={setCoins}
                setMsg={setMsg}
                donateCoins={donateCoins}
                setDonateCoins={setDonateCoins}
                setConfirmCoins={setConfirmCoins}
              />
            )}
            {confirmCoins && (
              <ConfirmDonation
                setDonateAction={setDonateReason}
                coins={coins}
                msg={msg}
                setDonateCoins={setDonateCoins}
                setConfirmCoins={setConfirmCoins}
                setThanksMsg={setThanksMsg}
              />
            )}
            {thanksMsg && (
              <DonationConfirmationMsg
                setDonateAction={setDonateReason}
                setConfirmCoins={setConfirmCoins}
                setThanksMsg={setThanksMsg}
              />
            )}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default CommendActions;
