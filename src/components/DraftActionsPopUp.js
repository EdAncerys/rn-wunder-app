import * as React from 'react';
import {View, StyleSheet, Modal} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from './CustomButton';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: '5%',
    bottom: 50,
  },
});

const DraftActionsPopUp = ({navigation, setDraftActions, image}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={{flex: 1, backgroundColor: Colors.gradientProfile}}>
        <View style={styles.container}>
          <CustomButton
            title="Open Draft"
            titleStyling={{...Fonts.N_400_20, color: Colors.lightBlue}}
            style={{
              backgroundColor: Colors.transparentMatWhite,
              borderRadius: 0,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomWidth: 1,
              borderColor: Colors.lightSilver,
            }}
            onPress={() => {
              setDraftActions(false);
              navigation.navigate('AddStack', {
                screen: 'SharePost',
                params: {image: image},
              });
            }}
          />
          <CustomButton
            title="Delete Draft"
            titleStyling={{...Fonts.N_400_20, color: Colors.primary}}
            style={{
              backgroundColor: Colors.transparentMatWhite,
              borderRadius: 0,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            onPress={() => setDraftActions(false)}
          />
          <CustomButton
            title="Cancel"
            titleStyling={{...Fonts.N_400_20, color: Colors.lightBlue}}
            style={{backgroundColor: Colors.white, marginVertical: 10}}
            onPress={() => setDraftActions(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DraftActionsPopUp;
