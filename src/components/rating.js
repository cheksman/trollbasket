/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Rating} from 'react-native-elements';
import {SCREEN_HEIGHT, TEXT_COLOR} from '../utils/constants';
import Sneaker from '../assets/img/sneaker.jpg';

const RatingComponent = ({fullname, review = '', rate = 3}) => {
  return (
    <View
      style={{
        height: SCREEN_HEIGHT * 0.18,
        padding: 10,
      }}>
      <View style={{flex: 1, flexDirection: 'row', paddingLeft: 10}}>
        <View style={{width: '15%'}}>
          <Rating imageSize={12} startingValue={rate} style={{width: '40%'}} />
        </View>
        <View style={{width: '15%'}}>
          <Text style={{color: TEXT_COLOR}}>{rate.toString()}</Text>
        </View>
      </View>
      <Text>{review}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: '15%'}}>
          <Image
            source={Sneaker}
            resizeMode="contain"
            style={{width: 40, height: 40, borderRadius: 20}}
          />
        </View>
        <View style={{width: '85%'}}>
          <Text>{fullname}</Text>
        </View>
      </View>
    </View>
  );
};

export default RatingComponent;
