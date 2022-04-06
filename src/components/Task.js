/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Check from 'react-native-vector-icons/AntDesign';

const Task = props => {
  const [finalizado, setFinalizado] = useState(false);
  return (
    <View style={props.style}>
      <TouchableOpacity
        onPress={() => setFinalizado(!finalizado)}
        activeOpacity={0.6}
        style={{
          width: 25,
          height: 25,
          borderRadius: 50,
          borderWidth: 0.5,
          marginHorizontal: 8,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#616060',
        }}>
        {finalizado ? (
          <Check name="check" size={22} color="#616060" />
        ) : (
          <View />
        )}
      </TouchableOpacity>
      <Text style={props.textStyle}>{props.text}</Text>
    </View>
  );
};

export default Task;
