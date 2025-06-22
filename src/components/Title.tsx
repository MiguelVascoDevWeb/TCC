import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import TitleStyle from '@/styles/Components/TitleStyle';
import Colors from '@/styles/colors';

interface TitleProps {
  color?: string;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ color = Colors.greenDark, children }) => {
  return (
      <Text style={[TitleStyle.title, {color}]}>
        {children}
      </Text>
  );
};

export default Title;
