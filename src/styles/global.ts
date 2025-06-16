//Estilos globais, resets e comuns
import { Button } from 'react-native';
import Colors from './colors';
import Font from './fonts';

const GlobalStyles = {
  colors: Colors,
  font: Font,

  button: {
      paddingVertical: 10,
      paddingHorizontal:70,
      borderRadius: 25,
      marginVertical: 5,
  },

  buttonText: {
    color: '#FAFEFC'
  },

  green:{
      backgroundColor: '#41D499', 
  }

}

export default GlobalStyles;