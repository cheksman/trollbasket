/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {TEXT_COLOR} from '../utils/constants';

const Accordion = ({title, content}) => {
  const [active, setActive] = useState('');
  return (
    <View key={title}>
      <TouchableOpacity
        onPress={() => {
          if (active === title) {
            setActive('');
          } else {
            setActive(title);
          }
        }}
        style={{
          margin: 1,
          flexDirection: 'row',
          padding: 20,
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderBottomColor: 'rgba(203,214,224, 0.3)',
          borderTopColor: 'rgba(203,214,224, 0.3)',
        }}>
        <View style={{width: '80%', justifyContent: 'center'}}>
          <Text
            style={{
              color: '#000',
              fontWeight: active === title ? '700' : '400',
            }}>
            {title}
          </Text>
        </View>
        <View style={{width: '20%', justifyContent: 'center'}}>
          <Icon
            name={
              active === title ? 'keyboard-arrow-down' : 'keyboard-arrow-right'
            }
            type="material"
            color={TEXT_COLOR}
          />
        </View>
      </TouchableOpacity>
      {active === title ? (
        <View
          style={{
            padding: 20,
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(203,214,224, 0.3)',
          }}>
          <Text>{content}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Accordion;
