import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Task = props => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fafafa'}}>{props.desc}</Text>
      <Text style={{color: '#fafafa'}}>{props.estimateAt + ''}</Text>
      <Text style={{color: '#fafafa'}}>{props.doneAt + ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Task;
