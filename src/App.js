import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const App = () => {
  // const Tab = createBottomTabNavigator();
  // const Tab = createMaterialBottomTabNavigator();
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({size, focused, color}) => {
            let iconName;
            // color = focused ? '#555' : '#000';
            size = focused ? 25 : 20;
            // if (route.name === 'Screen_A') {
            //   iconName = 'autoprefixer';
            // } else if (route.name === 'Screen_B') {
            //   iconName = 'btc';
            // }
            route.name === 'Screen_A'
              ? (iconName = 'autoprefixer')
              : route.name === 'Screen_B'
              ? (iconName = 'btc')
              : '';
            return <FontAwesome5 name={iconName} color={color} size={size} />;
          },
          tabBarShowLabel: true,
          tabBarLabelStyle: {fontSize: 22},
          tabBarActiveTintColor: '#f0f',
          tabBarInactiveTintColor: '#555',
          tabBarActiveBackgroundColor: '#fff',
          tabBarInactiveBackgroundColor: '#33333399',
        })}
        activeColor="#555"
        inactiveColor="#55555599"
        barStyle={{backgroundColor: 'blue'}}>
        <Tab.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            // tabBarBadge: 3,
          }}
        />
        <Tab.Screen name="Screen_B" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
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
});

export default App;
