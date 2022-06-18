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
     <View style={styles.viewContainer1}>
      <View style={styles.view1}><Text>1</Text></View>
      <View style={styles.view2}><Text>2</Text></View>
      <View style={styles.view3}><Text>3</Text></View>
     </View>
     <View style={styles.viewContainer2}>
      <View style={styles.view4}><Text>4</Text></View>
      <View style={styles.view5}><Text>5</Text></View>
     </View>
     <View style={styles.viewContainer3}>
      <View style={styles.view6}><Text>6</Text></View>
      <View style={styles.view7}><Text>7</Text></View>
     </View>
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

 },
 viewContainer1:{
flex: 1,
flexDirection: 'row'
 },
 viewContainer2:{
flex: 2,
 },
 view1:{
  backgroundColor: 'green',
flex: 1,
alignItems: 'center',
justifyContent: 'center'
 },
 view2:{
  backgroundColor: 'red',
flex: 2,
alignItems: 'center',
justifyContent: 'center'
 },
 view3:{
  backgroundColor: 'blue',
flex: 3,
alignItems: 'center',
justifyContent: 'center'
 },

 viewContainer2:{
  flex: 2,
  width: '100%',
  flexDirection: 'column'
   },
 view4:{
  backgroundColor: 'yellow',
  flex: 1,
  width: '100%',
  alignItems: 'center',
justifyContent: 'center'
 },
 view5:{
  backgroundColor: 'pink',
  flex: 1,
  width: '100%',
  alignItems: 'center',
justifyContent: 'center'
 },
 viewContainer3:{
  flex: 6,
  width: '100%',
  flexDirection: 'row'
   },
   view6:{
    backgroundColor: 'blue',
    flex: 1,
    width: '100%',
    alignItems: 'center',
  justifyContent: 'center'
   },
   view7:{
    backgroundColor: 'cyan',
    flex: 1,
    width: '100%',
    alignItems: 'center',
  justifyContent: 'center'
   },
});

export default App;
