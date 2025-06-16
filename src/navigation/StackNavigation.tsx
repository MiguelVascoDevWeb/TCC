import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '@screens/LandingScreen';
import LogInScreen from '@screens/LogInSignUp/LogInScreen';
import SignUpScreen from '@screens/LogInSignUp/SignUpScreen';
import TabNavigator from '@navigation/TabNavigation';
import PasswordRecoveryScreen from '@/screens/LogInSignUp/ResetPasswordScreen';
import { RootStackParamList } from '@/types/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigation() {
  return (

      <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }} >
        <Stack.Screen  name="Landing" component={LandingScreen}/>
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Recovery" component={PasswordRecoveryScreen} />
      </Stack.Navigator>
  );
}