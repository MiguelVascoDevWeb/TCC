import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import MainContainerStyle from '@/styles/Components/MainContainerStyle';

interface MainContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>; // Estilo opcional
}

const MainContainer: React.FC<MainContainerProps> = ({children, style}) => {
  return (
    <View style={[MainContainerStyle.container, style]}>
      {children}
    </View>
  );
};

export default MainContainer;
