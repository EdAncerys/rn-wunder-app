import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/auth';
import {ApiProvider} from './src/context/api';

import AppNavigator from './src/AppNavigator/Router';

const App = () => {
  return (
    <AuthProvider>
      <ApiProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ApiProvider>
    </AuthProvider>
  );
};

export default App;
