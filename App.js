import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      ToastAndroid.showWithGravity(
        'Name must be at least 4 characters long!',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
    // name.length > 3
    //   ? setSubmitted(!submitted)
    //   : ToastAndroid.showWithGravityAndOffset(
    //       'Name must be at least 4 characters long!',
    //       ToastAndroid.LONG,
    //       ToastAndroid.TOP,
    //       100,
    //       100,
    //     );
    // Alert.alert(
    //     'Warning',
    //     'Name must be at least 4 characters long',
    //     [
    //       {
    //         text: 'Do not show again',
    //         onPress: () => console.warn('Do not show again pressed'),
    //       },
    //       {text: 'Cancel', onPress: () => console.warn('Cancel pressed')},
    //       {text: 'OK', onPress: () => console.warn('OK pressed')},
    //     ],
    //     {cancelable: true, onDismiss: () => console.warn('Dismissed!')},
    //   );
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your  name"
        onChangeText={value => setName(value)}
        value={name}
        // editable={false}
        // maxLength={3}
        // multiline
        // keyboardType= 'phone-pad'
      />
      {/* <Button title={submitted? 'clear':'Submit'} onPress={onSubmit} /> */}
      {/* <Pressable onPress={onSubmit}>
      <Text style={styles.btn}>{submitted? 'clear':'Submit'}</Text>
    </Pressable> */}
      <TouchableOpacity
        onPress={onSubmit}
        activeOpacity={0.6}
        // delayLongPress={1000}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <Text style={styles.btn}>{submitted ? 'clear' : 'Submit'}</Text>
      </TouchableOpacity>
      {submitted && <Text style={styles.text}>Your name is: {name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 22,
    fontStyle: 'italic',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    width: '90%',
    borderColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  btn: {
    padding: 10,
    backgroundColor: '#999',
    fontSize: 22,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
