import * as React from 'react';
import {Text, View, Dimensions, Modal} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from './CustomButton';

const {width, height} = Dimensions.get('screen');

const BlockUser = ({setBlockAction, profileDataInfo}) => {
  const {name} = profileDataInfo;

  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={{flex: 1, backgroundColor: Colors.gradientProfile}}>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            paddingHorizontal: '5%',
            bottom: 50,
            bottom: height / 2.5,
          }}>
          <View
            style={{
              backgroundColor: Colors.transparentMatWhite,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}>
            <Text
              style={{
                ...Fonts.N_400_20,
                color: Colors.lightBlack,
                textAlign: 'center',
                marginTop: 16,
              }}>{`Block @${name}`}</Text>
            <Text
              style={{
                ...Fonts.N_400_16,
                color: Colors.lightBlack,
                textAlign: 'center',
                marginVertical: 16,
                paddingHorizontal: 45,
              }}>
              {`@${name}`} no longer be able to follow you and you will no
              longer see there posts or comments.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <CustomButton
                title="Cancel"
                titleStyling={{...Fonts.N_400_20, color: Colors.primary}}
                style={{
                  flex: 1,
                  backgroundColor: Colors.transparentMatWhite,
                  borderRadius: 0,
                  borderBottomLeftRadius: 10,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  borderColor: Colors.lightSilver,
                }}
                onPress={() => setBlockAction(false)}
              />
            </View>
            <View style={{flex: 1}}>
              <CustomButton
                title="Confirm"
                titleStyling={{...Fonts.N_400_20, color: Colors.lightBlue}}
                style={{
                  backgroundColor: Colors.transparentMatWhite,
                  borderBottomRightRadius: 10,
                  borderRadius: 0,
                  borderTopWidth: 1,
                  borderColor: Colors.lightSilver,
                }}
                onPress={() => setBlockAction(false)}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BlockUser;
