import { StyleSheet } from 'react-native';
import Colors from '../colors';

const TextScreensStyle = StyleSheet.create({
  
  textbox: {
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 20,
    elevation: 5,
    shadowColor: '#000',
  },
  Title: {
    fontSize: 30,
    marginVertical: 20,
    marginHorizontal: 0,
  },
  FText: {
    fontSize: 18,
    marginBottom: 20,
  },
  imgContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignItems: 'center',
    overflow:  'hidden',
  },
  imgMain:{
    width: '100%',
    height: 200
  },
  imgInText: {
    width: '90%', 
    height: 150, 
    alignSelf: 'center', 
    borderRadius: 10,
    marginBottom: 20
  },
  cardButton: {
    backgroundColor: Colors.white,
    padding: 5,
    borderRadius: 5
    
  },
  cardButtonText : {
    color: Colors.greenDark,
    textAlign: 'center',
    fontSize: 15,
  },
  expandButtonText: {
    fontSize: 25,
    textAlign: 'center',
  }
});

export default TextScreensStyle;
