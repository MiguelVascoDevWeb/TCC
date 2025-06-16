import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/RootStackParamList';
import { resetPassword } from '@/api/auth'; // função para resetar senha

type Props = NativeStackScreenProps<RootStackParamList, 'Recovery'>;

export default function ResetPasswordScreen({ navigation, route }: Props) {
  const { email, code } = route.params;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleReset() {
    if (password.length < 6) return Alert.alert('Erro', 'Senha deve ter ao menos 6 caracteres.');
    if (password !== confirmPassword) return Alert.alert('Erro', 'As senhas não conferem.');

    try {
      await resetPassword(email, code, password);
      Alert.alert('Sucesso', 'Senha alterada com sucesso!');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Landing' }],
      });
    } catch {
      Alert.alert('Erro', 'Falha ao alterar senha. Tente novamente.');
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 12 }}>Insira sua nova senha:</Text>
      <TextInput
        placeholder="Nova senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 8,
          marginBottom: 12,
        }}
      />
      <TextInput
        placeholder="Confirmar nova senha"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 8,
          marginBottom: 20,
        }}
      />
      <TouchableOpacity
        onPress={handleReset}
        style={{
          backgroundColor: '#007AFF',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '600' }}>Alterar Senha</Text>
      </TouchableOpacity>
    </View>
  );
}
