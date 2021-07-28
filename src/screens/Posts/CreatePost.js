import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Modal,
  Dimensions,
} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  modalView: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: width / 20,
    backgroundColor: Colors.transparentWhite,
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
    top: height - 200,
  },
});

const CreatePost = ({navigation}) => {
  return (
    // <ScreenWrapper>
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={true}>
        <View style={styles.modalView}>
          <Text>Hello</Text>
          <CustomButton
            style={{
              backgroundColor: Colors.black,
            }}
            title="All"
            titleStyling={styles.actionTitle}
            // onPress={() => navigation.navigate('AppStack', {screen: 'Profile'})}
            onPress={() => navigation.goBack()}
          />
        </View>
      </Modal>
    </View>
    // </ScreenWrapper>
  );
};

export default CreatePost;
