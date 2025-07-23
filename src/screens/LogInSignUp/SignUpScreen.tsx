import ButtonSimple from '@/components/ButtonSimple';
import CenteredView from '@/components/CenteredView';
import MainContainer from '@/components/MainContainer';
import { AuthContext } from '@/contexts/AuthContext';
import LoginSignUpScreenStyle from '@/styles/Pages/Login-SignUpScreenStyle';
import GlobalStyles from '@/styles/global';
import { RootStackParamList } from '@/types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';


type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUpScreen({ navigation }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState(''); // se precisar usar no backend
  const [loading, setLoading] = useState(false);

  const { signUp, signIn } = useContext(AuthContext);

  async function handleSignUp() {
    setLoading(true);

    try {
      await signUp(name, email, password);
      await signIn(email, password);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Erro inesperado');
      }
    } finally {
      setLoading(false);
    }
  }

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
          placeholder="Usuário"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={GlobalStyles.inputSimple}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={GlobalStyles.inputSimple}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={GlobalStyles.inputSimple}
          placeholder="Endereço"
          value={address}
          onChangeText={setAddress}
        />
      </CenteredView>
      <CenteredView height={'30%'}>
        <ButtonSimple
          title={loading ? 'Carregando...' : 'Continuar'}
          onPress={handleSignUp}
          disabled={loading}
        />
      </CenteredView>
    </MainContainer>
  );
}
