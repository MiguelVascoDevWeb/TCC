import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import TitleStyle from '@/styles/Components/TitleStyle';

interface TitleProps {
  color?: string;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ color = '#1D6B3D', children }) => {
  return (
      <Text style={[TitleStyle.title, {color}]}>
        {children}
      </Text>
  );
};

export default Title;
