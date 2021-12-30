import React from 'react';
import {View, Text} from 'react-native';

const Task = props => {
  return (
    <View>
      <Text style={{color: '#fafafa'}}>{props.desc}</Text>
      <Text style={{color: '#fafafa'}}>{props.estimateAt + ''}</Text>
      <Text style={{color: '#fafafa'}}>{props.doneAt + ''}</Text>
    </View>
  );
};

export default Task;
