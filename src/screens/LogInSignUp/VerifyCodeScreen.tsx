import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/RootStackParamList';
import { verifyRecoveryCode } from '@/api/auth'; // função para validar código

type Props = NativeStackScreenProps<RootStackParamList, 'VerifyCode'>;

export default function VerifyCodeScreen({ navigation, route }: Props) {
  const { email } = route.params;
  const [code, setCode] = useState('');

  async function handleVerify() {
    if (code.length !== 5) return Alert.alert('Erro', 'O código deve ter 5 dígitos.');
    try {
        console.log(code);
      const valid = await verifyRecoveryCode(email, code);
      console.log(valid);
      if (valid) {
        navigation.navigate('Recovery', { email, code });
      } else {
        Alert.alert('Erro', 'Código inválido ou expirado.');
      }
    } catch {
      Alert.alert('Erro', 'Falha na verificação. Tente novamente.');
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 12 }}>Digite o código enviado para {email}:</Text>
      <TextInput
        placeholder="Código (5 dígitos)"
        maxLength={5}
        value={code}
        onChangeText={setCode}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 8,
          marginBottom: 20,
          letterSpacing: 8,
          textAlign: 'center',
          fontSize: 20,
          fontWeight: '600',
        }}
      />
      <TouchableOpacity
        onPress={handleVerify}
        style={{
          backgroundColor: '#007AFF',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '600' }}>Confirmar Código</Text>
      </TouchableOpacity>
    </View>
  );
}
