import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from './CustomButton';
import ReportAction from '../components/ReportAction';
import BlockUser from '../components/BlockUser';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
const ServeReportAction = ({
  navigation,
  setReportAction,
  setBlockAction,
  profileDataInfo,
}) => {
  return (
    <ReportAction
      navigation={navigation}
      setReportAction={setReportAction}
      setBlockAction={setBlockAction}
      profileDataInfo={profileDataInfo}
    />
  );
};

const ServeBlockUser = ({setBlockAction, profileDataInfo}) => {
  return (
    <BlockUser
      setBlockAction={setBlockAction}
      profileDataInfo={profileDataInfo}
    />
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
            iconLeft="ThreeDotsFill"
            iconWidth={32}
            iconHeight={32}
            iconFill={Colors.white}
            onPress={() => setReportAction(true)}
          />
        </View>
      </View>
      {reportAction && (
        <ServeReportAction
          navigation={navigation}
          setReportAction={setReportAction}
          setBlockAction={setBlockAction}
          profileDataInfo={profileDataInfo}
        />
      )}
      {blockAction && (
        <ServeBlockUser
          setBlockAction={setBlockAction}
          profileDataInfo={profileDataInfo}
        />
      )}
    </View>
  );
};

export default ProfileHeaderActions;
