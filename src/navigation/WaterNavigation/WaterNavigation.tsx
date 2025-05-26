import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManagementWaterScreen from '../../screens/Water/ManagementWaterScreen';
import TextWaterScreen from '../../screens/Water/TextWaterScreen';

export type WaterStackParamList = {
    Agua: undefined;
    AguaTexto: undefined;
};

const Stack = createNativeStackNavigator<WaterStackParamList>();

export default function WaterNavigation() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Agua" component={ManagementWaterScreen} options={{ headerBackVisible: false }}  />
        <Stack.Screen name="AguaTexto" component={TextWaterScreen}/>
      </Stack.Navigator>
    
  );
}
