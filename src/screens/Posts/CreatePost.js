import * as React from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import {useNavigationState} from '@react-navigation/native';
import {openCamera, openGallery} from '../../config/deviceCamera';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: '5%',
    bottom: 100,
  },
});

// CAMERA OPTION POPUP -------------------------------------------------
const CreatePost = ({navigation}) => {
  const [image, setImage] = React.useState(null);
  const [uploadOptions, setUploadOptions] = React.useState(true);

  const index = useNavigationState(state => state.index);
  if (index === 2) navigation.goBack();

  // HANDLERS ---------------------------------------------------------
  const handleGallery = () => {
    openGallery(setImage);
  };

  const handleCamera = () => {
    openCamera(setImage);
  };

  const handleViewDrafts = () => {
    setUploadOptions(false);
    navigation.navigate('AddStack', {
      screen: 'Draft',
    });
  };

  React.useEffect(() => {
    if (image) {
      setUploadOptions(false);
      navigation.navigate('AddStack', {
        screen: 'SharePost',
        params: {image: image},
      });
    }
  }, [image]);

  // RETURN ---------------------------------------------------------
  return (
    <Modal animationType="slide" transparent={true} visible={uploadOptions}>
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
          onPress={() => setUploadOptions(false)}
        />
      </View>
    </Modal>
  );
};

export default CreatePost;
