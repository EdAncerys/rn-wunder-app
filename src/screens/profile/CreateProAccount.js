import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import DonateActions from '../../components/DonateActions';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  donateContainer: {
    flex: 1,
  },
  msgContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
    marginVertical: '8%',
  },
  title: {
    ...Fonts.N_700_28,
    textAlign: 'center',
    marginVertical: '4%',
    color: Colors.white,
    marginHorizontal: '5%',
  },
  info: {
    ...Fonts.N_500_12,
    textAlign: 'center',
    color: Colors.lightSilver,
  },
  actionsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

const CreateProAccount = ({navigation, route}) => {
  const {screen} = route.params;

  return (
    <ScreenWrapper filter={Colors.lightBlack}>
      <View style={styles.wrapper}>
        <View style={styles.donateContainer}>
          <DonateActions navigation={navigation} profile screen={screen} />
        </View>
        <View style={styles.msgContainer}>
          <View style={styles.titleContainer}>
            <Text style={{fontSize: 80, marginVertical: '5%'}}>📝</Text>
            <Text style={styles.title}>
              There is no professional account linked
            </Text>
            <Text style={styles.info}>
              Your professional account can allow you to create events, take
              donations and create administrators
            </Text>
          </View>
        </View>
        <View style={styles.actionsContainer}>
          <CustomButton
            title="Create Account"
            onPress={() => navigation.navigate('OrganizationRegNumber')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default CreateProAccount;
