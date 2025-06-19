import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ButtonSimplesStyle from '@/styles/Components/ButtonSimpleStyle';

interface ButtonProps {
  onPress: () => void;
  title: string;
  backgroundColor?: string;
  disabled?: Boolean  // Propriedade opcional para a cor de fundo
}

const ButtonSimple: React.FC<ButtonProps> = ({ onPress, title, backgroundColor = '#41D499' }) => {
  return (
    <TouchableOpacity 
      style={[ButtonSimplesStyle.button, { backgroundColor }]}  // Aplica a cor de fundo personalizada
      onPress={onPress}
    >
      <Text style={ButtonSimplesStyle.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSimple;
