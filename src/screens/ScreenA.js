import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const ScreenA = ({navigation}) => {
  const onPressHandler = () => {
    // navigation.navigate('Screen_B')
    navigation.navigate('Screen_B');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A component</Text>
      <Pressable onPress={onPressHandler}>
        <Text style={styles.btn}>Go to Screen B</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 35,
    backgroundColor: 'green',
    padding: 10,
  },
  btn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 5,
    borderRadius: 2,
  },
});
export default ScreenA;
