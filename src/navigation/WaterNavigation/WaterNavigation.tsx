import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManagementWaterScreen from '@screens/Water/ManagementWaterScreen';
import TextWaterScreen from '@screens/Water/TextWaterScreen';
import { WaterStackParamList } from '@/types/WaterStackParamList';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/styles/colors';
import WaterDevicesScreen from '@/screens/Water/WaterDevicesScreen';
const Stack = createNativeStackNavigator<WaterStackParamList>();

export default function WaterNavigation() {
  return (

      <Stack.Navigator screenOptions={{
        headerTintColor: Colors.white,
        headerTitleStyle: { fontWeight: 'bold' },
        headerBackground: () => (
          <LinearGradient
            colors={[Colors.blue, '#66BFFF' , '#3B87EA']}
            locations={[0 , 0.39, 1]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        ),


      }}
      >
        <Stack.Screen name="AguaGerenciamento" component={ManagementWaterScreen} 
          options={{ headerBackVisible: false, headerTitle:'Gerenciamento de Água'}}  />
        <Stack.Screen name="AguaTexto" component={TextWaterScreen}
          options={{headerTitle: 'Sobre a Água'}}/>
        <Stack.Screen name="AguaDispositivos" component={WaterDevicesScreen}
          options={{headerTitle: 'Dispositivos' }}/>
      </Stack.Navigator>
    
  );
}
