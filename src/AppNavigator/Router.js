import * as React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Colors from '../config/colors';
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Create,
  Projects,
  Profile as ProfileIcon,
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
import Search from '../screens/search/Search';
import CreateProAccount from '../screens/profile/CreateProAccount';
import OrganizationRegNumber from '../screens/profile/OrganizationRegNumber';
import OrganizationEmail from '../screens/profile/OrganizationEmail';
import ConfirmedProAccount from '../screens/profile/ConfirmedProAccount';
import OrganizationName from '../screens/profile/OrganizationName';
import OrganizationWebsite from '../screens/profile/OrganizationWebsite';
import OrganizationProfileImage from '../screens/profile/OrganizationProfileImage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CreateAccountStack">
      {/* <Stack.Screen
        name="CreateAccountStack"
        component={CreateAccountStack}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="AppStack"
        component={AppStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppStack = ({navigation}) => {
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
        component={HomeStack}
        options={{
          tabBarLabel: 'home',
          tabBarIcon: ({color}) => (
            <HomeIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          // tabBarVisible: false,
          tabBarLabel: 'search',
          tabBarIcon: ({color}) => (
            <SearchIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <View style={{marginTop: 14}}>
              <Create width={36} height={36} fill={Colors.primary} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectStack}
        options={{
          tabBarLabel: 'projects',
          tabBarIcon: ({color}) => (
            <Projects width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'profile',
          tabBarIcon: ({color}) => (
            <ProfileIcon width={28} height={28} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const SearchStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const AddStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ProjectStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateProAccount"
        component={CreateProAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganizationRegNumber"
        component={OrganizationRegNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganizationEmail"
        component={OrganizationEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConfirmedProAccount"
        component={ConfirmedProAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganizationName"
        component={OrganizationName}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganizationWebsite"
        component={OrganizationWebsite}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrganizationProfileImage"
        component={OrganizationProfileImage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const CreateAccountStack = ({navigation}) => {
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
