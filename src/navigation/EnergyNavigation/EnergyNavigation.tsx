import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManagementEnergyScreen from '../../screens/Energy/ManagementEnergyScreen';
import TextEnergy from '../../screens/Energy/TextEnergyScreen';

export type EnergyStackParamList = {
    Energia: undefined;
    EnergiaTexto: undefined;

};

const Stack = createNativeStackNavigator<EnergyStackParamList>();

export default function EnergyNavigation() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Energia" component={ManagementEnergyScreen} options={{ headerBackVisible: false }}  />
        <Stack.Screen name="EnergiaTexto" component={TextEnergy}/>
      </Stack.Navigator>
    
  );
}
