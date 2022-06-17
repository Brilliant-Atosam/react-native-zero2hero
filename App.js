import React,{useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
const [name, setName] = useState('Bongo')
const [session, setSession] = useState({number: 1, name: 'State'})
const [current, setCurrent] = useState(false)
const updateHandler = ()=>{
  setName('Brilliant Atosam');
  setSession({number: 2, name: 'Styling'})
  setCurrent(!current)
}
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hello World! My name is {name}!</Text>
      <Text style={styles.text}>This is session number {session.number} and it is about {session.name}!</Text>
      <Text style={styles.text}>{current ? 'Current Session': 'Next Session'}</Text>
      <Button title='update state' onPress={updateHandler} ></Button>
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
  marginBottom: 10

 }
});

export default App;
