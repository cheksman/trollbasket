import React from 'react';
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/constants';
import {withTheme} from 'react-native-elements';
import {shape, string} from 'prop-types';
import BuildingImage from '../../assets/img/building.png';
import WhiteBG from '../../assets/img/whitebg.jpg';

const ComingSoon = ({theme}) => {
  return (
    <ImageBackground source={WhiteBG} style={comingSoonStyles.container}>
      <View
        style={
          {
            // position: 'absolute',
            // bottom: SCREEN_HEIGHT * 0.1,
          }
        }>
        <Text style={comingSoonStyles.text}>Still in Construction</Text>
      </View>
      <View>
        <Image
          source={BuildingImage}
          style={comingSoonStyles.image}
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
};

const comingSoonStyles = StyleSheet.create({
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
    marginBottom: 40,
    fontWeight: 'bold',
  },
  image: {
    alignSelf: 'center',
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.3,
  },
});

ComingSoon.propTypes = {
  theme: shape({
    colors: shape({
      primary: string,
    }),
  }),
};

export default withTheme(ComingSoon);
