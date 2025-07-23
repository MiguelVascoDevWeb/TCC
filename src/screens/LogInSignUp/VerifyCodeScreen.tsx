import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/RootStackParamList';
import { verifyRecoveryCode } from '@/api/auth'; // função para validar código
import MainContainer from '@/components/MainContainer';
import LoginSignUpScreenStyle from '@/styles/Pages/Login-SignUpScreenStyle';
import CenteredView from '@/components/CenteredView';
import GlobalStyles from '@/styles/global';
import ButtonSimple from '@/components/ButtonSimple';
import Title from '@/components/Title';

type Props = NativeStackScreenProps<RootStackParamList, 'VerifyCode'>;

export default function VerifyCodeScreen({ navigation, route }: Props) {
  const { email } = route.params;
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleVerify() {
    if (code.length !== 5) {
      return Alert.alert('Erro', 'O código deve ter 5 dígitos.');
    }
    try {
      setLoading(true);
      const valid = await verifyRecoveryCode(email, code);
      if (valid) {
        navigation.navigate('Recovery', { email, code });
      } else {
        Alert.alert('Erro', 'Código inválido ou expirado.');
      }
    } catch {
      Alert.alert('Erro', 'Falha na verificação. Tente novamente.');
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
        <Title>Digite o código enviado para {email}:</Title>
        <TextInput
          placeholder="Código (5 dígitos)"
          maxLength={5}
          value={code}
          onChangeText={setCode}
          editable={!loading}
          style={[
            GlobalStyles.inputSimple,
            { backgroundColor: loading ? '#f5f5f5' : '#fff' }
          ]}
        />
      </CenteredView>
      <CenteredView height={'30%'}>
        <ButtonSimple
          title='Confirmar Código'
          onPress={handleVerify}
          disabled={loading}
        >
        {loading ? (
          <ActivityIndicator color="#fff" style={{ marginRight: 10 }} />
        ) : null}
          
        </ButtonSimple>
      </CenteredView>
    </MainContainer>
  );
}
