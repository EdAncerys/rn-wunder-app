import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Colors from '../config/colors';
import LeftIcon from '../assets/icons/app/notifications.png';
import RightIcon from '../assets/icons/app/wallet.png';
import CustomButton from './CustomButton';
import DonatePopUp from '../components/DonatePopUp';

const {width} = Dimensions.get('screen');

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
});

// SERVERS ---------------------------------------------------------
const ServeDonate = ({setDonateAction}) => {
  return <DonatePopUp setDonateAction={setDonateAction} />;
};

// RETURN ---------------------------------------------------------
const DonateActions = props => {
  const [donateAction, setDonateAction] = React.useState(false);

  return (
    <View>
      <View style={styles.container}>
        <View>
          <CustomButton
            style={{backgroundColor: Colors.transparent}}
            image={LeftIcon}
            imageStyling={styles.icon}
            onPress={() => alert('path')}
          />
        </View>
        <View>
          <CustomButton
            style={{backgroundColor: Colors.transparent}}
            image={RightIcon}
            imageStyling={styles.icon}
            onPress={() => setDonateAction(!donateAction)}
          />
        </View>
      </View>
      {donateAction && <ServeDonate setDonateAction={setDonateAction} />}
    </View>
  );
};

export default DonateActions;
