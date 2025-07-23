import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import CenteredViewStyle from '@/styles/Components/CenteredViewStyle';

interface CenteredViewProps {
  children: React.ReactNode;
  height?: string; // 'Erro' no height devido a tipagem
  style?: StyleProp<ViewStyle>; // Estilo adicional opcional
}

const CenteredView: React.FC<CenteredViewProps> = ({children, height = '100%', style}) => {
  return (
    <View style={[CenteredViewStyle.viewCentered, {height}, style]}> 
      {children}
    </View>
  );
};

export default CenteredView;
