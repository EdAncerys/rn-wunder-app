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
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DonationNotification"
        component={DonationNotification}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Name"
        component={Name}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
