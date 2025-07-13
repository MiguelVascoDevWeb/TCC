import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManagementTrashScreen from '@screens/Trash/ManagementTrashScreen';
import TextTrash from '@screens/Trash/TextTrashScreen';
import HowToDisposeScreen from '@screens/Trash/HowToDisposeScreen';
import MapScreen from '@screens/Trash/MapScreen';
import { TrashStackParamList } from '@/types/TrashStackParamList';
import Colors from '@/styles/colors';
import { LinearGradient } from 'expo-linear-gradient';


const Stack = createNativeStackNavigator<TrashStackParamList>();

export default function TrashNavigation() {
  return (

      <Stack.Navigator screenOptions={{
        headerTintColor: Colors.white,
        headerTitleStyle: { fontWeight: 'bold' },
        headerBackground: () => (
          <LinearGradient
            colors={['#D7AE81', '#DEA669' , Colors.brown]}
            locations={[0 , 0.39, 1]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        ),
      }}>
        <Stack.Screen name="LixoGerenciamento" component={ManagementTrashScreen} 
          options={{ headerBackVisible: false, headerTitle: 'Gerenciamento de Lixo' }}  />
        <Stack.Screen name="LixoTexto" component={TextTrash}
          options={{headerTitle: 'Sobre o Lixo'}}/>
        <Stack.Screen name="ComoDescartar" component={HowToDisposeScreen}/>
        <Stack.Screen name="Mapa" component={MapScreen}/>
      </Stack.Navigator>
    
  );
}
