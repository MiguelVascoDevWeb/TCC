import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '@/hooks/useAuth';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';
import { ActivityIndicator, View } from 'react-native';

export default function Routes() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#41D499" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
