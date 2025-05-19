import { StatusBar } from 'expo-status-bar';
import LogInScreen from './src/screens/LogInSignUp/LogInScreen';
import LandingScreen from './src/screens/LandingScreen';
import StackNavigation from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation></StackNavigation>
    </NavigationContainer>
  );
}

