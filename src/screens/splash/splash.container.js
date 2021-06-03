import React, {useEffect} from 'react';
import {withTheme} from 'react-native-elements';
import Splash from './splash';
import {func, bool} from 'prop-types';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const SplashContainer = () => {
  const auth = useSelector(state => state.auth);
  const navigation = useNavigation();
  useEffect(() => {
    const {firstAccess} = auth;
    setTimeout(() => {
      if (firstAccess) {
        navigation.navigate('Onboarding');
      } else {
        navigation.navigate('Home');
      }
    }, 4000);
    return () => {
      clearTimeout();
    };
  }, [auth, navigation]);

  return <Splash />;
};

SplashContainer.propTypes = {
  isAuthenticated: bool,
  updateTheme: func,
  firstAccess: bool,
};

export default withTheme(SplashContainer);
