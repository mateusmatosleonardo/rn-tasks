import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

import Types from '../Types';
import todayImage from '../../assets/imgs/today.jpg';
import moment from 'moment';
import 'moment/locale/pt-br';

const TasksList = () => {
  const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
  return (
    <View style={styles.container}>
      <ImageBackground source={todayImage} style={styles.background}>
        <View style={styles.titleBar}>
          <Text style={styles.title}>Hoje</Text>
          <Text>{today}</Text>
        </View>
      </ImageBackground>
      <View style={styles.taskList}>
        <Text style={{color: '#fff'}}>TasksList</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  taskList: {
    flex: 7,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: Types.fontFamily,
    fontSize: 50,
  },
});

export default TasksList;
