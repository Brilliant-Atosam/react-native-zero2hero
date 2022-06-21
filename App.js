import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  ImageBackground,
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
import {CustomButton} from './CustomButton';
import Header from './Header';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    }
  };
  return (
    <View style={styles.body}>
      <Header />
      <Text style={styles.text}>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your  name"
        onChangeText={value => setName(value)}
        value={name}
      />
      <CustomButton
        title={submitted ? 'clear' : 'Submit'}
        onSubmit={onSubmit}
        bgColor={'#fff'}
        bgColorPressed={'#00000098'}
      />
      <CustomButton
        title={submitted ? 'clear' : 'Submit'}
        onSubmit={onSubmit}
        bgColor={'#fff'}
        bgColorPressed={'#00000098'}
        style={{margin: 10}}
      />
      {/* <TouchableOpacity
        onPress={onSubmit}
        activeOpacity={0.6}
        // delayLongPress={1000}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <Text style={styles.btn}>{submitted ? 'clear' : 'Submit'}</Text>
      </TouchableOpacity> */}
      {submitted ? (
        <View style={styles.body}>
          <Text style={styles.text}>Your name is: {name}</Text>
          <Image
            source={require('./assets/img2.jpg')}
            style={styles.img}
            resizeMode="stretch"
          />
        </View>
      ) : (
        <Image
          source={require('./assets/img1.jpg')}
          style={styles.img}
          resizeMode="stretch"
          // blurRadius={1}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  text: {
    color: '#000',
    fontSize: 22,
    fontStyle: 'italic',
    margin: 10,
  },
  
  input: {
    borderWidth: 2,
    width: '90%',
    borderColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    color: '#fff',

  },
  btn: {
    padding: 10,
    backgroundColor: '#999',
    fontSize: 22,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  img: {
    height: 70,
    width: 70,
    marginTop: 10,
  },
});

export default App;
