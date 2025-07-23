import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ButtonSimplesStyle from '@/styles/Components/ButtonSimpleStyle';
import Colors from '@/styles/colors';

interface ButtonProps {
  onPress: (() => void ) | undefined;
  title: string;
  backgroundColor?: string;
  disabled?: Boolean // utilizado em carregamentos
  children?: React.ReactNode;
}

const ButtonSimple: React.FC<ButtonProps> = ({ onPress, title, backgroundColor = Colors.green, children}) => {
  return (
    <TouchableOpacity 
      style={[ButtonSimplesStyle.button, { backgroundColor }]}  // Aplica a cor de fundo personalizada
      onPress={onPress}
    >
      {children}
      <Text style={ButtonSimplesStyle.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSimple;
