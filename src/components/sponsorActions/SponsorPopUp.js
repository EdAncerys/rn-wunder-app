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
import Sponsor from './Sponsor';
import SponsorConfirmation from './SponsorConfirmation';

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

const SponsorPopUp = ({sponsorAction, setSponsorAction}) => {
  const [sponsor, setSponsor] = React.useState(true);
  const [confirmSponsor, setConfirmSponsor] = React.useState(false);
  const [thanksMsg, setThanksMsg] = React.useState(false);

  // RETURN ---------------------------------------------------------
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={sponsorAction}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.modalView}>
            {sponsor && (
              <Sponsor
                setSponsorAction={setSponsorAction}
                setSponsor={setSponsor}
                setConfirmSponsor={setConfirmSponsor}
              />
            )}
            {confirmSponsor && (
              <SponsorConfirmation
                setSponsorAction={setSponsorAction}
                setSponsor={setSponsor}
                setConfirmSponsor={setConfirmSponsor}
                setThanksMsg={setThanksMsg}
              />
            )}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default SponsorPopUp;
