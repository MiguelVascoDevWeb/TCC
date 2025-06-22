import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManagementEnergyScreen from '@screens/Energy/ManagementEnergyScreen';
import EnergyDevicesScreen from '@/screens/Energy/EnergyDevicesScreen';
import TextEnergy from '@screens/Energy/TextEnergyScreen';
import { EnergyStackParamList } from '@/types/EnergyStackParamList';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator<EnergyStackParamList>();

export default function EnergyNavigation() {
  return (

      <Stack.Navigator screenOptions={{
        headerTintColor: Colors.white,
        headerTitleStyle: { fontWeight: 'bold' },
        headerBackground: () => (
          <LinearGradient
            colors={['#FFE18F','#FFD666', '#EABC3B']}
            locations={[0 , 0.39, 1]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        ),
      }}>
        <Stack.Screen name="Energia" component={ManagementEnergyScreen} options={{ headerBackVisible: false }}  />
        <Stack.Screen name="EnergiaTexto" component={TextEnergy}/>
        <Stack.Screen name="EnergiaDispositivos" component={EnergyDevicesScreen}/>
      </Stack.Navigator>
    
  );
}
