import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'react-native-elements';

import Store from './src/store';

import AlertComponent from './src/components/Alert';
import RootApp from './src/navigation/auth-navigator';
import {
  PRI_COLOR,
  SEC_COLOR,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  TEXT_COLOR,
  HEADER_TEXT_COLOR,
  SUCCESS_COLOR,
  TER_COLOR,
} from './src/utils/constants';
import {
  ImageBackground,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import SplashBG from './src/assets/img/splash-bg.png';

const persistor = persistStore(Store);

const ThemedApp = () => {
  const theme = {
    colors: {
      primary: PRI_COLOR,
      secondary: SEC_COLOR,
      text: TEXT_COLOR,
      textHeader: HEADER_TEXT_COLOR,
      success: SUCCESS_COLOR,
      tertiary: TER_COLOR,
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <RootApp />
      <AlertComponent />
    </ThemeProvider>
  );
};

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <PersistGate
          persistor={persistor}
          loading={
            <ImageBackground
              source={SplashBG}
              style={appStyles.imageBackgroundStyles}>
              <View
                style={
                  {
                    // position: 'absolute',
                    // bottom: SCREEN_HEIGHT * 0.1,
                  }
                }>
                <ActivityIndicator size={40} color="#fffff" />
              </View>
            </ImageBackground>
          }>
          <ThemedApp />
        </PersistGate>
      </Provider>
    );
  }
}

const appStyles = StyleSheet.create({
  imageBackgroundStyles: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    alignSelf: 'center',
    width: 156,
    height: 156,
  },
});
