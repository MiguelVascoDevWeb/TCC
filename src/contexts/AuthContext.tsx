import React, { createContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, register } from '@api/auth';
import { api } from '../api/api';
import { getProfile } from '@/api/user';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadStorageData = async () => {
    const token = await AsyncStorage.getItem('@token');
    try {
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const userData = await getProfile();
        setUser(userData);
      }
    } catch (err) {
      console.log('Erro ao carregar perfil:', err);
      signOut();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadStorageData();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await login({ email, password });
      const { token, user } = response;

      await AsyncStorage.setItem('@token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);
    } catch (error) {
      throw new Error('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  const signUp = async (name: string, email: string, password: string) => {
    try {
      const response = await register({ name, email, password });
      signIn(email, password);

    } catch (error) {
      throw new Error('Erro ao fazer cadastro. Verifique os dados informados.');
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('@token');
    setUser(null);
    delete api.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
