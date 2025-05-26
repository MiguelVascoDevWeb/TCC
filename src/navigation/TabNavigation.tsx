import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TrashNavigation from './TrashNavigation/TrashNavigation';
import { JSX } from 'react/jsx-runtime';
import WaterNavigation from './WaterNavigation/WaterNavigation';
import EnergyNavigation from './EnergyNavigation/EnergyNavigation';
import ManagementPoluentsScreen from '../screens/Poluents/ManagementPoluentsScreen';

export type RootTabParamList = {
  Home: undefined;
  Energia: undefined;
  Água: undefined;
  Lixo: undefined;
  Poluentes: undefined;

};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function TabNavigator(): JSX.Element {
  return (
  
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Energia" component={EnergyNavigation}/>
        <Tab.Screen name="Poluentes" component={ManagementPoluentsScreen}/>
        <Tab.Screen name="Lixo" component={TrashNavigation}/>
        <Tab.Screen name="Água" component={WaterNavigation}/>

      </Tab.Navigator>
    
  );
}
