import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Types from '../Types';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment/locale/pt-br';

function getCheckView(doneAt) {
  if (doneAt != null) {
    return (
      <View style={styles.done}>
        <Icon name="check" size={20} color="#FFF" />
      </View>
    );
  } else {
    return <View style={styles.pending} />;
  }
}

const Task = props => {
  // função de lógica para ver a se task foi concluída ou não
  // se a props doneAt for != null, significa que ela foi concluída
  // e ela estará com um 'line-through'
  const doneOrNotStyle =
    props.doneAt != null ? {textDecorationLine: 'line-through'} : {};

  const formattedDate = moment(date).locale('pt-br').format('ddd D [de] MMMM');

  const date = props.doneAt ? props.doneAt : props.estimateAt;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => props.toggleTasks(props.id)}>
        <View style={styles.checkContainer}>{getCheckView(props.doneAt)}</View>
      </TouchableWithoutFeedback>
      <View>
        <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#AAA',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  // estilo da list quando as tarefas estiverem concluídas
  checkContainer: {
    width: '20%',
    alignItems: 'center',
  },
  // estilo da list quando as tarefas estiverem pendentes
  pending: {
    width: 25,
    height: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#555',
  },
  done: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#4D7031',
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc: {
    fontFamily: Types.fontFamily,
    color: Types.colors.mainText,
    fontSize: 15,
  },
  date: {
    fontFamily: Types.fontFamily,
    color: Types.colors.subText,
    fontSize: 12,
  },
});

export default Task;
