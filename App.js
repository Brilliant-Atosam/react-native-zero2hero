import React,{useState} from 'react';
import {
  Button,
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
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
const [DATA, setDATA] = useState([
  {
    title: 'Title 1',
    data: ['item 1, 3', 'item 2, 3', 'item 3, 3']
  },
])
const [refreshing, setRefreshing] = useState(false)
const onRefresh = ()=>{
  setRefreshing(true)
  setDATA([...DATA, {title: `Title ${DATA.length + 1}`, data:[`item ${DATA.length + 1}, 1`, `item ${DATA.length + 1}, 2`, `item ${DATA.length + 1}, 3`] }])
  setRefreshing(false)
}
  return (
    <SectionList keyExtractor={(item, index)=> index.toString()} sections={DATA} renderItem={({item})=>(<View style={styles.item} >
        <Text style={styles.text}>{item}</Text>
        </View>)} 
        renderSectionHeader={({section})=>(<View style={styles.title} >
          <Text style={styles.titleText}>{section.title}</Text>
          </View>)}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
    // <FlatList 
    // refreshControl={
    //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    // }
    // data={items} 
    // keyExtractor={(item, index)=> index.toString()}
    // renderItem={({item})=>(
    // <View style={styles.item} >
    //   <Text style={styles.text}>{item.item}</Text>
    //   </View>)} 
    //   />
    // <ScrollView style={styles.body} refreshControl={
    //   <RefreshControl colors={['green']} refreshing={refreshing} onRefresh={onRefresh} />
    // }>
    // {items.map(i=> {return (<View key={i.id} style={styles.item} ><Text style={styles.text}>{i.item}</Text></View>)})}
    // </ScrollView>
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
 titleText:{
  color: '#fff',
  fontSize: 22,
  fontStyle: 'italic',
  margin: 10

 },
 title:{
  backgroundColor: '#555',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
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
