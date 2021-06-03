/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import CustomButton from './custom-button';
import {withTheme} from 'react-native-elements';
import {SCREEN_WIDTH, SCREEN_HEIGHT, PRI_COLOR} from './../utils/constants';
import {string, object, number, bool, func} from 'prop-types';
import {Col, Row} from 'react-native-easy-grid';

const Card = ({
  text: Text,
  buttonText,
  buttonWidth = '90%',
  bgColor,
  primaryButton,
  imageLink,
}) => {
  return (
    <ImageBackground
      source={imageLink}
      imageStyle={{borderRadius: 20}}
      style={styles(bgColor).backgroundStyle}>
      <Row style={styles(bgColor).row}>
        <Col>
          <Text />
        </Col>
        <Col>
          <CustomButton
            primary={primaryButton ? true : false}
            fontSize={13}
            width={buttonWidth}
            style={styles(bgColor).buttonStyle}>
            {buttonText}
          </CustomButton>
        </Col>
      </Row>
    </ImageBackground>
  );
};

const styles = bgColor => {
  return StyleSheet.create({
    backgroundStyle: {
      height: SCREEN_HEIGHT * 0.2,
      width: SCREEN_WIDTH * 0.8,
      margin: 3,
      resizeMode: 'contain',
      backgroundColor: bgColor,
      borderRadius: 10,
      padding: 20,
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      borderWidth: 1,
      borderColor: PRI_COLOR,
      marginTop: 20,
    },
  });
};

Card.propTypes = {
  text: func,
  buttonText: string,
  textStyles: object,
  buttonStyles: object,
  theme: object,
  header: string,
  headerStyles: object,
  buttonWidth: string,
  cardWidth: number,
  noWhiteButton: bool,
  primaryButton: bool,
};

export default withTheme(Card);
