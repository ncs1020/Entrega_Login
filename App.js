import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './vista/HomeScreen';
import RandomScreen from './vista/RandomScreen';
import InfoScreen from './vista/InfoScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen component={HomeScreen} name='Inicio' />
        <Drawer.Screen component={RandomScreen} name='Random' />
        <Drawer.Screen component={InfoScreen} name='Info' />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
