import * as React from 'react';
import {Text, View, StyleSheet, Dimensions, Modal} from 'react-native';

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
    position: 'absolute',
    width: '100%',
    paddingHorizontal: '5%',
    bottom: 50,
  },
});

// SERVERS ---------------------------------------------------------
const ServeReportPost = ({
  navigation,
  setReportAction,
  setBlockAction,
  profileDataInfo,
}) => {
  const {name} = profileDataInfo;

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

const ServeBlockingUser = ({setBlockAction, profileDataInfo}) => {
  const {name} = profileDataInfo;

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={{...styles.actionsContainer, bottom: height / 2.5}}>
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
            {`@${name}`} no longer be able to follow you and you will no longer
            see there posts or comments.
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
    </Modal>
  );
};

// RETURN ---------------------------------------------------------
const ProfileHeaderActions = ({navigation, profileDataInfo}) => {
  const [reportAction, setReportAction] = React.useState(false);
  const [blockAction, setBlockAction] = React.useState(false);

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
            onPress={() => setReportAction(true)}
          />
        </View>
      </View>
      {reportAction && (
        <ServeReportPost
          navigation={navigation}
          setReportAction={setReportAction}
          setBlockAction={setBlockAction}
          profileDataInfo={profileDataInfo}
        />
      )}
      {blockAction && (
        <ServeBlockingUser
          setBlockAction={setBlockAction}
          profileDataInfo={profileDataInfo}
        />
      )}
    </View>
  );
};

export default ProfileHeaderActions;
