/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import Task from '../components/Task';

const {width, height} = Dimensions.get('window');

const TasksList = () => {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('red');
  const colors = {
    red: '#ff6961',
    blue: '#add8e6',
    green: '#bdecb6',
  };
  const [task, setTask] = useState([]);

  const addTask = () => {
    setTask([...task, {id: Math.random(), nameTask: text, selected}]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nameUser}>Mateus</Text>
        <Image
          source={require('../../assets/imgs/no_user.png')}
          style={styles.imgProfile}
        />
      </View>
      <View style={styles.taskList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          contentContainerStyle={styles.flatStyle}
          data={task}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Task
              style={[
                styles.containerTask,
                {backgroundColor: colors[item.selected]},
              ]}
              textStyle={styles.nameTask}
              text={item.nameTask}
            />
            // <View
            //   style={[
            //     styles.containerTask,
            //     {
            //       backgroundColor: colors[selected],
            //     },
            //   ]}>
            //   <Text style={styles.nameTask}>{item.nameTask}</Text>
            // </View>
          )}
        />
        <View />
      </View>
      <TouchableOpacity
        style={styles.btnAddTask}
        onPress={() => setVisible(!visible)}>
        <Text style={{color: '#313030', fontSize: 25}}>+</Text>
      </TouchableOpacity>
      <Modal transparent visible={visible} animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.modal}>
            <View style={{width: '100%', padding: 10}}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  elevation: 1,
                  backgroundColor: 'red',
                }}
                onPress={() => setVisible(!visible)}>
                <Text style={{color: '#fafafa', fontSize: 20}}>''</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Nome da tarefa"
              placeholderTextColor={'#000'}
              onChangeText={text => setText(text)}
            />
            <View style={{width: '100%', padding: 20}}>
              <Text style={{color: '#414040'}}>
                Escolha a prioridade da tarefa
              </Text>
              <View style={{width: '100%', marginTop: 15}}>
                <TouchableOpacity
                  onPress={() => setSelected('red')}
                  activeOpacity={0.8}
                  style={[
                    styles.prioritySelected,
                    {
                      ...(selected === 'red'
                        ? {elevation: 4}
                        : {elevation: 0.5}),
                    },
                  ]}>
                  <View
                    style={{
                      width: 80,
                      height: 20,
                      backgroundColor: '#ff6961',
                      marginRight: 5,
                      borderRadius: 4,
                    }}
                  />
                  <Text style={{color: '#414040'}}>Alta prioridade</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSelected('blue')}
                  activeOpacity={0.8}
                  style={[
                    styles.prioritySelected,
                    {marginTop: 10},
                    {
                      ...(selected === 'blue'
                        ? {elevation: 4}
                        : {elevation: 0.5}),
                    },
                  ]}>
                  <View
                    style={{
                      width: 80,
                      height: 20,
                      backgroundColor: '#add8e6',
                      marginRight: 5,
                      borderRadius: 4,
                    }}
                  />
                  <Text style={{color: '#414040'}}>Média prioridade</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSelected('green')}
                  activeOpacity={0.8}
                  style={[
                    styles.prioritySelected,
                    {marginTop: 10},
                    {
                      ...(selected === 'green'
                        ? {elevation: 4}
                        : {elevation: 0.5}),
                    },
                  ]}>
                  <View
                    style={{
                      width: 80,
                      height: 20,
                      backgroundColor: '#bdecb6',
                      marginRight: 5,
                      borderRadius: 4,
                    }}
                  />
                  <Text style={{color: '#414040'}}>Baixa prioridade</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => addTask()}>
              <Text style={{color: '#212121'}}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    paddingHorizontal: 15,
    borderWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#414040',
  },
  taskList: {
    width: '100%',
    height: height * 0.9,
  },
  containerTask: {
    width: '100%',
    height: 90,
    marginVertical: 15,
    borderRadius: 20,
    backgroundColor: '#fafafa',
    elevation: 3,
    justifyContent: 'center',
  },
  btnAddTask: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
    right: 30,
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#fafafa',
    elevation: 6,
  },
  modal: {
    width: width * 0.8,
    height: height * 0.5,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#fafafa',
    elevation: 4,
  },
  nameUser: {
    fontSize: 18,
    color: '#414040',
  },
  imgProfile: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  flatStyle: {
    paddingHorizontal: 15,
    marginTop: 5,
  },
  nameTask: {
    color: '#414040',
  },
  input: {
    width: '90%',
    marginVertical: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#414040',
    borderColor: '#000',
    color: '#414040',
  },
  prioritySelected: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    elevation: 0.5,
    borderRadius: 8,
    paddingHorizontal: 5,
  },
});

export default TasksList;
