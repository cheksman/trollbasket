/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/constants';

const ProductCard = ({title = '', stock, imageLink, priceRange, product}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductsDetails', {
          product: product,
        })
      }
      style={iconBoxStyles.touchable}>
      <ImageBackground
        source={imageLink}
        style={{
          height: SCREEN_HEIGHT * 0.13,
        }}
        imageStyle={{
          resizeMode: 'cover',
          borderRadius: 10,
        }}
      />
      <View>
        <Text style={{textAlign: 'left'}}>{title.slice(0, 25) + '...'}</Text>
      </View>
      <View>
        <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
          {priceRange}
        </Text>
      </View>
      <View>
        <Text style={{textAlign: 'justify'}}>{stock}</Text>
      </View>
    </TouchableOpacity>
  );
};

const iconBoxStyles = StyleSheet.create({
  touchable: {
    width: SCREEN_WIDTH * 0.3,
    margin: 8,
    flex: 1,
  },
});

export default ProductCard;
