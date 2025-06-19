import React from 'react';
import { View } from 'react-native';
import MainContainerStyle from '@/styles/Components/MainContainerStyle';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children}) => {
  return (
    <View style={MainContainerStyle.container}>
      {children}
    </View>
  );
};

export default MainContainer;
