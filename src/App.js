import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import Login from './screens/Login';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
const App = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={
          {
            //   drawerActiveBackgroundColor: '#000',
            //   drawerActiveTintColor: '#fff',
            //   drawerLabelStyle: {
            //     fontSize: 30,
            //     fontStyle: 'italic',
            // },
            // drawerStyle: {
            //   backgroundColor: '#444',
            //   // width: 400,
            // },
            // drawerPosition: 'right',
            // drawerType: 'back',
            // // drawerHideStatusBarOnOpen: true,
            // overlayColor: '#33333390',
            // gestureEnabled: false,
            // // swipeEnabled: false,
            // // swipeEdgeWidth: 400,
            // headerStyle: {
            //   backgroundColor: 'blue',
            // },
            // headerTitle: '',
            // headerTintColor: 'white',
          }
        }>
        <Stack.Screen
          name="home"
          component={Home}
          // options={{
          //   title: 'Screen_A Title',
          //   drawerIcon: ({focused}) => (
          //     <FontAwesome5 name="autoprefixer" size={focused ? 25 : 20} />
          //   ),
          // }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
            //   title: 'Screen_A Title',
            //   drawerIcon: ({focused}) => (
            //     <FontAwesome5 name="btc" size={focused ? 25 : 20} />
            //   ),
          }}
          // initialParams={{name: 'Bongo Partners', id: 27}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
