import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {Color} from '../code/Theme';

export default function CalendarComponent({date, onSelect}) {
  return (
    <View style={styles.container}>
      <Text>{date}</Text>
      <Calendar
        initialDate={date}
        theme={{
          selectedDayBackgroundColor: Color.Magenta,
        }}
        minDate={new Date().toDateString()}
        markedDates={{
          [date]: {selected: true, selectedColor: Color.Magenta},
        }}
        onDayPress={day => {
          onSelect(day.dateString);
        }}
        enableSwipeMonths={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
