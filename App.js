import React,{useState} from 'react';
import {
  Button,
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
const [name, setName] = useState('')
  return (
  <View style={styles.body}>
    <Text style={styles.text}>What is name?</Text>
    <TextInput 
    style={styles.input} 
    placeholder='Enter your  name' 
    onChangeText={value=>setName(value)}
    // editable={false}
    // maxLength={3}
    // multiline
    // keyboardType= 'phone-pad'
    />
    <Text style={styles.text}>Your name is: {name}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
 body:{
flex: 1,
flexDirection: 'column',
alignItems: 'center'
 },
 text:{
  color: '#000',
  fontSize: 22,
  fontStyle: 'italic',
  margin: 10

 },
 input:{
  borderWidth: 1,
  width: '90%',
  borderColor: '#333',
padding: 10,
borderRadius: 5
 }
});

export default App;
