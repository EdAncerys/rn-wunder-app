import * as React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Modal,
} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../CustomButton';
import Account from './Account';
import Cards from './Cards';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    marginHorizontal: width / 20,
    height: 450,
    backgroundColor: Colors.white,
    borderRadius: 20,
    shadowColor: Colors.lightBlack,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 1,
    shadowOpacity: 0.25,
    shadowRadius: 3,
    overflow: 'hidden',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSilver,
  },
});

const DonatePopUp = ({donateAction, setDonateAction}) => {
  const [account, setAccount] = React.useState(true);
  const [cards, setCards] = React.useState(false);
  const [junior, setJunior] = React.useState(false);

  // SERVERS ---------------------------------------------------------
  const ServeActionHeader = ({}) => (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '5%',
        }}>
        <View>
          <CustomButton
            title="Account"
            style={{
              backgroundColor: Colors.transparent,
            }}
            titleStyling={{
              ...Fonts.N_700_12,
              color: account ? Colors.lightBlack : Colors.lightSilver,
            }}
            onPress={() => {
              setAccount(true);
              setCards(false);
              setJunior(false);
            }}
          />
        </View>
        <View>
          <CustomButton
            title="Cards"
            style={{
              backgroundColor: Colors.transparent,
            }}
            titleStyling={{
              ...Fonts.N_700_12,
              color: cards ? Colors.lightBlack : Colors.lightSilver,
            }}
            onPress={() => {
              setAccount(false);
              setCards(true);
              setJunior(false);
            }}
          />
        </View>
        <View>
          <CustomButton
            title="Junior"
            style={{
              backgroundColor: Colors.transparent,
            }}
            titleStyling={{
              ...Fonts.N_700_12,
              color: junior ? Colors.lightBlack : Colors.lightSilver,
            }}
            onPress={() => {
              // setAccount(false);
              // setCards(false);
              // setJunior(true);
              alert('junior');
            }}
          />
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );

  // RETURN ---------------------------------------------------------
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={donateAction}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.modalView}>
            <View
              style={{
                marginHorizontal: '5%',
                marginTop: 10,
                alignSelf: 'flex-end',
              }}>
              <CustomButton
                style={{backgroundColor: Colors.transparent}}
                iconLeft="Cross"
                iconWidth={16}
                iconHeight={16}
                iconStyling={styles.icon}
                onPress={() => setDonateAction(false)}
              />
            </View>
            <ServeActionHeader />

            <View style={{width: '100%'}}>
              {account && <Account />}
              {cards && <Cards />}
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default DonatePopUp;
