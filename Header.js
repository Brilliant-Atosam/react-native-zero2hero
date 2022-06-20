import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>reactnative zero2hero</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});
export default Header;
