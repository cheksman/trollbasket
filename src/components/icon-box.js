/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/constants';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const IconBox = ({
  title,
  size,
  onPress,
  iconName,
  type,
  bgColor,
  iconColor,
}) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      style={iconBoxStyles.touchable}
      onPress={() => navigate.navigate('Home')}>
      <View
        style={{
          margin: 4,
          padding: 8,
          height: SCREEN_WIDTH * 0.15,
          borderRadius: 5,
          backgroundColor: bgColor,
        }}>
        <Icon name={iconName} type={type} size={size} color={iconColor} />
      </View>
      <View>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const iconBoxStyles = StyleSheet.create({
  touchable: {
    height: SCREEN_HEIGHT * 0.15,
    width: SCREEN_WIDTH * 0.22,
    margin: 4,
    flex: 1,
  },
});

export default IconBox;
