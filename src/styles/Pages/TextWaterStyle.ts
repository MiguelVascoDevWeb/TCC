import { StyleSheet } from 'react-native';
import Colors from '../colors';

const TextWaterStyle = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: Colors.white,
  },
  textbox: {
    backgroundColor: '#99CCFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15, 
    alignItems:'center'
  },
  Title: {
    textAlign: 'center',
    fontSize: 65,
  },
  FText: {
    fontSize: 18,
    margin:14
  },
  Img:{
    width: 180,
    height: 125,

  }
});

export default TextWaterStyle;
