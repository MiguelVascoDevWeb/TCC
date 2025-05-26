import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import LogInScreen from '../screens/LogInSignUp/LogInScreen';
import TabNavigator from './TabNavigation';
import ManagementPoluentsScreen from '../screens/Poluents/ManagementPoluentsScreen';
import ManagementTrashScreen from '../screens/Trash/ManagementTrashScreen';
import TextTrash from '../screens/Trash/TextTrashScreen';

export type RootStackParamList = {
    Landing: undefined;
    LogIn: undefined;
    Home: undefined;
    Lixo: undefined;
    LixoTexto: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigation() {
  return (

      <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }} >
        <Stack.Screen  name="Landing" component={LandingScreen}/>
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Lixo" component={ManagementTrashScreen}/>
        <Stack.Screen name="LixoTexto" component={TextTrash}/>



      </Stack.Navigator>
    
  );
}
