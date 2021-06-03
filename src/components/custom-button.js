import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';
import {withTheme} from 'react-native-elements';
import {shape, string, bool, number, func, node, object, any} from 'prop-types';
import {PRI_COLOR, TEXT_COLOR} from '../utils/constants';

const CustomButton = ({
  primary,
  onPress = () => {},
  children,
  disabled = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      style={primary ? styles.touchablePri : styles.touchableSec}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size={20} color="white" style={styles.indicator} />
      ) : (
        <Text style={primary ? styles.text : styles.textSec}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchablePri: {
    backgroundColor: PRI_COLOR,
    width: '100%',
    height: 40,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableSec: {
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    color: TEXT_COLOR,
    borderColor: TEXT_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textSec: {
    color: TEXT_COLOR,
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

CustomButton.propTypes = {
  theme: shape({
    colors: shape({
      primary: string,
    }),
  }),
  primary: bool,
  secondary: bool,
  white: bool,
  height: number,
  width: any,
  black: bool,
  onPress: func,
  children: node,
  disabled: bool,
  loading: bool,
  style: shape({}),
  padding: number,
  fontSize: number,
  textStyle: object,
};

export default withTheme(CustomButton);
