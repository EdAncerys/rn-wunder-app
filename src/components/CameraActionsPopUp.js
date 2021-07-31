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

const CameraActionsPopUp = ({
  handleCamera,
  handleGallery,
  setUploadOptions,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.container}>
        <CustomButton
          title="Camera"
          titleStyling={{...Fonts.N_400_20, color: Colors.lightBlue}}
          style={{
            backgroundColor: Colors.transparentMatWhite,
            borderRadius: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomWidth: 1,
            borderColor: Colors.lightSilver,
          }}
          onPress={handleCamera}
        />
        <CustomButton
          title="Photo & Video Gallery"
          titleStyling={{...Fonts.N_400_20, color: Colors.lightBlue}}
          style={{
            backgroundColor: Colors.transparentMatWhite,
            borderRadius: 0,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
          onPress={handleGallery}
        />
        <CustomButton
          title="Cancel"
          titleStyling={{...Fonts.N_400_20, color: Colors.lightBlue}}
          style={{backgroundColor: Colors.white, marginVertical: 10}}
          onPress={() => setUploadOptions(false)}
        />
      </View>
    </Modal>
  );
};

export default CameraActionsPopUp;
