import * as React from 'react';
import {View, StyleSheet, Dimensions, Modal} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from './CustomButton';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - width / 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileType: {
    ...Fonts.N_400_16,
  },
  actionsContainer: {
    paddingTop: height - 200,
    paddingHorizontal: '5%',
  },
});

// SERVERS ---------------------------------------------------------
const ServeReportPost = ({navigation, setDonateAction, item}) => {
  const {name} = item;

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.actionsContainer}>
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
          onPress={() =>
            // navigation.navigate('ProfileStack', {screen: 'SelectingReport'})
            alert('block pop up')
          }
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
            setDonateAction(false);
            navigation.navigate('ProjectStack', {screen: 'SelectingReport'});
          }}
        />
        <CustomButton
          title="Cancel"
          titleStyling={{...Fonts.N_400_20, color: Colors.lightBlue}}
          style={{backgroundColor: Colors.white, marginVertical: 10}}
          onPress={() => setDonateAction(false)}
        />
      </View>
    </Modal>
  );
};

// RETURN ---------------------------------------------------------
const ProfileHeaderActions = ({navigation, item}) => {
  const [donateAction, setDonateAction] = React.useState(false);

  return (
    <View>
      <View style={styles.container}>
        <View>
          <CustomButton
            style={{
              backgroundColor: Colors.transparent,
              padding: 10,
              borderRadius: 100,
            }}
            iconLeft="ChevronLeft"
            iconWidth={12}
            iconHeight={20}
            iconFill={Colors.white}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View>
          <CustomButton
            style={{
              backgroundColor: Colors.transparent,
              padding: 10,
              borderRadius: 100,
            }}
            iconLeft="ThreeDots"
            iconWidth={32}
            iconHeight={32}
            iconFill={Colors.white}
            onPress={() => setDonateAction(true)}
          />
        </View>
      </View>
      {donateAction && (
        <ServeReportPost
          navigation={navigation}
          setDonateAction={setDonateAction}
          item={item}
        />
      )}
    </View>
  );
};

export default ProfileHeaderActions;
