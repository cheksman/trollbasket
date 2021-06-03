/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Input, Icon} from 'react-native-elements';
import {View, TouchableOpacity} from 'react-native';
import {string, bool, shape, func} from 'prop-types';
import {TEXT_COLOR} from '../utils/constants';

const CustomInput = ({
  value,
  autoCorrect = true,
  secureTextEntry = false,
  blurOnSubmit = false,
  placeholder = '',
  setFieldValue,
  handleBlur,
  name,
  keyboardType = 'default',
  bordered = false,
  inputStyle = {},
}) => {
  const [visibility, setVisibility] = useState(true);

  return (
    <View style={{marginVertical: 5, paddingHorizontal: 10, width: '100%'}}>
      <Input
        value={value}
        keyboardAppearance="light"
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry && !visibility ? true : false}
        blurOnSubmit={blurOnSubmit}
        rightIcon={
          <TouchableOpacity
            onPress={() => setVisibility(prev => !prev)}
            style={{padding: 20, marginRight: -20}}>
            <Icon type="material-community" color={TEXT_COLOR} name="" />
          </TouchableOpacity>
        }
        inputContainerStyle={
          Object.keys(inputStyle).length === 0 && {
            borderBottomWidth: 0,
            height: 40,
          }
        }
        containerStyle={
          Object.keys(inputStyle).length === 0
            ? {
                borderWidth: 1,
                paddingLeft: 0,
                backgroundColor: 'rgba(203,214,224, 0.3)',
                height: 40,
                borderColor: 'rgba(203,214,224, 0.9)',

                ...(bordered && {
                  borderWidth: 1,
                }),
              }
            : null
        }
        inputStyle={{
          textAlign: 'justify',
          fontSize: 16,
          paddingBottom: 10,
          paddingLeft: 10,
          ...inputStyle,
        }}
        placeholder={placeholder}
        onChangeText={val => setFieldValue(name, val)}
        onBlur={() => handleBlur(name)}
      />
    </View>
  );
};

CustomInput.propTypes = {
  value: string,
  autoCorrect: bool,
  secureTextEntry: bool,
  blurOnSubmit: bool,
  theme: shape({
    colors: shape({
      primary: string,
    }),
  }),
  placeholder: string,
  setFieldValue: func,
  handleBlur: func,
  name: string,
  errors: shape({}),
  touched: shape({}),
  label: string,
  multiline: bool,
  bordered: bool,
  inputStyle: shape({}),
};

export default CustomInput;
