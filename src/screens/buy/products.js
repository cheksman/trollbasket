/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Text, FlatList, StyleSheet} from 'react-native';
import {withTheme} from 'react-native-elements';
import Card from '../../components/card';
import IconBox from '../../components/icon-box';
import ProductCard from '../../components/product-card';
import {
  PRI_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SEC_COLOR,
} from '../../utils/constants';
import CardBG from '../../assets/img/cardbg.jpg';
import IconLabel from '../../components/icon-label';
import {Col, Row} from 'react-native-easy-grid';
import CustomInput from '../../components/custom-input';
import {products} from '../../utils/constants';

const CardText = () => {
  return (
    <Text style={productsStyles.mainCardText}>
      Having any <Text style={{color: SEC_COLOR}}>issues</Text> with your order
    </Text>
  );
};

const Products = ({theme}) => {
  return (
    <View style={productsStyles.container}>
      <View style={productsStyles.headerContainer}>
        <Text style={{fontSize: 16}}>TrollBasket</Text>
      </View>
      <View style={productsStyles.labelsContainer}>
        <Row>
          <Col>
            <IconLabel
              iconColor={PRI_COLOR}
              iconName="map-marker"
              iconType="material-community"
              label="Lagos"
            />
          </Col>
          <Col>
            <IconLabel
              iconColor="#7E42F5"
              iconName="archive"
              iconType="material-community"
              label="My Orders"
              off
            />
          </Col>
          <Col>
            <IconLabel
              iconColor="#333"
              iconName="cart"
              iconType="material-community"
              label="Location"
              offBord
              off
            />
          </Col>
        </Row>
      </View>
      <View>
        <CustomInput name="search" placeholder="Search merchbuy" />
      </View>
      <View>
        <ScrollView horizontal>
          <Card text={CardText} bgColor={PRI_COLOR} buttonText="Contact Us" />
          <Card
            primaryButton
            text={CardText}
            noWhiteButton
            bgColor="#003277"
            buttonText="Contact Us"
            imageLink={CardBG}
          />
          <Card
            primaryButton
            text={CardText}
            noWhiteButton
            bgColor="#EE6F44"
            buttonText="Contact Us"
          />
        </ScrollView>
      </View>
      <View style={productsStyles.iconContainer}>
        <IconBox
          iconName="file-document"
          size={34}
          iconColor="#fff"
          bgColor={PRI_COLOR}
          type="material-community"
          title="Product Categories"
        />
        <IconBox
          iconName="fire"
          size={40}
          iconColor="#fff"
          bgColor={SEC_COLOR}
          type="material-community"
          title="Popular Products"
        />
        <IconBox
          iconName="like"
          size={30}
          iconColor="#fff"
          bgColor="#7E42F5"
          type="fontisto"
          title="Recommended Products"
        />
        <IconBox
          iconName="storefront-outline"
          size={32}
          iconColor="#fff"
          bgColor="#05944F"
          type="material-community"
          title="Shops"
        />
      </View>
      <View style={productsStyles.flatlistContainer}>
        <FlatList
          numColumns={3}
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
  );
};

const productsStyles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: '#fff',
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
    height: SCREEN_HEIGHT * 0.4,
    width: SCREEN_WIDTH,
  },
  headerContainer: {
    padding: 12,
    paddingLeft: 20,
    marginTop: 8,
    marginBottom: 8,
  },
  labelsContainer: {
    padding: 3,
    marginBottom: 10,
    borderTopColor: 'rgba(203,214,224, 0.3)',
    borderTopWidth: 1,
    borderBottomColor: 'rgba(203,214,224, 0.3)',
    borderBottomWidth: 1,
    height: SCREEN_HEIGHT * 0.075,
  },
});

export default withTheme(Products);
