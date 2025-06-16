import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '@/screens/LandingScreen';
import LogInScreen from '@/screens/LogInSignUp/LogInScreen';
import SignUpScreen from '@/screens/LogInSignUp/SignUpScreen';
import ForgotPasswordScreen from '@/screens/LogInSignUp/ForgotPasswordScreen';
import VerifyCodeScreen from '@/screens/LogInSignUp/VerifyCodeScreen';
import ResetPasswordScreen from '@/screens/LogInSignUp/ResetPasswordScreen';
import { RootStackParamList } from '@/types/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
      <Stack.Screen name="Recovery" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}
