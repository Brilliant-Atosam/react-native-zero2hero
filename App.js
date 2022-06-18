import React,{useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
const [times, setTimes] = useState(0)
const [number, setNumber] = useState(0)
const handleTimes = ()=>{
  setTimes(times +1);
  setNumber(number + 5);
}
  return (
    <View style={styles.body}>
    <Text>{number}</Text>
    <Button title='Add' onPress={()=> handleTimes()}></Button>
    <Text>You have clicked this button {times}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
 body:{
flex: 1,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#555'
 },
 text:{
  color: '#fff',
  fontSize: 22,
  fontStyle: 'italic',
  margin: 10

 },

});

export default App;
