//Estilos globais, resets e comuns
import { Button } from 'react-native';
import Colors from './colors';
import Font from './fonts';
import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  font: Font,

  inputSimple: {
    borderBottomWidth: 1,
    borderColor: Colors.greenDark,
    marginBottom: 15,
    fontSize: 16,
    width: '80%',
  },

  modalView:{
    backgroundColor: Colors.white,
    margin: 20,
    borderWidth: 2,
    borderRadius: 10,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },

  buttonView:{
      alignItems:'center',
  },

  cardDevice: {
      justifyContent: 'center',
      textAlign:'left',
      marginTop: 10,
      padding: 10,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },

  scrollViewContainer: {
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
  },

});

export default GlobalStyles;