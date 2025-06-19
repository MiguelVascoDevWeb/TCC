import React, { useState } from 'react';
import { Text, TextInput, Image, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/RootStackParamList';
import { forgotPassword  } from '@/api/auth'; // sua função para enviar email
import GlobalStyles from '@/styles/global';
import CenteredView from '@/components/CenteredView';
import ButtonSimple from '@/components/ButtonSimple';
import MainContainer from '@/components/MainContainer';
import LoginSignUpScreenStyle from '@/styles/Pages/Login-SignUpScreenStyle';
import Title from '@/components/Title';

type Props = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

export default function ForgotPasswordScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSendEmail() {
    if (!email) 
    {
      return Alert.alert('Erro', 'Por favor, insira um email válido.');
    }
    try {
      setLoading(true);
      await forgotPassword(email);
      Alert.alert('Sucesso', 'Email enviado! Verifique sua caixa de entrada.');
      navigation.navigate('VerifyCode', { email });
    } catch {
      Alert.alert('Erro', 'Não foi possível enviar o email. Tente novamente.');
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
        <Title>Digite seu email para recuperação:</Title>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!loading}
          value={email}
          onChangeText={setEmail}
          style={[
            GlobalStyles.inputSimple,
            { backgroundColor: loading ? '#f5f5f5' : '#fff' }
          ]}
        />
    </CenteredView>
    <CenteredView height={'30%'}>
          <ButtonSimple
            title={loading ? 'Enviando...' : 'Enviar Código'}
            onPress={handleSendEmail}
            disabled={loading}
            style={{ backgroundColor: loading ? '#a0cfff' : '#007AFF' }}
          >
          {loading && (
            <ActivityIndicator color="#fff" style={{ marginRight: 10 }} />
          )}
          </ButtonSimple>
        </CenteredView>
    </MainContainer>
  );
}
