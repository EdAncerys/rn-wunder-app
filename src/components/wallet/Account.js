import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../CustomButton';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({});

const Account = ({}) => {
  // RETURN ---------------------------------------------------------
  return (
    <View style={{width: '100%'}}>
      <View style={{marginVertical: 15, alignItems: 'center'}}>
        <Text style={{...Fonts.N_700_28, color: Colors.lightBlack}}>
          Your Balance
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={{...Fonts.N_400_26, color: Colors.lightBlack}}>204</Text>
        <Text style={{...Fonts.N_400_16, color: Colors.lightBlack}}>Coins</Text>
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
              <Text style={{...Fonts.N_400_26, color: Colors.lightBlack}}>
                326
              </Text>
              <Text style={{...Fonts.N_400_16, color: Colors.lightBlack}}>
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
              <Text style={{...Fonts.N_400_26, color: Colors.lightBlack}}>
                450
              </Text>
              <Text style={{...Fonts.N_400_16, color: Colors.lightBlack}}>
                Planet
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Account;
