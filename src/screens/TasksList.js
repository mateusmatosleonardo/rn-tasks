import React from 'react';
import {View, Text, ImageBackground, StyleSheet, StatusBar} from 'react-native';

import Types from '../Types';
import todayImage from '../../assets/imgs/today.jpg';
// lib que trabalha com datas
import moment from 'moment';
// parte que vai cuidar das traduções
import 'moment/locale/pt-br';
import Task from '../components/Task';

// componente principal

const TasksList = () => {
  // state = {
  //   tasks: [
  //     {
  //       id: Math.random(),
  //       desc: 'Comprar Livro',
  //       estimateAt: new Date(),
  //     },
  //   ],
  // };

  // constante que recebe o moment para a formatação
  const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
  return (
    <>
      {/* o código para essa status bar é para tirar a cor do background */}
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <Task
            desc="Comprar livro"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Ler livro" estimateAt={new Date()} doneAt={null} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // vai pegar 100% da tela
    flex: 1,
    backgroundColor: '#fafafa',
  },
  background: {
    // background vai pegar 30% da tela
    flex: 3,
  },
  taskList: {
    // esse componente vai pegar 70% da tela
    flex: 7,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: Types.fontFamily,
    fontSize: 50,
    color: Types.colors.secondary,
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: Types.fontFamily,
    color: Types.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
});

export default TasksList;
