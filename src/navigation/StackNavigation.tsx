import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen'
import LogInScreen from '../screens/LogInSignUp/LogInScreen'

export type RootStackParamList = {
    Landing: undefined;
    LogIn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigation() {
  return (

      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
      </Stack.Navigator>
    
  );
}
