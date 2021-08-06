import * as React from 'react';
import {View, Dimensions, Modal} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from './CustomButton';

const ReportAction = ({
  navigation,
  setReportAction,
  setBlockAction,
  profileDataInfo,
}) => {
  const {name} = profileDataInfo;

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          paddingHorizontal: '5%',
          bottom: 50,
        }}>
        <CustomButton
          title={`Block @${name}`}
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
            setReportAction(false);
            setBlockAction(true);
          }}
        />
        <CustomButton
          title="Report Post"
          titleStyling={{...Fonts.N_400_20, color: Colors.lightBlue}}
          style={{
            backgroundColor: Colors.transparentMatWhite,
            borderRadius: 0,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
          onPress={() => {
            setReportAction(false);
            navigation.navigate('ProjectStack', {screen: 'SelectingReport'});
          }}
        />
        <CustomButton
          title="Cancel"
          titleStyling={{...Fonts.N_400_20, color: Colors.lightBlue}}
          style={{backgroundColor: Colors.white, marginVertical: 10}}
          onPress={() => setReportAction(false)}
        />
      </View>
    </Modal>
  );
};

export default ReportAction;