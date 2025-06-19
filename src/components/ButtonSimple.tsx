import React, { Children } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ButtonSimplesStyle from '@/styles/Components/ButtonSimpleStyle';

interface ButtonProps {
  onPress: () => void;
  title: string;
  backgroundColor?: string;
  disabled?: Boolean
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const ButtonSimple: React.FC<ButtonProps> = ({ onPress, title, backgroundColor = '#41D499', children}) => {
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
