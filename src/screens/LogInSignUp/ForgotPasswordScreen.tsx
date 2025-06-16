import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/RootStackParamList';
import { forgotPassword  } from '@/api/auth'; // sua função para enviar email

type Props = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

export default function ForgotPasswordScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');

  async function handleSendEmail() {
    if (!email) return Alert.alert('Erro', 'Por favor, insira um email válido.');
    try {
      await forgotPassword(email);
      Alert.alert('Sucesso', 'Email enviado! Verifique sua caixa de entrada.');
      navigation.navigate('VerifyCode', { email });
    } catch {
      Alert.alert('Erro', 'Não foi possível enviar o email. Tente novamente.');
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 12 }}>Digite seu email para recuperação:</Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 8,
          marginBottom: 20,
        }}
      />
      <TouchableOpacity
        onPress={handleSendEmail}
        style={{
          backgroundColor: '#007AFF',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '600' }}>Enviar Código</Text>
      </TouchableOpacity>
    </View>
  );
}
