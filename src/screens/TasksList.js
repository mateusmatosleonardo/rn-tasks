import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const TasksList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.taskList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    width: '100%',
    height: height * 0.1,
    borderWidth: 0.5,
    borderBottomColor: '#414040',
  },
  taskList: {
    width: '100%',
    height: height * 0.9,
  },
});

export default TasksList;
