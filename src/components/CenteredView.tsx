import React from 'react';
import { View } from 'react-native';
import CenteredViewStyle from '@/styles/Components/CenteredViewStyle';

interface CenteredViewProps {
  children: React.ReactNode;
  height?: string;
  
}

const CenteredView: React.FC<CenteredViewProps> = ({children, height = '100%'}) => {
  return (
    <View style={[CenteredViewStyle.viewCentered, {height}]}>
      {children}
    </View>
  );
};

export default CenteredView;
