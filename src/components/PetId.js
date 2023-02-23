import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch, useSelector} from 'react-redux';
import Api from '../api';
import {getDataFrom, handleError} from '../common/Utils';

const PetId = ({value, setValue, newPet}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const User = useSelector(state => state.data.user);
  const dispatch = useDispatch();
  const api = new Api(User);

  const getPets = () => {
    api
      .petId()
      .then(response => {
        const respData = getDataFrom(response);
        if (respData) {
          // success, get required data from `respData`
          console.log('petID', respData.data);
          let items = [];
          const data = respData.data;
          //  if(!data.error){
          //    const ids = Object.keys(.data.ID)
          //    const values = Object.values(data.data.NAME)
          for (let i = 0; i < data.length; i++) {
            items.push({
              label: data[i].NAME,
              value: data[i].ID,
            });
          }
          setItems(items);
          //    }
          //else getService failed, & the result is already handled in getDataFrom()
        }
        setIsLoading(false);
      })
      .catch(error => {
        // this method parse error & handle all msg display mechanism
        handleError(error);
        setIsLoading(false);
      });
  };

  useEffect(getPets, []);

  useEffect(() => {
    if (!newPet) {
      return;
    }
    setIsLoading(true);
    getPets();
  }, [newPet]);

  return (
    <View style={{marginTop: 10}}>
      <DropDownPicker
        placeholder={isLoading ? 'Loading...' : 'Please select one'}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        listMode='MODAL'
        setValue={setValue}
        maxHeight={100}
        style={{borderColor: '#cfcfcf'}}
      />
    </View>
  );
};

export default PetId;
