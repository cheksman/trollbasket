/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/constants';
import {withTheme} from 'react-native-elements';
import {shape, string} from 'prop-types';
import FarmAidLogoWhite from '../../assets/img/check.png';
import SplashBG from '../../assets/img/success.jpg';
import CustomButton from '../../components/custom-button';

const Checkout = ({theme}) => {
  return (
    <ImageBackground
      source={SplashBG}
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Image
          source={FarmAidLogoWhite}
          style={{
            alignSelf: 'center',
            width: 156,
            height: 156,
          }}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginHorizontal: '18%',
          textAlign: 'center',
          color: '#fff',
          marginTop: 20,
        }}>
        Checkout Successful
      </Text>
      <Text
        style={{
          fontSize: 14,
          marginHorizontal: '18%',
          textAlign: 'center',
          color: '#fff',
        }}>
        Your checkout is now successful
      </Text>
      <View
        style={{position: 'absolute', bottom: 30, width: SCREEN_WIDTH * 0.8}}>
        <CustomButton>
          <Text>Got it</Text>
        </CustomButton>
      </View>
    </ImageBackground>
  );
};

Checkout.propTypes = {
  theme: shape({
    colors: shape({
      primary: string,
    }),
  }),
};

export default withTheme(Checkout);
