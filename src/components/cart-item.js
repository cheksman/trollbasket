/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import {Row, Col} from 'react-native-easy-grid';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {
  PRI_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  TER_COLOR,
} from '../utils/constants';
import IconLabel from './icon-label';

const CartItem = ({price, title, imageLink}) => {
  const [count, setCount] = useState(1);

  return (
    <View
      style={{
        padding: 10,
        width: SCREEN_WIDTH * 0.8,
        backgroundColor: '#fff',
        margin: 5,
      }}>
      <View
        style={{
          height: SCREEN_HEIGHT * 0.1,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(203, 214, 224, 0.3)',
        }}>
        <Row style={{alignItems: 'center'}}>
          <Col size={3}>
            <Image
              source={imageLink}
              resizeMode="contain"
              style={{width: '100%', height: '100%', borderRadius: 5}}
            />
          </Col>
          <Col size={7} style={{paddingLeft: 10}}>
            <Text>{title}</Text>
            <Text style={{fontWeight: 'bold'}}>{price}</Text>
          </Col>
        </Row>
      </View>
      <View style={{height: 40}}>
        <Row>
          <Col>
            <IconLabel
              off
              iconType="material-community"
              iconName="delete"
              iconColor={TER_COLOR}
              label="Delete"
              offBord
            />
          </Col>
          <Col>
            <View
              style={{
                flexGrow: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                style={{width: '15%'}}
                onPress={() => setCount(count - 1)}>
                <Icon
                  name="minus-circle-outline"
                  type="material-community"
                  color={PRI_COLOR}
                />
              </TouchableOpacity>
              <View style={{width: '30%'}}>
                <Text style={{textAlign: 'center'}}>{count.toString()}</Text>
              </View>
              <TouchableOpacity
                style={{width: '15%'}}
                onPress={() => setCount(count + 1)}>
                <Icon
                  name="plus-circle-outline"
                  type="material-community"
                  color={PRI_COLOR}
                />
              </TouchableOpacity>
            </View>
          </Col>
        </Row>
      </View>
    </View>
  );
};

export default CartItem;
