import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/RootStackParamList';
import { resetPassword } from '@/api/auth'; // função para resetar senha
import MainContainer from '@/components/MainContainer';
import LoginSignUpScreenStyle from '@/styles/Pages/Login-SignUpScreenStyle';
import CenteredView from '@/components/CenteredView';
import GlobalStyles from '@/styles/global';
import ButtonSimple from '@/components/ButtonSimple';
import Title from '@/components/Title';

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
    <MainContainer>
      <View style={LoginSignUpScreenStyle.viewBack}>
        <TouchableOpacity style={LoginSignUpScreenStyle.buttonBack} onPress={() => navigation.navigate('Landing')}>
          <Image source={require('../../../assets/BackArrow.png')} />
        </TouchableOpacity>
      </View>
      <CenteredView height={'60%'}>
        <Title>Insira sua nova senha:</Title>
        <TextInput
          placeholder="Nova senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={GlobalStyles.inputSimple}
        />
        <TextInput
          placeholder="Confirmar nova senha"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={GlobalStyles.inputSimple}
        />
      </CenteredView>
      <CenteredView height={'30%'}>
        <ButtonSimple
            title='Alterar Senha'
            onPress={handleReset}
          />
      </CenteredView>
    </MainContainer>
  );
}
