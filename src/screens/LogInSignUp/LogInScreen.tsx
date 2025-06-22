import ButtonSimple from '@/components/ButtonSimple';
import CenteredView from '@/components/CenteredView';
import MainContainer from '@/components/MainContainer';
import { useAuth } from '@/hooks/useAuth'; // IMPORTAÇÃO CHAVE
import LoginSignUpScreenStyle from '@/styles/Pages/Login-SignUpScreenStyle';
import GlobalStyles from '@/styles/global';
import { RootStackParamList } from '@/types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

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
    <MainContainer>
      <View style={LoginSignUpScreenStyle.viewBack}>
        <TouchableOpacity style={LoginSignUpScreenStyle.buttonBack} onPress={() => navigation.navigate('Landing')}>
          <Image source={require('../../../assets/BackArrow.png')} />
        </TouchableOpacity>
      </View>

      <CenteredView height={'60%'}>
        <TextInput
          style={GlobalStyles.inputSimple}
          placeholder="Usuário/e-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={GlobalStyles.inputSimple}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error && <Text style={{ color: 'red', marginTop: 8 }}>{error}</Text>}
      </CenteredView>

      <CenteredView height={'30%'}>
        <ButtonSimple
          title={loading ? 'Carregando...' : 'Continuar'}
          onPress={handleLogin}
          disabled={loading}
        />

        <TouchableOpacity onPress={() => navigation.navigate( "ForgotPassword" )}>
          <Text style={LoginSignUpScreenStyle.buttonForgotText}>Esqueci Minha Senha</Text>
        </TouchableOpacity>
      </CenteredView>
    </MainContainer>
  );
}
