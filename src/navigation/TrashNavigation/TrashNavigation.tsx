import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManagementTrashScreen from '../../screens/Trash/ManagementTrashScreen';
import TextTrash from '../../screens/Trash/TextTrashScreen';

export type TrashStackParamList = {
    Lixo: undefined;
    LixoTexto: undefined;

};

const Stack = createNativeStackNavigator<TrashStackParamList>();

export default function TrashNavigation() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Lixo" component={ManagementTrashScreen} options={{ headerBackVisible: false }}  />
        <Stack.Screen name="LixoTexto" component={TextTrash}/>
      </Stack.Navigator>
    
  );
}
