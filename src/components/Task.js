import React from 'react';
import {View, Text} from 'react-native';

const Task = props => {
  return (
    <View style={props.style}>
      <Text style={props.textStyle}>{props.text}</Text>
    </View>
  );
};

export default Task;
