/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {withTheme} from 'react-native-elements';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/constants';
import CustomHeader from '../../components/custom-header';
import ProductCard from '../../components/product-card';
import {Col, Row} from 'react-native-easy-grid';
import CustomButton from '../../components/custom-button';
import CartItem from '../../components/cart-item';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {products} from '../../utils/constants';

const Cart = () => {
  const cart = useSelector(state => state.auth.cart);

  const navigation = useNavigation();
  return (
    <View style={productsStyles.container}>
      <View>
        <View>
          <CustomHeader title="Carts" off />
        </View>
        <View style={productsStyles.flatlistContainer}>
          <FlatList
            data={cart}
            renderItem={({item}) => (
              <CartItem
                title={item?.title}
                price={item?.priceRange}
                imageLink={item?.imageLink}
              />
            )}
            keyExtractor={item => item?.id}
            contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
          />
        </View>
        <View style={productsStyles.totalContainer}>
          <View style={{height: 40}}>
            <Row>
              <Col>
                <Text>Subtotal</Text>
              </Col>
              <Col>
                <Text style={{textAlign: 'right'}}>N18,099.00</Text>
              </Col>
            </Row>
          </View>
          <View View style={{height: 40}}>
            <Row>
              <Col>
                <Text>Total</Text>
              </Col>
              <Col>
                <Text style={{textAlign: 'right', fontWeight: 'bold'}}>
                  N18,099.00
                </Text>
              </Col>
            </Row>
          </View>
          <View>
            <CustomButton
              primary
              onPress={() => navigation.navigate('Checkout')}>
              <Text>Checkout</Text>
            </CustomButton>
          </View>
        </View>
        <View style={productsStyles.relatedContainer}>
          <FlatList
            horizontal
            data={products}
            renderItem={({item}) => (
              <ProductCard
                title={item.title}
                priceRange={item.priceRange}
                stock={item.stock}
                imageLink={item.imageLink}
                product={item}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

const productsStyles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  mainCardText: {
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 18,
    color: 'white',
  },
  iconContainer: {
    margin: 8,
    flex: 1,
    flexDirection: 'row',
  },
  flatlistContainer: {
    height: SCREEN_HEIGHT * 0.45,
    width: SCREEN_WIDTH,
    marginBottom: 4,
  },
  relatedContainer: {
    height: SCREEN_HEIGHT * 0.3,
    width: SCREEN_WIDTH,
    padding: 20,
    backgroundColor: '#fff',
  },
  totalContainer: {
    height: SCREEN_HEIGHT * 0.2,
    width: SCREEN_WIDTH,
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 4,
  },
  headerContainer: {
    padding: 12,
    paddingLeft: 20,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  labelsContainer: {
    padding: 20,
    marginBottom: 10,
    borderTopColor: 'rgba(203,214,224, 0.3)',
    borderTopWidth: 1,
    borderBottomColor: 'rgba(203,214,224, 0.3)',
    borderBottomWidth: 1,
    height: SCREEN_HEIGHT * 0.32,
  },
});

export default withTheme(Cart);
