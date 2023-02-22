import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownPicker = ({onSelect}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 3, value: 3},
    {label: 4, value: 4},
    {label: 5, value: 5},
    {label: 6, value: 6},
    {label: 7, value: 7},
    {label: 8, value: 8},
    {label: 9, value: 9},
    {label: 10, value: 10},
  ]);
  return (
    <View style={{marginTop: 10}}>
      <Text style={{color: 'black', fontWeight: 'bold', marginBottom: 10}}>
        Number of Pets
      </Text>
      <DropDownPicker
        placeholder={'Please select one'}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{borderColor: '#cfcfcf'}}
        onSelect={items.value}
        
      />
    </View>
  );
};

export default DropdownPicker;
