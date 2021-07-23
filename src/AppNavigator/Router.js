import * as React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Colors from '../config/colors';
import {
  Home as HomeIcon,
  Search,
  Create,
  Projects,
  People,
} from '../config/icons';

import SplashScreen from '../screens/onboarding/SplashScreen';
import Visual from '../screens/onboarding/Visual';
import CreateAccountScreen from '../screens/onboarding/CreateAccountScreen';
import AgeQuestion from '../screens/onboarding/AgeQuestion';
import Login from '../screens/onboarding/Login';
import UploadIdentity from '../screens/onboardingOverSixteen/UploadIdentity';
import UploadLicenceFront from '../screens/onboardingOverSixteen/UploadLicenceFront';
import UploadLicenceBack from '../screens/onboardingOverSixteen/UploadLicenceBack';
import UploadPassport from '../screens/onboardingOverSixteen/UploadPassport';
import UploadPictureOfYourself from '../screens/onboardingOverSixteen/UploadPictureOfYourself';
import Email from '../screens/onboarding/Email';
import VerifyEmail from '../screens/onboarding/VerifyEmail';
import Mobile from '../screens/onboarding/Mobile';
import VerifyMobile from '../screens/onboarding/VerifyMobile';
import Username from '../screens/onboarding/Username';
import Location from '../screens/onboarding/Location';
import AccountCreated from '../screens/onboarding/AccountCreated';
import Interests from '../screens/onboarding/Interests';
import Name from '../screens/onboardingUnderSixteen/Name';
import MobileOTP from '../screens/onboardingUnderSixteen/MobileOTP';
import EmailOTP from '../screens/onboardingUnderSixteen/EmailOTP';
import VerifyOTPU16 from '../screens/onboardingUnderSixteen/VerifyOTPU16';
import Yay from '../screens/onboardingUnderSixteen/Yay';
import Profile from '../screens/profile/Profile';
import Home from '../screens/home/Home';
import DonationNotification from '../screens/donate/DonationNotification';

const Tab = createBottomTabNavigator();
const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 14,
          paddingBottom: 30,
          backgroundColor: Colors.white,
          position: 'absolute',
          bottom: 0,
          height: 90,
        },
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.lightBlack,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'home',
          tabBarIcon: ({color}) => (
            <HomeIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarLabel: 'search',
          tabBarIcon: ({color}) => (
            <Search width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="GetInvolved"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <View style={{marginTop: 14}}>
              <Create width={36} height={36} fill={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Projects"
        component={Home}
        options={{
          tabBarLabel: 'projects',
          tabBarIcon: ({color}) => (
            <Projects width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="People"
        component={Profile}
        options={{
          tabBarLabel: 'people',
          tabBarIcon: ({color}) => (
            <People width={28} height={28} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const Router = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Visual"
        component={Visual}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AgeQuestion"
        component={AgeQuestion}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadIdentity"
        component={UploadIdentity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadLicenceFront"
        component={UploadLicenceFront}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadLicenceBack"
        component={UploadLicenceBack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPictureOfYourself"
        component={UploadPictureOfYourself}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPassport"
        component={UploadPassport}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DonationNotification"
        component={DonationNotification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Name"
        component={Name}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EmailOTP"
        component={EmailOTP}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MobileOTP"
        component={MobileOTP}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyOTPU16"
        component={VerifyOTPU16}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Yay" component={Yay} options={{headerShown: false}} />
      <Stack.Screen
        name="Email"
        component={Email}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mobile"
        component={Mobile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyEmail"
        component={VerifyEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Username"
        component={Username}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Location"
        component={Location}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyMobile"
        component={VerifyMobile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountCreated"
        component={AccountCreated}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Interests"
        component={Interests}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
