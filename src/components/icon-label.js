/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {TEXT_COLOR} from '../utils/constants';

const IconLabel = ({label, iconName, iconType, iconColor, off, offBord}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderRightWidth: offBord ? 0 : 1,
        borderRightColor: '#CBD6E0',
      }}>
      <View
        style={{
          width: '25%',
          padding: 3,
          backgroundColor: '#EDF2F7',
          borderRadius: 10,
        }}>
        <Icon name={iconName} type={iconType} color={iconColor} />
      </View>
      <View
        style={{
          width: off ? '75%' : '50%',
          padding: 3,
        }}>
        <Text style={{color: TEXT_COLOR}}>{label}</Text>
      </View>
      {off ? null : (
        <View
          style={{
            width: '25%',
            padding: 3,
            backgroundColor: '#EDF2F7',
            borderRadius: 10,
          }}>
          <Icon
            name="chevron-down"
            type="material-community"
            color={TEXT_COLOR}
          />
        </View>
      )}
    </View>
  );
};

export default IconLabel;
