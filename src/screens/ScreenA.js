import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import {GlobaStyle} from '../utils/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CustomButton} from '../utils/CustomButton';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  err => console.log(err),
);
const ScreenA = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      db.transaction(tx => {
        tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let username = results.rows.item(0).Name;
            let userAge = results.rows.item(0).Age;
            setName(username);
            setAge(userAge);
          }
        });
      });
    };
    getData();
  }, []);
  const handleUpdate = async () => {
    if (name.length < 1) {
      Alert.alert('warning', 'Please enter a valid name');
    } else {
      try {
        db.transaction(tx => {
          tx.executeSql(
            'UPDATE Users SET Name=?',
            [name],
            () => {
              Alert.alert(
                'Success!',
                'Your data has being updated successfully!',
              );
            },
            error => console.log(error),
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async () => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Users',
        [],
        () => {
          Alert.alert('Deleted!', 'Redirecting to login');
          navigation.navigate('login');
        },
        error => {
          console.log(error);
        },
      );
    });
    // const user = await AsyncStorage.getItem('user');
    // user && (await AsyncStorage.removeItem('user'));
    // Alert.alert('Deleted!', 'Redirecting to login');
    // navigation.navigate('login');
  };
  return (
    <View style={styles.body}>
      <Text style={[GlobaStyle.GText, styles.text]}>Welcome, {name}!</Text>
      <Text style={[GlobaStyle.GText, styles.text]}>Your age is , {age}!</Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter your name"
        value={name}
        onChangeText={value => setName(value)}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Please enter your name"
        value={age}
        onChangeText={value => setAge(value)}
      /> */}
      <CustomButton
        title="Update"
        bgColor="blue"
        bgColorPressed="#f0f0f0"
        style={{marginTop: 20}}
        btnTextStyles={{
          color: '#fff',
          fontWeight: 'bold',
          fontFamily: 'Smooch-Regular',
        }}
        onSubmit={handleUpdate}
      />
      <CustomButton
        title="Delete"
        bgColor="red"
        bgColorPressed="#f0f0f0"
        style={{marginTop: 20}}
        btnTextStyles={{
          color: '#fff',
          fontWeight: 'bold',
          fontFamily: 'Smooch-Regular',
        }}
        onSubmit={handleDelete}
      />
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
    // fontFamily: 'RubikMoonrocks-Regular',
    color: 'red',
    fontSize: 35,
    padding: 10,
  },
  btn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 5,
    borderRadius: 2,
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
export default ScreenA;
