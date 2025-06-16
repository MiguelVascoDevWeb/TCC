import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/RootStackParamList';
import style from '@styles/Pages/LoginScreenStyle';
import { useAuth } from '@/hooks/useAuth'; // IMPORTAÇÃO CHAVE

type Props = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

export default function LogInScreen({ navigation }: Props) {
  const { signIn } = useAuth(); // hook do contexto

  // estado local para controlar inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      await signIn(email, password); // tenta logar via contexto
      // navegue para 'Home' automaticamente no contexto ou aqui, caso queira
      // navigation.navigate('Home'); // opcional se contexto já gerencia rota
    } catch (err) {
      setError('Credenciais inválidas, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

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
          placeholder="Usuário/e-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={style.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error && <Text style={{ color: 'red', marginTop: 8 }}>{error}</Text>}
      </View>

      <View style={style.viewBottom}>
        <TouchableOpacity style={[style.buttonC]} onPress={handleLogin} disabled={loading}>
          <Text style={style.buttonCText}>{loading ? 'Carregando...' : 'Continuar'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate( "ForgotPassword" )}>
          <Text style={style.buttonRText}>Esqueci Minha Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
