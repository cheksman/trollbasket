/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {withTheme} from 'react-native-elements';
import {PRI_COLOR, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/constants';
import CustomHeader from '../../components/custom-header';
import Accordion from '../../components/accordion';
import {Col, Row} from 'react-native-easy-grid';
import Rating from '../../components/rating';
import CustomButton from '../../components/custom-button';
import {addToCart} from '../../store/actions/auth.actions';
import {useDispatch} from 'react-redux';

const ProductsDetails = ({route}) => {
  const {product} = route.params;
  const dispatch = useDispatch();
  return (
    <View style={productsStyles.container}>
      <View
        style={{
          width: SCREEN_WIDTH,
          height: 60,
          position: 'absolute',
          bottom: 0,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          justifyContent: 'center',
          zIndex: 10000,
          elevation: 10,
        }}>
        <View style={{width: '40%', marginRight: 20, alignSelf: 'center'}}>
          <CustomButton
            primary
            onPress={() => {
              dispatch(addToCart(product));
            }}>
            <Text>Add to cart</Text>
          </CustomButton>
        </View>
        <View style={{width: '40%', alignSelf: 'center'}}>
          <CustomButton>
            <Text>Wishlist</Text>
          </CustomButton>
        </View>
      </View>
      <ScrollView>
        <View>
          <CustomHeader title="Details" />
        </View>
        <View style={productsStyles.labelsContainer}>
          <Image
            source={product.imageLink}
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 15,
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#fff',
          }}>
          <Text style={{fontSize: 16, marginBottom: 6}}>{product.title}</Text>
          <Text style={{fontSize: 14, marginBottom: 10}}>
            {product.shortDescription}
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {product.priceRange}{' '}
            <Text style={{fontSize: 14, fontWeight: '400'}}>/piece</Text>
          </Text>
        </View>
        <View style={{backgroundColor: '#fff'}}>
          <Accordion
            title="Product Description"
            content={product.description}
          />
        </View>
        <View style={productsStyles.headerContainer}>
          <Row>
            <Col size={8}>
              <Text>Review and Ratings</Text>
            </Col>
            <Col size={4}>
              <TouchableOpacity>
                <Text style={{color: PRI_COLOR, textAlign: 'right'}}>
                  View all
                </Text>
              </TouchableOpacity>
            </Col>
          </Row>
          <View>
            {product.reviews.map((rev, i) => (
              <Rating
                review={rev.review}
                fullname={rev.author}
                rate={rev.rate}
                key={i}
              />
            ))}
          </View>
        </View>
      </ScrollView>
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
    height: SCREEN_HEIGHT * 0.4,
    width: SCREEN_WIDTH,
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

export default withTheme(ProductsDetails);
