import { StatusBar } from 'expo-status-bar';
import LogInScreen from './src/screens/LogInSignUp/LogInScreen';
import LandingScreen from './src/screens/LandingScreen';
import StackNavigation from './src/navigation/StackNavigation'


export default function App() {
  return (
    <StackNavigation></StackNavigation>
  );
}

