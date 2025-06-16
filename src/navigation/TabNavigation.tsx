import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import TrashNavigation from '@navigation/TrashNavigation/TrashNavigation';
import { JSX } from 'react/jsx-runtime';
import WaterNavigation from '@navigation/WaterNavigation/WaterNavigation';
import EnergyNavigation from '@navigation/EnergyNavigation/EnergyNavigation';
import ManagementPoluentsScreen from '@screens/Poluents/ManagementPoluentsScreen';
import { RootTabParamList } from '@/types/RootTabParamList';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function TabNavigator(): JSX.Element {
  return (
  
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Energia" component={EnergyNavigation} />
        <Tab.Screen name="Poluentes" component={ManagementPoluentsScreen} />
        <Tab.Screen name="Lixo" component={TrashNavigation} />
        <Tab.Screen name="Água" component={WaterNavigation} />
      </Tab.Navigator>

    
  );  
}
