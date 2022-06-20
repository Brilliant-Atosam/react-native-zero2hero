import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Modal,
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
  const [showWarning, setShowWarning] = useState(false);
  const onSubmit = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
    }
  };
  return (
    <View style={styles.body}>
      <Modal
        visible={showWarning}
        onRequestClose={() => setShowWarning(false)}
        transparent
        animationType="fade">
        <View style={styles.modal_container}>
          <View style={styles.modal_wrapper}>
            <View style={styles.modal_title}>
              <Text style={styles.modal_title_text}>Warning!</Text>
            </View>
            <View style={styles.modal_body}>
              <Text>Hello world!</Text>
            </View>
            <Pressable
              style={styles.modal_bottom}
              android_ripple={{color: '#ccc'}}
              onPress={() => setShowWarning(false)}>
              <Text style={styles.modal_bottom_text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  modal_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  modal_wrapper: {
    height: 300,
    width: 300,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    // justifyContent: 'center',
    // backgroundColor: '#00000099',
    borderRadius: 20,
  },
  modal_title: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000999',
    width: '100%',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  modal_title_text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  modal_body: {
    width: '100%',
    height: 200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  modal_bottom: {
    backgroundColor: '#093',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  modal_bottom_text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
});

export default App;
