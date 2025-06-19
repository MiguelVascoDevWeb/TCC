import { StyleSheet } from "react-native";

const ButtonSimplesStyle = StyleSheet.create({
    button: {
      paddingVertical: 10,
      paddingHorizontal: 70,
      borderRadius: 25,
      marginVertical: 5,
      alignItems: 'center', // Para centralizar o texto
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      elevation: 5,
    },
    buttonText: {
      color: '#FAFEFC',
      fontWeight: 'bold', // Font bold
    },
});

export default ButtonSimplesStyle;