import { StyleSheet } from "react-native";
import Colors from "../colors";

const ButtonSimplesStyle = StyleSheet.create({
    button: {
      paddingVertical: 10,
      paddingHorizontal: 70,
      borderRadius: 25,
      marginVertical: 5,
      alignItems: 'center', // Para centralizar o texto
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    buttonText: {
      color: Colors.white,
      fontWeight: 'bold', // Font bold
    },
});

export default ButtonSimplesStyle;