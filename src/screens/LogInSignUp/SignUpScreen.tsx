import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/RootStackParamList';
import style from '@/styles/Pages/SignUpScreenStyle';
import { AuthContext } from '@/contexts/AuthContext';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUpScreen({ navigation }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState(''); // se precisar usar no backend

  const { signUp, signIn } = useContext(AuthContext);

  async function handleSignUp() {
    try {
      await signUp(name, email, password);
      await signIn(email, password);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Erro inesperado');
      }
    }
  }

  return (
    <View style={style.container}>
      <View style={style.viewBack}>
        <TouchableOpacity style={style.buttonBack} onPress={() => navigation.navigate('Landing')}>
          <Text style={style.buttonCText}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={style.viewTop}>
        <TextInput
          style={style.input}
          placeholder="Usuário"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={style.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={style.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={style.input}
          placeholder="Endereço"
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <View style={style.viewBottom}>
        <TouchableOpacity style={style.buttonC} onPress={handleSignUp}>
          <Text style={style.buttonCText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
