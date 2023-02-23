import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Color } from '../code/Theme';

const RadioButton = ({onPress, selected, children}) => (
  <TouchableOpacity onPress={onPress} style={styles.radioButton}>
  <View style={styles.radioButtonContainer}>
 
      <Icon 
      name={selected ? 'radio-button-on':'radio-button-off'} 
      size={20}
      color={selected ? Color.Magenta : 'gray'} />
  
      <Text style={styles.radioButtonText}>{children}</Text>

  </View></TouchableOpacity>
);

export default RadioButton;

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  radioButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: 'purple',
  },
  radioButtonText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
  },
});
