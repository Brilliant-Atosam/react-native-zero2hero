import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

export const CustomButton = ({onSubmit, title, bgColor, bgColorPressed, style}) => {
  return (
    <Pressable
      onPress={onSubmit}
      activeOpacity={0.6}
      style={({pressed})=>[
        {backgroundColor: pressed? bgColorPressed: bgColor},
        styles.btn,
        {...style}
      ]}
      // delayLongPress={1000}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    // backgroundColor: '#999',
    fontSize: 22,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
  },
});
