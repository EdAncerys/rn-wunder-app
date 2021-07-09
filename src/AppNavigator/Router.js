import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SplashScreen from '../screens/onboardingOverSixteen/SplashScreen';
import VisualOne from '../screens/onboardingOverSixteen/VisualOne';
import VisualTwo from '../screens/onboardingOverSixteen/VisualTwo';
import VisualThree from '../screens/onboardingOverSixteen/VisualThree';
import VisualFour from '../screens/onboardingOverSixteen/VisualFour';
import CreateAccountScreen from '../screens/onboardingOverSixteen/CreateAccountScreen';
import AgeQuestion from '../screens/onboardingOverSixteen/AgeQuestion';
import UploadIdentity from '../screens/onboardingOverSixteen/UploadIdentity';
import UploadLicenceFront from '../screens/onboardingOverSixteen/UploadLicenceFront';
import UploadPassport from '../screens/onboardingOverSixteen/UploadPassport';
import Visual from '../screens/onboardingOverSixteen/Visual';
import Login from '../screens/onboardingOverSixteen/Login';
import Home from '../screens/home/Home';
import HomeExpOne from '../screens/home/HomeExpOne';
import HomeExpTwo from '../screens/home/HomeExpTwo';
import HomeExpThree from '../screens/home/HomeExpThree';
import HomeExpFour from '../screens/home/HomeExpFour';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const onboardingOverSixteen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
        tabBarVisible: false,
      }}>
      <Tab.Screen
        name="VisualOne"
        component={VisualOne}
        options={{title: 'vOne'}}
      />
      <Tab.Screen
        name="VisualTwo"
        component={VisualTwo}
        options={{title: 'vTwo'}}
      />
      <Tab.Screen
        name="VisualThree"
        component={VisualThree}
        options={{title: 'vThree'}}
      />
      <Tab.Screen
        name="VisualFour"
        component={VisualFour}
        options={{title: 'vFour'}}
      />
    </Tab.Navigator>
  );
};

const Router = ({props}) => {
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
      /> */}
      <Stack.Screen
        name="Home"
        component={HomeExpFour}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
