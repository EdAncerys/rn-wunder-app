import * as React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Colors from '../config/colors';
import {Home, Search, Create, Projects, People} from '../config/icons';

import SplashScreen from '../screens/onboardingOverSixteen/SplashScreen';
import Visual from '../screens/onboardingOverSixteen/Visual';
import CreateAccountScreen from '../screens/onboardingOverSixteen/CreateAccountScreen';
import AgeQuestion from '../screens/onboardingOverSixteen/AgeQuestion';
import Login from '../screens/onboardingOverSixteen/Login';
import UploadIdentity from '../screens/onboardingOverSixteen/UploadIdentity';
import UploadLicenceFront from '../screens/onboardingOverSixteen/UploadLicenceFront';
import UploadLicenceBack from '../screens/onboardingOverSixteen/UploadLicenceBack';
import UploadPassport from '../screens/onboardingOverSixteen/UploadPassport';
import UploadPictureOfYourselfUP from '../screens/onboardingOverSixteen/UploadPictureOfYourselfUP';
import UploadPictureOfYourself from '../screens/onboardingOverSixteen/UploadPictureOfYourself';
import Email from '../screens/onboardingOverSixteen/Email';
import VerifyEmail from '../screens/onboardingOverSixteen/VerifyEmail';
import Mobile from '../screens/onboardingOverSixteen/Mobile';
import VerifyMobile from '../screens/onboardingOverSixteen/VerifyMobile';
import Username from '../screens/onboardingOverSixteen/Username';
import Location from '../screens/onboardingOverSixteen/Location';
import AccountCreated from '../screens/onboardingOverSixteen/AccountCreated';
import Interests from '../screens/onboardingOverSixteen/Interests';
import Name from '../screens/onboardingUnderSixteen/Name';
import MobileOTP from '../screens/onboardingUnderSixteen/MobileOTP';
import EmailOTP from '../screens/onboardingUnderSixteen/EmailOTP';
import VerifyOTPU16 from '../screens/onboardingUnderSixteen/VerifyOTPU16';
import Yay from '../screens/onboardingUnderSixteen/Yay';
import EmailU16 from '../screens/onboardingUnderSixteen/EmailU16';
import VerifyU16Email from '../screens/onboardingUnderSixteen/VerifyU16Email';
import MobileU16 from '../screens/onboardingUnderSixteen/MobileU16';
import VerifyU16Mobile from '../screens/onboardingUnderSixteen/VerifyU16Mobile';
import UsernameU16 from '../screens/onboardingUnderSixteen/UsernameU16';
import LocationU16 from '../screens/onboardingUnderSixteen/LocationU16';
import Profile from '../screens/profile/Profile';
import HomeScreen from '../screens/home/Home';
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
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'home',
          tabBarIcon: ({color}) => <Home width={28} height={28} fill={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Profile}
        options={{
          tabBarLabel: 'search',
          tabBarIcon: ({color}) => (
            <Search width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Profile}
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
        component={Profile}
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
      {/* <Stack.Screen
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
        name="UploadPictureOfYourselfUP"
        component={UploadPictureOfYourselfUP}
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
      /> */}
      <Stack.Screen
        name="Profile"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
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
        name="EmailU16"
        component={EmailU16}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyU16Email"
        component={VerifyU16Email}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MobileU16"
        component={MobileU16}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyU16Mobile"
        component={VerifyU16Mobile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UsernameU16"
        component={UsernameU16}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LocationU16"
        component={LocationU16}
        options={{headerShown: false}}
      />
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
