import React, {useEffect} from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeFromFirstTimer} from '../store/actions/auth.actions';
import OnboardingImg from '../assets/img/splash.png';
// import BGImage from '../../assets/images/onboard-bg.jpg';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {shape, string} from 'prop-types';
import {PRI_COLOR, TEXT_COLOR} from '../utils/constants';

const onboardInfo = {
  title: 'TrollBasket',
  body: 'Your first stop shop.',
  image: OnboardingImg,
};

const Onboarding = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    return () => dispatch(changeFromFirstTimer());
  }, [dispatch]);
  return (
    <View style={onboardingStyles.bgStyles}>
      <View style={onboardingStyles.imgBackground}>
        <Image
          source={onboardInfo.image}
          style={onboardingStyles.image}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          width: SCREEN_WIDTH * 0.9,
        }}>
        <Text style={onboardingStyles.title}>{onboardInfo.title}</Text>
        <Text style={onboardingStyles.body}>{onboardInfo.body}</Text>
      </View>

      <View style={onboardingStyles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
          <Text style={onboardingStyles.buttonText}>SKIP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const onboardingStyles = StyleSheet.create({
  bgStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    paddingVertical: 60,
  },
  imgBackground: {
    width: SCREEN_WIDTH * 0.85,
    height: SCREEN_HEIGHT * 0.3,
    marginTop: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: PRI_COLOR,
    marginTop: 30,
    lineHeight: 25,
  },
  body: {
    fontSize: 16,
    textAlign: 'center',
    color: TEXT_COLOR,
    paddingLeft: SCREEN_WIDTH * 0.05,
    paddingRight: SCREEN_WIDTH * 0.05,
    paddingBottom: SCREEN_WIDTH * 0.05,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    padding: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: PRI_COLOR,
  },
});

Onboarding.propTypes = {
  theme: shape({
    colors: shape({
      secondary: string,
    }),
  }),
};

export default Onboarding;
