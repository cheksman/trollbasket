/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {withTheme, Icon} from 'react-native-elements';
import {bool, string, shape, any} from 'prop-types';
import {SCREEN_WIDTH, SCREEN_HEIGHT, TEXT_COLOR} from '../utils/constants';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({title, back, off}) => {
  const navigation = useNavigation();
  const onCartPress = () => {
    navigation.navigate('Cart');
  };

  return (
    <View
      style={{
        height: SCREEN_HEIGHT * 0.06,
        width: SCREEN_WIDTH,
        backgroundColor: '#fff',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          width: '25%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="chevron-left"
          type="material-community"
          size={30}
          color="#555"
        />
      </TouchableOpacity>
      <View
        style={{
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, textAlign: 'center'}}>{title}</Text>
      </View>
      {off ? null : (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: 10,
            }}>
            <Icon name="magnify" type="material-community" color={TEXT_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onCartPress}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: 10,
            }}>
            <View>
              <Icon
                name="cart"
                type="material-community"
                size={16}
                color="#555"
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

CustomHeader.propTypes = {
  theme: shape({
    colors: shape({
      primary: string,
    }),
  }),
  title: any,
  drawer: bool,
  green: bool,
  transparent: bool,
  showBack: bool,
  networkState: string,
  screen: string,
  back: bool,
  off: bool,
};

export default withTheme(CustomHeader);
