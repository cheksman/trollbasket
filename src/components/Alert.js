import React from 'react';
import {View, Text, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {shape, string, arrayOf} from 'prop-types';
import {Row, Col} from 'react-native-easy-grid';
import {withTheme, Icon} from 'react-native-elements';
import {SCREEN_WIDTH, SUCCESS_COLOR, TEXT_COLOR} from '../utils/constants';
import {clearFeedback} from '../store/actions/feedback.actions';
import {useDispatch} from 'react-redux';

const AlertComponent = props => {
  const dispatch = useDispatch();
  return (
    <View>
      {props.feedbacks.map((feedback, i) => (
        <TouchableOpacity
          onPress={() => {
            dispatch(clearFeedback(feedback.id));
          }}
          key={i}
          style={alertStyles.background}>
          {feedback.feedbackType === 'alert'
            ? Alert.alert(feedback.title, feedback.message)
            : null}
          {
            <View>
              <Row style={alertStyles.row}>
                <Col size={9} style={alertStyles.col}>
                  <Text style={alertStyles.text}>{feedback.message}</Text>
                </Col>
                <Col size={1} style={alertStyles.textContainer}>
                  <Icon name="close" type="material" color={TEXT_COLOR} />
                </Col>
              </Row>
            </View>
          }
        </TouchableOpacity>
      ))}
    </View>
  );
};

const alertStyles = StyleSheet.create({
  text: {
    color: TEXT_COLOR,
    fontSize: 16,
  },
  textContainer: {
    justifyContent: 'center',
    padding: 4,
  },
  background: {
    backgroundColor: SUCCESS_COLOR,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    borderColor: '#93ECC1',
    borderWidth: 1,
    zIndex: 20,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 50,
    width: SCREEN_WIDTH,
  },
  row: {
    width: '100%',
    marginVertical: 10,
  },
  col: {justifyContent: 'center', alignItems: 'center'},
});

AlertComponent.defaultProps = {
  feedbacks: [],
};

AlertComponent.propTypes = {
  feedbacks: arrayOf(shape({})).isRequired,
  theme: shape({
    colors: shape({
      primary: string,
    }),
  }),
};

const mapStateToProps = ({feedback}) => ({
  feedbacks: feedback.feedbacks,
});

export default connect(mapStateToProps)(withTheme(AlertComponent));
