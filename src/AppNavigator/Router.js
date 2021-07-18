import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/onboardingOverSixteen/SplashScreen';
import CreateAccountScreen from '../screens/onboardingOverSixteen/CreateAccountScreen';
import AgeQuestion from '../screens/onboardingOverSixteen/AgeQuestion';
import UploadIdentity from '../screens/onboardingOverSixteen/UploadIdentity';
import UploadLicenceFront from '../screens/onboardingOverSixteen/UploadLicenceFront';
import UploadPassport from '../screens/onboardingOverSixteen/UploadPassport';
import Visual from '../screens/onboardingOverSixteen/Visual';
import Login from '../screens/onboardingOverSixteen/Login';
import Home from '../screens/home/Home';
import DonationNotification from '../screens/donate/DonationNotification';
import Name from '../screens/onboardingUnderSixteen/Name';
import EmailOTP from '../screens/onboardingUnderSixteen/EmailOTP';
import MobileOTP from '../screens/onboardingUnderSixteen/MobileOTP';
import VerifyOTPEmail from '../screens/onboardingUnderSixteen/VerifyOTPEmail';
import Yay from '../screens/onboardingUnderSixteen/Yay';
import Email from '../screens/onboardingUnderSixteen/Email';
import Mobile from '../screens/onboardingUnderSixteen/Mobile';
import VerifyEmail from '../screens/onboardingUnderSixteen/VerifyEmail';
import Username from '../screens/onboardingUnderSixteen/Username';
import Location from '../screens/onboardingUnderSixteen/Location';
import AccountCreated from '../screens/onboardingUnderSixteen/AccountCreated';
import VerifyMobile from '../screens/onboardingUnderSixteen/VerifyMobile';
import Interests from '../screens/onboardingUnderSixteen/Interests';

const Stack = createStackNavigator();
const Router = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Visual"
        component={Visual}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="AgeQuestion"
        component={AgeQuestion}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="UploadIdentity"
        component={UploadIdentity}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="UploadLicenceFront"
        component={UploadLicenceFront}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="UploadPassport"
        component={UploadPassport}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Home"
        component={Home}
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
        name="VerifyOTPEmail"
        component={VerifyOTPEmail}
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
