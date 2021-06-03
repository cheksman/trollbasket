import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/constants';
import {withTheme} from 'react-native-elements';
import {shape, string} from 'prop-types';
import SplashBG from '../../assets/img/splash-bg.png';

const Splash = ({theme}) => {
  return (
    <ImageBackground source={SplashBG} style={splashStyles.container}>
      <View
        style={
          {
            // position: 'absolute',
            // bottom: SCREEN_HEIGHT * 0.1,
          }
        }>
        <Text style={splashStyles.text}>TrollBasket</Text>
        <ActivityIndicator size={40} color={theme.colors.primary} />
      </View>
    </ImageBackground>
  );
};

const splashStyles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginHorizontal: '18%',
    textAlign: 'center',
    color: '#fff',
    marginTop: -28,
  },
});

Splash.propTypes = {
  theme: shape({
    colors: shape({
      primary: string,
    }),
  }),
};

export default withTheme(Splash);
