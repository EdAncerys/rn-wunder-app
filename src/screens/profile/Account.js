import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  bioContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: '5%',
  },
  bioWrapper: {
    flex: 1,
  },
  bioTitleWrapper: {
    flex: 2,
  },
  title: {
    ...Fonts.N_700_16,
    color: Colors.lightBlack,
    textAlign: 'justify',
  },
  bioTitle: {
    ...Fonts.N_400_14,
    color: Colors.lightBlack,
    textAlign: 'justify',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '5%',
  },
  footerTitle: {
    ...Fonts.N_400_8,
    color: Colors.lightBlack,
    textAlign: 'justify',
    marginHorizontal: '5%',
  },
  navigateActionContainer: {
    marginTop: '5%',
    marginHorizontal: '5%',
  },
  content: {
    flex: 1,
    marginHorizontal: '5%',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSilver,
    marginVertical: '2%',
  },
  btnTitleStyling: {
    flex: 1,
    ...Fonts.N_400_16,
    color: Colors.lightBlack,
  },
  btnStyling: {
    backgroundColor: Colors.transparent,
    marginVertical: 5,
  },
  contentWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSilver,
  },
  logoContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: '5%',
  },
});

const SelectingReport = ({navigation, route}) => {
  const {item} = route.params;
  const {url, name, about, location} = item;

  console.log(item);

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.white}>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <NavigateAction
            title="Account"
            titleStyling={{color: Colors.lightBlack}}
            iconFill={Colors.lightBlack}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.content}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 80,
                  height: 170,
                  borderRadius: 10,
                  overflow: 'hidden',
                }}
                source={url}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-around',
              }}>
              <CustomButton
                title="Change Profile Photo"
                style={{
                  ...Fonts.N_700_14,
                }}
                onPress={() => alert('It’s abusive or harmful.')}
              />
              <CustomButton
                title="Select an Avatar"
                style={{
                  ...Fonts.N_700_14,
                }}
                onPress={() => alert('It’s abusive or harmful.')}
              />
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.bioContainer}>
              <View style={styles.bioWrapper}>
                <Text style={styles.title}>Name</Text>
              </View>
              <View style={styles.bioTitleWrapper}>
                <Text style={styles.bioTitle}>{`${name}`}</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.bioContainer}>
              <View style={styles.bioWrapper}>
                <Text style={styles.title}>Username</Text>
              </View>
              <View style={styles.bioTitleWrapper}>
                <Text style={styles.bioTitle}>{`${name}`}</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.bioContainer}>
              <View style={styles.bioWrapper}>
                <Text style={styles.title}>Bio</Text>
              </View>
              <View style={styles.bioTitleWrapper}>
                <Text style={styles.bioTitle}>{`${about}`}</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.bioContainer}>
              <View style={styles.bioWrapper}>
                <Text style={styles.title}>Location</Text>
              </View>
              <View style={styles.bioTitleWrapper}>
                <Text style={styles.bioTitle}>{`${location}`}</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <CustomButton
              title="Select Interests"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() => alert('It displays a sensitive photo or video.')}
            />
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerTitle}>
            © Copyright 2021 • All Rights Reserved
          </Text>
          <Text style={styles.footerTitle}>
            Terms & Conditions Privacy Policy
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SelectingReport;
