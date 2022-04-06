import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const TasksList = () => {
  const [task, setTask] = useState([
    {
      id: Math.random(),
      title: 'Task 1',
      priority: '#bdecb6',
    },
    {
      id: Math.random(),
      title: 'Task 2',
      priority: '#cbe0e9',
    },
    {
      id: Math.random(),
      title: 'Task 3',
      priority: '#fdfd96',
    },
  ]);

  const addTask = () => {
    setTask([...task, {id: Math.random(), title: 'test', priority: '#fdfd96'}]);
  };

  const AVATAR_SIZE = 45;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 18,
            color: '#414040',
          }}>
          Mateus
        </Text>
        <Image
          source={require('../../assets/imgs/no_user.png')}
          style={{width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: 50}}
        />
      </View>
      <View style={styles.taskList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          contentContainerStyle={{paddingHorizontal: 15, marginTop: 10}}
          data={task}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
            <View style={styles.containerTask}>
              <Text style={{color: '#000'}}>{item.title}</Text>
            </View>
          )}
        />
        <View />
        {/* <TouchableOpacity onPress={() => addTask()}>
          <Text style={{color: '#313030'}}>Adicionar tarefa</Text>
        </TouchableOpacity> */}
      </View>
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
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: '#fafafa',
    elevation: 3,
    justifyContent: 'center',
    //   shadowColor: '#000',
    //   shadowOffset: {
    //     width: 10,
    //     height: 10,
    //   },
    //   shadowOpacity: 0.3,
    //   shadowRadius: 80,
  },
});

export default TasksList;
