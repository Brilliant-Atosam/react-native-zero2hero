import React,{useState} from 'react';
import {
  Button,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
const [items, setItems] = useState([
  {id: 1, item: 'item 1'},
  {id: 2, item: 'item 2'},
  {id: 3, item: 'item 3'},
  {id: 4, item: 'item 4'},
  {id: 5, item: 'item 5'},
  {id: 6, item: 'item 6'},
  {id: 7, item: 'item 7'},
  {id: 8, item: 'item 8'},
  {id: 9, item: 'item 9'}
])
const [refreshing, setRefreshing] = useState(false)
const onRefresh = ()=>{
  setRefreshing(true)
  setItems([...items, {id: items.length +1, item: `item ${items.length + 1}`}])
  setRefreshing(false)
}
  return (
    <ScrollView style={styles.body} refreshControl={
      <RefreshControl colors={['green']} refreshing={refreshing} onRefresh={onRefresh} />
    }>
    {items.map(i=> {return (<View key={i.id} style={styles.item} ><Text style={styles.text}>{i.item}</Text></View>)})}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 body:{
flex: 1,
flexDirection: 'column',
backgroundColor: '#555'
 },
 text:{
  color: '#000',
  fontSize: 22,
  fontStyle: 'italic',
  margin: 10

 },
item:{
  backgroundColor: 'white',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  margin: 10,
  padding: 10
}
});

export default App;
