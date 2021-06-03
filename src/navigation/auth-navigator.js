import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PublicNavigator, {OnboardingStack} from './public-navigation';
import {useSelector} from 'react-redux';

const RootApp = () => {
  const auth = useSelector(state => state.auth);
  const {firstAccess} = auth;
  return (
    <NavigationContainer>
      {firstAccess ? <OnboardingStack /> : <PublicNavigator />}
    </NavigationContainer>
  );
};

export default RootApp;
