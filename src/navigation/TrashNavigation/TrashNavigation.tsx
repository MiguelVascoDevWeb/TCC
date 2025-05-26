import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManagementTrashScreen from '../../screens/Trash/ManagementTrashScreen';
import TextTrash from '../../screens/Trash/TextTrashScreen';
import HowToDisposeScreen from '../../screens/Trash/HowToDisposeScreen';
import MapScreen from '../../screens/Trash/MapScreen';

export type TrashStackParamList = {
    Lixo: undefined;
    LixoTexto: undefined;
    ComoDescartar: undefined;
    Mapa: undefined;

};

const Stack = createNativeStackNavigator<TrashStackParamList>();

export default function TrashNavigation() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Lixo" component={ManagementTrashScreen} options={{ headerBackVisible: false }}  />
        <Stack.Screen name="LixoTexto" component={TextTrash}/>
        <Stack.Screen name="ComoDescartar" component={HowToDisposeScreen}/>
        <Stack.Screen name="Mapa" component={MapScreen}/>
      </Stack.Navigator>
    
  );
}
