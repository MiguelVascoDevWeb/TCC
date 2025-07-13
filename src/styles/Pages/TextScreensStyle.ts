import { StyleSheet } from 'react-native';
import Colors from '../colors';

const TextScreensStyle = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: Colors.white,
  },
  textbox: {
    borderRadius: 12,
    padding: 10,
    marginBottom: 15, 
    alignItems:'center'
  },
  Title: {
    fontSize: 50,
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

export default TextScreensStyle;
