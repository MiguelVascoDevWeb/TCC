import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManagementEnergyScreen from '@screens/Energy/ManagementEnergyScreen';
import EnergyDevicesScreen from '@/screens/Energy/EnergyDevicesScreen';
import TextEnergy from '@screens/Energy/TextEnergyScreen';
import { EnergyStackParamList } from '@/types/EnergyStackParamList';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import NavigationGradient from '@/components/NavigationGradient';

const Stack = createNativeStackNavigator<EnergyStackParamList>();

export default function EnergyNavigation() {
  return (

      <Stack.Navigator screenOptions={{
        headerTintColor: Colors.white,
        headerTitleStyle: { fontWeight: 'bold' },
        headerBackground: () => (
          <NavigationGradient gradientColors={['#FFE18F','#FFD666', '#EABC3B']}/>
        ),
      }}>
        <Stack.Screen name="EnergiaGerenciamento" component={ManagementEnergyScreen} 
          options={{ headerBackVisible: false, headerTitle: 'Gerenciamento de Energia' }}  />
        <Stack.Screen name="EnergiaTexto" component={TextEnergy} options={{headerTitle: 'Sobre a Energia' }}/>
        <Stack.Screen name="EnergiaDispositivos" component={EnergyDevicesScreen}
          options={{headerTitle: 'Dispositivos' }}/>
      </Stack.Navigator>
    
  );
}
