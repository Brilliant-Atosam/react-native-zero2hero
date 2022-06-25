import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';

import {createDrawerNavigator} from '@react-navigation/drawer';
const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Screen_A"
        screenOptions={{
          drawerActiveBackgroundColor: '#000',
          drawerActiveTintColor: '#fff',
          drawerLabelStyle: {
            fontSize: 30,
            fontStyle: 'italic',
          },
          drawerStyle: {
            backgroundColor: '#444',
            // width: 400,
          },
          drawerPosition: 'right',
          drawerType: 'back',
          // drawerHideStatusBarOnOpen: true,
          overlayColor: '#33333390',
          gestureEnabled: false,
          // swipeEnabled: false,
          // swipeEdgeWidth: 400,
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTitle: '',
          headerTintColor: 'white',
        }}>
        <Drawer.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            title: 'Screen_A Title',
            drawerIcon: ({focused}) => (
              <FontAwesome5 name="autoprefixer" size={focused ? 25 : 20} />
            ),
          }}
        />
        <Drawer.Screen
          name="Screen_B"
          component={ScreenB}
          options={{
            title: 'Screen_A Title',
            drawerIcon: ({focused}) => (
              <FontAwesome5 name="btc" size={focused ? 25 : 20} />
            ),
          }}
          initialParams={{name: 'Bongo Partners', id: 27}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
