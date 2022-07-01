import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CustomButton} from '../utils/CustomButton';
import {GlobaStyle} from '../utils/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  err => console.log(err),
);
const Login = ({navigation}) => {
  // const navigation = useNavigation();
  const createTable = () =>
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Users ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);',
      );
    });
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const handleStorage = async () => {
    if (name.length < 1) {
      Alert.alert('warning', 'Please enter a valid name');
    } else {
      try {
        await db.transaction(async tx => {
          // await tx.executeSql(
          //   "INSERT INTO Users (Name, Age) VALUES ('" +
          //     name +
          //     "', " +
          //     age +
          //     ') ',
          // );
          await tx.executeSql('INSERT INTO Users (Name, Age) VALUES (?, ?)', [
            name,
            age,
          ]);
        });
        // const user = {
        //   name: name,
        //   age: age,
        // };
        // await AsyncStorage.setItem('user', JSON.stringify(user));
        navigation.navigate('home');
      } catch (error) {
        // Alert.alert('warning', error);
        console.log(error);
      }
    }
  };
  useEffect(() => {
    createTable();
    const getData = async () => {
      db.transaction(tx => {
        tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
          var len = results.rows.length;
          len > 0 && navigation.navigate('home');
        });
      });
    };
    getData();
  }, []);
  return (
    <View style={GlobaStyle.Body}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.tetx}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter your name"
        onChangeText={value => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Please enter your age"
        onChangeText={value => setAge(value)}
      />
      <CustomButton
        title="Submit"
        bgColor="blue"
        bgColorPressed="#f0f0f0"
        style={{marginTop: 20}}
        btnTextStyles={{
          color: '#fff',
          fontWeight: 'bold',
          fontFamily: 'Smooch-Regular',
        }}
        onSubmit={handleStorage}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  tetx: {
    fontSize: 30,
    fontFamily: 'Smooch-Regular',
    marginTop: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#555',
    backgroundColor: '#99999999',
    color: '#fff',
    padding: 10,
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
  },
});
export default Login;
