/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Check from 'react-native-vector-icons/FontAwesome';
import Trash from 'react-native-vector-icons/FontAwesome5';

const Task = props => {
  const [finalizado, setFinalizado] = useState(false);
  return (
    <View
      style={{
        width: '100%',
        height: 90,
        marginTop: 12,
        marginBottom: 6,
        borderRadius: 12,
        backgroundColor: '#fafafa',
        elevation: 3,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View style={props.style} />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setFinalizado(!finalizado)}
            activeOpacity={0.6}
            style={{
              marginHorizontal: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {finalizado ? (
              <Check name="check-square-o" size={24} color="#32cd32" />
            ) : (
              <Check name="square-o" size={24} color="#FF0000" />
            )}
          </TouchableOpacity>
          <Text
            style={[
              props.textStyle,
              // finalizado ? {textDecorationLine: 'line-through'} : {},
            ]}>
            {props.text}
          </Text>
        </View>
        <TouchableOpacity
          style={{padding: 4, marginRight: 8}}
          onPress={props.onPress}>
          <Trash name="trash" size={20} color={'#414040'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;
