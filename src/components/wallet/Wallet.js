import * as React from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Animated,
  Keyboard,
  Modal,
} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../CustomButton';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    paddingVertical: 10,
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
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSilver,
    marginVertical: '2%',
  },
});

const DonatePopUp = ({donateAction, setDonateAction}) => {
  const [account, setAccount] = React.useState(true);
  const [cards, setCards] = React.useState(false);
  const [junior, setJunior] = React.useState(false);

  // RETURN ---------------------------------------------------------
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={donateAction}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.modalView}>
            <View style={{width: '100%'}}>
              <View style={{marginHorizontal: '5%', alignSelf: 'flex-end'}}>
                <CustomButton
                  style={{backgroundColor: Colors.transparent}}
                  iconLeft="Cross"
                  iconWidth={16}
                  iconHeight={16}
                  iconStyling={styles.icon}
                  onPress={() => setDonateAction(false)}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
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
                    onPress={() => alert('Account')}
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
                    onPress={() => alert('Cards')}
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
                    onPress={() => alert('Junior')}
                  />
                </View>
              </View>
              <View style={styles.divider} />

              <View style={{marginVertical: 15, alignItems: 'center'}}>
                <Text style={{...Fonts.N_700_28, color: Colors.lightBlack}}>
                  Your Balance
                </Text>
              </View>

              <View style={{alignItems: 'center'}}>
                <Text style={{...Fonts.N_400_26, color: Colors.lightBlack}}>
                  204
                </Text>
                <Text style={{...Fonts.N_400_16, color: Colors.lightBlack}}>
                  Coins
                </Text>
                <View style={{marginVertical: 15}}>
                  <CustomButton
                    title="Add Money"
                    style={{paddingHorizontal: 30}}
                    onPress={() => alert('Add Money')}
                  />
                </View>
              </View>

              <View style={{alignItems: 'center'}}>
                <Text style={{...Fonts.N_400_20, color: Colors.lightBlack}}>
                  Coins Given
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '60%',
                    justifyContent: 'space-around',
                    marginTop: 15,
                  }}>
                  <View>
                    <View style={{alignItems: 'center'}}>
                      <CustomButton
                        iconLeft="People"
                        iconWidth={34}
                        iconHeight={34}
                        iconFill={Colors.white}
                        style={{padding: 5, borderRadius: 30}}
                        onPress={() => alert('People')}
                      />
                    </View>
                    <View style={{marginTop: 10, alignItems: 'center'}}>
                      <Text
                        style={{...Fonts.N_400_26, color: Colors.lightBlack}}>
                        326
                      </Text>
                      <Text
                        style={{...Fonts.N_400_16, color: Colors.lightBlack}}>
                        People
                      </Text>
                    </View>
                  </View>

                  <View>
                    <View style={{alignItems: 'center'}}>
                      <CustomButton
                        iconLeft="Planet"
                        iconWidth={34}
                        iconHeight={34}
                        iconFill={Colors.white}
                        style={{
                          padding: 5,
                          borderRadius: 30,
                          backgroundColor: Colors.planet,
                        }}
                        onPress={() => alert('Planet')}
                      />
                    </View>
                    <View style={{marginTop: 10, alignItems: 'center'}}>
                      <Text
                        style={{...Fonts.N_400_26, color: Colors.lightBlack}}>
                        450
                      </Text>
                      <Text
                        style={{...Fonts.N_400_16, color: Colors.lightBlack}}>
                        Planet
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default DonatePopUp;
