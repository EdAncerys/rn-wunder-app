import * as React from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import {openCamera, openGallery} from '../config/deviceCamera';
import {useAuthDispatch, addPostAction} from '../context/auth';
import {useApiDispatch} from '../context/api';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from './CustomButton';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: '5%',
    bottom: 100,
  },
});

// CAMERA OPTION POPUP -------------------------------------------------
const AddPostAction = ({navigation}) => {
  const [image, setImage] = React.useState(null);

  const dispatchAuth = useAuthDispatch();
  const dispatchApi = useApiDispatch();

  // HANDLERS ---------------------------------------------------------
  const handleGallery = () => {
    openGallery(setImage);
  };

  const handleCamera = () => {
    openCamera(setImage);
  };

  const handleCancelAddPost = () => {
    const addAction = {addAction: false};
    addPostAction({dispatchAuth, dispatchApi, addAction});
  };

  const handleViewDrafts = () => {
    handleCancelAddPost();
    navigation.navigate('AddStack', {
      screen: 'Draft',
    });
  };

  React.useEffect(() => {
    if (image) {
      handleCancelAddPost();
      navigation.navigate('AddStack', {
        screen: 'SharePost',
        params: {image: image},
      });
    }
  }, [image]);

  // RETURN ---------------------------------------------------------
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={{flex: 1, backgroundColor: Colors.gradientProfile}}>
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
              borderBottomWidth: 1,
              borderColor: Colors.lightSilver,
            }}
            onPress={handleGallery}
          />
          <CustomButton
            title="View Drafts"
            titleStyling={{...Fonts.N_400_20, color: Colors.lightBlue}}
            style={{
              backgroundColor: Colors.transparentMatWhite,
              borderRadius: 0,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            onPress={handleViewDrafts}
          />
          <CustomButton
            title="Cancel"
            titleStyling={{...Fonts.N_400_20, color: Colors.lightBlue}}
            style={{backgroundColor: Colors.white, marginVertical: 10}}
            onPress={handleCancelAddPost}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddPostAction;
