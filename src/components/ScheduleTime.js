import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ScheduleTime = ({appointmentTime, onChange}) => {
  const timeData = [
    {
      id: 1,
      time: '9:30 am',
      value: '9:30 pm',
      isSelected: false,
    },
    {
      id: 2,
      time: '10:30 am',
      value: '10:30 pm',
      isSelected: false,
    },
    {
      id: 3,
      time: '11:30 am',
      value: '11:30 pm',
      isSelected: false,
    },
    {
      id: 4,
      time: '12:30 pm',
      value: '12:30 pm',
      isSelected: false,
    },
  ];

  const renderItem = item => {
    const isSelected = appointmentTime?.id === item.id;
    return (
      <View style={{padding: 10, width: '50%'}}>
        <TouchableOpacity
          value={item.value}
          isSelected={isSelected}
          onPress={() => onChange(item)}>
          <View
            style={{
              // width: 145,
              flex: 1,
              height: 45,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#d3d3d3',
              borderColor: isSelected === true ? '#92288C' : '#d3d3d3',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              paddingHorizontal: 10,
              backgroundColor: isSelected === true ? '#fff' : '#efefef',
            }}>
            <Text
              style={{
                color: isSelected === true ? '#92288C' : '#000',
                fontSize: 14,
                fontWeight: 'bold',
                flex: 1,
              }}>
              {item.time}
            </Text>
            <View>
              <Icon
                name={isSelected ? 'check-circle' : 'radio-button-unchecked'}
                size={20}
                color={isSelected ? '#92288C' : '#d3d3d3'}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View
      style={{
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
      }}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Available Slots
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {timeData.map(renderItem)}
      </View>
    </View>
  );
};

export default ScheduleTime;
