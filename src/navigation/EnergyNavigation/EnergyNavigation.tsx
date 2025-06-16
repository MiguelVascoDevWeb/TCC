import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManagementEnergyScreen from '@screens/Energy/ManagementEnergyScreen';
import EnergyDevicesScreen from '@/screens/Energy/EnergyDevicesScreen';
import TextEnergy from '@screens/Energy/TextEnergyScreen';
import { EnergyStackParamList } from '@/types/EnergyStackParamList';

const Stack = createNativeStackNavigator<EnergyStackParamList>();

export default function EnergyNavigation() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Energia" component={ManagementEnergyScreen} options={{ headerBackVisible: false }}  />
        <Stack.Screen name="EnergiaTexto" component={TextEnergy}/>
        <Stack.Screen name="EnergiaDispositivos" component={EnergyDevicesScreen}/>
      </Stack.Navigator>
    
  );
}
