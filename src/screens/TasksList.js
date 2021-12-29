import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

import todayImage from '../../assets/imgs/today.jpg';

const TasksList = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={todayImage} style={styles.background} />
      <Text style={{color: '#fff'}}>TasksList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});

export default TasksList;
