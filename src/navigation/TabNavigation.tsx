import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ManagementEnergyScreen from '../screens/Energy/ManagementEnergyScreen';
import ManagementPoluentsScreen from  '../screens/Poluents/ManagementPoluentsScreen';
import ManagementTrashScreen from '../screens/Trash/ManagementTrashScreen';
import ManagementWaterScreen from '../screens/Water/ManagementWaterScreen';
import { JSX } from 'react/jsx-runtime';

export type RootTabParamList = {
  Home: undefined;
  ManagementEnergy: undefined;
  ManagementPoluents: undefined;
  ManagementTrash: undefined;
  ManagementWater: undefined;

};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function TabNavigator(): JSX.Element {
  return (
  
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="ManagementEnergy" component={ManagementEnergyScreen}/>
        <Tab.Screen name="ManagementPoluents" component={ManagementPoluentsScreen}/>
        <Tab.Screen name="ManagementTrash" component={ManagementTrashScreen}/>
        <Tab.Screen name="ManagementWater" component={ManagementWaterScreen}/>

      </Tab.Navigator>
    
  );
}
