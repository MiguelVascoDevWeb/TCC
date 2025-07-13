import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native';
import TitleStyle from '@/styles/Components/TitleStyle';
import Colors from '@/styles/colors';

interface TitleProps {
  color?: string;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const Title: React.FC<TitleProps> = ({ color = Colors.greenDark, children, style }) => {
  return (
      <Text style={[TitleStyle.title, {color}, style]}>
        {children}
      </Text>
  );
};

export default Title;
