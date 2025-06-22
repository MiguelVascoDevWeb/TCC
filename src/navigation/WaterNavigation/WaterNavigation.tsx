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
              colors={['#3B87EA', '#66BFFF' , Colors.blue]}
              locations={[0 , 0.39, 1]}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          ),
        }}
      >
        <Stack.Screen name="Agua" component={ManagementWaterScreen} options={{ headerBackVisible: false }}  />
        <Stack.Screen name="AguaTexto" component={TextWaterScreen}/>
        <Stack.Screen name="AguaDispositivos" component={WaterDevicesScreen}/>
      </Stack.Navigator>
    
  );
}
